# Day 1 Inference

Machine learning foundations, guidances, and insights.

## Setup

```bash
npm install
npm run dev    # Development server at http://localhost:8081
npm run build  # Production build
```

## Project Structure

```
├── content/
│   └── pages/          # Markdown articles with frontmatter
├── src/
│   ├── fragments/      # Reusable HTML fragments
│   └── index.js        # JavaScript entry point
├── public/
│   └── CNAME          # Custom domain configuration
└── dist/              # Build output (auto-generated)
```

## Creating Articles

### 1. Create markdown file in `content/pages/`

```markdown
---
title: Your Article Title
category: foundations | guidances | blogs
date: 2025-12-19
description: Brief description of the article
---

# Your Article Title

Content goes here...

{{{fragment-name}}}  <!-- Optional: inject fragments -->
```

### 2. Categories

- **foundations** - Core concepts and fundamentals
- **guidances** - Best practices and how-to guides  
- **blogs** - Updates, announcements, and insights

### 3. Build

Articles are automatically:
- Converted from markdown to HTML
- Listed on the index page by date (newest first)
- Grouped by category
- Accessible at `yourfile.html`

## Fragments

### Compile-time (build injection)
Use `{{{fragment-name}}}` in markdown/HTML - injected during build

### Run-time (JavaScript loading)
Use `<div id="fragment-name"></div>` - loaded after page loads

### Create new fragment
1. Add `src/fragments/myname.html`
2. Reference as `{{{fragment-myname}}}`

## Deployment

Automatically deploys to GitHub Pages on push to main branch.

Custom domain: day1inference.com
