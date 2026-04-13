/**
 * VLLMEngine — step-based simulation of vLLM's inference engine.
 *
 * Pure JavaScript class with zero React dependency. Each call to step()
 * advances the simulation by one discrete tick, mirroring vLLM's core loop:
 *
 *   step() = postprocess → schedule → execute → collect metrics
 *
 * Request lifecycle: WAITING → PREFILLING → DECODING → COMPLETED
 *
 * The engine maintains block-based KV cache (paged attention), a waiting
 * queue (prefill candidates), a running queue (active decode requests),
 * and per-GPU state including role assignment for disaggregated mode.
 */

import { getProfile, GPU_SPECS } from './benchmarkData.js';

// ── Request status constants ───────────────────────────────────────

const Status = Object.freeze({
  WAITING:    'WAITING',
  PREFILLING: 'PREFILLING',
  DECODING:   'DECODING',
  COMPLETED:  'COMPLETED',
});

// ── Default configuration ──────────────────────────────────────────

const DEFAULT_CONFIG = {
  numGPUs:            1,
  gpuType:            'a10g',
  gpuMemoryGB:        24,
  maxNumSeqs:         32,
  continuousBatching: false,
  pagedAttention:     true,

  kvCacheAware:       false,
  distributedCache:   false,
  disaggregated:      false,
  prefillGPUs:        1,
  decodeGPUs:         1,

  networkType:        'efa',
  autoscaling:        false,
  gpuUtilization:     50,
  outputTokens:       128,
  contextLength:      4096,
};

// ── Helpers ────────────────────────────────────────────────────────

/** Tokens per KV block (matches vLLM default). */
const TOKENS_PER_BLOCK = 16;

/** Calculate total KV cache blocks available on a single GPU. */
function calcBlockCount(gpuMemoryGB, gpuUtilization, pagedAttention) {
  const modelFraction = gpuUtilization / 100;
  const kvBudgetGB = gpuMemoryGB * (1 - modelFraction) * 0.8; // 80% of remaining for KV
  // ~0.5 MB per 1K context tokens → ~0.5 GB per 1M tokens
  // 1 block = 16 tokens → 0.000008 GB per block
  const gbPerBlock = (TOKENS_PER_BLOCK / 1000) * 0.0005;
  const rawBlocks = Math.floor(kvBudgetGB / gbPerBlock);
  // Without paged attention, fragmentation reduces usable blocks to ~10%
  return Math.max(1, pagedAttention ? rawBlocks : Math.floor(rawBlocks * 0.1));
}

/** Number of blocks needed for a given context length. */
function blocksForContext(contextLength) {
  return Math.max(1, Math.ceil(contextLength / TOKENS_PER_BLOCK));
}

// ── VLLMEngine ─────────────────────────────────────────────────────

export class VLLMEngine {
  constructor(config = {}) {
    this._nextRequestId = 0;
    this._roundRobinIdx = 0;
    this.stepCount = 0;

    // Completed count for throughput tracking
    this._completedThisStep = 0;
    this._completedHistory = [];
    this._throughputWindowSize = 10;

    // Pending transfers from prefill GPU → decode GPU (disaggregated mode)
    this._pendingDecodeTransfers = [];

    this.configure({ ...DEFAULT_CONFIG, ...config });
  }

  // ── Configuration ────────────────────────────────────────────────

  /**
   * Apply a (partial) config and reinitialise GPUs + KV cache.
   * Clears all in-flight state.
   */
  configure(config) {
    this._config = { ...(this._config || DEFAULT_CONFIG), ...config };
    const c = this._config;

    // Resolve GPU memory from specs if not explicitly provided
    if (config.gpuType && !config.gpuMemoryGB) {
      const spec = GPU_SPECS[c.gpuType];
      if (spec) c.gpuMemoryGB = spec.memoryGB;
    }

    this._initGPUs();
    this._initKVCache();
    this._resetQueues();
    this._resetMetrics();
  }

  /** Full reset preserving current config. */
  reset() {
    this._initGPUs();
    this._initKVCache();
    this._resetQueues();
    this._resetMetrics();
  }

  // ── Request submission ───────────────────────────────────────────

  /**
   * Submit one or more requests into the waiting queue.
   *
   * @param {Object|Object[]} reqs - { sessionId, isContinuation, contextLength?, outputTokens? }
   * @returns {Object[]} The request objects as queued (with assigned ids).
   */
  submitRequests(reqs) {
    const list = Array.isArray(reqs) ? reqs : [reqs];
    const queued = [];
    for (const r of list) {
      const req = {
        id:              this._nextRequestId++,
        sessionId:       r.sessionId ?? null,
        isContinuation:  r.isContinuation ?? false,
        contextLength:   r.contextLength ?? this._config.contextLength,
        outputTokens:    r.outputTokens ?? this._config.outputTokens,
        status:          Status.WAITING,
        tokensGenerated: 0,
        gpuId:           null,
        prefillDone:     false,
        _blocksAllocated: 0,
      };
      this._waitingQueue.push(req);
      queued.push(req);
    }
    return queued;
  }

  // ── Core step ────────────────────────────────────────────────────

  /**
   * Advance the simulation by one discrete step.
   *
   * Matches vLLM's iteration loop:
   *   1. Postprocess previous step (completions, transfers)
   *   2. Schedule (decode first, then prefill)
   *   3. Execute (prefill produces 1st token; decode produces 1 token)
   *   4. Collect metrics
   */
  step() {
    this.stepCount++;
    this._completedThisStep = 0;

    this._postprocess();
    this._schedule();
    this._execute();
    this._collectMetrics();

    return this.getSnapshot();
  }

  // ── Phase 1: Postprocess ─────────────────────────────────────────

  _postprocess() {
    const completed = [];
    const stillRunning = [];

    for (const req of this._runningQueue) {
      if (req.status === Status.DECODING && req.tokensGenerated >= req.outputTokens) {
        // Decode complete → free blocks, mark done
        req.status = Status.COMPLETED;
        this._freeBlocks(req.id);
        this._removeFromGPU(req);
        completed.push(req);
      } else {
        stillRunning.push(req);
      }
    }

    this._runningQueue = stillRunning;
    this._completedThisStep = completed.length;
    this._completedRequests = (this._completedRequests || 0) + completed.length;

    // Handle disaggregated transfers: move prefill-done requests to decode GPU pool
    const pendingTransfers = this._pendingDecodeTransfers.splice(0);
    for (const req of pendingTransfers) {
      // Free prefill GPU blocks
      this._freeBlocks(req.id);
      this._removeFromGPU(req);
      // Reset GPU assignment — schedule will place on a decode GPU
      req.gpuId = null;
      req.status = Status.WAITING;
      req.prefillDone = true;
      req._blocksAllocated = 0;
      // Goes back to waiting queue for decode GPU assignment
      this._waitingQueue.push(req);
    }
  }

  // ── Phase 2: Schedule ────────────────────────────────────────────

  _schedule() {
    const c = this._config;
    const maxPerGPU = c.continuousBatching ? c.maxNumSeqs : 1;

    // Decode first: all running decode requests get their step (no cap —
    // they already have GPU slots, this just allocates the next KV block).
    this._scheduleDecodeRequests();

    // Prefill: fill remaining GPU capacity with new requests.
    const prefillBudget = this._gpus.reduce((sum, gpu) => {
      return sum + Math.max(0, maxPerGPU - gpu.activeRequests.length);
    }, 0);

    if (prefillBudget > 0) {
      this._schedulePrefillRequests(prefillBudget);
    }
  }

  /**
   * Schedule decode requests — each already-running decode request needs
   * 1 token worth of KV blocks for this step.
   */
  _scheduleDecodeRequests() {
    const evicted = [];

    for (const req of this._runningQueue) {
      if (req.status !== Status.DECODING) continue;

      // Each decode step needs 1 additional token stored in KV cache.
      const totalTokens = req.contextLength + req.tokensGenerated + 1;
      const blocksNeeded = blocksForContext(totalTokens);
      const extraBlocks = blocksNeeded - req._blocksAllocated;

      if (extraBlocks > 0) {
        const gpu = this._gpus[req.gpuId];
        const allocated = this._allocateBlocks(req.id, extraBlocks, gpu);
        if (allocated < extraBlocks) {
          evicted.push(req);
          continue;
        }
        req._blocksAllocated = blocksNeeded;
      }
    }

    // Evicted requests go back to waiting queue
    for (const req of evicted) {
      this._freeBlocks(req.id);
      this._removeFromGPU(req);
      req.status = Status.WAITING;
      req.gpuId = null;
      req._blocksAllocated = 0;
      // Preserve tokens generated — will resume
      this._runningQueue = this._runningQueue.filter(r => r.id !== req.id);
      this._waitingQueue.unshift(req); // priority re-queue
    }
  }

  /**
   * Schedule prefill requests from the waiting queue.
   */
  _schedulePrefillRequests(budget) {
    const c = this._config;
    let scheduled = 0;
    const remaining = [];

    for (const req of this._waitingQueue) {
      if (scheduled >= budget) {
        remaining.push(req);
        continue;
      }

      // Determine target GPU
      const gpuId = this._pickGPU(req);
      if (gpuId === null) {
        remaining.push(req);
        continue;
      }

      const gpu = this._gpus[gpuId];

      // Allocate KV blocks for full context
      const blocksNeeded = blocksForContext(req.contextLength);
      const allocated = this._allocateBlocks(req.id, blocksNeeded, gpu);
      if (allocated < blocksNeeded) {
        // Not enough blocks — put back
        this._freeBlocks(req.id);
        remaining.push(req);
        continue;
      }

      // Assign to GPU
      req.gpuId = gpuId;
      req._blocksAllocated = allocated;

      if (req.prefillDone) {
        // This is a disaggregated transfer — skip prefill, go to decoding
        req.status = Status.DECODING;
      } else {
        req.status = Status.PREFILLING;
      }

      gpu.activeRequests.push(req);
      this._runningQueue.push(req);
      scheduled++;
    }

    this._waitingQueue = remaining;
  }

  // ── Phase 3: Execute ─────────────────────────────────────────────

  _execute() {
    const c = this._config;
    const transferIds = new Set();

    // Prefill budget: how many input tokens one GPU processes per step.
    // Longer contexts take more steps (chunked prefill).
    // Default: 2048 tokens/step — a 4K context takes 2 prefill steps.
    const prefillTokensPerStep = 2048;

    for (const req of this._runningQueue) {
      if (req.status === Status.PREFILLING) {
        // Track prefill progress in tokens processed
        req._prefillTokensDone = (req._prefillTokensDone || 0) + prefillTokensPerStep;

        if (req._prefillTokensDone >= req.contextLength) {
          // Prefill complete → produce first output token
          req.tokensGenerated = 1;
          if (c.disaggregated) {
            this._pendingDecodeTransfers.push(req);
            transferIds.add(req.id);
          } else {
            req.status = Status.DECODING;
          }
        }
        // else: still prefilling (chunked), stays PREFILLING for next step
      } else if (req.status === Status.DECODING) {
        req.tokensGenerated++;
      }
    }

    if (transferIds.size > 0) {
      this._runningQueue = this._runningQueue.filter(r => !transferIds.has(r.id));
    }
  }

  // ── Phase 4: Metrics ─────────────────────────────────────────────

  _collectMetrics() {
    const c = this._config;
    const profile = getProfile(c.gpuType);

    // Throughput: tokens completed this step (sliding window average)
    this._completedHistory.push(this._completedThisStep);
    if (this._completedHistory.length > this._throughputWindowSize) {
      this._completedHistory.shift();
    }
    const avgCompleted = this._completedHistory.reduce((a, b) => a + b, 0) /
      this._completedHistory.length;

    const runningCount = this._runningQueue.length;
    const waitingCount = this._waitingQueue.length;

    // GPU load: each active request uses gpuUtilization% of compute, capped at 100%
    const gpuLoad = this._gpus.length > 0
      ? this._gpus.reduce((sum, gpu) =>
          sum + Math.min(gpu.activeRequests.length * c.gpuUtilization, 100),
        0) / this._gpus.length
      : 0;

    // KV cache stats
    const kvStats = this._getKVStats();

    // TTFT scales roughly linearly with context length.
    // Benchmark profiles were measured at ~256-512 token contexts.
    const baseContext = 512;
    const contextScale = Math.max(1, c.contextLength / baseContext);
    const scaledTtft = profile ? Math.round(profile.ttftMs * contextScale) : 0;
    const tpotMs = profile ? profile.tpotMs : 0;

    this._metrics = {
      throughput:         Math.round(avgCompleted * 100) / 100,
      batchSize:          runningCount,
      waitingCount,
      runningCount,
      ttftMs:             scaledTtft,
      tpotMs,
      estimatedLatencyMs: scaledTtft + Math.round(tpotMs * (c.outputTokens - 1)),
      gpuLoad:            Math.round(gpuLoad * 100) / 100,
      completedTotal:     this._completedRequests || 0,
      kvCacheUsage:       kvStats.totalBlocks > 0
        ? Math.round((kvStats.allocatedBlocks / kvStats.totalBlocks) * 10000) / 100
        : 0,
    };
  }

  // ── GPU management ───────────────────────────────────────────────

  _initGPUs() {
    const c = this._config;
    const total = c.disaggregated ? c.prefillGPUs + c.decodeGPUs : c.numGPUs;

    this._gpus = [];
    for (let i = 0; i < total; i++) {
      let role;
      if (c.disaggregated) {
        role = i < c.prefillGPUs ? 'prefill' : 'decode';
      } else {
        role = 'general';
      }
      this._gpus.push({
        id: i,
        role,
        activeRequests: [],
      });
    }
    this._roundRobinIdx = 0;
  }

  /**
   * Pick a GPU for a request based on routing rules.
   *
   * Priority:
   *   1. KV-cache-aware: route continuation to GPU holding the session's cache
   *   2. Round-robin among GPUs with capacity
   *
   * Respects disaggregated roles: prefill requests → prefill GPUs,
   * decode requests (prefillDone) → decode GPUs.
   */
  _pickGPU(req) {
    const c = this._config;

    // Determine target role
    let targetRole;
    if (c.disaggregated) {
      targetRole = req.prefillDone ? 'decode' : 'prefill';
    } else {
      targetRole = 'general';
    }

    // Build list of GPUs with the right role and capacity
    const maxPerGPU = c.continuousBatching ? c.maxNumSeqs : 1;
    const candidates = [];
    for (const gpu of this._gpus) {
      if (gpu.role !== targetRole) continue;
      if (gpu.activeRequests.length >= maxPerGPU) continue;
      candidates.push(gpu);
    }

    if (candidates.length === 0) return null;

    // KV-cache-aware routing for continuations
    if (c.kvCacheAware && req.isContinuation && req.sessionId != null) {
      const searchPool = c.distributedCache ? this._gpus : candidates;
      for (const gpu of searchPool) {
        if (gpu.role !== targetRole) continue;
        if (gpu.activeRequests.length >= c.maxNumSeqs) continue;
        // Check if any KV block on this GPU belongs to the same session
        if (this._gpuHasSession(gpu, req.sessionId)) {
          return gpu.id;
        }
      }
    }

    // Round-robin fallback
    const idx = this._roundRobinIdx % candidates.length;
    this._roundRobinIdx++;
    return candidates[idx].id;
  }

  /** Check if a GPU holds KV cache for a given session. O(1). */
  _gpuHasSession(gpu, sessionId) {
    return gpu.kvSessions.has(sessionId);
  }

  /** Remove a request from its GPU's active list. */
  _removeFromGPU(req) {
    if (req.gpuId === null) return;
    const gpu = this._gpus[req.gpuId];
    if (!gpu) return;
    gpu.activeRequests = gpu.activeRequests.filter(r => r.id !== req.id);
  }

  // ── KV Cache management ──────────────────────────────────────────

  _initKVCache() {
    const c = this._config;
    this._blocksPerGPU = calcBlockCount(c.gpuMemoryGB, c.gpuUtilization, c.pagedAttention);

    // Per-GPU KV cache: just counters + per-request tracking (no giant array)
    for (const gpu of this._gpus) {
      gpu.kvFreeBlocks = this._blocksPerGPU;
      gpu.kvAllocated = new Map(); // requestId → numBlocks
      gpu.kvSessions = new Set();  // sessionIds with KV on this GPU
    }
  }

  /**
   * Allocate blocks on a specific GPU for a request.
   * O(1) — just decrement the free counter.
   * @returns {number} Number of blocks actually allocated.
   */
  _allocateBlocks(requestId, numBlocks, gpu) {
    const canAllocate = Math.min(numBlocks, gpu.kvFreeBlocks);
    if (canAllocate <= 0) return 0;

    gpu.kvFreeBlocks -= canAllocate;
    const prev = gpu.kvAllocated.get(requestId) || 0;
    gpu.kvAllocated.set(requestId, prev + canAllocate);

    // Track session for KV-cache-aware routing
    const req = this._findRequest(requestId);
    if (req && req.sessionId != null) {
      gpu.kvSessions.add(req.sessionId);
    }

    return canAllocate;
  }

  /** Free all KV blocks belonging to a request. O(1). */
  _freeBlocks(requestId) {
    for (const gpu of this._gpus) {
      const blocks = gpu.kvAllocated.get(requestId);
      if (blocks) {
        gpu.kvFreeBlocks += blocks;
        gpu.kvAllocated.delete(requestId);
      }
    }
  }

  /** Aggregate KV cache statistics. */
  _getKVStats() {
    let total = 0;
    let free = 0;
    for (const gpu of this._gpus) {
      total += this._blocksPerGPU;
      free += gpu.kvFreeBlocks;
    }
    return {
      totalBlocks:     total,
      freeBlocks:      free,
      allocatedBlocks: total - free,
    };
  }

  // ── Queue helpers ────────────────────────────────────────────────

  _resetQueues() {
    this._waitingQueue = [];
    this._runningQueue = [];
    this._pendingDecodeTransfers = [];
    this._nextRequestId = 0;
    this.stepCount = 0;
    for (const gpu of this._gpus) {
      gpu.activeRequests = [];
      gpu.kvFreeBlocks = this._blocksPerGPU;
      gpu.kvAllocated = new Map();
      gpu.kvSessions = new Set();
    }
  }

  _resetMetrics() {
    this._completedRequests = 0;
    this._completedThisStep = 0;
    this._completedHistory = [];
    this._metrics = {
      throughput:         0,
      batchSize:          0,
      waitingCount:       0,
      runningCount:       0,
      ttftMs:             0,
      tpotMs:             0,
      estimatedLatencyMs: 0,
      gpuLoad:            0,
      completedTotal:     0,
      kvCacheUsage:       0,
    };
  }

  /** Find a request across both queues. */
  _findRequest(requestId) {
    for (const r of this._waitingQueue) {
      if (r.id === requestId) return r;
    }
    for (const r of this._runningQueue) {
      if (r.id === requestId) return r;
    }
    return null;
  }

  // ── Snapshot (React-friendly) ────────────────────────────────────

  /**
   * Returns a plain JS object (no Maps, no circular refs) suitable for
   * React state or JSON serialization.
   */
  getSnapshot() {
    const c = this._config;
    const profile = getProfile(c.gpuType);
    const kvStats = this._getKVStats();

    return {
      stepCount: this.stepCount,

      waitingQueue: this._waitingQueue.map(r => ({
        id:             r.id,
        sessionId:      r.sessionId,
        isContinuation: r.isContinuation,
        contextLength:  r.contextLength,
        status:         r.status,
      })),

      runningQueue: this._runningQueue.map(r => ({
        id:              r.id,
        sessionId:       r.sessionId,
        status:          r.status,
        tokensGenerated: r.tokensGenerated,
        outputTokens:    r.outputTokens,
        gpuId:           r.gpuId,
      })),

      gpus: this._gpus.map(gpu => ({
        id:             gpu.id,
        role:           gpu.role,
        activeRequests: gpu.activeRequests.map(r => ({
          id:              r.id,
          sessionId:       r.sessionId,
          status:          r.status,
          tokensGenerated: r.tokensGenerated,
          outputTokens:    r.outputTokens,
        })),
        blocksUsed:  this._blocksPerGPU - gpu.kvFreeBlocks,
        blocksTotal: this._blocksPerGPU,
      })),

      kvCache: kvStats,

      metrics: { ...this._metrics },

      config: { ...c },

      profile: profile ? { ...profile } : null,
    };
  }
}
