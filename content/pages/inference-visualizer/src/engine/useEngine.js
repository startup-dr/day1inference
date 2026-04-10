import { useState, useEffect, useRef, useCallback } from 'react';
import { VLLMEngine } from './vllmEngine';

/**
 * Thin React hook wrapping VLLMEngine.
 *
 * Creates a single engine instance (via ref), keeps it configured when
 * relevant config properties change, runs step() on a fixed 200ms interval
 * when the simulation is active, and generates requests at the configured
 * rate using fractional accumulation between steps.
 *
 * @param {Object} config - Plain object with engine + environment settings.
 * @param {boolean} isRunning - Whether the simulation is active.
 * @returns {{ snapshot: Object, reset: Function }}
 */
export function useEngine(config, isRunning) {
  const engineRef = useRef(null);
  const accumulatorRef = useRef(0);
  const idleStepsRef = useRef(0);

  const [snapshot, setSnapshot] = useState(() => {
    const engine = new VLLMEngine(buildEngineConfig(config));
    engineRef.current = engine;
    return engine.getSnapshot();
  });

  // ── Reconfigure engine when relevant properties change ──────────

  const {
    numGPUs, gpuType, maxNumSeqs, continuousBatching, pagedAttention,
    kvCacheAware, distributedCache, disaggregated, prefillGPUs, decodeGPUs,
    networkType, gpuUtilization, outputTokens, contextLength,
  } = config;

  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;
    engine.configure(buildEngineConfig(config));
    setSnapshot(engine.getSnapshot());
    // Reset accumulator and idle counter on reconfigure
    accumulatorRef.current = 0;
    idleStepsRef.current = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    numGPUs, gpuType, maxNumSeqs, continuousBatching, pagedAttention,
    kvCacheAware, distributedCache, disaggregated, prefillGPUs, decodeGPUs,
    networkType, gpuUtilization, outputTokens, contextLength,
  ]);

  // ── Step interval ───────────────────────────────────────────────

  useEffect(() => {
    if (!isRunning) return;

    const STEP_MS = 200;

    const intervalId = setInterval(() => {
      const engine = engineRef.current;
      if (!engine) return;

      // Generate requests: accumulate fractional requests per step
      accumulatorRef.current += config.requestRate * (STEP_MS / 1000);
      while (accumulatorRef.current >= 1) {
        engine.submitRequests({
          isContinuation: Math.random() < config.continuationProbability / 100,
          contextLength: config.contextLength,
        });
        accumulatorRef.current -= 1;
      }

      // Advance simulation
      const snap = engine.step();

      // Autoscaling (non-disaggregated only)
      if (config.autoscaling && !config.disaggregated && config.setNumGPUs) {
        if (snap.metrics.waitingCount > 10 && config.numGPUs < 32) {
          config.setNumGPUs(prev => Math.min(prev + 1, 32));
          idleStepsRef.current = 0;
        } else if (
          snap.metrics.waitingCount === 0 &&
          snap.gpus.every(g => g.activeRequests.length === 0)
        ) {
          idleStepsRef.current += 1;
          if (idleStepsRef.current >= 3 && config.numGPUs > 1) {
            config.setNumGPUs(prev => Math.max(prev - 1, 1));
            idleStepsRef.current = 0;
          }
        } else {
          idleStepsRef.current = 0;
        }
      }

      setSnapshot(snap);
    }, STEP_MS);

    return () => clearInterval(intervalId);
  }, [isRunning, config]);

  // ── Reset ───────────────────────────────────────────────────────

  const reset = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    engine.reset();
    accumulatorRef.current = 0;
    idleStepsRef.current = 0;
    setSnapshot(engine.getSnapshot());
  }, []);

  return { snapshot, reset };
}

// ── Helpers ─────────────────────────────────────────────────────────

/**
 * Extract the subset of config properties that VLLMEngine.configure()
 * understands, mapping field names where necessary.
 */
function buildEngineConfig(config) {
  return {
    numGPUs:            config.numGPUs,
    gpuType:            config.gpuType,
    maxNumSeqs:         config.maxNumSeqs,
    continuousBatching: config.continuousBatching,
    pagedAttention:     config.pagedAttention,
    kvCacheAware:       config.kvCacheAware,
    distributedCache:   config.distributedCache,
    disaggregated:      config.disaggregated,
    prefillGPUs:        config.prefillGPUs,
    decodeGPUs:         config.decodeGPUs,
    networkType:        config.networkType,
    gpuUtilization:     config.gpuUtilization,
    outputTokens:       config.outputTokens,
    contextLength:      config.contextLength,
  };
}
