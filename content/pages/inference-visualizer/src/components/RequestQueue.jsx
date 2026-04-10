import React, { useState } from 'react';

export default function RequestQueue({ waitingQueue, runningQueue, stepCount }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const newWaiting = waitingQueue.filter(r => !r.isContinuation).length;
  const contWaiting = waitingQueue.length - newWaiting;

  return (
    <div className="viz-panel">
      <div className="viz-panel-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div>
          <h2>Request Queue (step {stepCount})</h2>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            <span style={{ marginRight: '16px' }}>Waiting: {waitingQueue.length}</span>
            <span>Running: {runningQueue.length}</span>
          </div>
        </div>
        <button className="viz-collapse-btn">
          {isExpanded ? '▼' : '▶'}
        </button>
      </div>

      {isExpanded && (
        <div>
          {/* Waiting section */}
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#6b7280', marginBottom: '6px' }}>
              Waiting ({waitingQueue.length})
              {waitingQueue.length > 0 && (
                <span style={{ fontWeight: 'normal', marginLeft: '8px' }}>
                  New: {newWaiting} | Continuation: {contWaiting}
                </span>
              )}
            </div>
            <div className="viz-queue">
              {waitingQueue.length === 0 ? (
                <div className="viz-queue-empty">No waiting requests</div>
              ) : (
                waitingQueue.slice(0, 15).map(req => (
                  <div
                    key={req.id}
                    className={`viz-request ${req.isContinuation ? 'continuation' : 'new'}`}
                    title={`Request ${req.id} - Session ${req.sessionId} - ${req.contextLength} ctx tokens`}
                  >
                    <div className="viz-request-id">{req.id}</div>
                    <div className="viz-request-session">S{req.sessionId}</div>
                  </div>
                ))
              )}
              {waitingQueue.length > 15 && (
                <div className="viz-request" style={{ background: 'linear-gradient(135deg, #d1d5db, #9ca3af)', color: '#1f2937' }}>
                  +{waitingQueue.length - 15}
                </div>
              )}
            </div>
          </div>

          {/* Running section */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#6b7280', marginBottom: '6px' }}>
              Running ({runningQueue.length})
            </div>
            <div className="viz-queue">
              {runningQueue.length === 0 ? (
                <div className="viz-queue-empty">No running requests</div>
              ) : (
                runningQueue.slice(0, 15).map(req => {
                  const progress = req.outputTokens > 0
                    ? Math.round((req.tokensGenerated / req.outputTokens) * 100)
                    : 0;
                  const isPrefilling = req.status === 'PREFILLING';
                  return (
                    <div
                      key={req.id}
                      className="viz-request"
                      style={{
                        background: isPrefilling
                          ? 'linear-gradient(135deg, #3b82f6, #2563eb)'
                          : 'linear-gradient(135deg, #f59e0b, #d97706)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      title={`Request ${req.id} - GPU ${req.gpuId} - ${req.tokensGenerated}/${req.outputTokens} tokens (${req.status})`}
                    >
                      <div className="viz-request-id">{req.id}</div>
                      <div style={{ fontSize: '9px', opacity: 0.85 }}>
                        {progress}%
                      </div>
                    </div>
                  );
                })
              )}
              {runningQueue.length > 15 && (
                <div className="viz-request" style={{ background: 'linear-gradient(135deg, #d1d5db, #9ca3af)', color: '#1f2937' }}>
                  +{runningQueue.length - 15}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
