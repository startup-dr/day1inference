# 🧪 Testing Guide

## Build & Run

```bash
npm run build
npm run dev
```

## Visual Tests

### 1. Logo & Favicon ✅
**URL**: Any page  
**Check**:
- Browser tab shows logo as favicon
- Nav bar shows logo icon (32x32px) next to "Day 1 Inference"
- Logo and text are vertically aligned
- Logo clickable (returns to home)

### 2. Tools Page Layout ✅
**URL**: http://localhost:8080/inference-visualizer.html  
**Check**:
- Content is centered with equal whitespace on left/right
- No visual "pull" to either side
- Visualizer has 1600px of horizontal space
- Body has `class="tools-layout"`

### 3. Timeline Pages (Index/Blogs) ✅
**URLs**: 
- http://localhost:8080/index.html
- http://localhost:8080/blogs.html

**Check**:
- Nav bar styled correctly (dark background, white text)
- Hero section centered
- Articles in vertical timeline format
- Responsive image thumbnails

### 4. Guidances Page ✅
**URL**: http://localhost:8080/guidances.html  
**Check**:
- 3-column layout (Solutions | Tools | Benchmarks)
- Search box functional
- Cards styled with borders
- Hover states working

### 5. Foundations Page ✅
**URL**: http://localhost:8080/foundations.html  
**Check**:
- 2-column grid layout
- Cards with images and descriptions
- Nav bar working
- Typography correct

## Technical Verification

### Browser DevTools
1. **Elements tab**: No inline `<style>` tags
2. **Network tab**: CSS files loading from `/styles/`
3. **Computed styles**: Check body grid-template-columns

### CSS Loading Check
```bash
# All pages should have these
grep "link rel=" dist/*.html
```

**Expected:**
- Articles: 2 links (favicon + main.css)
- Index/Blogs: 3 links (favicon + main + timeline)
- Guidances: 3 links (favicon + main + guidances)
- Foundations: 3 links (favicon + main + grid)

### Responsive Test
**Resize browser window:**
- > 1800px: Tools = 1600px
- 1024-1800px: Tools = 1200px
- < 1024px: All pages = 900px, TOC hidden

## Known Good State

All checks should pass:
```bash
✅ 0 inline <style> tags
✅ 4 external CSS files
✅ Logo in nav bar
✅ Favicon in all pages
✅ Tools page centered
✅ All pages load main.css
```

## Troubleshooting

**If nav bar has no styles:**
- Check: `dist/styles/main.css` exists
- Check: `<link rel="stylesheet" href="/styles/main.css">` in <head>
- Clear browser cache

**If logo doesn't show:**
- Check: `dist/logo.svg` exists
- Check: `<img src="/logo.svg">` in nav HTML
- Check browser console for 404 errors

**If tools page not centered:**
- Check: `<body class="tools-layout">` in HTML
- Check: `body.tools-layout` CSS rules in main.css
- Use DevTools → Inspect → check computed grid-template-columns

🎯 Everything should work perfectly now!
