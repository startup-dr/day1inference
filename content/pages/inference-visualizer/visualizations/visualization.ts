import '../src/styles.css';

let mounted = false;

export async function initInferenceVisualizer(): Promise<void> {
  const root = document.getElementById('inference-visualizer-root');
  if (!root) return;

  if (mounted || root.dataset.vizMounted === '1') return;
  root.dataset.vizMounted = '1';
  mounted = true;

  const React = await import('react');
  const ReactDOM = await import('react-dom/client');

  const { default: App } = await import('../src/App.jsx');

  ReactDOM.createRoot(root).render(React.createElement(App));
}
