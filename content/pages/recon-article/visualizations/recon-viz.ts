/**
 * RECON Stack Layer Visualization - R-E-C-O-N left to right
 */

export function initReconTeaser(): void {
  const container = document.getElementById('recon-stack-teaser');
  if (!container) return;

  container.innerHTML = '';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 700 200');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.maxWidth = '900px';
  svg.style.margin = '0 auto';
  svg.style.display = 'block';

  // R-E-C-O-N order: Routing (largest) on left, Nodes (smallest) on right
const layers = [
  {
    fullName: 'Routing',
    color: '#d0ea65',
    cx: 35,        // 35 - 35 = 0
    cy: 100,
    rx: 35,
    ry: 55,
    keywords: ['Cache-Aware', 'Round Robin', 'Load Balancing', 'Request Scheduling'],
  },
  {
    fullName: 'Engine',
    color: '#91d67b',
    cx: 85,
    cy: 100,
    rx: 40,
    ry: 65,
    keywords: ['Continuous Batching', 'Paged Attention', 'Quantization'],
  },
  {
    fullName: 'Cache',
    color: '#38ad87',
    cx: 135,
    cy: 100,
    rx: 45,
    ry: 75,
    keywords: ['KV Cache', 'Blocks', 'Semantic Cache'],
  },
  {
    fullName: 'Orchestration',
    color: '#007f80',
    cx: 185,
    cy: 100,
    rx: 50,
    ry: 85,
    keywords: ['Autoscaling', 'Health Monitoring', 'Resource Allocation', 'Service Placement'],
  },
  {
    fullName: 'Nodes',
    color: '#006280',
    cx: 235,
    cy: 100,
    rx: 55,
    ry: 95,
    keywords: ['Chip Arch', 'Memory', 'Interconnect', 'Capacity'],
  },
].reverse();


// viewBox: "0 0 700 200"
const vbWidth = 700;
const vbCenterX = vbWidth / 2;

// visual bounds of all ellipses in viewBox units
const minX = Math.min(...layers.map(l => l.cx - l.rx));
const maxX = Math.max(...layers.map(l => l.cx + l.rx));
const groupCenterX = (minX + maxX) / 2;

// shift needed to align centers
const dx = vbCenterX - groupCenterX;

// apply shift
for (const l of layers) l.cx += dx;




  let currentlyClicked: string | null = null;
  let animationInProgress = false;
  const keywordElements: SVGTextElement[] = [];
  let animationFrameId: number | null = null;

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
  filter.setAttribute('id', 'glow');
  filter.setAttribute('x', '-50%');
  filter.setAttribute('y', '-50%');
  filter.setAttribute('width', '200%');
  filter.setAttribute('height', '200%');
  const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
  feGaussianBlur.setAttribute('stdDeviation', '4');
  feGaussianBlur.setAttribute('result', 'coloredBlur');
  const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
  const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
  feMergeNode1.setAttribute('in', 'coloredBlur');
  const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
  feMergeNode2.setAttribute('in', 'SourceGraphic');
  feMerge.appendChild(feMergeNode1);
  feMerge.appendChild(feMergeNode2);
  filter.appendChild(feGaussianBlur);
  filter.appendChild(feMerge);
  defs.appendChild(filter);
  svg.appendChild(defs);

  const ellipseData = layers.map((layer, index) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.style.cursor = 'pointer';
    const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    ellipse.setAttribute('cx', String(layer.cx));
    ellipse.setAttribute('cy', String(layer.cy));
    ellipse.setAttribute('rx', String(layer.rx));
    ellipse.setAttribute('ry', String(layer.ry));
    ellipse.setAttribute('fill', layer.color);
    ellipse.setAttribute('stroke', layer.color);
    ellipse.setAttribute('stroke-width', '2');
    ellipse.style.transition = 'all 0.5s ease';
    g.appendChild(ellipse);
    g.dataset.index = String(index);
    svg.appendChild(g);
    return { g, ellipse, layer, originalCx: layer.cx, originalCy: layer.cy };
  });

  const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textElement.setAttribute('font-family', 'Arial, sans-serif');
  textElement.setAttribute('font-size', '64');
  textElement.setAttribute('font-weight', 'bold');
  textElement.setAttribute('opacity', '0');
  textElement.style.pointerEvents = 'none';
  svg.appendChild(textElement);

  async function typeText(text: string, ellipseRx: number) {
    textElement.setAttribute('opacity', '1');
    textElement.innerHTML = '';
    const upperText = text.toUpperCase();
    
    // Position second letter after ellipse width + some padding
    const secondLetterX = 100 + ellipseRx + 3;
    
    for (let i = 0; i < upperText.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 80));
      if (currentlyClicked === null) break;
      
      const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tspan.textContent = upperText[i];
      tspan.setAttribute('fill', i === 0 ? '#ffffff' : '#000000');
      
      if (i === 0) {
        // First letter centered in ellipse
        tspan.setAttribute('x', '100');
        tspan.setAttribute('y', '125');
        tspan.setAttribute('text-anchor', 'middle');
      } else if (i === 1) {
        // Second letter positioned after ellipse
        tspan.setAttribute('x', String(secondLetterX));
        tspan.setAttribute('y', '125');
        tspan.setAttribute('text-anchor', 'start');
      } else {
        // Remaining letters with normal spacing
        tspan.setAttribute('dx', '0.05em');
      }
      
      textElement.appendChild(tspan);
    }
  }

  async function showKeywordCloud(keywords: string[], color: string, ellipseCx: number,  ellipseRx: number) {
    if (keywords.length === 0) return;
    
    const startX = ellipseRx  + 100;
    let lastEvenX = startX;
    let lastOddX = startX;
    
    for (let i = 0; i < keywords.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 150));
      if (currentlyClicked === null) break;
      
      const isEven = i % 2 === 0;
      const yMin = isEven ? 40 : 150;
      const yMax = isEven ? 70 : 180;
      const yPos = Math.random() * (yMax - yMin) + yMin;
      
      const fontSize = Math.floor(Math.random() * 16) + 20; // Random 16-20
      
      const xPos = isEven ? lastEvenX : lastOddX;
      
      const keywordText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      keywordText.setAttribute('x', String(xPos));
      keywordText.setAttribute('y', String(yPos));
      keywordText.setAttribute('font-family', 'Arial, sans-serif');
      keywordText.setAttribute('font-size', String(fontSize));
      keywordText.setAttribute('font-weight', 'normal');
      keywordText.setAttribute('fill', color);
      keywordText.setAttribute('opacity', '0');
      keywordText.setAttribute('text-anchor', 'start');
      keywordText.textContent = keywords[i];
      keywordText.style.pointerEvents = 'none';
      keywordText.style.transition = 'opacity 0.6s ease-out';
      
      // Store original position and animation parameters for floating effect
      (keywordText as any).originalX = xPos;
      (keywordText as any).originalY = yPos;
      (keywordText as any).floatOffset = Math.random() * Math.PI * 2; // Random phase
      (keywordText as any).floatSpeed = 0.001 + Math.random() * 0.001; // Speed (0.001-0.002 for visible but slow)
      (keywordText as any).floatAmplitudeX = .5 + Math.random() * 0.5; // Horizontal movement (3-7px)
      (keywordText as any).floatAmplitudeY = .5 + Math.random() * 0.5; // Vertical movement (3-7px)
      
      svg.appendChild(keywordText);
      keywordElements.push(keywordText);
      
      // Start animation immediately (before fade-in) for the first keyword
      if (i === 0 && animationFrameId === null) {
        animationFrameId = requestAnimationFrame(animateKeywords);
      }
      
      // Fade in - animation runs simultaneously
      await new Promise(resolve => setTimeout(resolve, 50));
      keywordText.setAttribute('opacity', '1');
      
      // Calculate text width and update position tracker for next word of same parity
      const bbox = keywordText.getBBox();
      const wordWidth = bbox.width + 15; // Add some spacing
      
      if (isEven) {
        lastEvenX += wordWidth;
      } else {
        lastOddX += wordWidth;
      }
    }
  }

  // Animation loop for floating keywords
  function animateKeywords(timestamp: number) {
    keywordElements.forEach(el => {
      const originalX = (el as any).originalX;
      const originalY = (el as any).originalY;
      const offset = (el as any).floatOffset;
      const speed = (el as any).floatSpeed;
      const amplitudeX = (el as any).floatAmplitudeX;
      const amplitudeY = (el as any).floatAmplitudeY;
      
      if (originalX !== undefined && originalY !== undefined) {
        const dx = Math.sin(timestamp * speed + offset) * amplitudeX;
        const dy = Math.cos(timestamp * speed + offset * 1.3) * amplitudeY;
        
        el.setAttribute('x', String(originalX + dx));
        el.setAttribute('y', String(originalY + dy));
      }
    });
    
    if (keywordElements.length > 0) {
      animationFrameId = requestAnimationFrame(animateKeywords);
    }
  }

  

  async function resetAnimation() {
    // Stop animation loop
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    
    // Fade out keywords first
    keywordElements.forEach(el => {
      el.setAttribute('opacity', '0');
    });
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    currentlyClicked = null;
    animationInProgress = false;
    ellipseData.forEach(({ ellipse, originalCx, originalCy }) => {
      ellipse.setAttribute('cx', String(originalCx));
      ellipse.setAttribute('cy', String(originalCy));
      ellipse.style.opacity = '1';
      ellipse.removeAttribute('filter');
    });
    textElement.setAttribute('opacity', '0');
    textElement.innerHTML = '';
    
    // Clear keyword cloud after fade out
    keywordElements.forEach(el => el.remove());
    keywordElements.length = 0;
  }

  ellipseData.forEach(({ g, ellipse, layer }) => {
    g.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (currentlyClicked !== null) {
        await await resetAnimation();
        return;
      }
      if (animationInProgress) return;
      currentlyClicked = g.dataset.index!;
      animationInProgress = true;
      ellipseData.forEach(({ ellipse: otherEllipse, g: otherG }) => {
        if (otherG !== g) otherEllipse.style.opacity = '0';
      });
      await new Promise(resolve => setTimeout(resolve, 100));
      if (currentlyClicked === null) return;
      ellipse.setAttribute('cx', '100');
      ellipse.setAttribute('filter', 'url(#glow)');
      await new Promise(resolve => setTimeout(resolve, 400));
      if (currentlyClicked !== null) {
        await typeText(layer.fullName, layer.rx);
        // Show keyword cloud after text is complete
        if (currentlyClicked !== null) {
          await showKeywordCloud(layer.keywords, layer.color, layer.cx, layer.rx);
        }
      }
      animationInProgress = false;
    });
  });

  svg.addEventListener('click', async () => {
    if (currentlyClicked !== null) await await resetAnimation();
  });

  container.appendChild(svg);
}
