import React from 'react';

function CompactCard({ gpu, gpuUtilization }) {
  const util = Math.min(gpu.activeRequests.length * gpuUtilization, 100);
  const idle = gpu.activeRequests.length === 0;
  const hasPrefill = gpu.activeRequests.some(r => r.status === 'PREFILLING');
  const label = gpu.role !== 'general' ? `${gpu.role === 'prefill' ? 'P' : 'D'}${gpu.id}` : `G${gpu.id}`;

  return (
    <div style={{
      background: 'white', border: '1px solid #e5e7eb', borderRadius: '4px',
      padding: '4px 6px', opacity: idle ? 0.4 : 1, transition: 'opacity 0.3s',
      overflow: 'hidden', minWidth: 0,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '10px', marginBottom: '2px' }}>
        <span style={{ fontWeight: 600, color: '#374151' }}>{label}</span>
        <span style={{ color: '#6b7280', fontSize: '9px' }}>{gpu.activeRequests.length}r</span>
      </div>
      <div style={{ fontSize: '12px', fontWeight: 700, color: '#7c3aed', marginBottom: '2px' }}>
        {Math.round(util)}%
      </div>
      <div style={{ height: '4px', background: '#f3f4f6', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          width: `${util}%`, height: '100%', borderRadius: '2px', transition: 'width 0.2s',
          background: util > 0 ? (hasPrefill ? '#10b981' : util >= 90 ? '#ef4444' : '#a855f7') : 'transparent',
        }} />
      </div>
    </div>
  );
}

function DetailedCard({ gpu, gpuUtilization }) {
  const util = Math.min(gpu.activeRequests.length * gpuUtilization, 100);
  const idle = gpu.activeRequests.length === 0;
  const hasPrefill = gpu.activeRequests.some(r => r.status === 'PREFILLING');
  const label = gpu.role !== 'general'
    ? `${gpu.role === 'prefill' ? 'Prefill' : 'Decode'} ${gpu.id}`
    : `GPU ${gpu.id}`;

  return (
    <div style={{
      background: 'white', border: '1px solid #e5e7eb', borderRadius: '6px',
      padding: '8px', opacity: idle ? 0.4 : 1, transition: 'opacity 0.3s',
      overflow: 'hidden', minWidth: 0,
    }}>
      {/* Row 1: name + util */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#374151', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#7c3aed', flexShrink: 0, marginLeft: '4px' }}>{Math.round(util)}%</span>
      </div>
      {/* Row 2: request count */}
      {!idle && (
        <div style={{ fontSize: '10px', color: '#6b7280', marginBottom: '4px' }}>
          {gpu.activeRequests.length} request{gpu.activeRequests.length > 1 ? 's' : ''}
        </div>
      )}
      {/* Progress bar */}
      <div style={{ height: '6px', background: '#f3f4f6', borderRadius: '3px', overflow: 'hidden', marginBottom: idle ? 0 : '4px' }}>
        <div style={{
          width: `${util}%`, height: '100%', borderRadius: '3px', transition: 'width 0.2s',
          background: util > 0 ? (hasPrefill ? '#10b981' : util >= 90 ? '#ef4444' : '#a855f7') : 'transparent',
        }} />
      </div>
      {/* Request details */}
      {!idle && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {gpu.activeRequests.slice(0, 3).map(req => {
            const pct = req.outputTokens > 0 ? Math.round((req.tokensGenerated / req.outputTokens) * 100) : 0;
            const isPre = req.status === 'PREFILLING';
            return (
              <div key={req.id} style={{ fontSize: '9px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ color: isPre ? '#3b82f6' : '#f59e0b', fontWeight: 600, width: '10px', flexShrink: 0 }}>
                  {isPre ? 'P' : 'D'}
                </span>
                <div style={{ flex: 1, height: '2px', background: '#e5e7eb', borderRadius: '1px', overflow: 'hidden', minWidth: 0 }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: isPre ? '#3b82f6' : '#f59e0b' }} />
                </div>
                <span style={{ color: '#9ca3af', flexShrink: 0, fontSize: '8px' }}>
                  {req.tokensGenerated}/{req.outputTokens}
                </span>
              </div>
            );
          })}
          {gpu.activeRequests.length > 3 && (
            <div style={{ fontSize: '8px', color: '#9ca3af' }}>+{gpu.activeRequests.length - 3} more</div>
          )}
        </div>
      )}
    </div>
  );
}

function GPUPool({ label, color, gpus, gpuUtilization, compact }) {
  const Card = compact ? CompactCard : DetailedCard;
  const minCard = compact ? '55px' : '90px';

  return (
    <div style={{ minWidth: 0 }}>
      <div style={{
        fontSize: '9px', fontWeight: 700, color, marginBottom: '3px',
        textTransform: 'uppercase', letterSpacing: '0.5px',
        borderBottom: `2px solid ${color}`, paddingBottom: '2px',
      }}>
        {label} ({gpus.length})
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${minCard}, 1fr))`,
        gap: compact ? '3px' : '5px',
      }}>
        {gpus.map(gpu => <Card key={gpu.id} gpu={gpu} gpuUtilization={gpuUtilization} />)}
      </div>
    </div>
  );
}

export default function GPUVisualization({ gpus, gpuUtilization }) {
  const hasRoles = gpus.some(g => g.role !== 'general');
  const compact = gpus.length > 8;

  if (hasRoles) {
    const prefillGPUs = gpus.filter(g => g.role === 'prefill');
    const decodeGPUs = gpus.filter(g => g.role === 'decode');
    const prefillFlex = Math.max(1, prefillGPUs.length);
    const decodeFlex = Math.max(1, decodeGPUs.length);

    return (
      <div className="viz-panel">
        <h2>GPU Cluster</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ flex: prefillFlex, minWidth: 0 }}>
            <GPUPool label="Prefill" color="#3b82f6" gpus={prefillGPUs} gpuUtilization={gpuUtilization} compact={compact} />
          </div>
          <div style={{ width: '1px', background: '#e5e7eb', flexShrink: 0 }} />
          <div style={{ flex: decodeFlex, minWidth: 0 }}>
            <GPUPool label="Decode" color="#f59e0b" gpus={decodeGPUs} gpuUtilization={gpuUtilization} compact={compact} />
          </div>
        </div>
      </div>
    );
  }

  const Card = compact ? CompactCard : DetailedCard;
  const minCard = compact ? '55px' : '90px';

  return (
    <div className="viz-panel">
      <h2>GPU Cluster</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${minCard}, 1fr))`,
        gap: compact ? '3px' : '5px',
      }}>
        {gpus.map(gpu => <Card key={gpu.id} gpu={gpu} gpuUtilization={gpuUtilization} />)}
      </div>
    </div>
  );
}
