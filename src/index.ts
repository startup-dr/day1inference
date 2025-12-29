// Import custom styles
import './styles/navigation.css';

// Import visualizations
import { initExampleViz, initLargeViz } from './visualizations/example-viz';

// Main entry point
console.log('Day 1 Inference - Distill template loaded');

// Initialize visualizations when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded - initializing visualizations');
  
  // Initialize all visualizations
  initExampleViz();
  initLargeViz();
});
