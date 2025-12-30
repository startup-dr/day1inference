import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const rootId = 'inference-visualizer-root';
const rootElement = document.getElementById(rootId) || document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
