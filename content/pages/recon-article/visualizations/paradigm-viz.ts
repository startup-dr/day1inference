/**
 * HPC vs Web vs Inference Paradigm Comparison
 * Interactive word cloud that highlights characteristics on hover
 */

interface Characteristic {
  text: string;
  paradigms: ('hpc' | 'web' | 'inference')[];
  x: number;
  y: number;
  fontSize: number;
}

export function initParadigmComparison(): void {
  const container = document.getElementById('paradigm-viz');
  if (!container) return;

  container.innerHTML = '';

  // Define characteristics and which paradigms they belong to
  // Key insight: Inference inherits MOST from both HPC and Web, with few unique traits
  const characteristics: Omit<Characteristic, 'x' | 'y' | 'fontSize'>[] = [
    // HPC-only characteristics
    { text: 'Predictable Workloads', paradigms: ['hpc'] },
    { text: 'Offline Processing', paradigms: ['hpc'] },
    { text: 'Scheduled Jobs', paradigms: ['hpc'] },
    { text: 'Scientific Computing', paradigms: ['hpc'] },
    { text: 'Compute-Optimized', paradigms: ['hpc'] },
    
    // HPC + Inference (batch processing, distributed systems)
    { text: 'Batch Processing', paradigms: ['hpc', 'inference'] },
    { text: 'Throughput-Optimized', paradigms: ['hpc', 'inference'] },
    { text: 'Distributed Compute', paradigms: ['hpc', 'inference'] },
    
    // Web + Inference (real-time, user-facing characteristics)
    { text: 'Real-Time Responses', paradigms: ['web', 'inference'] },
    { text: 'Latency-Sensitive', paradigms: ['web', 'inference'] },
    { text: 'Autoscaling', paradigms: ['web', 'inference'] },
    { text: 'User-Facing', paradigms: ['web', 'inference'] },
    { text: 'Request-Response', paradigms: ['web', 'inference'] },
    { text: 'Load Balancing', paradigms: ['web', 'inference'] },
    { text: 'SLA Constraints', paradigms: ['web', 'inference'] },
    { text: 'Unpredictable Arrivals', paradigms: ['web', 'inference'] },
    { text: 'Connection Pooling', paradigms: ['web', 'inference'] },
    
    // HPC + Inference (memory characteristics)
    { text: 'Memory-Bound', paradigms: ['hpc', 'inference'] },
    { text: 'Memory-Optimized', paradigms: ['hpc', 'inference'] },
  ];

  // Create SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 900 500');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.maxWidth = '100%';
  svg.style.margin = '0 auto';
  svg.style.display = 'block';
  svg.style.backgroundColor = '#f8f9fa';
  svg.style.borderRadius = '8px';

  // Separate characteristics by spatial region
  const hpcWords = characteristics.filter(c => c.paradigms.includes('hpc'));
  const webWords = characteristics.filter(c => c.paradigms.includes('web') && !c.paradigms.includes('hpc'));
  const inferenceOnlyWords = characteristics.filter(c => 
    c.paradigms.includes('inference') && 
    !c.paradigms.includes('hpc') && 
    !c.paradigms.includes('web')
  );

  // Shuffle each group
  const shuffledHpc = [...hpcWords].sort(() => Math.random() - 0.5);
  const shuffledWeb = [...webWords].sort(() => Math.random() - 0.5);
  const shuffledInferenceOnly = [...inferenceOnlyWords].sort(() => Math.random() - 0.5);

  // Position words: HPC on left, Inference-only in middle, Web on right
  const positionedCharacteristics: Characteristic[] = [];
  
  // Layout HPC words on the left (columns 0-1) - better centered
  const leftCols = 2;
  const leftCellWidth = 180; // Horizontal spacing between columns
  const leftStart = 120; // Shifted more to the right
  shuffledHpc.forEach((char, index) => {
    const col = index % leftCols;
    const row = Math.floor(index / leftCols);
    const cellHeight = 80;
    
    const fontSize = char.paradigms.length > 1 ? 18 : 14;
    
    positionedCharacteristics.push({
      ...char,
      x: leftStart + col * leftCellWidth,
      y: 120 + row * cellHeight,
      fontSize,
    });
  });

  // Layout Inference-only words in the middle (column 2)
  const middleX = 450;
  shuffledInferenceOnly.forEach((char, index) => {
    positionedCharacteristics.push({
      ...char,
      x: middleX,
      y: 120 + index * 80,
      fontSize: 20, // Inference-only are prominent
    });
  });

  // Layout Web words on the right (columns 3-4) - shifted right too
  const rightCols = 2;
  const rightCellWidth = 180; // Horizontal spacing between columns
  const rightStart = 600; // Shifted more to the right
  shuffledWeb.forEach((char, index) => {
    const col = index % rightCols;
    const row = Math.floor(index / rightCols);
    const cellHeight = 80;
    
    const fontSize = char.paradigms.length > 1 ? 18 : 14;
    
    positionedCharacteristics.push({
      ...char,
      x: rightStart + col * rightCellWidth,
      y: 120 + row * cellHeight,
      fontSize,
    });
  });

  // Create hover buttons at the top
  const buttonWidth = 140;
  const buttonHeight = 40;
  const buttonSpacing = 20;
  const totalWidth = 3 * buttonWidth + 2 * buttonSpacing;
  const startX = (900 - totalWidth) / 2;

  const buttons = [
    { label: 'HPC', paradigm: 'hpc', x: startX, color: '#3498db' },
    { label: 'Inference', paradigm: 'inference', x: startX + buttonWidth + buttonSpacing, color: '#e74c3c' },
    { label: 'Web', paradigm: 'web', x: startX + 2 * (buttonWidth + buttonSpacing), color: '#2ecc71' },
  ];

  let currentHover: string | null = null;

  // Draw buttons
  buttons.forEach(button => {
    const buttonGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    buttonGroup.style.cursor = 'pointer';

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', String(button.x));
    rect.setAttribute('y', '20');
    rect.setAttribute('width', String(buttonWidth));
    rect.setAttribute('height', String(buttonHeight));
    rect.setAttribute('rx', '8');
    rect.setAttribute('fill', button.color);
    rect.setAttribute('opacity', '0.9');
    rect.style.transition = 'all 0.2s ease';

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', String(button.x + buttonWidth / 2));
    text.setAttribute('y', '48');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-family', 'Arial, sans-serif');
    text.setAttribute('font-size', '18');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', '#ffffff');
    text.textContent = button.label;
    text.style.pointerEvents = 'none';

    buttonGroup.appendChild(rect);
    buttonGroup.appendChild(text);

    // Hover effects
    buttonGroup.addEventListener('mouseenter', () => {
      currentHover = button.paradigm;
      rect.setAttribute('opacity', '1');
      rect.setAttribute('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))');
      updateHighlights();
    });

    buttonGroup.addEventListener('mouseleave', () => {
      currentHover = null;
      rect.setAttribute('opacity', '0.9');
      rect.removeAttribute('filter');
      updateHighlights();
    });

    svg.appendChild(buttonGroup);
  });

  // Draw characteristic words
  const wordElements: { element: SVGTextElement; char: Characteristic }[] = [];

  positionedCharacteristics.forEach(char => {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', String(char.x));
    text.setAttribute('y', String(char.y));
    text.setAttribute('font-family', 'Arial, sans-serif');
    text.setAttribute('font-size', String(char.fontSize));
    text.setAttribute('font-weight', '500');
    text.setAttribute('fill', '#666');
    text.setAttribute('opacity', '0.4');
    text.setAttribute('text-anchor', 'middle');
    text.textContent = char.text;
    text.style.transition = 'all 0.3s ease';
    text.style.pointerEvents = 'none';

    svg.appendChild(text);
    wordElements.push({ element: text, char });
  });

  function updateHighlights() {
    wordElements.forEach(({ element, char }) => {
      if (currentHover === null) {
        // No hover - show all dimmed
        element.setAttribute('opacity', '0.4');
        element.setAttribute('fill', '#666');
        element.setAttribute('font-weight', '500');
      } else if (char.paradigms.includes(currentHover as any)) {
        // This word belongs to the hovered paradigm
        const button = buttons.find(b => b.paradigm === currentHover);
        element.setAttribute('opacity', '1');
        element.setAttribute('fill', button!.color);
        element.setAttribute('font-weight', 'bold');
        
        // Add a subtle glow effect
        element.setAttribute('filter', 'drop-shadow(0 0 4px ' + button!.color + ')');
      } else {
        // This word doesn't belong - make it very dim
        element.setAttribute('opacity', '0.1');
        element.setAttribute('fill', '#ccc');
        element.setAttribute('font-weight', '500');
        element.removeAttribute('filter');
      }
    });
  }

  // Initial state
  updateHighlights();

  container.appendChild(svg);
}
