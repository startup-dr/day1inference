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
    { fullName: 'Nodes', color: '#006280', cx: 400, cy: 100, rx: 55, ry: 95 },
    { fullName: 'Orchestration', color: '#007f80', cx: 340, cy: 100, rx: 50, ry: 85 },
    { fullName: 'Cache', color: '#38ad87', cx: 280, cy: 100, rx: 45, ry: 75 },
    { fullName: 'Engine', color: '#91d67b', cx: 220, cy: 100, rx: 40, ry: 65 },
    { fullName: 'Routing', color: '#d0ea65', cx: 170, cy: 100, rx: 35, ry: 55 },
  ];

  let currentlyClicked: string | null = null;
  let animationInProgress = false;

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

  function resetAnimation() {
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
  }

  ellipseData.forEach(({ g, ellipse, layer }) => {
    g.addEventListener('click', async (e) => {
      e.stopPropagation();
      if (currentlyClicked !== null) {
        resetAnimation();
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
      if (currentlyClicked !== null) await typeText(layer.fullName, layer.rx);
      animationInProgress = false;
    });
  });

  svg.addEventListener('click', () => {
    if (currentlyClicked !== null) resetAnimation();
  });

  container.appendChild(svg);
}
