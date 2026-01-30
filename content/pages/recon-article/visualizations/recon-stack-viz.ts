/**
 * RECON Stack Architecture Visualization
 * Shows the five-layer stack with visual icons representing each layer
 */

export function initReconStack(): void {
  const container = document.getElementById('recon-stack-viz');
  if (!container) return;

  container.innerHTML = '';

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    width: 100%;
  `;

  // Create SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 800 700');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.display = 'block';

  const layers = [
    {
      letter: 'R',
      name: 'Routing',
      color: '#3498db',
      y: 50,
      height: 100,
    },
    {
      letter: 'E',
      name: 'Engine',
      color: '#2ecc71',
      y: 180,
      height: 100,
    },
    {
      letter: 'C',
      name: 'Cache',
      color: '#f39c12',
      y: 310,
      height: 100,
    },
    {
      letter: 'O',
      name: 'Orchestration',
      color: '#9b59b6',
      y: 440,
      height: 100,
    },
    {
      letter: 'N',
      name: 'Nodes',
      color: '#e74c3c',
      y: 570,
      height: 100,
    },
  ];

  const stackStartX = 250;
  const stackWidth = 400;

  // Draw "RECON" label on left with dotted lines
  layers.forEach((layer, idx) => {
    // Letter label
    const letterText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    letterText.setAttribute('x', '80');
    letterText.setAttribute('y', String(layer.y + layer.height / 2 + 10));
    letterText.setAttribute('text-anchor', 'middle');
    letterText.setAttribute('font-size', '36');
    letterText.setAttribute('font-weight', 'bold');
    letterText.setAttribute('fill', layer.color);
    letterText.textContent = layer.letter;
    svg.appendChild(letterText);

    // Dotted line from letter to box
    const dottedLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    dottedLine.setAttribute('x1', '110');
    dottedLine.setAttribute('y1', String(layer.y + layer.height / 2));
    dottedLine.setAttribute('x2', String(stackStartX - 10));
    dottedLine.setAttribute('y2', String(layer.y + layer.height / 2));
    dottedLine.setAttribute('stroke', layer.color);
    dottedLine.setAttribute('stroke-width', '2');
    dottedLine.setAttribute('stroke-dasharray', '5,5');
    dottedLine.setAttribute('opacity', '0.5');
    svg.appendChild(dottedLine);
  });

  // Draw stack layers (empty boxes)
  layers.forEach((layer, idx) => {
    // Layer name label (top left of box)
    const nameText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    nameText.setAttribute('x', String(stackStartX + 10));
    nameText.setAttribute('y', String(layer.y - 8));
    nameText.setAttribute('font-size', '16');
    nameText.setAttribute('font-weight', 'bold');
    nameText.setAttribute('fill', layer.color);
    nameText.textContent = layer.name;
    svg.appendChild(nameText);

    // Main layer box
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', String(stackStartX));
    rect.setAttribute('y', String(layer.y));
    rect.setAttribute('width', String(stackWidth));
    rect.setAttribute('height', String(layer.height));
    rect.setAttribute('fill', 'white');
    rect.setAttribute('stroke', layer.color);
    rect.setAttribute('stroke-width', '3');
    rect.setAttribute('rx', '8');
    svg.appendChild(rect);
  });

  // Define arrowhead marker
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
  marker.setAttribute('id', 'arrowhead');
  marker.setAttribute('markerWidth', '10');
  marker.setAttribute('markerHeight', '10');
  marker.setAttribute('refX', '5');
  marker.setAttribute('refY', '3');
  marker.setAttribute('orient', 'auto');
  
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('points', '0 0, 10 3, 0 6');
  polygon.setAttribute('fill', '#95a5a6');
  marker.appendChild(polygon);
  defs.appendChild(marker);
  svg.insertBefore(defs, svg.firstChild);

  // ROUTING (R): Circle representing router - centered with label as a group
  const routingCenterY = layers[0].y + layers[0].height / 2 - 5; // Shift up slightly for group centering
  
  const routerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  routerCircle.setAttribute('cx', String(stackStartX + stackWidth / 2));
  routerCircle.setAttribute('cy', String(routingCenterY));
  routerCircle.setAttribute('r', '30');
  routerCircle.setAttribute('fill', '#ecf0f1');
  routerCircle.setAttribute('stroke', layers[0].color);
  routerCircle.setAttribute('stroke-width', '3');
  svg.appendChild(routerCircle);

  // Add small connection points on router circle
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i;
    const pointX = stackStartX + stackWidth / 2 + Math.cos(angle) * 20;
    const pointY = routingCenterY + Math.sin(angle) * 20;
    
    const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    point.setAttribute('cx', String(pointX));
    point.setAttribute('cy', String(pointY));
    point.setAttribute('r', '3');
    point.setAttribute('fill', layers[0].color);
    svg.appendChild(point);
  }

  // "Smart Routing" label under circle
  const routingLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  routingLabel.setAttribute('x', String(stackStartX + stackWidth / 2));
  routingLabel.setAttribute('y', String(routingCenterY + 42));
  routingLabel.setAttribute('text-anchor', 'middle');
  routingLabel.setAttribute('font-size', '13');
  routingLabel.setAttribute('font-weight', '600');
  routingLabel.setAttribute('fill', layers[0].color);
  routingLabel.textContent = 'Smart Routing';
  svg.appendChild(routingLabel);

  // ENGINE (E): Multiple engine boxes
  const engineY = layers[1].y;
  const engineBoxWidth = 110;
  const engineGap = 15;
  const enginesStartX = stackStartX + (stackWidth - (3 * engineBoxWidth + 2 * engineGap)) / 2;
  const engineLabels = ['vLLM', 'TensorRT', 'SGLang'];

  for (let i = 0; i < 3; i++) {
    const engineX = enginesStartX + i * (engineBoxWidth + engineGap);
    
    const engineBox = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    engineBox.setAttribute('x', String(engineX));
    engineBox.setAttribute('y', String(engineY + 25));
    engineBox.setAttribute('width', String(engineBoxWidth));
    engineBox.setAttribute('height', '50');
    engineBox.setAttribute('fill', '#ecf0f1');
    engineBox.setAttribute('stroke', layers[1].color);
    engineBox.setAttribute('stroke-width', '2');
    engineBox.setAttribute('rx', '5');
    svg.appendChild(engineBox);

    // Engine label
    const engineLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    engineLabel.setAttribute('x', String(engineX + engineBoxWidth / 2));
    engineLabel.setAttribute('y', String(engineY + 55));
    engineLabel.setAttribute('text-anchor', 'middle');
    engineLabel.setAttribute('font-size', '12');
    engineLabel.setAttribute('font-weight', '600');
    engineLabel.setAttribute('fill', layers[1].color);
    engineLabel.textContent = engineLabels[i];
    svg.appendChild(engineLabel);
  }

  // CACHE (C): Pyramid of rectangles (hierarchical) - centered in box
  const cacheY = layers[2].y;
  const cacheCenterX = stackStartX + stackWidth / 2;
  const cacheLevels = [
    { width: 70, height: 18, y: 20, label: 'SRAM' },
    { width: 120, height: 18, y: 42, label: 'Memory' },
    { width: 170, height: 18, y: 64, label: 'Distributed Cache' },
  ];

  cacheLevels.forEach(level => {
    const cacheRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    cacheRect.setAttribute('x', String(cacheCenterX - level.width / 2));
    cacheRect.setAttribute('y', String(cacheY + level.y));
    cacheRect.setAttribute('width', String(level.width));
    cacheRect.setAttribute('height', String(level.height));
    cacheRect.setAttribute('fill', '#fef5e7');
    cacheRect.setAttribute('stroke', layers[2].color);
    cacheRect.setAttribute('stroke-width', '2');
    cacheRect.setAttribute('rx', '3');
    svg.appendChild(cacheRect);

    // Cache level label
    const cacheLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    cacheLabel.setAttribute('x', String(cacheCenterX));
    cacheLabel.setAttribute('y', String(cacheY + level.y + 13));
    cacheLabel.setAttribute('text-anchor', 'middle');
    cacheLabel.setAttribute('font-size', '11');
    cacheLabel.setAttribute('font-weight', '600');
    cacheLabel.setAttribute('fill', layers[2].color);
    cacheLabel.textContent = level.label;
    svg.appendChild(cacheLabel);
  });

  // ORCHESTRATION (O): Gears representing orchestration
  const orchY = layers[3].y;
  const orchCenterX = stackStartX + stackWidth / 2;
  
  // Add labels - positioned away from gears
  const k8sLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  k8sLabel.setAttribute('x', String(orchCenterX - 80));
  k8sLabel.setAttribute('y', String(orchY + 30));
  k8sLabel.setAttribute('text-anchor', 'end');
  k8sLabel.setAttribute('font-size', '12');
  k8sLabel.setAttribute('font-weight', '600');
  k8sLabel.setAttribute('fill', layers[3].color);
  k8sLabel.textContent = 'Kubernetes';
  svg.appendChild(k8sLabel);

  const rayLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  rayLabel.setAttribute('x', String(orchCenterX + 80));
  rayLabel.setAttribute('y', String(orchY + 75));
  rayLabel.setAttribute('text-anchor', 'start');
  rayLabel.setAttribute('font-size', '12');
  rayLabel.setAttribute('font-weight', '600');
  rayLabel.setAttribute('fill', layers[3].color);
  rayLabel.textContent = 'Ray';
  svg.appendChild(rayLabel);
  
  // Draw 3 interlocking gears (slightly bigger)
  const gearPositions = [
    { x: orchCenterX - 45, y: orchY + 50, r: 24 },
    { x: orchCenterX + 45, y: orchY + 50, r: 24 },
    { x: orchCenterX, y: orchY + 50, r: 20 },
  ];

  gearPositions.forEach((gear, idx) => {
    // Gear outer circle
    const gearCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    gearCircle.setAttribute('cx', String(gear.x));
    gearCircle.setAttribute('cy', String(gear.y));
    gearCircle.setAttribute('r', String(gear.r));
    gearCircle.setAttribute('fill', '#f4ecf7');
    gearCircle.setAttribute('stroke', layers[3].color);
    gearCircle.setAttribute('stroke-width', '2');
    svg.appendChild(gearCircle);

    // Gear teeth (8 teeth around the circle)
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const toothX = gear.x + Math.cos(angle) * gear.r;
      const toothY = gear.y + Math.sin(angle) * gear.r;
      
      const tooth = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      tooth.setAttribute('x', String(toothX - 2.5));
      tooth.setAttribute('y', String(toothY - 5));
      tooth.setAttribute('width', '5');
      tooth.setAttribute('height', '10');
      tooth.setAttribute('fill', layers[3].color);
      tooth.setAttribute('transform', `rotate(${(angle * 180) / Math.PI + 90}, ${toothX}, ${toothY})`);
      svg.appendChild(tooth);
    }

    // Inner circle (hole)
    const innerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    innerCircle.setAttribute('cx', String(gear.x));
    innerCircle.setAttribute('cy', String(gear.y));
    innerCircle.setAttribute('r', String(gear.r * 0.3));
    innerCircle.setAttribute('fill', 'white');
    innerCircle.setAttribute('stroke', layers[3].color);
    innerCircle.setAttribute('stroke-width', '1.5');
    svg.appendChild(innerCircle);
  });

  // NODES (N): Server farm - many rectangles in columns (wider than tall)
  const nodesY = layers[4].y;
  const serverWidth = 45;
  const serverHeight = 12;
  const serverGapX = 8;
  const serverGapY = 5;
  const cols = 7; // Reduced from 8
  const rows = 5;
  const farmWidth = cols * serverWidth + (cols - 1) * serverGapX;
  const farmStartX = stackStartX + (stackWidth - farmWidth) / 2;
  const farmHeight = rows * serverHeight + (rows - 1) * serverGapY;
  const farmStartY = nodesY + (100 - farmHeight) / 2; // Center vertically

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const serverX = farmStartX + col * (serverWidth + serverGapX);
      const serverY = farmStartY + row * (serverHeight + serverGapY);
      
      const server = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      server.setAttribute('x', String(serverX));
      server.setAttribute('y', String(serverY));
      server.setAttribute('width', String(serverWidth));
      server.setAttribute('height', String(serverHeight));
      server.setAttribute('fill', '#fadbd8');
      server.setAttribute('stroke', layers[4].color);
      server.setAttribute('stroke-width', '1.5');
      server.setAttribute('rx', '2');
      svg.appendChild(server);

      // Alternate GPU and Trainium by column
      const nodeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      nodeLabel.setAttribute('x', String(serverX + serverWidth / 2));
      nodeLabel.setAttribute('y', String(serverY + 9));
      nodeLabel.setAttribute('text-anchor', 'middle');
      nodeLabel.setAttribute('font-size', '8');
      nodeLabel.setAttribute('font-weight', '600');
      nodeLabel.setAttribute('fill', layers[4].color);
      nodeLabel.textContent = col % 2 === 0 ? 'GPU' : 'Trainium';
      svg.appendChild(nodeLabel);
    }
  }

  wrapper.appendChild(svg);
  container.appendChild(wrapper);
}
