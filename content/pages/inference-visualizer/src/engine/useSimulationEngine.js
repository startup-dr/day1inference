import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that encapsulates all GPU inference simulation logic
 * Separates simulation engine from UI concerns
 */
export function useSimulationEngine({
  // Environment config
  requestRate,
  continuationProbability,
  contextLength,
  gpuUtilization,
  
  // Routing config
  kvCacheAware,
  
  // Engine config
  continuousBatching,
  pagedAttention,
  
  // Compute config
  numGPUs,
  gpuType,
  
  // Control
  isRunning,
  slowMode,
  autoLoadTest,
}) {
  // ============================================================================
  // STATE
  // ============================================================================
  const [gpuStates, setGpuStates] = useState([]);
  const [requestQueue, setRequestQueue] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [totalRequests, setTotalRequests] = useState(0);
  const [cacheHits, setCacheHits] = useState(0);
  const [cacheMisses, setCacheMisses] = useState(0);
  const [cacheEvictions, setCacheEvictions] = useState(0);
  const [maxSustainableRate, setMaxSustainableRate] = useState(null);
  
  // ============================================================================
  // REFS (for access in intervals without re-triggering effects)
  // ============================================================================
  const currentGPUIndex = useRef(0);
  const requestId = useRef(0);
  const sessionId = useRef(0);
  const completedInLastPeriod = useRef(0);
  const gpuStatesRef = useRef([]);
  const queueSizeRef = useRef(0);
  const cacheHitsRef = useRef(0);
  const cacheMissesRef = useRef(0);
  
  const activeSessions = useRef(new Map());
  const sessionLastActivity = useRef(new Map());
  
  // Running averages for smoother metrics (5 second window)
  const completedHistory = useRef([]);
  const latencyHistory = useRef([]);
  const gpuLoadHistory = useRef([]);
  
  // Auto-load test refs
  const queueHistory = useRef([]);
  const autoLoadRateRef = useRef(1);
  const lastAdjustmentTime = useRef(Date.now());
  
  // ============================================================================
  // HELPERS
  // ============================================================================
  
  /**
   * Calculate maximum KV cache sessions per GPU based on hardware and paged attention
   */
  const calculateMaxKVSessions = (gpuType, hasPagedAttention) => {
    const gpuMemory = {
      'a100': 80,  // 80 GB
      'h100': 80,  // 80 GB
      'l40s': 48,  // 48 GB
      'a10g': 24   // 24 GB
    };
    
    const totalMemory = gpuMemory[gpuType] || 80;
    const kvBudget = totalMemory * 0.5; // 50% of GPU memory for KV cache
    
    // Without paged attention: 1 session per GB (memory fragmentation)
    // With paged attention: 1000 sessions per GB (efficient block-based memory)
    const sessionsPerGB = hasPagedAttention ? 1000 : 1;
    
    return Math.floor(kvBudget * sessionsPerGB);
  };
  
  const maxKVSessionsPerGPU = calculateMaxKVSessions(gpuType, pagedAttention);
  const speedMultiplier = slowMode ? 10 : 1;
  
  // ============================================================================
  // EFFECTS
  // ============================================================================
  
  // Sync refs with state
  useEffect(() => {
    gpuStatesRef.current = gpuStates;
  }, [gpuStates]);
  
  useEffect(() => {
    queueSizeRef.current = requestQueue.length;
  }, [requestQueue.length]);
  
  useEffect(() => {
    cacheHitsRef.current = cacheHits;
    cacheMissesRef.current = cacheMisses;
  }, [cacheHits, cacheMisses]);
  
  // Initialize GPU states when config changes
  useEffect(() => {
    const initialStates = Array(numGPUs).fill(null).map((_, i) => ({
      id: i,
      activeRequests: [],
      kvCacheSessions: new Map(),  // Map<sessionId, slotsUsed>
      maxKVSessions: maxKVSessionsPerGPU,
    }));
    setGpuStates(initialStates);
    gpuStatesRef.current = initialStates;
    currentGPUIndex.current = 0;
  }, [numGPUs, maxKVSessionsPerGPU, pagedAttention, gpuType]);
  
  // Session expiration - clean up old sessions from KV cache
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      const now = Date.now();
      const expireTime = 30000 * speedMultiplier;
      
      const expiredSessions = [];
      sessionLastActivity.current.forEach((lastActivity, sessId) => {
        if (now - lastActivity > expireTime) {
          expiredSessions.push(sessId);
        }
      });
      
      expiredSessions.forEach(sessId => {
        activeSessions.current.delete(sessId);
        sessionLastActivity.current.delete(sessId);
        
        setGpuStates(prev => prev.map(gpu => {
          const newKVSessions = new Map(gpu.kvCacheSessions);
          newKVSessions.delete(sessId);
          return {
            ...gpu,
            kvCacheSessions: newKVSessions
          };
        }));
      });
    }, 5000 * speedMultiplier);
    
    return () => clearInterval(interval);
  }, [isRunning, speedMultiplier]);
  
  // Request generation
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      const reqId = requestId.current++;
      setTotalRequests(prev => prev + 1);
      
      const isContinuation = Math.random() * 100 < continuationProbability;
      
      let sessId;
      
      if (isContinuation && activeSessions.current.size > 0) {
        const sessions = Array.from(activeSessions.current.keys());
        sessId = sessions[Math.floor(Math.random() * sessions.length)];
        isSessionContinuation = true;
      } else {
        sessId = sessionId.current++;
      }
      
      setRequestQueue(prev => [...prev, {
        id: reqId,
        sessionId: sessId,
        isContinuation: isSessionContinuation,
        timestamp: Date.now(),
        contextLength: contextLength
      }]);
    }, (1000 / requestRate) * speedMultiplier);
    
    return () => clearInterval(interval);
  }, [isRunning, requestRate, continuationProbability, contextLength, speedMultiplier]);
  
  // Request processing - assign requests from queue to GPUs
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      const now = Date.now();
      
      // STEP 1: Complete any requests that have finished
      setGpuStates(prevStates => {
        let completedCount = 0;
        const updated = prevStates.map(gpu => {
          const remaining = gpu.activeRequests.filter(req => {
            if (now >= req.completionTime) {
              completedCount++;
              return false;
            }
            return true;
          });
          
          return {
            ...gpu,
            activeRequests: remaining,
            kvCacheSessions: gpu.kvCacheSessions
          };
        });
        
        completedInLastPeriod.current += completedCount;
        return updated;
      });
      
      // STEP 2: Assign new requests from queue to available GPUs
      setRequestQueue(prev => {
        if (prev.length === 0) return prev;
        
        const canBatch = continuousBatching;
        const assignedRequests = [];
        const tempReqCounts = gpuStatesRef.current.map(gpu => gpu.activeRequests.length);
        
        for (let i = 0; i < prev.length; i++) {
          const request = prev[i];
          const { sessionId: sessId, isContinuation, contextLength } = request;
          let gpuIndex = null;
          let hasKVCache = false;
          
          const slotsNeeded = Math.ceil(contextLength / 1000);
          
          // Find available GPUs
          const availableGPUs = [];
          for (let idx = 0; idx < numGPUs; idx++) {
            const gpu = gpuStatesRef.current[idx];
            const load = (tempReqCounts[idx] + 1) * gpuUtilization;
            const hasComputeCapacity = canBatch ? load <= 100 : tempReqCounts[idx] === 0;
            
            const currentKVUsage = Array.from(gpu.kvCacheSessions.values())
              .reduce((sum, slots) => sum + slots, 0);
            const hasKVCapacity = gpu.kvCacheSessions.has(sessId) || 
              (currentKVUsage + slotsNeeded) <= gpu.maxKVSessions;
            
            if (hasComputeCapacity && hasKVCapacity) {
              availableGPUs.push(idx);
            }
          }
          
          if (availableGPUs.length === 0) break;
          
          // KV cache aware routing
          if (kvCacheAware && isContinuation && availableGPUs.length > 0) {
            for (const idx of availableGPUs) {
              if (gpuStatesRef.current[idx].kvCacheSessions.has(sessId)) {
                gpuIndex = idx;
                hasKVCache = true;
                break;
              }
            }
          }
          
          // Fallback to round-robin
          if (gpuIndex === null) {
            for (let attempts = 0; attempts < numGPUs; attempts++) {
              const idx = (currentGPUIndex.current + attempts) % numGPUs;
              
              if (availableGPUs.includes(idx)) {
                gpuIndex = idx;
                hasKVCache = false;
                currentGPUIndex.current = (idx + 1) % numGPUs;
                break;
              }
            }
            
            if (gpuIndex === null) {
              gpuIndex = availableGPUs[0];
              currentGPUIndex.current = (availableGPUs[0] + 1) % numGPUs;
            }
          }
          
          tempReqCounts[gpuIndex] += 1;
          
          // Track cache statistics
          if (hasKVCache) {
            setCacheHits(prev => prev + 1);
          } else if (isContinuation) {
            setCacheMisses(prev => prev + 1);
          }
          
          assignedRequests.push({ request, gpuIndex, hasKVCache });
          
          if (!canBatch) break;
        }
        
        // Apply assignments
        if (assignedRequests.length > 0) {
          const newGpuStates = gpuStatesRef.current.map(gpu => ({
            ...gpu,
            activeRequests: [...gpu.activeRequests],
            kvCacheSessions: new Map(gpu.kvCacheSessions)
          }));
          
          assignedRequests.forEach(({ request, gpuIndex, hasKVCache }) => {
            const gpu = newGpuStates[gpuIndex];
            
            const slotsNeeded = Math.ceil(request.contextLength / 1000);
            const latency = hasKVCache 
              ? 50 * speedMultiplier
              : (100 * slotsNeeded) * speedMultiplier;
            const completionTime = now + latency;
            
            if (!gpu.kvCacheSessions.has(request.sessionId)) {
              gpu.kvCacheSessions.set(request.sessionId, slotsNeeded);
            }
            
            gpu.activeRequests.push({ 
              ...request, 
              latency: latency / speedMultiplier, 
              hasKVCache,
              completionTime
            });
            
            activeSessions.current.set(request.sessionId, gpuIndex);
            sessionLastActivity.current.set(request.sessionId, Date.now());
          });
          
          gpuStatesRef.current = newGpuStates;
          setGpuStates(newGpuStates);
        }
        
        const assignedIds = new Set(assignedRequests.map(a => a.request.id));
        return prev.filter(req => !assignedIds.has(req.id));
      });
    }, 50 * speedMultiplier);
    
    return () => clearInterval(interval);
  }, [isRunning, gpuUtilization, continuousBatching, numGPUs, speedMultiplier, 
      kvCacheAware, contextLength]);
  
  // Metrics calculation with 5-second running averages
  useEffect(() => {
    if (!isRunning) return;
    
    const interval = setInterval(() => {
      const timestamp = Date.now();
      const currentGpuStates = gpuStatesRef.current;
      
      // Calculate instantaneous values
      const instantLatency = currentGpuStates.reduce((sum, gpu) => {
        const gpuAvg = gpu.activeRequests.reduce((s, r) => s + (r.latency || 0), 0) / 
          (gpu.activeRequests.length || 1);
        return sum + gpuAvg;
      }, 0) / (currentGpuStates.length || 1);
      
      const instantThroughput = completedInLastPeriod.current;
      completedInLastPeriod.current = 0;
      
      const instantGPULoad = currentGpuStates.reduce((sum, gpu) => {
        return sum + (gpu.activeRequests.length * gpuUtilization);
      }, 0) / currentGpuStates.length;
      
      // Add to history (keep 5 data points = 5 seconds)
      completedHistory.current.push(instantThroughput);
      if (completedHistory.current.length > 5) completedHistory.current.shift();
      
      latencyHistory.current.push(instantLatency);
      if (latencyHistory.current.length > 5) latencyHistory.current.shift();
      
      gpuLoadHistory.current.push(instantGPULoad);
      if (gpuLoadHistory.current.length > 5) gpuLoadHistory.current.shift();
      
      // Calculate 5-second averages
      const avgThroughput = completedHistory.current.reduce((a, b) => a + b, 0) / 
        completedHistory.current.length;
      const avgLatency = latencyHistory.current.reduce((a, b) => a + b, 0) / 
        latencyHistory.current.length;
      const avgGPULoad = gpuLoadHistory.current.reduce((a, b) => a + b, 0) / 
        gpuLoadHistory.current.length;
      
      const totalCacheRequests = cacheHitsRef.current + cacheMissesRef.current;
      const cacheHitRate = totalCacheRequests > 0 
        ? (cacheHitsRef.current / totalCacheRequests) * 100 
        : 0;
      
      setMetrics(prev => [...prev, {
        timestamp,
        latency: avgLatency || 0,
        throughput: avgThroughput || 0,
        queueSize: queueSizeRef.current,
        gpuUtilization: avgGPULoad || 0,
        cacheHitRate: cacheHitRate || 0
      }].slice(-100));
    }, 1000 * speedMultiplier);
    
    return () => clearInterval(interval);
  }, [isRunning, speedMultiplier, gpuUtilization]);
  
  // Auto-load test: Find max sustainable request rate
  useEffect(() => {
    if (!isRunning || !autoLoadTest) return;
    
    const interval = setInterval(() => {
      const now = Date.now();
      const currentQueue = queueSizeRef.current;
      
      queueHistory.current.push(currentQueue);
      if (queueHistory.current.length > 10) {
        queueHistory.current.shift();
      }
      
      if (now - lastAdjustmentTime.current < 1000 * speedMultiplier) return;
      
      if (queueHistory.current.length >= 3) {
        const recent = queueHistory.current.slice(-3);
        const avgQueue = recent.reduce((a, b) => a + b, 0) / recent.length;
        const queueTrend = recent[recent.length - 1] - recent[0];
        
        if (avgQueue < 5 && Math.abs(queueTrend) <= 2) {
          autoLoadRateRef.current = Math.min(autoLoadRateRef.current * 1.25, 100);
          lastAdjustmentTime.current = now;
        } else if (queueTrend > 2 || avgQueue > 8) {
          autoLoadRateRef.current = autoLoadRateRef.current * 0.9;
          setMaxSustainableRate(Math.round(autoLoadRateRef.current));
          lastAdjustmentTime.current = now;
        }
      }
    }, 500 * speedMultiplier);
    
    return () => clearInterval(interval);
  }, [isRunning, autoLoadTest, speedMultiplier]);
  
  // ============================================================================
  // PUBLIC API
  // ============================================================================
  
  const reset = () => {
    queueHistory.current = [];
    autoLoadRateRef.current = 1;
    lastAdjustmentTime.current = Date.now();
    setMaxSustainableRate(null);
    
    // Clear running average histories
    completedHistory.current = [];
    latencyHistory.current = [];
    gpuLoadHistory.current = [];
    
    setRequestQueue([]);
    setMetrics([]);
    setTotalRequests(0);
    setCacheHits(0);
    setCacheMisses(0);
    setCacheEvictions(0);
    requestId.current = 0;
    sessionId.current = 0;
    completedInLastPeriod.current = 0;
    cacheHitsRef.current = 0;
    cacheMissesRef.current = 0;
    activeSessions.current.clear();
    sessionLastActivity.current.clear();
    
    const initialStates = Array(numGPUs).fill(null).map((_, i) => ({
      id: i,
      activeRequests: [],
      kvCacheSessions: new Map(),
      maxKVSessions: maxKVSessionsPerGPU,
    }));
    setGpuStates(initialStates);
    gpuStatesRef.current = initialStates;
  };
  
  return {
    // State
    gpuStates,
    requestQueue,
    metrics,
    totalRequests,
    cacheHits,
    cacheMisses,
    cacheEvictions,
    maxSustainableRate,
    
    // Computed
    maxKVSessionsPerGPU,
    currentAutoLoadRate: autoLoadRateRef.current,
    
    // Actions
    reset,
  };
}

      let isSessionContinuation = false;
