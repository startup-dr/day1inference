# Day 1 Inference

Machine learning foundations, guidances, and insights publication platform.

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Development server at http://localhost:8081
npm run build      # Production build to dist/
```

## Project Structure

```
day1inference/
├── content/
│   └── pages/              # Markdown articles
│       └── article-name/   # Each article in its own folder
│           ├── article.md  # Main content with frontmatter
│           ├── assets/     # Article-specific assets
│           └── fragments/  # Article-specific HTML fragments (optional)
├── src/
│   ├── index.ts           # Main TypeScript entry point
│   ├── fragmentLoader.js  # Runtime fragment injection
│   ├── fragments/         # Global reusable HTML fragments
│   ├── styles/            # Global CSS styles
│   └── visualizations/    # Shared visualization code
├── public/
│   ├── CNAME              # Custom domain: day1inference.com
│   └── logo*.svg          # Site branding assets
├── dist/                  # Build output (auto-generated, do not edit)
├── webpack.config.js      # Build configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Creating Articles

### 1. Create Article Folder and File

Each article lives in its own folder under `content/pages/`:

```bash
content/pages/my-article/
├── article.md      # Required: main content
└── assets/         # Optional: images, data files, etc.
```

### 2. Add Frontmatter

Articles require YAML frontmatter at the top of `article.md`:

```yaml
---
title: Your Article Title
subtitle: Optional subtitle for the article
category: foundations | guidances | blogs
created: 2025-12-29
updated: 2025-12-29
authors:
  - Author Name
  - Another Author
reviewers:
  - Reviewer Name
toc: true
image: path/to/image.jpg
description: Brief description for meta tags and previews
---
```

**Required fields:**
- `title`: Article title
- `category`: Must be `foundations`, `guidances`, or `blogs`
- `created`: Creation date (YYYY-MM-DD)

**Optional fields:**
- `subtitle`: Appears below title
- `updated`: Last update date
- `authors`: List of author names
- `reviewers`: List of reviewer names
- `toc`: Show table of contents (default: false)
- `image`: Banner image path or data URI
- `description`: Meta description for SEO

### 3. Write Content

Use standard Markdown syntax:

```markdown
# Main Heading

## Subheading

Regular paragraph text with **bold** and *italic*.

- Bullet points
- More items

1. Numbered lists
2. Sequential items

[Link text](https://example.com)

![Image alt text](./assets/image.png)
```

### 4. Embed Fragments (Optional)

**Compile-time fragments** (injected during build):
```markdown
{{{fragment-name}}}
```

**Run-time fragments** (loaded via JavaScript):
```html
<div id="fragment-name"></div>
```

Create fragments in:
- `src/fragments/name.html` for global fragments
- `content/pages/my-article/fragments/name.html` for article-specific fragments

### 5. Reference Assets

Use relative paths from the article file:

```markdown
![Chart](./assets/chart.png)
<link rel="stylesheet" href="./assets/custom.css">
<script src="./assets/script.js"></script>
```

## Categories

- **foundations** - Core ML concepts, fundamentals, theoretical foundations
- **guidances** - Best practices, how-to guides, practical advice
- **blogs** - Updates, announcements, insights, commentary

## Build System

### Technology Stack
- **Webpack 5**: Module bundler and dev server
- **TypeScript**: Type-safe JavaScript
- **Markdown-it**: Markdown to HTML conversion
- **Gray-matter**: Frontmatter parsing
- **Handlebars**: HTML templating

### Build Process
1. Parses all `content/pages/*/article.md` files
2. Extracts frontmatter metadata
3. Converts Markdown to HTML
4. Injects compile-time fragments
5. Generates article HTML pages
6. Creates index page with article listings
7. Bundles TypeScript/CSS assets
8. Outputs to `dist/` directory

### Development Server
```bash
npm run dev
```
- Runs at **http://localhost:8081**
- Hot reload on file changes
- Serves from memory (no dist/ created)

### Production Build
```bash
npm run build
```
- Optimized assets
- Minified code
- Outputs to `dist/` directory

## Fragments System

### Two Types of Fragments

1. **Compile-time (Build Injection)**
   - Syntax: `{{{fragment-name}}}`
   - Injected during webpack build
   - Use for static content

2. **Run-time (JavaScript Loading)**
   - Syntax: `<div id="fragment-name"></div>`
   - Loaded by `fragmentLoader.js` after page loads
   - Use for dynamic content

### Creating Fragments

**Global fragment:**
```bash
src/fragments/myname.html
```
Reference as: `{{{fragment-myname}}}`

**Article-specific fragment:**
```bash
content/pages/my-article/fragments/custom.html
```
Reference as: `{{{fragment-custom}}}` (within that article only)

## Deployment

### Automatic Deployment
- **Trigger**: Push to `main` branch
- **Platform**: GitHub Pages
- **Workflow**: `.github/workflows/deploy.yml`
- **Domain**: day1inference.com

### Manual Deployment
```bash
npm run build           # Build to dist/
git add dist/
git commit -m "Deploy"
git push origin main
```

GitHub Actions will automatically deploy the `dist/` directory to GitHub Pages.

## Development Guidelines

### File Organization
- One article per folder
- Keep assets with articles
- Use descriptive folder names (lowercase-with-hyphens)

### Asset Management
- Store images in `article-name/assets/`
- Optimize images before committing
- Use relative paths in Markdown

### Code Style
- TypeScript for new JavaScript
- Follow existing CSS conventions
- Comment complex logic

### Testing Changes
1. Run `npm run dev`
2. Check article at `http://localhost:8081/article-name.html`
3. Verify on different screen sizes
4. Test all interactive elements

## Troubleshooting

### Articles Not Showing Up
- Check frontmatter syntax (must be valid YAML)
- Verify `category` is one of: foundations, guidances, blogs
- Ensure file is named `article.md`
- Check for Markdown syntax errors

### Fragments Not Loading
- **Compile-time**: Verify file exists in `src/fragments/` or article's `fragments/`
- **Run-time**: Check browser console for fetch errors
- Ensure fragment name matches exactly (case-sensitive)

### Build Errors
- Delete `node_modules/` and `dist/`, then reinstall: `npm install`
- Check for missing closing tags in fragments
- Verify all frontmatter required fields are present
- Review webpack.config.js for configuration errors

### Dev Server Won't Start
- Check if port 8081 is available
- Try `npm install` to update dependencies
- Verify Node.js version (requires 18+)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## License

Content and code are available under their respective licenses. See individual files for details.
