import React, { useState } from 'react';
import StatCard from './components/StatCard';
import ConfigPanel from './components/ConfigPanel';
import RequestQueue from './components/RequestQueue';
import GPUVisualization from './components/GPUVisualization';
import { useEngine } from './engine/useEngine';
import { GPU_SPECS, NETWORK_TRANSFER_MS } from './engine/benchmarkData';
import './styles.css';

function EffectiveConfig({ snapshot }) {
  const { profile, metrics, config } = snapshot;

  if (!profile) {
    return (
      <div className="viz-panel" style={{ marginTop: '20px' }}>
        <h2>Effective Config</h2>
        <div className="viz-info-box">No benchmark data for this GPU type.</div>
      </div>
    );
  }

  const netMs = NETWORK_TRANSFER_MS[config.networkType] || 0;
  const effTtft = metrics.ttftMs;
  const effTpot = metrics.tpotMs;
  const effTotal = config.disaggregated
    ? metrics.estimatedLatencyMs + Math.round(netMs)
    : metrics.estimatedLatencyMs;
  const decodeMs = Math.round(effTpot * (config.outputTokens - 1));

  return (
    <div className="viz-panel" style={{ marginTop: '20px' }}>
      <h2>Effective Config ({GPU_SPECS[config.gpuType]?.name})</h2>
      <div style={{ display: 'grid', gap: '8px', fontSize: '13px' }}>
        <div className="viz-metric-row">
          <span className="viz-metric-label">Prefill (TTFT):</span>
          <span className="viz-metric-value" style={{ color: '#3b82f6' }}>
            {effTtft}ms
            <span style={{ color: '#9ca3af' }}> (base {profile.ttftMs}ms)</span>
          </span>
        </div>
        <div className="viz-metric-row">
          <span className="viz-metric-label">Decode ({config.outputTokens - 1} tokens):</span>
          <span className="viz-metric-value" style={{ color: '#f59e0b' }}>
            {decodeMs}ms
            <span style={{ color: '#9ca3af' }}> ({profile.tpotMs}ms/tok x {config.outputTokens - 1})</span>
          </span>
        </div>
        {config.disaggregated && (
          <div className="viz-metric-row">
            <span className="viz-metric-label">Network transfer:</span>
            <span className="viz-metric-value" style={{ color: config.networkType === 'efa' ? '#10b981' : '#f59e0b' }}>
              {netMs}ms ({config.networkType.toUpperCase()})
            </span>
          </div>
        )}
        <div className="viz-metric-row" style={{ borderTop: '2px solid #e5e7eb', paddingTop: '8px' }}>
          <span className="viz-metric-label">Total per request:</span>
          <span className="viz-metric-value" style={{ fontWeight: 'bold' }}>
            {effTotal}ms
          </span>
        </div>
        <div className="viz-metric-row">
          <span className="viz-metric-label">Cache-hit latency:</span>
          <span className="viz-metric-value" style={{ color: '#10b981' }}>
            {decodeMs}ms (skip prefill)
          </span>
        </div>
        <div className="viz-metric-row" style={{ borderTop: '2px solid #e5e7eb', paddingTop: '8px' }}>
          <span className="viz-metric-label">Max batch (maxNumSeqs):</span>
          <span className="viz-metric-value" style={{ color: config.continuousBatching ? '#10b981' : '#ef4444' }}>
            {config.maxNumSeqs}{!config.continuousBatching && ' (no batching!)'}
          </span>
        </div>
        <div className="viz-metric-row">
          <span className="viz-metric-label">Utilization per request:</span>
          <span className="viz-metric-value" style={{ color: '#8b5cf6' }}>
            {config.gpuUtilization}%
          </span>
        </div>
        <div className="viz-metric-row">
          <span className="viz-metric-label">KV cache usage:</span>
          <span className="viz-metric-value" style={{ color: '#06b6d4' }}>
            {metrics.kvCacheUsage}%
          </span>
        </div>
      </div>
    </div>
  );
}

function App() {
  // Environment
  const [requestRate, setRequestRate] = useState(5);
  const [continuationProbability, setContinuationProbability] = useState(60);
  const [contextLength, setContextLength] = useState(4000);
  const [outputTokens, setOutputTokens] = useState(64);
  const [gpuUtilization, setGpuUtilization] = useState(30);

  // Engine
  const [batchSize, setBatchSize] = useState(32);
  const [continuousBatching, setContinuousBatching] = useState(false);
  const [pagedAttention, setPagedAttention] = useState(false);
  const [disaggregated, setDisaggregated] = useState(false);

  // Routing
  const [kvCacheAware, setKvCacheAware] = useState(false);

  // Cache
  const [distributedCache, setDistributedCache] = useState(false);

  // Orchestrator
  const [autoscaling, setAutoscaling] = useState(false);

  // Hardware
  const [gpuType, setGpuType] = useState('a10g');
  const [numGPUs, setNumGPUs] = useState(2);
  const [prefillGPUs, setPrefillGPUs] = useState(1);
  const [decodeGPUs, setDecodeGPUs] = useState(1);
  const [networkType, setNetworkType] = useState('eth');

  const [isRunning, setIsRunning] = useState(false);

  const { snapshot, reset } = useEngine(
    {
      requestRate,
      continuationProbability,
      contextLength,
      outputTokens,
      gpuUtilization,
      maxNumSeqs: batchSize,
      continuousBatching,
      pagedAttention,
      disaggregated,
      kvCacheAware,
      distributedCache,
      autoscaling,
      gpuType,
      numGPUs,
      setNumGPUs,
      prefillGPUs,
      setPrefillGPUs,
      decodeGPUs,
      setDecodeGPUs,
      networkType,
    },
    isRunning,
  );

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => { setIsRunning(false); reset(); };

  const { metrics } = snapshot;

  return (
    <div>
      <div className="viz-stats">
        <StatCard label="Step" value={snapshot.stepCount} color="blue" />
        <StatCard label="Throughput" value={`${metrics.throughput.toFixed(1)} req/step`} color="green" />
        <StatCard label="Waiting" value={metrics.waitingCount} color="yellow" />
        <StatCard label="GPU Load" value={`${Math.round(metrics.gpuLoad)}%`} color="purple" />
        <StatCard label="KV Cache" value={`${metrics.kvCacheUsage}%`} color="cyan" />
      </div>

      <div className="viz-controls" style={{ marginBottom: '20px' }}>
        {isRunning ? (
          <button onClick={handleStop} className="viz-btn viz-btn-danger">Stop</button>
        ) : (
          <button onClick={handleStart} className="viz-btn viz-btn-primary">Start</button>
        )}
        <button onClick={handleReset} className="viz-btn viz-btn-secondary">Reset</button>
      </div>

      <ConfigPanel
        config={{
          requestRate, setRequestRate,
          continuationProbability, setContinuationProbability,
          contextLength, setContextLength,
          outputTokens, setOutputTokens,
          gpuUtilization, setGpuUtilization,
          batchSize, setBatchSize,
          continuousBatching, setContinuousBatching,
          pagedAttention, setPagedAttention,
          disaggregated, setDisaggregated,
          kvCacheAware, setKvCacheAware,
          distributedCache, setDistributedCache,
          autoscaling, setAutoscaling,
          gpuType, setGpuType,
          numGPUs, setNumGPUs,
          prefillGPUs, setPrefillGPUs,
          decodeGPUs, setDecodeGPUs,
          networkType, setNetworkType,
        }}
        isRunning={isRunning}
        snapshot={snapshot}
      />

      <div className="viz-viz-grid">
        <RequestQueue
          waitingQueue={snapshot.waitingQueue}
          runningQueue={snapshot.runningQueue}
          stepCount={snapshot.stepCount}
        />
        <div style={{ marginTop: '20px' }}>
          <GPUVisualization
            gpus={snapshot.gpus}
            gpuUtilization={snapshot.config.gpuUtilization}
          />
          <EffectiveConfig snapshot={snapshot} />
        </div>
      </div>
    </div>
  );
}

export default App;
