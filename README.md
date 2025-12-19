# Day 1 Inference - Fragment System

Minimal HTML fragment loading system using Webpack + Handlebars + Markdown.

## Setup

```bash
npm install
npm run dev    # Development server
npm run build  # Production build
```

## Project Structure

```
├── content/
│   └── pages/          # Markdown pages (.md files)
├── src/
│   ├── fragments/      # Reusable HTML fragments
│   ├── index.html      # Main HTML template
│   └── index.js        # JavaScript entry point
└── dist/               # Build output (generated)
```

## How it works

### Compile-time fragments (Handlebars)
- Use `{{{fragment-name}}}` in markdown or HTML files
- Injected during webpack build
- Use for critical content

### Run-time fragments (JavaScript)
- Use `<div id="fragment-name"></div>` in HTML
- Loaded via fetch after page load
- Use for non-critical content

## Adding content

### New markdown page
1. Create `content/pages/mypage.md`
2. Use `{{{fragment-name}}}` for fragments
3. Access at `http://localhost:8081/mypage.html`

### New fragment
1. Create `src/fragments/myname.html`
2. Reference as `{{{fragment-myname}}}` in markdown/HTML
