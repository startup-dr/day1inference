import React from 'react';

export default function GPUVisualization({ gpus, gpuUtilization }) {
  // Compact grid view for >8 GPUs
  if (gpus.length > 8) {
    return (
      <div className="viz-panel">
        <h2>GPU Cluster</h2>
        <div className="viz-gpu-grid-compact">
          {gpus.map(gpu => {
            const utilization = gpu.blocksTotal > 0
              ? Math.min((gpu.blocksUsed / gpu.blocksTotal) * 100, 100)
              : 0;
            const hasPrefilling = gpu.activeRequests.some(r => r.status === 'PREFILLING');

            return (
              <div key={gpu.id} className="viz-gpu-compact">
                <div className="viz-gpu-compact-name">
                  {gpu.role !== 'general'
                    ? `${gpu.role === 'prefill' ? 'P' : 'D'}${gpu.id}`
                    : `GPU ${gpu.id}`}
                </div>
                <div className="viz-gpu-compact-stats">
                  <span className="viz-gpu-compact-util">{Math.round(utilization)}%</span>
                  <span className="viz-gpu-compact-reqs">{gpu.activeRequests.length} req</span>
                </div>
                <div className="viz-progress-compact">
                  <div
                    className={`viz-progress-bar ${
                      utilization > 0
                        ? hasPrefilling ? 'cache-hit' : utilization >= 90 ? 'high' : 'normal'
                        : ''
                    }`}
                    style={{ width: `${utilization}%` }}
                  />
                </div>
                <div className="viz-kv-compact">
                  {gpu.blocksUsed}/{gpu.blocksTotal} blk
                </div>
              </div>
            );
          })}
        </div>
        <div className="viz-info-box">
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '2px' }}></span>
              Prefilling
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#a855f7', borderRadius: '2px' }}></span>
              Decoding
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '2px' }}></span>
              High load
            </span>
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
        {gpus.map(gpu => {
          const kvPercent = gpu.blocksTotal > 0
            ? (gpu.blocksUsed / gpu.blocksTotal) * 100
            : 0;
          const isNearCapacity = kvPercent >= 80;
          const isAtCapacity = kvPercent >= 100;

          return (
            <div key={gpu.id} className="viz-gpu">
              <div className="viz-gpu-header">
                <div className="viz-gpu-header-left">
                  <span className="viz-gpu-name">
                    {gpu.role !== 'general'
                      ? `${gpu.role === 'prefill' ? 'Prefill' : 'Decode'} ${gpu.id}`
                      : `GPU ${gpu.id}`}
                  </span>
                  <span className={`viz-kv-badge ${isAtCapacity ? 'critical' : isNearCapacity ? 'warning' : 'normal'}`}>
                    {gpu.blocksUsed}/{gpu.blocksTotal} KV blocks
                  </span>
                </div>
                <div className="viz-gpu-stats">
                  {gpu.activeRequests.length > 0 ? (
                    <span className="viz-badge-success">
                      {gpu.activeRequests.length} req{gpu.activeRequests.length > 1 ? 's' : ''}
                    </span>
                  ) : (
                    <span className="viz-badge-idle">Idle</span>
                  )}
                  <span className="viz-gpu-util">{Math.round(kvPercent)}%</span>
                </div>
              </div>
              <div className="viz-progress">
                <div
                  className={`viz-progress-bar ${
                    kvPercent > 0
                      ? isAtCapacity ? 'high' : 'normal'
                      : ''
                  }`}
                  style={{ width: `${Math.min(kvPercent, 100)}%` }}
                />
              </div>

              {/* Active request details */}
              {gpu.activeRequests.length > 0 && (
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {gpu.activeRequests.slice(0, 5).map(req => {
                    const progress = req.outputTokens > 0
                      ? Math.round((req.tokensGenerated / req.outputTokens) * 100)
                      : 0;
                    const isPrefilling = req.status === 'PREFILLING';
                    return (
                      <div key={req.id} style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                          color: isPrefilling ? '#3b82f6' : '#f59e0b',
                          fontWeight: 'bold',
                          minWidth: '50px',
                        }}>
                          {isPrefilling ? 'prefill' : 'decode'}
                        </span>
                        <span style={{ color: '#6b7280', minWidth: '30px' }}>R{req.id}</span>
                        <div style={{
                          flex: 1, height: '4px', background: '#e5e7eb', borderRadius: '2px', overflow: 'hidden',
                        }}>
                          <div style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: isPrefilling ? '#3b82f6' : '#f59e0b',
                            borderRadius: '2px',
                            transition: 'width 0.15s',
                          }} />
                        </div>
                        <span style={{ color: '#9ca3af', minWidth: '48px', textAlign: 'right' }}>
                          {req.tokensGenerated}/{req.outputTokens}
                        </span>
                      </div>
                    );
                  })}
                  {gpu.activeRequests.length > 5 && (
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                      +{gpu.activeRequests.length - 5} more
                    </div>
                  )}
                </div>
              )}

              {isAtCapacity && (
                <div className="viz-warning-box critical">
                  KV cache at capacity - evictions will occur
                </div>
              )}
              {isNearCapacity && !isAtCapacity && (
                <div className="viz-warning-box warning">
                  KV cache near capacity ({gpu.blocksUsed}/{gpu.blocksTotal})
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="viz-info-box">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '2px' }}></span>
              Prefilling
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', background: '#f59e0b', borderRadius: '2px' }}></span>
              Decoding
            </span>
          </div>
          <div>KV blocks: per-GPU paged memory blocks for KV cache</div>
        </div>
      </div>
    </div>
  );
}
