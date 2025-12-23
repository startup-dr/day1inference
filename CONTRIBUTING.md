# Contributing to Day 1 Inference

## Adding Interactive Visualizers and Assets

This guide explains how to add interactive React components (like the GPU Inference Visualizer) to the Day 1 Inference website.

## Project Structure

```
/Users/kabdolha/Documents/general/
├── [visualizer-name]-embedded/        # React app source
│   ├── src/
│   │   ├── App.jsx                    # Main component
│   │   ├── components/                # React components
│   │   ├── styles.css                 # ALL styles (including layout)
│   │   └── engine/                    # Business logic
│   ├── package.json
│   ├── vite.config.js                 # Build configuration
│   └── dist/                          # Build output (auto-generated)
│
├── day1inference/                     # This website
│   ├── content/pages/[page-name]/
│   │   ├── article.md                 # Page content
│   │   ├── fragments/
│   │   │   └── [component].html       # Embed code
│   │   └── assets/                    # Built files (auto-copied)
│   └── dist/                          # Final website (auto-generated)
│
└── package.json                       # Workspace commands
```

## Step-by-Step Guide

### 1. Create Your React Component

```bash
# Create a new React project with Vite
mkdir visualizer-name-embedded
cd visualizer-name-embedded
npm init -y
npm install react react-dom
npm install -D vite @vitejs/plugin-react
```

**Configure `vite.config.js`:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.jsx',
      name: 'YourVisualizerName',
      fileName: 'visualizer',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'visualizer.css',
        entryFileNames: 'visualizer.js',
      }
    }
  }
})
```

**Create `src/main.jsx`:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const rootId = 'your-visualizer-root';
const rootElement = document.getElementById(rootId) || document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
```

**Add build scripts to `package.json`:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:website": "npm run build && cp -r dist/* ../day1inference/content/pages/your-page/assets/"
  }
}
```

### 2. Develop Your Component

```bash
cd visualizer-name-embedded
npm run dev
```

- Develop at http://localhost:5173 with hot reload
- **Put ALL styles in `src/styles.css`** (component + layout)
- Keep components in `src/components/`
- Keep business logic in `src/engine/` or similar

### 3. Create Website Page

In `day1inference/content/pages/your-page/`:

**`article.md`:**
```markdown
---
title: Your Visualizer Title
description: Brief description
category: guidances
subcategory: tools
created: 2024-12-23
toc: false
---

## Your Visualizer Title

Introduction text here.

<div id="your-visualizer-root" style="width: 100%; min-height: 800px; margin: 2rem 0;"></div>
<link rel="stylesheet" href="your-page/assets/visualizer.css">
<script type="module" src="your-page/assets/visualizer.js"></script>

## How to Use

Instructions here.
```

**`fragments/your-visualizer.html`:**
```html
<div id="your-visualizer-root" style="width: 100%; min-height: 800px; margin: 2rem 0;"></div>
<link rel="stylesheet" href="assets/visualizer.css">
<script type="module" src="assets/visualizer.js"></script>
```

### 4. Build and Deploy

```bash
# From the root directory
npm run build:all
```

This will:
1. Build your React app
2. Copy files to website assets
3. Build the full website

### 5. Test Locally

```bash
npm run dev:website
```

Open http://localhost:8080/your-page.html

## Workflow Commands

| Command | Description |
|---------|-------------|
| `npm run dev:visualizer` | Develop React component with hot reload |
| `npm run build:visualizer` | Build React app and copy to website |
| `npm run build:website` | Build the static website |
| `npm run build:all` | Build everything (React + website) |
| `npm run dev:website` | Preview the full website locally |

## Best Practices

### CSS Management
- ✅ **DO:** Put ALL CSS in `visualizer-name-embedded/src/styles.css`
- ✅ **DO:** Include layout overrides at the bottom with clear comments
- ❌ **DON'T:** Create separate CSS files in the website
- ❌ **DON'T:** Use inline styles for things that could be classes

### File Organization
- ✅ **DO:** Edit source files in `visualizer-name-embedded/src/`
- ✅ **DO:** Run `npm run build:all` before committing
- ❌ **DON'T:** Edit files in `dist/` folders (they're auto-generated)
- ❌ **DON'T:** Manually copy files between projects

### Component Design
- Keep components focused and reusable
- Separate business logic from UI components
- Use meaningful prop names and add PropTypes
- Include comments for complex logic

### Performance
- Keep bundle sizes reasonable (<1MB if possible)
- Use code splitting for large dependencies
- Optimize images and assets
- Test on slower connections

## Layout Integration

For proper layout integration with the website grid system, add layout overrides at the bottom of your `styles.css`:

```css
/* ============================================ */
/* LAYOUT OVERRIDES FOR EMBEDDED VERSION */
/* ============================================ */

#your-visualizer-root > div {
  display: grid !important;
  grid-template-columns: 1fr 2fr !important;
  gap: 24px !important;
  width: 100% !important;
}

/* Mobile responsive */
@media(max-width:1024px){
  #your-visualizer-root > div {
    grid-template-columns: 1fr !important;
  }
}
```

## Troubleshooting

### Build Fails
```bash
# Clean and rebuild
cd visualizer-name-embedded
rm -rf dist node_modules
npm install
npm run build
```

### Styles Not Updating
- Make sure you edited the SOURCE file in `src/styles.css`
- Run `npm run build:all` to rebuild
- Clear browser cache

### Component Not Rendering
- Check browser console for errors
- Verify the root element ID matches
- Ensure React dependencies are bundled

## Example: GPU Inference Visualizer

See the `inference-visualizer-embedded/` directory for a complete working example:

```bash
# Develop
cd inference-visualizer-embedded
npm run dev

# Build and deploy
cd ..
npm run build:all

# Preview
npm run dev:website
```

## Git Workflow

```bash
# After making changes and testing
git add .
git commit -m "Add [feature]: [description]"
git push origin main
```

## Questions?

- Review existing visualizers for examples
- Check `VISUALIZER_BUILD_STRATEGY.md` for detailed architecture
- See `README_DEVELOPMENT.md` for quick reference

## Contributing Checklist

- [ ] Created React app with proper build configuration
- [ ] All styles in single `styles.css` file
- [ ] Build script copies to website assets automatically
- [ ] Created markdown article with embed code
- [ ] Tested with `npm run dev:visualizer`
- [ ] Built with `npm run build:all`
- [ ] Tested final output with `npm run dev:website`
- [ ] Verified layout on mobile and desktop
- [ ] Committed source files and built assets
- [ ] Updated documentation if needed

Happy contributing! 🚀
