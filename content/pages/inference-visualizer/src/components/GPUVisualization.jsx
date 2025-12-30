import React from 'react';

export default function GPUVisualization({ gpuStates, gpuUtilization, maxKVSessionsPerGPU }) {
  // Compact grid view for 8+ GPUs
  if (gpuStates.length > 8) {
    return (
      <div className="viz-panel">
        <h2>GPU Cluster</h2>
        <div className="viz-gpu-grid-compact">
          {gpuStates.map(gpu => {
            const utilization = Math.min(gpu.activeRequests.length * gpuUtilization, 100);
            const kvSessions = Array.from(gpu.kvCacheSessions?.values() || []).reduce((a, b) => a + b, 0);
            const hasCache = gpu.activeRequests.some(r => r.hasKVCache);
            
            return (
              <div key={gpu.id} className="viz-gpu-compact">
                <div className="viz-gpu-compact-name">GPU {gpu.id}</div>
                <div className="viz-gpu-compact-stats">
                  <span className="viz-gpu-compact-util">{Math.round(utilization)}%</span>
                  <span className="viz-gpu-compact-reqs">{gpu.activeRequests.length} req</span>
                </div>
                <div className="viz-progress-compact">
                  <div
                    className={`viz-progress-bar ${
                      utilization > 0
                        ? hasCache ? 'cache-hit' : utilization >= 90 ? 'high' : 'normal'
                        : ''
                    }`}
                    style={{ width: `${utilization}%` }}
                  />
                </div>
                {kvSessions > 0 && (
                  <div className="viz-kv-compact">💾 {kvSessions}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="viz-info-box">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '2px' }}></span>
              KV cache hit
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#a855f7', borderRadius: '2px' }}></span>
              Normal
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '2px' }}></span>
              High load
            </span>
            <span>💾 = KV slots used</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Detailed view for <=8 GPUs
  return (
    <div className="viz-panel">
      <h2>GPU Cluster</h2>
      <div className="viz-gpu-grid">
        {gpuStates.map(gpu => {
          const utilization = Math.min(gpu.activeRequests.length * gpuUtilization, 100);
          const hasCache = gpu.activeRequests.some(r => r.hasKVCache);
          const kvSessions = Array.from(gpu.kvCacheSessions?.values() || []).reduce((a, b) => a + b, 0);
          const maxKV = maxKVSessionsPerGPU || 40;
          const kvPercent = (kvSessions / maxKV) * 100;
          const isNearCapacity = kvPercent >= 80;
          const isAtCapacity = kvPercent >= 100;
          
          return (
            <div key={gpu.id} className="viz-gpu">
              <div className="viz-gpu-header">
                <div className="viz-gpu-header-left">
                  <span className="viz-gpu-name">GPU {gpu.id}</span>
                  {kvSessions > 0 && (
                    <span className={`viz-kv-badge ${isAtCapacity ? 'critical' : isNearCapacity ? 'warning' : 'normal'}`}>
                      💾 {kvSessions}/{maxKV} KV slots
                    </span>
                  )}
                </div>
                <div className="viz-gpu-stats">
                  {gpu.activeRequests.length > 0 ? (
                    <span className="viz-badge-success">
                      {gpu.activeRequests.length} req{gpu.activeRequests.length > 1 ? 's' : ''}
                    </span>
                  ) : (
                    <span className="viz-badge-idle">Idle</span>
                  )}
                  <span className="viz-gpu-util">{Math.round(utilization)}%</span>
                </div>
              </div>
              <div className="viz-progress">
                <div
                  className={`viz-progress-bar ${
                    utilization > 0
                      ? hasCache
                        ? 'cache-hit'
                        : utilization >= 90
                        ? 'high'
                        : 'normal'
                      : ''
                  }`}
                  style={{ width: `${utilization}%` }}
                />
              </div>
              {isAtCapacity && (
                <div className="viz-warning-box critical">
                  ⚠️ KV cache at capacity - evictions will occur
                </div>
              )}
              {isNearCapacity && !isAtCapacity && (
                <div className="viz-warning-box warning">
                  ⚠️ KV cache near capacity ({kvSessions}/{maxKV})
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="viz-info-box">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>⚡ = KV cache hit (fast)</span>
            <span>🔄 = KV cache miss (requires prefill)</span>
          </div>
          <div>🔄⚠ = Eviction occurred (cache was full)</div>
        </div>
      </div>
    </div>
  );
}
