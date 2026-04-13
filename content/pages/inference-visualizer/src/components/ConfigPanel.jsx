import React, { useState } from 'react';
import { GPU_SPECS, BATCH_SIZE_OPTIONS } from '../engine/benchmarkData';

export default function ConfigPanel({ config, isRunning, snapshot }) {
  const [activeTab, setActiveTab] = useState('routing');
  const [showEnvironment, setShowEnvironment] = useState(true);

  const profile = snapshot?.profile;

  const tabs = [
    { id: 'routing',       label: 'Routing',       desc: 'Request distribution' },
    { id: 'engine',        label: 'Engine',        desc: 'Inference optimizations' },
    { id: 'cache',         label: 'Cache',          desc: 'KV cache strategy' },
    { id: 'orchestrator',  label: 'Orchestrator',  desc: 'Scaling & management' },
    { id: 'hardware',      label: 'Nodes',      desc: 'GPUs & networking' },
  ];

  return (
    <div className="viz-panel">
      <div className="viz-panel-header">
        <h2>Configuration</h2>
      </div>

      <div>
        {/* -- Environment (always visible) -- */}
        <div className="viz-environment-section">
          <button
            onClick={() => setShowEnvironment(!showEnvironment)}
            className="viz-environment-header"
          >
            <div>
              <span className="viz-environment-title">Environment</span>
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
                <input type="range" min="1" max="200" value={config.requestRate}
                  onChange={(e) => config.setRequestRate(parseInt(e.target.value))}
                  className="viz-slider" />
                <div className="viz-hint">1-200 req/s</div>
              </div>

              <div className="viz-slider-group">
                <div className="viz-slider-label">
                  <span>Continuation Probability</span>
                  <span className="viz-slider-value">{config.continuationProbability}%</span>
                </div>
                <input type="range" min="0" max="100" step="10"
                  value={config.continuationProbability}
                  onChange={(e) => config.setContinuationProbability(parseInt(e.target.value))}
                  className="viz-slider" />
                <div className="viz-hint">Chat: 80% | API: 20% | Code: 70%</div>
              </div>

              <div className="viz-slider-group">
                <div className="viz-slider-label">
                  <span>Context Length</span>
                  <span className="viz-slider-value">{config.contextLength / 1000}k tokens</span>
                </div>
                <input type="range" min="1000" max="8000" step="1000"
                  value={config.contextLength}
                  onChange={(e) => config.setContextLength(parseInt(e.target.value))}
                  className="viz-slider" />
              </div>

              <div className="viz-slider-group">
                <div className="viz-slider-label">
                  <span>Output Length</span>
                  <span className="viz-slider-value">{config.outputTokens} tokens</span>
                </div>
                <input type="range" min="16" max="512" step="16"
                  value={config.outputTokens}
                  onChange={(e) => config.setOutputTokens(parseInt(e.target.value))}
                  className="viz-slider" />
                <div className="viz-hint">Short: 32 | Chat: 64-128 | Long: 256-512</div>
              </div>

              <div className="viz-slider-group">
                <div className="viz-slider-label">
                  <span>GPU Utilization per Request</span>
                  <span className="viz-slider-value">{config.gpuUtilization}%</span>
                </div>
                <input type="range" min="5" max="85" step="5"
                  value={config.gpuUtilization}
                  onChange={(e) => config.setGpuUtilization(parseInt(e.target.value))}
                  className="viz-slider" />
                <div className="viz-hint">Small model: 5-15% | 7B: 30-60% | 70B+: 70-85%</div>
              </div>
            </div>
          )}
        </div>

        {/* -- Tabs -- */}
        <div className="viz-tabs">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`viz-tab ${activeTab === tab.id ? 'active' : ''}`}>
              <div className="viz-tab-label">{tab.label}</div>
              <div className="viz-tab-desc">{tab.desc}</div>
            </button>
          ))}
        </div>

        <div className="viz-tab-content">
          {/* -- Routing -- */}
          {activeTab === 'routing' && (
            <div className="viz-section">
              <label className="viz-checkbox">
                <input type="checkbox" checked={config.kvCacheAware}
                  onChange={(e) => config.setKvCacheAware(e.target.checked)} />
                <span className="viz-checkbox-label">
                  <strong>KV-Cache-Aware Routing</strong>
                  <div className="viz-checkbox-desc">
                    Route continuations to GPUs with cached KV states (skip prefill)
                  </div>
                </span>
              </label>
              <div className="viz-info-box">
                <strong>How it works:</strong> Continuations route to GPUs with
                cached KV state, skipping the prefill phase entirely.
                {profile && <> Cache hit saves ~{profile.ttftMs}ms TTFT per request.</>}
              </div>
            </div>
          )}

          {/* -- Engine -- */}
          {activeTab === 'engine' && (
            <div className="viz-section">
              <label className="viz-checkbox">
                <input type="checkbox" checked={config.continuousBatching}
                  onChange={(e) => config.setContinuousBatching(e.target.checked)} />
                <span className="viz-checkbox-label">
                  <strong>Continuous Batching</strong>
                  <div className="viz-checkbox-desc">
                    Process up to {config.batchSize} requests concurrently per GPU
                  </div>
                </span>
              </label>

              <label className="viz-checkbox">
                <input type="checkbox" checked={config.pagedAttention}
                  onChange={(e) => config.setPagedAttention(e.target.checked)} />
                <span className="viz-checkbox-label">
                  <strong>Paged Attention (vLLM)</strong>
                  <div className="viz-checkbox-desc">
                    Efficient KV cache memory management - ~10x more sessions
                  </div>
                </span>
              </label>

              <div className="viz-select-group">
                <label className="viz-select-label">Batch Size (maxNumSeqs)</label>
                <select value={config.batchSize}
                  onChange={(e) => config.setBatchSize(parseInt(e.target.value))}
                  className="viz-select">
                  {BATCH_SIZE_OPTIONS.map(bs => (
                    <option key={bs} value={bs}>{bs}</option>
                  ))}
                </select>
              </div>

              <label className="viz-checkbox">
                <input type="checkbox" checked={config.disaggregated}
                  onChange={(e) => config.setDisaggregated(e.target.checked)} />
                <span className="viz-checkbox-label">
                  <strong>Disaggregated Inference</strong>
                  <div className="viz-checkbox-desc">
                    Separate prefill and decode onto dedicated GPU pools
                  </div>
                </span>
              </label>

              {config.disaggregated && (
                <div className="viz-info-box">
                  <strong>Prefill vs Decode:</strong> Prefill is compute-heavy (TTFT),
                  decode is memory-bound (TPOT). Dedicating GPUs to each phase
                  prevents head-of-line blocking. Configure pools in the Nodes tab.
                </div>
              )}

              {!config.continuousBatching && (
                <div className="viz-warning-box warning">
                  No batching -- GPUs handle 1 request at a time!
                </div>
              )}
            </div>
          )}

          {/* -- Cache -- */}
          {activeTab === 'cache' && (
            <div className="viz-section">
              <label className="viz-checkbox">
                <input type="checkbox" checked={config.distributedCache}
                  onChange={(e) => config.setDistributedCache(e.target.checked)} />
                <span className="viz-checkbox-label">
                  <strong>Distributed KV Cache</strong>
                  <div className="viz-checkbox-desc">
                    Share KV cache state across all GPUs via a cache service
                  </div>
                </span>
              </label>

              <div className="viz-info-box">
                {config.distributedCache ? (
                  <>
                    <strong>Enabled:</strong> Any GPU can serve a continuation
                    request by pulling cached KV state from the distributed cache.
                    This decouples session affinity from GPU assignment, improving
                    load balancing and cache hit rates.
                  </>
                ) : (
                  <>
                    <strong>Local-only cache:</strong> KV state is stored on the
                    GPU that processed the request. Continuations must route to the
                    same GPU to get a cache hit. Enable distributed cache to decouple
                    routing from cache locality.
                  </>
                )}
              </div>
            </div>
          )}

          {/* -- Orchestrator -- */}
          {activeTab === 'orchestrator' && (
            <div className="viz-section">
              <label className="viz-checkbox">
                <input type="checkbox" checked={config.autoscaling}
                  onChange={(e) => config.setAutoscaling(e.target.checked)} />
                <span className="viz-checkbox-label">
                  <strong>Autoscaling</strong>
                  <div className="viz-checkbox-desc">
                    {config.disaggregated
                      ? 'Dynamically scale decode GPU pool based on load'
                      : 'Dynamically add/remove GPUs based on queue depth'}
                  </div>
                </span>
              </label>

              <div className="viz-info-box">
                {config.autoscaling ? (
                  config.disaggregated ? (
                    <>
                      <strong>Enabled:</strong> Decode pool scales independently.
                      When all decode GPUs are saturated, a new one is added.
                      When idle, one is released.
                      Current: <strong>{config.prefillGPUs}P + {config.decodeGPUs}D</strong>.
                    </>
                  ) : (
                    <>
                      <strong>Enabled:</strong> The orchestrator monitors the request queue.
                      When queue depth exceeds 10, a new GPU is provisioned.
                      When all GPUs are idle, one is released.
                      GPU count: <strong>{config.numGPUs}</strong> (auto-managed).
                    </>
                  )
                ) : (
                  <>
                    <strong>Fixed capacity:</strong> GPU count is static
                    ({config.disaggregated
                      ? `${config.prefillGPUs} prefill + ${config.decodeGPUs} decode`
                      : `${config.numGPUs} GPUs`}).
                    Enable autoscaling to respond to load changes automatically.
                  </>
                )}
              </div>
            </div>
          )}

          {/* -- Nodes -- */}
          {activeTab === 'hardware' && (
            <div className="viz-section">
              <div className="viz-select-group">
                <label className="viz-select-label">GPU Type</label>
                <select value={config.gpuType}
                  onChange={(e) => config.setGpuType(e.target.value)}
                  className="viz-select">
                  {Object.entries(GPU_SPECS).map(([id, g]) => (
                    <option key={id} value={id}>
                      {g.name} ({g.memoryGB}GB) -- {g.instance}
                    </option>
                  ))}
                </select>
              </div>

              {config.disaggregated ? (
                <>
                  <div className="viz-slider-group">
                    <div className="viz-slider-label">
                      <span>Prefill GPUs</span>
                      <span className="viz-slider-value">{config.prefillGPUs}</span>
                    </div>
                    <input type="range" min="1" max="16" value={config.prefillGPUs}
                      onChange={(e) => config.setPrefillGPUs(parseInt(e.target.value))}
                      className="viz-slider" />
                  </div>
                  <div className="viz-slider-group">
                    <div className="viz-slider-label">
                      <span>Decode GPUs</span>
                      <span className="viz-slider-value">{config.decodeGPUs}</span>
                    </div>
                    <input type="range" min="1" max="16" value={config.decodeGPUs}
                      onChange={(e) => config.setDecodeGPUs(parseInt(e.target.value))}
                      className="viz-slider" />
                  </div>

                  <div className="viz-select-group">
                    <label className="viz-select-label">Interconnect</label>
                    <select value={config.networkType}
                      onChange={(e) => config.setNetworkType(e.target.value)}
                      className="viz-select">
                      <option value="efa">EFA (25 Gbps, ~0.5ms transfer)</option>
                      <option value="eth">Standard Ethernet (~3ms transfer)</option>
                    </select>
                  </div>

                  <div className="viz-info-box">
                    <strong>Networking:</strong> Disaggregated inference transfers
                    KV cache state between prefill and decode GPUs.
                    {config.networkType === 'efa'
                      ? ' EFA provides near-zero overhead for this transfer.'
                      : ' Standard Ethernet adds ~3ms per request. EFA eliminates this bottleneck.'}
                  </div>
                </>
              ) : (
                <div className="viz-slider-group">
                  <div className="viz-slider-label">
                    <span>Number of GPUs</span>
                    <span className="viz-slider-value">{config.numGPUs}</span>
                  </div>
                  <input type="range" min="1" max="32" value={config.numGPUs}
                    onChange={(e) => !config.autoscaling && config.setNumGPUs(parseInt(e.target.value))}
                    disabled={config.autoscaling}
                    className="viz-slider" />
                  {config.autoscaling && (
                    <div className="viz-hint">Managed by autoscaler</div>
                  )}
                </div>
              )}

              {profile?.estimated && (
                <div className="viz-info-box">
                  This GPU's benchmark profile is estimated from related configurations.
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
