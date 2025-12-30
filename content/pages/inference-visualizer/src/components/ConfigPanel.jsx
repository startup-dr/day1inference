import React, { useState } from 'react';

export default function ConfigPanel({ config, isRunning, maxKVSessionsPerGPU, contextLength }) {
  const [activeTab, setActiveTab] = useState('routing');
  const [isExpanded, setIsExpanded] = useState(true);
  const [showEnvironment, setShowEnvironment] = useState(true);

  const tabs = [
    { id: 'routing', label: '🔀 Routing', desc: 'Request distribution' },
    { id: 'engine', label: '⚙️ Engine', desc: 'Inference optimizations' },
    { id: 'cache', label: '💾 Cache', desc: 'TBD' },
    { id: 'orchestrator', label: '🏗️ Orchestrator', desc: 'TBD' },
    { id: 'nodes', label: '🖥️ Nodes', desc: 'Hardware resources' },
  ];

  const maxReqsPerGPU = config.continuousBatching 
    ? Math.floor(100 / config.gpuUtilization) 
    : 1;

  return (
    <div className="viz-panel">
      <div className="viz-panel-header">
        <h2>⚙️ Configuration</h2>
      </div>

      <div>
          <div className="viz-environment-section">
            <button
              onClick={() => setShowEnvironment(!showEnvironment)}
              className="viz-environment-header"
            >
              <div>
                <span className="viz-environment-title">🌍 Environment</span>
                <span className="viz-environment-desc">Workload characteristics</span>
              </div>
              <span className="viz-collapse-icon">{showEnvironment ? '▼' : '▶'}</span>
            </button>

            {showEnvironment && (
              <div className="viz-environment-content">
                <div className="viz-slider-group">
                  <div className="viz-slider-label">
                    <span>Request Rate</span>
                    <span className="viz-slider-value">{config.requestRate} req/s</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={config.requestRate}
                    onChange={(e) => config.setRequestRate(parseInt(e.target.value))}
                    className="viz-slider"
                  />
                  <div className="viz-hint">1-200 req/s</div>
                </div>

                <div className="viz-slider-group">
                  <div className="viz-slider-label">
                    <span>Continuation Probability</span>
                    <span className="viz-slider-value">{config.continuationProbability}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={config.continuationProbability}
                    onChange={(e) => config.setContinuationProbability(parseInt(e.target.value))}
                    className="viz-slider"
                  />
                  <div className="viz-hint">Chat: 80% | API: 20% | Code: 70%</div>
                </div>

                <div className="viz-slider-group">
                  <div className="viz-slider-label">
                    <span>Context Length</span>
                    <span className="viz-slider-value">{config.contextLength / 1000}k tokens</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="8000"
                    step="1000"
                    value={config.contextLength}
                    onChange={(e) => config.setContextLength(parseInt(e.target.value))}
                    className="viz-slider"
                  />
                </div>

                <div className="viz-slider-group">
                  <div className="viz-slider-label">
                    <span>GPU Utilization per Request</span>
                    <span className="viz-slider-value">{config.gpuUtilization}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="10"
                    value={config.gpuUtilization}
                    onChange={(e) => config.setGpuUtilization(parseInt(e.target.value))}
                    className="viz-slider"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="viz-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`viz-tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                <div className="viz-tab-label">{tab.label}</div>
                <div className="viz-tab-desc">{tab.desc}</div>
              </button>
            ))}
          </div>

          <div className="viz-tab-content">
            {activeTab === 'routing' && (
              <div className="viz-section">
                <label className="viz-checkbox">
                  <input
                    type="checkbox"
                    checked={config.kvCacheAware}
                    onChange={(e) => config.setKvCacheAware(e.target.checked)}
                  />
                  <span className="viz-checkbox-label">
                    <strong>KV-Cache-Aware Routing</strong>
                    <div className="viz-checkbox-desc">
                      Route continuations to GPUs with cached KV states (75% latency reduction)
                    </div>
                  </span>
                </label>
                
                <div className="viz-info-box">
                  <strong>💡 How it works:</strong> Continuations route to GPUs with KV cache (50ms). 
                  When GPU is at capacity, oldest session is evicted (LRU) requiring prefill (200ms).
                </div>
              </div>
            )}

            {activeTab === 'engine' && (
              <div className="viz-section">
                <label className="viz-checkbox">
                  <input
                    type="checkbox"
                    checked={config.continuousBatching}
                    onChange={(e) => config.setContinuousBatching(e.target.checked)}
                  />
                  <span className="viz-checkbox-label">
                    <strong>Continuous Batching</strong>
                    <div className="viz-checkbox-desc">
                      Process multiple requests concurrently (up to 100% GPU utilization)
                    </div>
                  </span>
                </label>

                <label className="viz-checkbox">
                  <input
                    type="checkbox"
                    checked={config.pagedAttention}
                    onChange={(e) => config.setPagedAttention(e.target.checked)}
                  />
                  <span className="viz-checkbox-label">
                    <strong>Paged Attention (vLLM)</strong>
                    <div className="viz-checkbox-desc">
                      1000x more KV sessions (40 → 40,000) - prevents evictions
                    </div>
                  </span>
                </label>

                {!config.continuousBatching && (
                  <div className="viz-warning-box warning">
                    ⚠️ No batching enabled - GPUs handle 1 request at a time!
                  </div>
                )}
              </div>
            )}

            {activeTab === 'cache' && (
              <div className="viz-section">
                <div className="viz-info-box">
                  <strong>Coming Soon:</strong> Cache layer configuration
                </div>
              </div>
            )}

            {activeTab === 'orchestrator' && (
              <div className="viz-section">
                <div className="viz-info-box">
                  <strong>Coming Soon:</strong> Orchestration and infrastructure features
                </div>
              </div>
            )}

            {activeTab === 'nodes' && (
              <div className="viz-section">
                <div className="viz-slider-group">
                  <div className="viz-slider-label">
                    <span>Number of GPUs</span>
                    <span className="viz-slider-value">{config.numGPUs}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="32"
                    value={config.numGPUs}
                    onChange={(e) => !isRunning && config.setNumGPUs(parseInt(e.target.value))}
                    disabled={isRunning}
                    className="viz-slider"
                  />
                  {isRunning && (
                    <div className="viz-hint warning">⚠️ Stop simulation to change GPU count</div>
                  )}
                  <div className="viz-hint">1-32 GPUs</div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
