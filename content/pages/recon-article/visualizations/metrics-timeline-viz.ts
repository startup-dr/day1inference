/**
 * Inference Performance Metrics Timeline
 * Interactive visualization showing TTFT, TPOT, E2EL, and throughput across multiple requests
 */

interface Request {
  id: number;
  arrivalTime: number; // ms
  ttft: number; // ms - time to first token
  numTokens: number;
  tpot: number; // ms - time per output token
  color: string;
}

export function initMetricsTimeline(): void {
  const container = document.getElementById('metrics-timeline-viz');
  if (!container) return;

  container.innerHTML = '';

  // Generate 5 sample requests with varying characteristics
  const requests: Request[] = [
    { id: 1, arrivalTime: 0, ttft: 200, numTokens: 50, tpot: 40, color: '#3498db' },
    { id: 2, arrivalTime: 500, ttft: 300, numTokens: 30, tpot: 45, color: '#2ecc71' },
    { id: 3, arrivalTime: 1000, ttft: 250, numTokens: 40, tpot: 42, color: '#e74c3c' },
    { id: 4, arrivalTime: 1800, ttft: 280, numTokens: 35, tpot: 43, color: '#f39c12' },
    { id: 5, arrivalTime: 2500, ttft: 220, numTokens: 45, tpot: 41, color: '#9b59b6' },
  ];

  // Calculate total timeline duration
  const maxEndTime = Math.max(
    ...requests.map(r => r.arrivalTime + r.ttft + r.numTokens * r.tpot)
  );
  const timelineDuration = maxEndTime + 500; // Add some padding

  // Create container
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    width: 100%;
    border-radius: 8px;
    padding: 20px;
  `;

  // Add legend/key at the top
  const legend = document.createElement('div');
  legend.style.cssText = `
    display: flex;
    gap: 25px;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: white;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #666;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  `;

  const legendItems = [
    { label: 'Prefill (TTFT)', color: '#3498db', type: 'rect' },
    { label: 'Decode Tokens (TPOT)', color: '#2ecc71', type: 'circle' },
    { label: 'End-to-End Latency', color: '#e74c3c', type: 'bracket' },
  ];

  legendItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.style.cssText = 'display: flex; align-items: center; gap: 8px;';

    if (item.type === 'rect') {
      const symbol = document.createElement('div');
      symbol.style.cssText = `
        width: 20px;
        height: 12px;
        background: ${item.color};
        opacity: 0.4;
        border-radius: 2px;
      `;
      itemDiv.appendChild(symbol);
    } else if (item.type === 'circle') {
      const symbol = document.createElement('div');
      symbol.style.cssText = `
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${item.color};
      `;
      itemDiv.appendChild(symbol);
    } else if (item.type === 'bracket') {
      // Create SVG bracket symbol
      const bracketSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      bracketSvg.setAttribute('width', '24');
      bracketSvg.setAttribute('height', '12');
      bracketSvg.setAttribute('viewBox', '0 0 24 12');
      
      const bracketPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      bracketPath.setAttribute('d', 'M 2 2 L 2 6 M 2 4 L 22 4 M 22 2 L 22 6');
      bracketPath.setAttribute('stroke', item.color);
      bracketPath.setAttribute('stroke-width', '1.5');
      bracketPath.setAttribute('fill', 'none');
      bracketPath.setAttribute('opacity', '0.6');
      
      bracketSvg.appendChild(bracketPath);
      itemDiv.appendChild(bracketSvg);
    }

    const label = document.createElement('span');
    label.textContent = item.label;

    itemDiv.appendChild(label);
    legend.appendChild(itemDiv);
  });

  wrapper.appendChild(legend);

  // Create SVG for timeline
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 1000 400');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.display = 'block';
  svg.style.marginBottom = '20px';

  const timeScale = 900 / timelineDuration; // pixels per ms
  const leftMargin = 50;
  const rowHeight = 50;
  const topMargin = 30;

  let currentTime = 0;
  let isPlaying = false;
  let animationId: number | null = null;

  // Draw time axis
  const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisLine.setAttribute('x1', String(leftMargin));
  axisLine.setAttribute('y1', String(topMargin + requests.length * rowHeight + 10));
  axisLine.setAttribute('x2', String(leftMargin + 900));
  axisLine.setAttribute('y2', String(topMargin + requests.length * rowHeight + 10));
  axisLine.setAttribute('stroke', '#ccc');
  axisLine.setAttribute('stroke-width', '2');
  svg.appendChild(axisLine);

  // Draw time markers
  for (let t = 0; t <= timelineDuration; t += 1000) {
    const x = leftMargin + t * timeScale;
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    marker.setAttribute('x1', String(x));
    marker.setAttribute('y1', String(topMargin + requests.length * rowHeight + 10));
    marker.setAttribute('x2', String(x));
    marker.setAttribute('y2', String(topMargin + requests.length * rowHeight + 15));
    marker.setAttribute('stroke', '#999');
    marker.setAttribute('stroke-width', '1');
    svg.appendChild(marker);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', String(x));
    label.setAttribute('y', String(topMargin + requests.length * rowHeight + 30));
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('font-size', '12');
    label.setAttribute('fill', '#666');
    label.textContent = `${(t / 1000).toFixed(1)}s`;
    svg.appendChild(label);
  }

  // Draw requests
  requests.forEach((req, idx) => {
    const y = topMargin + idx * rowHeight;
    
    // Request label
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', '10');
    label.setAttribute('y', String(y + 20));
    label.setAttribute('font-size', '14');
    label.setAttribute('font-weight', 'bold');
    label.setAttribute('fill', req.color);
    label.textContent = `R${req.id}`;
    svg.appendChild(label);

    // Arrival marker (vertical line)
    const arrivalX = leftMargin + req.arrivalTime * timeScale;
    const arrivalMarker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrivalMarker.setAttribute('x1', String(arrivalX));
    arrivalMarker.setAttribute('y1', String(y + 5));
    arrivalMarker.setAttribute('x2', String(arrivalX));
    arrivalMarker.setAttribute('y2', String(y + 35));
    arrivalMarker.setAttribute('stroke', req.color);
    arrivalMarker.setAttribute('stroke-width', '2');
    arrivalMarker.setAttribute('stroke-dasharray', '3,3');
    arrivalMarker.setAttribute('opacity', '0.5');
    svg.appendChild(arrivalMarker);

    // TTFT bar (waiting period)
    const ttftBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    ttftBar.setAttribute('x', String(arrivalX));
    ttftBar.setAttribute('y', String(y + 10));
    ttftBar.setAttribute('width', String(req.ttft * timeScale));
    ttftBar.setAttribute('height', '20');
    ttftBar.setAttribute('fill', req.color);
    ttftBar.setAttribute('opacity', '0.3');
    ttftBar.setAttribute('data-request', String(req.id));
    ttftBar.setAttribute('data-phase', 'ttft');
    svg.appendChild(ttftBar);

    // Token generation (TPOT visualization)
    const firstTokenX = arrivalX + req.ttft * timeScale;
    for (let i = 0; i < req.numTokens; i++) {
      const tokenX = firstTokenX + i * req.tpot * timeScale;
      const token = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      token.setAttribute('cx', String(tokenX));
      token.setAttribute('cy', String(y + 20));
      token.setAttribute('r', '3');
      token.setAttribute('fill', req.color);
      token.setAttribute('data-request', String(req.id));
      token.setAttribute('data-token', String(i));
      svg.appendChild(token);
    }

    // E2EL bracket
    const e2elStart = arrivalX;
    const e2elEnd = firstTokenX + (req.numTokens - 1) * req.tpot * timeScale;
    const bracketY = y + 35;
    
    const bracket = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const bracketPath = `M ${e2elStart} ${bracketY} L ${e2elStart} ${bracketY + 5} M ${e2elStart} ${bracketY + 2.5} L ${e2elEnd} ${bracketY + 2.5} M ${e2elEnd} ${bracketY} L ${e2elEnd} ${bracketY + 5}`;
    bracket.setAttribute('d', bracketPath);
    bracket.setAttribute('stroke', req.color);
    bracket.setAttribute('stroke-width', '1.5');
    bracket.setAttribute('fill', 'none');
    bracket.setAttribute('opacity', '0.6');
    svg.appendChild(bracket);
  });

  // Current time indicator (playhead)
  const playhead = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  playhead.setAttribute('x1', String(leftMargin));
  playhead.setAttribute('y1', '0');
  playhead.setAttribute('x2', String(leftMargin));
  playhead.setAttribute('y2', String(topMargin + requests.length * rowHeight + 10));
  playhead.setAttribute('stroke', '#e74c3c');
  playhead.setAttribute('stroke-width', '3');
  playhead.setAttribute('opacity', '0.8');
  svg.appendChild(playhead);

  wrapper.appendChild(svg);

  // Metrics display panel
  const metricsPanel = document.createElement('div');
  metricsPanel.style.cssText = `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 20px;
  `;

  const metricBoxes = {
    ttft: createMetricBox('Avg TTFT', '0 ms', '#3498db'),
    tpot: createMetricBox('Avg TPOT', '0 ms', '#2ecc71'),
    e2el: createMetricBox('Avg E2EL', '0 ms', '#e74c3c'),
    throughput: createMetricBox('Throughput', '0 tok/s', '#f39c12'),
  };

  metricsPanel.appendChild(metricBoxes.ttft.element);
  metricsPanel.appendChild(metricBoxes.tpot.element);
  metricsPanel.appendChild(metricBoxes.e2el.element);
  metricsPanel.appendChild(metricBoxes.throughput.element);
  wrapper.appendChild(metricsPanel);

  // Slider for timeline control
  const sliderContainer = document.createElement('div');
  sliderContainer.style.cssText = 'margin-bottom: 15px;';
  
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = '0';
  slider.max = String(timelineDuration);
  slider.value = '0';
  slider.style.cssText = 'width: 100%; cursor: pointer;';
  
  const timeDisplay = document.createElement('div');
  timeDisplay.style.cssText = 'text-align: center; font-size: 14px; color: #666; margin-top: 5px;';
  timeDisplay.textContent = '0.00s';

  sliderContainer.appendChild(slider);
  sliderContainer.appendChild(timeDisplay);
  wrapper.appendChild(sliderContainer);

  // Control buttons
  const controls = document.createElement('div');
  controls.style.cssText = 'display: flex; gap: 10px; justify-content: center;';
  
  const playButton = document.createElement('button');
  playButton.textContent = 'Play';
  playButton.style.cssText = `
    padding: 10px 20px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  `;
  
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.style.cssText = `
    padding: 10px 20px;
    background: #95a5a6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  `;

  controls.appendChild(playButton);
  controls.appendChild(resetButton);
  wrapper.appendChild(controls);

  container.appendChild(wrapper);

  // Update metrics based on current time
  function updateMetrics() {
    const activeRequests = requests.filter(r => 
      currentTime >= r.arrivalTime && 
      currentTime <= r.arrivalTime + r.ttft + r.numTokens * r.tpot
    );

    const completedRequests = requests.filter(r => 
      currentTime >= r.arrivalTime + r.ttft + r.numTokens * r.tpot
    );

    // Calculate average TTFT for started requests
    const startedRequests = requests.filter(r => currentTime >= r.arrivalTime);
    const avgTTFT = startedRequests.length > 0
      ? startedRequests.reduce((sum, r) => sum + r.ttft, 0) / startedRequests.length
      : 0;

    // Calculate average TPOT for any request that has started generating (not just actively generating)
    const generatedRequests = requests.filter(r => currentTime >= r.arrivalTime + r.ttft);
    const avgTPOT = generatedRequests.length > 0
      ? generatedRequests.reduce((sum, r) => sum + r.tpot, 0) / generatedRequests.length
      : 0;

    // Calculate average E2EL for completed requests
    const avgE2EL = completedRequests.length > 0
      ? completedRequests.reduce((sum, r) => sum + r.ttft + r.numTokens * r.tpot, 0) / completedRequests.length
      : 0;

    // Calculate throughput (total tokens generated so far / time elapsed)
    let totalTokensGenerated = 0;
    requests.forEach(r => {
      if (currentTime >= r.arrivalTime + r.ttft) {
        const timeSinceFirstToken = currentTime - (r.arrivalTime + r.ttft);
        const tokensGenerated = Math.min(
          Math.floor(timeSinceFirstToken / r.tpot) + 1,
          r.numTokens
        );
        totalTokensGenerated += tokensGenerated;
      }
    });
    const throughput = currentTime > 0 ? (totalTokensGenerated / (currentTime / 1000)) : 0;

    // Update display
    metricBoxes.ttft.value.textContent = avgTTFT > 0 ? `${avgTTFT.toFixed(0)} ms` : '—';
    metricBoxes.tpot.value.textContent = avgTPOT > 0 ? `${avgTPOT.toFixed(0)} ms` : '—';
    metricBoxes.e2el.value.textContent = avgE2EL > 0 ? `${(avgE2EL / 1000).toFixed(2)} s` : '—';
    metricBoxes.throughput.value.textContent = throughput > 0 ? `${throughput.toFixed(1)} tok/s` : '—';

    // Update playhead position
    const playheadX = leftMargin + currentTime * timeScale;
    playhead.setAttribute('x1', String(playheadX));
    playhead.setAttribute('x2', String(playheadX));

    // Update time display
    timeDisplay.textContent = `${(currentTime / 1000).toFixed(2)}s`;
    slider.value = String(currentTime);
  }

  // Animation loop
  function animate() {
    if (!isPlaying) return;
    
    currentTime += 16; // ~60fps
    if (currentTime > timelineDuration) {
      currentTime = 0; // Loop back to start
    }
    
    updateMetrics();
    
    if (isPlaying) {
      animationId = requestAnimationFrame(animate);
    }
  }

  // Event listeners
  playButton.addEventListener('click', () => {
    if (isPlaying) {
      isPlaying = false;
      playButton.textContent = 'Play';
      if (animationId) cancelAnimationFrame(animationId);
    } else {
      if (currentTime >= timelineDuration) {
        currentTime = 0;
      }
      isPlaying = true;
      playButton.textContent = 'Pause';
      animate();
    }
  });

  resetButton.addEventListener('click', () => {
    isPlaying = false;
    playButton.textContent = 'Play';
    if (animationId) cancelAnimationFrame(animationId);
    currentTime = 0;
    updateMetrics();
  });

  slider.addEventListener('input', (e) => {
    isPlaying = false;
    playButton.textContent = 'Play';
    if (animationId) cancelAnimationFrame(animationId);
    currentTime = Number((e.target as HTMLInputElement).value);
    updateMetrics();
  });

  // Initial update
  updateMetrics();
}

function createMetricBox(label: string, initialValue: string, color: string) {
  const box = document.createElement('div');
  box.style.cssText = `
    padding: 15px;
    background: white;
    border-left: 4px solid ${color};
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;

  const labelEl = document.createElement('div');
  labelEl.style.cssText = 'font-size: 12px; color: #666; margin-bottom: 5px; font-weight: 500;';
  labelEl.textContent = label;

  const valueEl = document.createElement('div');
  valueEl.style.cssText = `font-size: 24px; color: ${color}; font-weight: bold;`;
  valueEl.textContent = initialValue;

  box.appendChild(labelEl);
  box.appendChild(valueEl);

  return { element: box, value: valueEl };
}
