/**
 * Goodput Tradeoff Slider Visualization
 * Shows throughput-latency tradeoff with acceptable operating regions for different use cases
 */

interface UseCase {
  name: string;
  description: string;
  // Center point on the throughput-latency slider (0 = pure throughput, 1 = pure latency)
  targetPoint: number;
  // Base tolerance range around the target point
  baseTolerance: number;
  color: string;
}

export function initGoodputTriangle(): void {
  const container = document.getElementById('goodput-triangle-viz');
  if (!container) return;

  container.innerHTML = '';

  const useCases: UseCase[] = [
    {
      name: 'Summarization',
      description: 'Batch processing, overnight jobs',
      targetPoint: 0.2, // Favor throughput heavily
      baseTolerance: 0.15,
      color: '#e74c3c'
    },
    {
      name: 'Chatbot',
      description: 'Interactive conversations',
      targetPoint: 0.5, // Balanced
      baseTolerance: 0.12,
      color: '#3498db'
    },
    {
      name: 'Code Completion',
      description: 'Real-time suggestions',
      targetPoint: 0.8, // Favor latency heavily
      baseTolerance: 0.10,
      color: '#2ecc71'
    },
  ];

  let selectedUseCase: UseCase = useCases[1]; // Default to chatbot

  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    width: 100%;
    border-radius: 8px;
    padding: 30px 20px;
  `;

  // Create main tradeoff slider visualization
  const sliderViz = document.createElement('div');
  sliderViz.style.cssText = 'margin-bottom: 40px;';

  // SVG for the slider
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 800 200');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.display = 'block';

  const sliderY = 100;
  const sliderStartX = 100;
  const sliderEndX = 700;
  const sliderLength = sliderEndX - sliderStartX;

  // Background slider line
  const sliderLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  sliderLine.setAttribute('x1', String(sliderStartX));
  sliderLine.setAttribute('y1', String(sliderY));
  sliderLine.setAttribute('x2', String(sliderEndX));
  sliderLine.setAttribute('y2', String(sliderY));
  sliderLine.setAttribute('stroke', '#ddd');
  sliderLine.setAttribute('stroke-width', '8');
  svg.appendChild(sliderLine);

  // Left label (Throughput)
  const leftLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  leftLabel.setAttribute('x', String(sliderStartX));
  leftLabel.setAttribute('y', String(sliderY - 30));
  leftLabel.setAttribute('text-anchor', 'middle');
  leftLabel.setAttribute('font-size', '16');
  leftLabel.setAttribute('font-weight', 'bold');
  leftLabel.setAttribute('fill', '#333');
  leftLabel.textContent = 'Throughput';
  svg.appendChild(leftLabel);

  const leftSubLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  leftSubLabel.setAttribute('x', String(sliderStartX));
  leftSubLabel.setAttribute('y', String(sliderY - 12));
  leftSubLabel.setAttribute('text-anchor', 'middle');
  leftSubLabel.setAttribute('font-size', '12');
  leftSubLabel.setAttribute('fill', '#666');
  leftSubLabel.textContent = 'High Utilization';
  svg.appendChild(leftSubLabel);

  // Right label (Latency)
  const rightLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  rightLabel.setAttribute('x', String(sliderEndX));
  rightLabel.setAttribute('y', String(sliderY - 30));
  rightLabel.setAttribute('text-anchor', 'middle');
  rightLabel.setAttribute('font-size', '16');
  rightLabel.setAttribute('font-weight', 'bold');
  rightLabel.setAttribute('fill', '#333');
  rightLabel.textContent = 'Latency';
  svg.appendChild(rightLabel);

  const rightSubLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  rightSubLabel.setAttribute('x', String(sliderEndX));
  rightSubLabel.setAttribute('y', String(sliderY - 12));
  rightSubLabel.setAttribute('text-anchor', 'middle');
  rightSubLabel.setAttribute('font-size', '12');
  rightSubLabel.setAttribute('fill', '#666');
  rightSubLabel.textContent = 'Low Tail Latency';
  svg.appendChild(rightSubLabel);

  // Acceptable range (green zone)
  const acceptableRange = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  acceptableRange.setAttribute('y1', String(sliderY));
  acceptableRange.setAttribute('y2', String(sliderY));
  acceptableRange.setAttribute('stroke-width', '8');
  acceptableRange.setAttribute('stroke-linecap', 'round');
  acceptableRange.style.transition = 'all 0.3s ease';
  svg.appendChild(acceptableRange);

  // Bad zones (dark gray)
  const badZoneLeft = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  badZoneLeft.setAttribute('y1', String(sliderY));
  badZoneLeft.setAttribute('y2', String(sliderY));
  badZoneLeft.setAttribute('stroke', '#34495e');
  badZoneLeft.setAttribute('stroke-width', '8');
  badZoneLeft.setAttribute('stroke-linecap', 'round');
  badZoneLeft.setAttribute('opacity', '0.7');
  badZoneLeft.style.transition = 'all 0.3s ease';
  svg.appendChild(badZoneLeft);

  const badZoneRight = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  badZoneRight.setAttribute('y1', String(sliderY));
  badZoneRight.setAttribute('y2', String(sliderY));
  badZoneRight.setAttribute('stroke', '#34495e');
  badZoneRight.setAttribute('stroke-width', '8');
  badZoneRight.setAttribute('stroke-linecap', 'round');
  badZoneRight.setAttribute('opacity', '0.7');
  badZoneRight.style.transition = 'all 0.3s ease';
  svg.appendChild(badZoneRight);

  // Target point marker
  const targetMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  targetMarker.setAttribute('cy', String(sliderY));
  targetMarker.setAttribute('r', '10');
  targetMarker.setAttribute('fill', 'white');
  targetMarker.setAttribute('stroke-width', '4');
  targetMarker.style.transition = 'all 0.3s ease';
  svg.appendChild(targetMarker);

  // Target label below
  const targetLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  targetLabel.setAttribute('y', String(sliderY + 35));
  targetLabel.setAttribute('text-anchor', 'middle');
  targetLabel.setAttribute('font-size', '14');
  targetLabel.setAttribute('font-weight', 'bold');
  targetLabel.style.transition = 'all 0.3s ease';
  svg.appendChild(targetLabel);

  sliderViz.appendChild(svg);
  wrapper.appendChild(sliderViz);

  // Use case cards
  const cardsContainer = document.createElement('div');
  cardsContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  `;

  useCases.forEach(useCase => {
    const card = document.createElement('div');
    card.style.cssText = `
      padding: 20px;
      background: white;
      border: 3px solid ${useCase.color};
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    `;

    const cardTitle = document.createElement('div');
    cardTitle.style.cssText = `
      font-size: 16px;
      font-weight: bold;
      color: ${useCase.color};
      margin-bottom: 5px;
    `;
    cardTitle.textContent = useCase.name;

    const cardDesc = document.createElement('div');
    cardDesc.style.cssText = 'font-size: 13px; color: #666;';
    cardDesc.textContent = useCase.description;

    card.appendChild(cardTitle);
    card.appendChild(cardDesc);

    // Select on click
    card.addEventListener('click', () => {
      selectedUseCase = useCase;
      updateVisualization();
      
      // Update all card styles
      Array.from(cardsContainer.children).forEach((c, idx) => {
        const otherUseCase = useCases[idx];
        const otherCard = c as HTMLElement;
        const otherTitle = otherCard.children[0] as HTMLElement;
        const otherDesc = otherCard.children[1] as HTMLElement;
        
        if (c === card) {
          // Selected card
          otherCard.style.background = useCase.color;
          otherTitle.style.color = 'white';
          otherDesc.style.color = 'white';
        } else {
          // Unselected cards
          otherCard.style.background = 'white';
          otherTitle.style.color = otherUseCase.color;
          otherDesc.style.color = '#666';
        }
      });
    });

    cardsContainer.appendChild(card);
  });

  wrapper.appendChild(cardsContainer);
  container.appendChild(wrapper);

  // Update visualization function
  function updateVisualization() {
    // Fixed cost multiplier at 1.0 (no cost slider)
    const costMultiplier = 1.0;
    
    // Cost affects the slider endpoints - higher cost = slider shrinks (both endpoints improve)
    // At low cost, must choose between throughput and latency
    // At high cost (many GPUs), can achieve both - slider shrinks toward optimal point
    const sliderShrink = (costMultiplier - 0.5) * 0.6; // 0 at low cost, up to 0.6 at high cost
    const effectiveSliderStart = sliderStartX + sliderShrink * sliderLength / 2;
    const effectiveSliderEnd = sliderEndX - sliderShrink * sliderLength / 2;
    const effectiveSliderLength = effectiveSliderEnd - effectiveSliderStart;
    
    // Tolerance stays constant - it's based on the ORIGINAL slider length (SLO doesn't change)
    const tolerance = selectedUseCase.baseTolerance;
    const absoluteTolerance = tolerance * sliderLength; // Fixed size in pixels
    
    const targetX = effectiveSliderStart + selectedUseCase.targetPoint * effectiveSliderLength;
    const rangeStart = Math.max(effectiveSliderStart, targetX - absoluteTolerance);
    const rangeEnd = Math.min(effectiveSliderEnd, targetX + absoluteTolerance);

    // Update main slider line endpoints to show shrinkage
    sliderLine.setAttribute('x1', String(effectiveSliderStart));
    sliderLine.setAttribute('x2', String(effectiveSliderEnd));

    // Update acceptable range
    acceptableRange.setAttribute('x1', String(rangeStart));
    acceptableRange.setAttribute('x2', String(rangeEnd));
    acceptableRange.setAttribute('stroke', selectedUseCase.color);

    // Update bad zones
    badZoneLeft.setAttribute('x1', String(effectiveSliderStart));
    badZoneLeft.setAttribute('x2', String(rangeStart));

    badZoneRight.setAttribute('x1', String(rangeEnd));
    badZoneRight.setAttribute('x2', String(effectiveSliderEnd));

    // Update target marker
    targetMarker.setAttribute('cx', String(targetX));
    targetMarker.setAttribute('stroke', selectedUseCase.color);

    // Update labels
    targetLabel.setAttribute('x', String(targetX));
    targetLabel.setAttribute('fill', selectedUseCase.color);
    targetLabel.textContent = selectedUseCase.name;
  }

  // Initial render - select chatbot by default
  selectedUseCase = useCases[1];
  updateVisualization();
  
  // Highlight chatbot card initially
  const chatbotCard = cardsContainer.children[1] as HTMLElement;
  chatbotCard.style.background = useCases[1].color;
  (chatbotCard.children[0] as HTMLElement).style.color = 'white';
  (chatbotCard.children[1] as HTMLElement).style.color = 'white';
}
