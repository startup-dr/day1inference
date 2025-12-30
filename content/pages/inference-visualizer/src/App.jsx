import React, { useState } from 'react';
import StatCard from './components/StatCard';
import ConfigPanel from './components/ConfigPanel';
import RequestQueue from './components/RequestQueue';
import GPUVisualization from './components/GPUVisualization';
import { useSimulationEngine } from './engine/useSimulationEngine';
import './styles.css';

function App() {
  const [requestRate, setRequestRate] = useState(5);
  const [continuationProbability, setContinuationProbability] = useState(60);
  const [contextLength, setContextLength] = useState(4000);
  const [gpuUtilization, setGpuUtilization] = useState(30);
  const [numGPUs, setNumGPUs] = useState(2);
  const [isRunning, setIsRunning] = useState(false);
  const [kvCacheAware, setKvCacheAware] = useState(false);
  const [continuousBatching, setContinuousBatching] = useState(false);
  const [pagedAttention, setPagedAttention] = useState(false);

  const {
    gpuStates,
    requestQueue,
    metrics,
    maxKVSessionsPerGPU,
    reset: resetSimulation,
  } = useSimulationEngine({
    requestRate,
    continuationProbability,
    contextLength,
    gpuUtilization,
    kvCacheAware,
    continuousBatching,
    pagedAttention,
    numGPUs,
    gpuType: 'a100',
    isRunning,
    slowMode: false,
    autoLoadTest: false,
  });

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    resetSimulation();
  };

  const latestMetrics = metrics[metrics.length - 1] || {
    latency: 0,
    throughput: 0,
    queueSize: 0,
    gpuUtilization: 0,
    cacheHitRate: 0
  };

  const maxReqsPerGPU = continuousBatching ? Math.floor(100 / gpuUtilization) : 1;

  return (
    <div>
      <div className="viz-stats">
        <StatCard label="Avg Latency" value={`${Math.round(latestMetrics.latency)}ms`} color="blue" />
        <StatCard label="Throughput" value={`${latestMetrics.throughput} req/s`} color="green" />
        <StatCard label="Queue Size" value={latestMetrics.queueSize} color="yellow" />
        <StatCard label="GPU Load" value={`${Math.round(latestMetrics.gpuUtilization)}%`} color="purple" />
        <StatCard label="Cache Hit Rate" value={`${Math.round(latestMetrics.cacheHitRate)}%`} color="cyan" />
      </div>

      <div className="viz-controls" style={{ marginBottom: '20px' }}>
        {isRunning ? (
          <button onClick={handleStop} className="viz-btn viz-btn-danger">
            ■ Stop
          </button>
        ) : (
          <button onClick={handleStart} className="viz-btn viz-btn-primary">
            ▶ Start
          </button>
        )}
        <button onClick={handleReset} className="viz-btn viz-btn-secondary">
          Reset
        </button>
      </div>

      <ConfigPanel
        config={{
          requestRate, setRequestRate,
          continuationProbability, setContinuationProbability,
          contextLength, setContextLength,
          gpuUtilization, setGpuUtilization,
          numGPUs, setNumGPUs,
          kvCacheAware, setKvCacheAware,
          continuousBatching, setContinuousBatching,
          pagedAttention, setPagedAttention,
        }}
        isRunning={isRunning}
        maxKVSessionsPerGPU={maxKVSessionsPerGPU}
        contextLength={contextLength}
      />

      <div className="viz-viz-grid">
        <RequestQueue queue={requestQueue} />
        <div style={{ marginTop: '20px' }}>
          <GPUVisualization 
            gpuStates={gpuStates} 
            gpuUtilization={gpuUtilization}
            maxKVSessionsPerGPU={maxKVSessionsPerGPU}
          />
          
          <div className="viz-panel" style={{ marginTop: '20px' }}>
            <h2>📊 Performance Metrics</h2>
            <div style={{ display: 'grid', gap: '8px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f9fafb', borderRadius: '6px' }}>
                <span style={{ color: '#6b7280' }}>Decode (Cache Hit):</span>
                <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>50ms</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f9fafb', borderRadius: '6px' }}>
                <span style={{ color: '#6b7280' }}>Prefill (Cache Miss):</span>
                <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>{contextLength / 1000 * 100}ms</span>
              </div>
              <div style={{ fontSize: '11px', color: '#6b7280', padding: '4px 8px' }}>
                Prefill scales with context: {contextLength / 1000}K tokens × 100ms
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f9fafb', borderRadius: '6px', borderTop: '2px solid #e5e7eb' }}>
                <span style={{ color: '#6b7280' }}>Concurrent Reqs per GPU:</span>
                <span style={{ fontWeight: 'bold', color: continuousBatching ? '#10b981' : '#ef4444' }}>
                  {maxReqsPerGPU} {!continuousBatching && '(1 at a time!)'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', background: '#f9fafb', borderRadius: '6px' }}>
                <span style={{ color: '#6b7280' }}>KV Sessions per GPU:</span>
                <span style={{ fontWeight: 'bold', color: '#06b6d4' }}>{maxKVSessionsPerGPU} max</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
