# Day 1 Inference

Machine learning foundations, guidances, and insights publication platform. Built with Webpack 5, TypeScript, and the [Distill.pub](https://distill.pub/) template. Deployed to [day1inference.com](https://day1inference.com) via GitHub Pages.

## Quick Start

```bash
npm install        # Install dependencies
npm run dev        # Development server at http://localhost:8081
npm run build      # Production build to dist/
```

## Project Structure

```
content/pages/          # All articles — one folder per article
  article-name/
    article.md          # Markdown content + YAML frontmatter (required)
    assets/             # Images, SVGs, data files
    visualizations/     # TypeScript interactive viz (auto-discovered)
    bibliography.bib    # BibTeX citations (optional)
src/                    # Build entry point, global styles, shared code
webpack.config.js       # The entire build system
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to create articles, add visualizations, and submit for review.

## Deployment

Push to `main` triggers automatic build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## License

Content and code are available under their respective licenses. See individual files for details.
