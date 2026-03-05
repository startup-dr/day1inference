# Clean URLs Implementation

This document explains how clean URLs (without `.html` extensions) work on the Day1Inference website.

## Overview

The website now uses clean URLs like:
- `https://day1inference.com/recon-article` instead of `https://day1inference.com/recon-article.html`
- `https://day1inference.com/timeline` instead of `https://day1inference.com/timeline.html`

## How It Works

### 1. Directory Structure

Each page is built as `index.html` inside a directory:

```
dist/
├── index.html                    # Homepage (/)
├── timeline/
│   └── index.html                # /timeline
├── recon-article/
│   ├── index.html                # /recon-article
│   ├── assets/
│   └── bibliography.bib
├── latency-critical/
│   └── index.html                # /latency-critical
└── 404.html                      # Handles redirects
```

### 2. GitHub Pages Behavior

When you visit `https://day1inference.com/recon-article`:
1. GitHub Pages looks for `recon-article.html` (doesn't exist)
2. GitHub Pages looks for `recon-article/index.html` (exists!)
3. Serves the `index.html` file

This makes the URL appear as `/recon-article` without needing the `.html` extension.

### 3. Legacy URL Redirects

The `404.html` file handles two cases:

**Case 1: Legacy .html URLs**
- User visits: `https://day1inference.com/recon-article.html`
- 404.html detects the `.html` extension
- Redirects to: `https://day1inference.com/recon-article`

**Case 2: Clean URLs (failsafe)**
- User visits: `https://day1inference.com/some-page`
- If direct match fails, try: `https://day1inference.com/some-page/index.html`
- This is rarely needed due to GitHub Pages' automatic behavior

### 4. Internal Links

All internal links in the website use clean URLs:

```html
<!-- Old -->
<a href="/timeline.html">All Content</a>

<!-- New -->
<a href="/timeline">All Content</a>
```

## Benefits

1. **Cleaner URLs**: Looks more professional and modern
2. **Backward compatible**: Old `.html` URLs automatically redirect to clean URLs
3. **SEO friendly**: Search engines prefer clean URLs
4. **User friendly**: Easier to remember and type

## Testing Locally

When testing with `npm run dev`, the webpack dev server automatically handles these routes. Both formats work:
- `http://localhost:8081/recon-article`
- `http://localhost:8081/recon-article/`

## Adding New Pages

When creating new pages, the webpack config automatically generates the correct structure:

1. Create your article: `content/pages/my-new-page/article.md`
2. Build creates: `dist/my-new-page/index.html`
3. Access at: `https://day1inference.com/my-new-page`

No additional configuration needed!

## Technical Implementation

### Webpack Configuration Changes

1. **Output path**: Changed from `page.html` to `page/index.html`
2. **URL generation**: Changed from `/page.html` to `/page`
3. **Link updates**: All `<a href>` tags updated to use clean URLs

### Files Modified

- `webpack.config.js` - Build configuration for directory structure
- `public/404.html` - Redirect handler for GitHub Pages
- `.gitignore` - Fixed to properly exclude `dist/` directory

### Key Code Sections

**Article output path** (webpack.config.js):
```javascript
to: ({ context, absoluteFilename }) => {
    const relativePath = path.relative(path.join(context, 'content/pages'), absoluteFilename);
    const outputPath = relativePath.endsWith('/article.md')
        ? path.dirname(relativePath) + '/index.html'
        : relativePath.replace('.md', '/index.html');
    return outputPath;
}
```

**URL generation** (webpack.config.js):
```javascript
url: '/' + urlPath  // Instead of urlPath + '.html'
```

**404 redirect** (public/404.html):
```javascript
// Remove .html extension if present
if (path.endsWith('.html')) {
    var cleanPath = path.slice(0, -5);
    window.location.replace(cleanPath + search + hash);
}
```

## Troubleshooting

**Problem**: Links not working locally
- **Solution**: Make sure webpack dev server is running (`npm run dev`)

**Problem**: 404 errors after deployment
- **Solution**: Wait 2-3 minutes for GitHub Pages to update after push

**Problem**: Old .html URLs still cached
- **Solution**: The 404.html redirect handles this automatically. Clear browser cache if needed.

**Problem**: Assets not loading
- **Solution**: Check that asset paths use absolute paths from root (e.g., `/logo.svg` not `logo.svg`)
