/**
 * Example visualization using TypeScript
 * This demonstrates how to create interactive visualizations
 * that can be embedded in articles
 */

export function initExampleViz(): void {
  const container = document.getElementById('interactive-example');
  if (!container) return;

  // Clear container
  container.innerHTML = '';

  // Create a simple interactive element
  const vizDiv = document.createElement('div');
  vizDiv.style.cssText = `
    padding: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
  `;

  let clicks = 0;
  const updateContent = () => {
    vizDiv.innerHTML = `
      <h3 style="margin: 0 0 1rem 0;">Interactive TypeScript Visualization</h3>
      <p style="margin: 0 0 1rem 0; opacity: 0.9;">This is rendered by TypeScript code in src/visualizations/</p>
      <p style="font-size: 2rem; margin: 0;">${clicks} clicks</p>
      <p style="font-size: 0.875rem; margin-top: 1rem; opacity: 0.8;">Click to interact</p>
    `;
  };

  vizDiv.addEventListener('click', () => {
    clicks++;
    updateContent();
    vizDiv.style.transform = 'scale(0.98)';
    setTimeout(() => {
      vizDiv.style.transform = 'scale(1)';
    }, 100);
  });

  vizDiv.addEventListener('mouseenter', () => {
    vizDiv.style.transform = 'scale(1.02)';
  });

  vizDiv.addEventListener('mouseleave', () => {
    vizDiv.style.transform = 'scale(1)';
  });

  updateContent();
  container.appendChild(vizDiv);
}

export function initLargeViz(): void {
  const container = document.getElementById('large-viz');
  if (!container) return;

  // Create an animated visualization
  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = 400;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  
  container.innerHTML = '';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Simple particle animation
  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
  }

  const particles: Particle[] = [];
  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function animate() {
    if (!ctx) return;
    
    ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  // Initial black background
  ctx.fillStyle = '#0f0f23';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  animate();
}
