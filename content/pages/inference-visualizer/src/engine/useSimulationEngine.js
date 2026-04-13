import { useState, useEffect, useRef } from 'react';
import {
  getProfile,
  calcMaxKVSessions,
  BATCH_MAX_CONCURRENT,
  BATCH_TTFT_MULTIPLIER,
  NETWORK_TRANSFER_MS,
} from './benchmarkData';

/**
 * GPU inference simulation engine.
 *
 * Every request goes through two phases — matching real LLM inference:
 *   1. Prefill  — process all input tokens in parallel → first output token (TTFT)
 *   2. Decode   — generate each subsequent token autoregressively (TPOT per token)
 *
 * Non-disaggregated: both phases on the same GPU, transition in-place.
 * Disaggregated:     prefill GPU → network transfer → decode GPU.
 * Cache hit:         skip prefill, go straight to decode.
 */
export function useSimulationEngine({
  requestRate,
  continuationProbability,
  contextLength,
  outputTokens,
  gpuUtilization,
  gpuType,
  batchSize,
  kvCacheAware,
  continuousBatching,
  pagedAttention,
  disaggregated,
  distributedCache,
  autoscaling,
  networkType,
  numGPUs,
  setNumGPUs,
  prefillGPUs,
  decodeGPUs,
  isRunning,
  slowMode,
}) {
  const [gpuStates, setGpuStates] = useState([]);
  const [requestQueue, setRequestQueue] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [totalRequests, setTotalRequests] = useState(0);
  const [cacheHits, setCacheHits] = useState(0);
  const [cacheMisses, setCacheMisses] = useState(0);
  const [cacheEvictions, setCacheEvictions] = useState(0);

  const currentGPUIndex = useRef(0);
  const requestId = useRef(0);
  const sessionId = useRef(0);
  const completedInLastPeriod = useRef(0);
  const gpuStatesRef = useRef([]);
  const queueSizeRef = useRef(0);
  const cacheHitsRef = useRef(0);
  const cacheMissesRef = useRef(0);
  const activeSessions = useRef(new Map());
  const sessionLastActivity = useRef(new Map());
  const completedHistory = useRef([]);
  const latencyHistory = useRef([]);
  const gpuLoadHistory = useRef([]);
  const pendingDecodesRef = useRef([]);

  // ── Derived ──────────────────────────────────────────────────────

  const totalGPUs = disaggregated ? prefillGPUs + decodeGPUs : numGPUs;
  const profile = getProfile(gpuType);
  const maxKVSessionsPerGPU = calcMaxKVSessions(gpuType, gpuUtilization, pagedAttention, contextLength);
  const speedMultiplier = slowMode ? 10 : 1;
  const maxConcurrent = continuousBatching ? BATCH_MAX_CONCURRENT[batchSize] || batchSize : 1;
  const networkLatencyMs = NETWORK_TRANSFER_MS[networkType] || 0;
  const requestUtil = gpuUtilization;
  const batchMultiplier = BATCH_TTFT_MULTIPLIER[batchSize] || 1.0;

  const prefillLatencyMs = profile ? profile.ttftMs * batchMultiplier : 70;
  const decodeLatencyMs = profile ? profile.tpotMs * (outputTokens - 1) : 100;

  // ── Sync refs ────────────────────────────────────────────────────

  useEffect(() => { gpuStatesRef.current = gpuStates; }, [gpuStates]);
  useEffect(() => { queueSizeRef.current = requestQueue.length; }, [requestQueue.length]);
  useEffect(() => { cacheHitsRef.current = cacheHits; cacheMissesRef.current = cacheMisses; }, [cacheHits, cacheMisses]);

  // ── Init GPUs ────────────────────────────────────────────────────

  useEffect(() => {
    const states = Array(totalGPUs).fill(null).map((_, i) => ({
      id: i,
      role: disaggregated ? (i < prefillGPUs ? 'prefill' : 'decode') : 'general',
      activeRequests: [],
      kvCacheSessions: new Map(),
      maxKVSessions: maxKVSessionsPerGPU,
    }));
    setGpuStates(states);
    gpuStatesRef.current = states;
    currentGPUIndex.current = 0;
  }, [totalGPUs, maxKVSessionsPerGPU, pagedAttention, gpuType, disaggregated, prefillGPUs, decodeGPUs]);

  // ── Session expiration ───────────────────────────────────────────

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const now = Date.now();
      const expired = [];
      sessionLastActivity.current.forEach((t, id) => {
        if (now - t > 30000 * speedMultiplier) expired.push(id);
      });
      expired.forEach(id => {
        activeSessions.current.delete(id);
        sessionLastActivity.current.delete(id);
        setGpuStates(prev => prev.map(gpu => {
          const kv = new Map(gpu.kvCacheSessions);
          kv.delete(id);
          return { ...gpu, kvCacheSessions: kv };
        }));
      });
    }, 5000 * speedMultiplier);
    return () => clearInterval(interval);
  }, [isRunning, speedMultiplier]);

  // ── Request generation ───────────────────────────────────────────

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const reqId = requestId.current++;
      setTotalRequests(prev => prev + 1);

      let isCont = false;
      let sessId;
      if (Math.random() * 100 < continuationProbability && activeSessions.current.size > 0) {
        const keys = Array.from(activeSessions.current.keys());
        sessId = keys[Math.floor(Math.random() * keys.length)];
        isCont = true;
      } else {
        sessId = sessionId.current++;
      }

      // Every request starts in prefill phase
      setRequestQueue(prev => [...prev, {
        id: reqId,
        sessionId: sessId,
        isContinuation: isCont,
        timestamp: Date.now(),
        contextLength,
        phase: 'prefill',
      }]);
    }, (1000 / requestRate) * speedMultiplier);
    return () => clearInterval(interval);
  }, [isRunning, requestRate, continuationProbability, contextLength, speedMultiplier]);

  // ── Request processing ───────────────────────────────────────────

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const now = Date.now();

      // STEP 1: Process completions and phase transitions.
      // - Decode complete → fully done (count it)
      // - Prefill complete, non-disagg → transition to decode in-place on same GPU
      // - Prefill complete, disagg → collect in ref, re-queue for decode GPU
      pendingDecodesRef.current = [];

      setGpuStates(prevStates => {
        let fullyCompleted = 0;
        const updated = prevStates.map(gpu => {
          const active = [];
          for (const req of gpu.activeRequests) {
            if (now < req.completionTime) {
              active.push(req);
              continue;
            }

            // This request's current phase is done
            if (req.phase === 'decode') {
              // Decode finished — request is fully complete
              fullyCompleted++;
            } else if (req.phase === 'prefill') {
              if (disaggregated) {
                // Re-queue for a decode GPU
                pendingDecodesRef.current.push({
                  id: requestId.current++,
                  sessionId: req.sessionId,
                  isContinuation: false,
                  timestamp: now,
                  contextLength: req.contextLength,
                  phase: 'decode',
                });
              } else {
                // Stay on same GPU, transition to decode in-place
                const decodeMs = decodeLatencyMs * speedMultiplier;
                active.push({
                  ...req,
                  phase: 'decode',
                  latency: decodeLatencyMs,
                  completionTime: now + decodeMs,
                });
              }
            }
          }
          return { ...gpu, activeRequests: active };
        });

        completedInLastPeriod.current += fullyCompleted;
        return updated;
      });

      // STEP 2: Flush disaggregated prefill→decode handoffs into the queue
      if (pendingDecodesRef.current.length > 0) {
        setRequestQueue(prev => [...prev, ...pendingDecodesRef.current]);
      }

      // STEP 3: Assign queued requests to GPUs
      setRequestQueue(prev => {
        if (prev.length === 0) return prev;

        const assigned = [];
        const tempCounts = gpuStatesRef.current.map(g => g.activeRequests.length);

        for (let i = 0; i < prev.length; i++) {
          const req = prev[i];
          const { sessionId: sessId, isContinuation, phase } = req;
          let gpuIndex = null;
          let hasKVCache = false;
          const slotsNeeded = Math.ceil(req.contextLength / 1000);

          // Determine which GPUs this request can go to
          let targetRole;
          if (disaggregated) {
            targetRole = phase === 'prefill' ? 'prefill' : 'decode';
          } else {
            targetRole = 'general';
          }

          const available = [];
          for (let idx = 0; idx < gpuStatesRef.current.length; idx++) {
            const gpu = gpuStatesRef.current[idx];
            if (gpu.role !== targetRole) continue;
            if (tempCounts[idx] >= maxConcurrent) continue;
            const kvUsage = Array.from(gpu.kvCacheSessions.values()).reduce((s, v) => s + v, 0);
            if (gpu.kvCacheSessions.has(sessId) || (kvUsage + slotsNeeded) <= gpu.maxKVSessions) {
              available.push(idx);
            }
          }

          if (available.length === 0) continue;

          // KV-cache-aware routing for continuations
          if (kvCacheAware && isContinuation && phase === 'prefill') {
            const pool = distributedCache
              ? gpuStatesRef.current.map((_, idx) => idx).filter(idx =>
                  gpuStatesRef.current[idx].role === targetRole && tempCounts[idx] < maxConcurrent)
              : available;
            for (const idx of pool) {
              if (gpuStatesRef.current[idx].kvCacheSessions.has(sessId)) {
                gpuIndex = idx;
                hasKVCache = true;
                break;
              }
            }
          }

          // Round-robin fallback
          if (gpuIndex === null) {
            gpuIndex = available[currentGPUIndex.current % available.length];
            currentGPUIndex.current = (currentGPUIndex.current + 1);
          }

          if (gpuIndex === null) continue;
          tempCounts[gpuIndex] += 1;

          if (hasKVCache) setCacheHits(p => p + 1);
          else if (isContinuation) setCacheMisses(p => p + 1);

          assigned.push({ request: req, gpuIndex, hasKVCache });
          if (!continuousBatching) break;
        }

        if (assigned.length > 0) {
          const newStates = gpuStatesRef.current.map(g => ({
            ...g,
            activeRequests: [...g.activeRequests],
            kvCacheSessions: new Map(g.kvCacheSessions),
          }));

          assigned.forEach(({ request, gpuIndex, hasKVCache }) => {
            const gpu = newStates[gpuIndex];
            const slots = Math.ceil(request.contextLength / 1000);

            if (!gpu.kvCacheSessions.has(request.sessionId)) {
              gpu.kvCacheSessions.set(request.sessionId, slots);
            }

            // Determine phase and latency
            let phase = request.phase;
            let latencyMs;

            if (hasKVCache && phase === 'prefill') {
              // Cache hit: skip prefill entirely, go straight to decode
              phase = 'decode';
              latencyMs = decodeLatencyMs;
            } else if (phase === 'prefill') {
              latencyMs = prefillLatencyMs;
            } else {
              // Decode phase (from disaggregated handoff)
              latencyMs = (disaggregated ? networkLatencyMs : 0) + decodeLatencyMs;
            }

            gpu.activeRequests.push({
              ...request,
              phase,
              latency: latencyMs,
              hasKVCache,
              completionTime: now + (latencyMs * speedMultiplier),
            });

            activeSessions.current.set(request.sessionId, gpuIndex);
            sessionLastActivity.current.set(request.sessionId, Date.now());
          });

          gpuStatesRef.current = newStates;
          setGpuStates(newStates);
        }

        const ids = new Set(assigned.map(a => a.request.id));
        return prev.filter(r => !ids.has(r.id));
      });
    }, 50 * speedMultiplier);
    return () => clearInterval(interval);
  }, [isRunning, continuousBatching, totalGPUs, speedMultiplier,
      kvCacheAware, contextLength, maxConcurrent, gpuType,
      batchSize, disaggregated, distributedCache, networkType,
      prefillLatencyMs, decodeLatencyMs, networkLatencyMs]);

  // ── Metrics ──────────────────────────────────────────────────────

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const states = gpuStatesRef.current;

      const instantLatency = states.reduce((sum, gpu) => {
        const avg = gpu.activeRequests.reduce((s, r) => s + (r.latency || 0), 0) /
          (gpu.activeRequests.length || 1);
        return sum + avg;
      }, 0) / (states.length || 1);

      const instantThroughput = completedInLastPeriod.current;
      completedInLastPeriod.current = 0;

      const instantLoad = states.reduce((sum, gpu) =>
        sum + Math.min(gpu.activeRequests.length * requestUtil, 100),
      0) / states.length;

      completedHistory.current.push(instantThroughput);
      if (completedHistory.current.length > 5) completedHistory.current.shift();
      latencyHistory.current.push(instantLatency);
      if (latencyHistory.current.length > 5) latencyHistory.current.shift();
      gpuLoadHistory.current.push(instantLoad);
      if (gpuLoadHistory.current.length > 5) gpuLoadHistory.current.shift();

      const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
      const total = cacheHitsRef.current + cacheMissesRef.current;

      setMetrics(prev => [...prev, {
        timestamp: Date.now(),
        latency: avg(latencyHistory.current) || 0,
        throughput: avg(completedHistory.current) || 0,
        queueSize: queueSizeRef.current,
        gpuUtilization: avg(gpuLoadHistory.current) || 0,
        cacheHitRate: total > 0 ? (cacheHitsRef.current / total) * 100 : 0,
      }].slice(-100));
    }, 1000 * speedMultiplier);
    return () => clearInterval(interval);
  }, [isRunning, speedMultiplier, requestUtil]);

  // ── Autoscaling ──────────────────────────────────────────────────

  useEffect(() => {
    if (!isRunning || !autoscaling || disaggregated) return;
    const interval = setInterval(() => {
      const q = queueSizeRef.current;
      if (q > 10 && numGPUs < 32) {
        setNumGPUs(prev => Math.min(prev + 1, 32));
      } else if (q === 0 && numGPUs > 1) {
        if (gpuStatesRef.current.every(g => g.activeRequests.length === 0)) {
          setNumGPUs(prev => Math.max(prev - 1, 1));
        }
      }
    }, 3000 * speedMultiplier);
    return () => clearInterval(interval);
  }, [isRunning, autoscaling, disaggregated, numGPUs, setNumGPUs, speedMultiplier]);

  // ── Reset ────────────────────────────────────────────────────────

  const reset = () => {
    completedHistory.current = [];
    latencyHistory.current = [];
    gpuLoadHistory.current = [];
    pendingDecodesRef.current = [];
    setRequestQueue([]);
    setMetrics([]);
    setTotalRequests(0);
    setCacheHits(0);
    setCacheMisses(0);
    setCacheEvictions(0);
    requestId.current = 0;
    sessionId.current = 0;
    completedInLastPeriod.current = 0;
    cacheHitsRef.current = 0;
    cacheMissesRef.current = 0;
    activeSessions.current.clear();
    sessionLastActivity.current.clear();
    const states = Array(totalGPUs).fill(null).map((_, i) => ({
      id: i,
      role: disaggregated ? (i < prefillGPUs ? 'prefill' : 'decode') : 'general',
      activeRequests: [],
      kvCacheSessions: new Map(),
      maxKVSessions: maxKVSessionsPerGPU,
    }));
    setGpuStates(states);
    gpuStatesRef.current = states;
  };

  return {
    gpuStates, requestQueue, metrics, totalRequests,
    cacheHits, cacheMisses, cacheEvictions,
    maxKVSessionsPerGPU, profile, maxConcurrent, requestUtil,
    prefillLatencyMs, decodeLatencyMs,
    reset,
  };
}
