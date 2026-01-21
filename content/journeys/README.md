# Journey Pages System

## Overview

Journey pages are automatically generated from JSON files in `content/journeys/`. Each journey represents a customer optimization path with curated content.

## File Structure

```
content/journeys/
├── latency-critical.json
├── production-scale.json
└── accuracy-critical.json
```

## JSON Schema

```json
{
  "title": "Journey Title",
  "subtitle": "Brief description of the journey",
  "description": "Meta description for SEO",
  "sections": [
    {
      "title": "Section Name",
      "cards": [
        {
          "type": "overview|article|solution|tool",
          "title": "Content Title",
          "description": "Brief description",
          "status": "available|coming-soon",
          "url": "/internal-path.html OR https://external-url.com"
        }
      ]
    }
  ]
}
```

## Content Types & Colors

- **overview** (Purple #667eea) - Foundational/overview articles
- **article** (Blue #0066cc) - Deep-dive technical articles  
- **solution** (Green #10b981) - Deployable code/templates
- **tool** (Orange #f59e0b) - Interactive calculators/visualizers

## Status Values

- **available** - Content is ready, card is clickable
- **coming-soon** - Content not ready, card is greyed out

## URL Handling

- **Internal**: `/article-name.html` - Links to content on the site
- **External**: `https://example.com` - Opens in new tab with ↗ indicator
- **Coming soon**: Leave `url` empty or use empty string

## Adding New Journey

1. Create `content/journeys/new-journey.json`
2. Define structure following schema above
3. Add link to homepage in `webpack.config.js` (index generation)
4. Run `npm run build`
5. Journey automatically generates at `/new-journey.html`

## Updating Journey Content

1. Edit the JSON file in `content/journeys/`
2. Change `status` from "coming-soon" to "available" when content is ready
3. Add the `url` field
4. Run `npm run build`

## Example Card States

**Coming Soon:**
```json
{
  "type": "article",
  "title": "Future Article",
  "description": "Will be available soon",
  "status": "coming-soon",
  "url": ""
}
```

**Available (Internal):**
```json
{
  "type": "article",
  "title": "Published Article",
  "description": "Read now",
  "status": "available",
  "url": "/article-name.html"
}
```

**Available (External):**
```json
{
  "type": "solution",
  "title": "GitHub Repository",
  "description": "Deploy this solution",
  "status": "available",
  "url": "https://github.com/user/repo"
}
```

## Build Process

1. Webpack reads all `*.json` from `content/journeys/`
2. `generateJourneyPage()` transforms JSON to HTML
3. Generates `{journey-name}.html` in dist/
4. All styling is embedded in the generated HTML
5. Navigation automatically includes Home and All Content links
