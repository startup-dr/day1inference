# Visualization Auto-Discovery System

## Overview

The index.ts file now automatically discovers and initializes visualization scripts across your content pages. This allows you to scale easily by just dropping visualization files into the right folders.

## How It Works

When the page loads, `index.ts` will:

1. **Built-in visualizations**: Initialize any explicitly imported visualizations (like `example-viz.ts`)
2. **Auto-discover**: Scan the DOM for script tags that reference visualization files
3. **Auto-initialize**: Dynamically import and execute initialization functions

## Naming Conventions

For a visualization to be auto-discovered, the script filename must match one of these patterns:

- `visualizer.js` or `visualizations.js`
- `visualization.js`  
- `*-viz.js` (e.g., `inference-viz.js`, `chart-viz.js`)

## Folder Structure

Place your visualization scripts in:
```
content/
  pages/
    your-article/
      assets/
        visualizer.js       ← Auto-discovered
        visualization.js    ← Auto-discovered
        custom-viz.js       ← Auto-discovered
```

## Initialization Functions

Your visualization module should export one of these:

```javascript
// Option 1: Named export with common function names
export function init() {
  // Your initialization code
}

// Option 2: Other accepted names
export function initialize() { }
export function initVisualization() { }
export function initVisualizer() { }
export function setup() { }

// Option 3: Default export
export default function() {
  // Your initialization code
}
```

## Example Visualization Module

```javascript
// content/pages/my-article/assets/visualizer.js

export function init() {
  const container = document.getElementById('my-visualization-root');
  if (!container) {
    console.warn('Visualization container not found');
    return;
  }
  
  // Your D3.js, Three.js, or custom visualization code
  container.innerHTML = '<h3>Interactive Visualization</h3>';
  
  // Add your interactive elements
  // ...
}
```

## Including Visualization in HTML

In your article HTML, reference the script:

```html
<div id="my-visualization-root"></div>
<script type="module" src="assets/visualizer.js"></script>
```

The auto-discovery system will:
1. Find the script tag
2. Dynamically import the module
3. Call the appropriate initialization function

## Benefits

✅ **No manual registration**: Just add the script tag to your HTML  
✅ **Scalable**: Works for 1 or 100 visualizations  
✅ **Isolated**: Each page's visualizations are independent  
✅ **Type-safe**: Works with TypeScript if you add `.ts` extensions  
✅ **Build-time support**: Webpack will still bundle if needed

## Debugging

Check the browser console for:
- "Found N potential visualization scripts"
- "Initializing visualization via init() from..."
- Warnings if initialization fails

## Advanced: TypeScript Visualizations

For TypeScript support in your content folders:

```typescript
// content/pages/my-article/assets/visualizer.ts

export function init(): void {
  const container = document.getElementById('my-visualization-root');
  if (!container) return;
  
  // Fully typed visualization code
  const data: number[] = [1, 2, 3, 4, 5];
  // ...
}
```

Then reference it:
```html
<script type="module" src="assets/visualizer.js"></script>
```

(Webpack will transpile `.ts` → `.js` during build)
