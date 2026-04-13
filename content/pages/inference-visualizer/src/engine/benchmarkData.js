/**
 * Performance profiles derived from real cluster benchmarks (recon-perf).
 *
 * Each profile maps a (model, gpu) pair to measured latency and throughput
 * values from production-grade vLLM deployments on AWS.
 *
 * Sources:
 *   gpu-comparison-20260403      – L40S vs A10G on 0.5B
 *   full-matrix-20260403         – 0.5B / 1.5B on L40S
 *   batch-size-ab-20260318       – 7B batch-16 vs batch-64 on A10G
 *   prefix-cache-ab-20260403     – 7B caching impact on A10G
 *   context-length-20260318      – 7B short vs long context on A10G
 *   p5-72b-spec-20260318         – 72B on H100 x8 with tensor parallelism
 */

// GPU memory in GB — used for KV budget calculation.
export const GPU_SPECS = {
  a10g: { name: 'A10G',  instance: 'g5.xlarge',  memoryGB: 24 },
  l40s: { name: 'L40S',  instance: 'g6e.xlarge', memoryGB: 48 },
  h100: { name: 'H100',  instance: 'p5.48xlarge', memoryGB: 80 },
};

// Model reference data — used as keys in PROFILES.
const MODELS = {
  'qwen-0.5b': { name: 'Qwen 0.5B',  paramBillions: 0.5,  weightGB: 1  },
  'qwen-1.5b': { name: 'Qwen 1.5B',  paramBillions: 1.5,  weightGB: 3  },
  'qwen-7b':   { name: 'Qwen 7B',    paramBillions: 7,    weightGB: 14 },
  'qwen-72b':  { name: 'Qwen 72B',   paramBillions: 72,   weightGB: 144, tensorParallel: 8 },
};

/**
 * Benchmark-measured performance for each (model, gpu) combination.
 *
 * ttftMs        – median time-to-first-token (prefill) in ms
 * ttftP99Ms     – p99 TTFT in ms
 * tpotMs        – median time-per-output-token (decode) in ms
 * tpotP99Ms     – p99 TPOT in ms
 * maxTokensSec  – peak sustained output tokens/sec observed
 *
 * Values come from moderate-load scenarios (3–5 QPS) which reflect
 * realistic production traffic, not burst or overload conditions.
 */
export const PROFILES = {
  // ── L40S (g6e.xlarge) ─────────────────────────────────────────────
  'qwen-0.5b+l40s': {
    ttftMs: 17, ttftP99Ms: 25, tpotMs: 1.4, tpotP99Ms: 1.7,
    maxTokensSec: 318,
  },
  'qwen-1.5b+l40s': {
    ttftMs: 19, ttftP99Ms: 30, tpotMs: 2.6, tpotP99Ms: 2.7,
    maxTokensSec: 183,
  },
  'qwen-7b+l40s': {
    // Not directly benchmarked — estimated from A10G data scaled by
    // L40S's ~1.5× memory bandwidth advantage.
    ttftMs: 55, ttftP99Ms: 80, tpotMs: 9, tpotP99Ms: 12,
    maxTokensSec: 700,
    estimated: true,
  },

  // ── A10G (g5.xlarge) ──────────────────────────────────────────────
  'qwen-0.5b+a10g': {
    ttftMs: 15, ttftP99Ms: 25, tpotMs: 1.0, tpotP99Ms: 1.3,
    maxTokensSec: 332,
  },
  'qwen-1.5b+a10g': {
    // Not directly benchmarked — estimated from L40S 1.5B scaled by
    // the A10G/L40S ratio observed on the 0.5B model.
    ttftMs: 20, ttftP99Ms: 35, tpotMs: 3.0, tpotP99Ms: 3.5,
    maxTokensSec: 160,
    estimated: true,
  },
  'qwen-7b+a10g': {
    // From batch-size-ab, prefix-cache-ab, context-length tests.
    // TTFT and TPOT from prefix-cache chatbot scenario (5 QPS, batch-32).
    ttftMs: 70, ttftP99Ms: 5430, tpotMs: 11, tpotP99Ms: 31,
    maxTokensSec: 628,
  },

  // ── H100 (p5.48xlarge, 8× tensor parallel) ────────────────────────
  'qwen-0.5b+h100': {
    // Not directly benchmarked — H100 is overkill for 0.5B but included
    // for UI completeness. Estimated from L40S with ~2× speedup.
    ttftMs: 8, ttftP99Ms: 12, tpotMs: 0.7, tpotP99Ms: 0.9,
    maxTokensSec: 650,
    estimated: true,
  },
  'qwen-1.5b+h100': {
    ttftMs: 10, ttftP99Ms: 15, tpotMs: 1.3, tpotP99Ms: 1.4,
    maxTokensSec: 400,
    estimated: true,
  },
  'qwen-7b+h100': {
    ttftMs: 20, ttftP99Ms: 30, tpotMs: 3, tpotP99Ms: 4,
    maxTokensSec: 1400,
    estimated: true,
  },
  'qwen-72b+h100': {
    // From p5-72b-spec baseline chatbot (5 QPS, 8× TP, batch-64).
    ttftMs: 39, ttftP99Ms: 4766, tpotMs: 5.6, tpotP99Ms: 22,
    maxTokensSec: 1446,
  },
};

/**
 * Batch size impact multipliers, derived from batch-size-ab tests.
 *
 * At light load, batch size barely matters. At heavy load (near
 * saturation), larger batches sustain throughput while smaller batches
 * cause severe queuing. These multipliers adjust TTFT under load.
 *
 * Baseline is batch-32 (the most common benchmark config).
 */
export const BATCH_SIZE_OPTIONS = [8, 16, 32, 64];

export const BATCH_TTFT_MULTIPLIER = {
  8:  1.2,   // Slightly higher TTFT (fewer concurrent, more queuing)
  16: 1.1,   // Close to baseline
  32: 1.0,   // Baseline
  64: 0.95,  // Slightly better (more concurrent capacity)
};

// Maximum concurrent requests per GPU ≈ batch size (maxNumSeqs).
// Under continuous batching, vLLM processes up to maxNumSeqs concurrently.
export const BATCH_MAX_CONCURRENT = {
  8:  8,
  16: 16,
  32: 32,
  64: 64,
};

/**
 * Network transfer latency for disaggregated inference.
 *
 * When prefill and decode run on separate GPU pools, KV cache state
 * must transfer between them.  Transfer time depends on KV size
 * (proportional to context length × model dimensions) and network.
 *
 * Values are estimated per-request overhead in ms for a ~4K context.
 */
export const NETWORK_TRANSFER_MS = {
  efa: 0.5,  // EFA: ~25 Gbps, ~5μs latency — near-negligible
  eth: 3,    // Standard Ethernet: ~10 Gbps, higher latency
};

/**
 * Representative profile per GPU type.
 *
 * Since the user controls utilization directly (not model selection),
 * we pick the most commonly benchmarked model per GPU for latency data.
 */
const GPU_DEFAULT_PROFILE = {
  a10g: 'qwen-7b+a10g',
  l40s: 'qwen-7b+l40s',
  h100: 'qwen-72b+h100',
};

/**
 * Look up the representative performance profile for a GPU type.
 */
export function getProfile(gpuType) {
  const key = GPU_DEFAULT_PROFILE[gpuType];
  return key ? (PROFILES[key] || null) : null;
}

/**
 * Calculate max KV cache sessions per GPU.
 *
 * Uses gpuUtilization as a proxy for model weight memory: higher
 * utilization means the model occupies more GPU memory, leaving less
 * for KV cache.
 */
export function calcMaxKVSessions(gpuType, gpuUtilization, pagedAttention, contextLength) {
  const gpu = GPU_SPECS[gpuType];
  if (!gpu) return 0;

  // Model weights consume memory proportional to utilization
  const modelFraction = gpuUtilization / 100;
  const kvBudgetGB = gpu.memoryGB * (1 - modelFraction) * 0.8; // 80% of remaining for KV

  // ~0.5 MB per 1K context tokens (typical for 7B-class models)
  const kvPerSessionGB = (contextLength / 1000) * 0.0005;
  if (kvPerSessionGB <= 0) return 1000;

  const rawSessions = kvBudgetGB / kvPerSessionGB;

  // Paged attention eliminates fragmentation → ~10× more efficient
  return Math.max(1, Math.floor(pagedAttention ? rawSessions : rawSessions * 0.1));
}
