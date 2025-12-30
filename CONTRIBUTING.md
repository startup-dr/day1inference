# Contributing to Day1Inference

Welcome! This guide shows you how to contribute inference-focused content to Day1Inference. Each article lives in its own folder with markdown, assets, and optional TypeScript visualizations.

## Our Tenets

All content follows these five principles:

### 1. Inference-First
Recommend the optimal solution for each use case—whether open source, EKS, SageMaker, Bedrock, or emerging managed offerings—based on workload characteristics, not service allegiance.

### 2. Deeply Technical
Address production-grade inference challenges with specificity. Provide actionable guidance on continuous batching strategies, quantization trade-offs, multi-model serving architectures, and kernel-level optimizations—not surface-level overviews.

### 3. Transparency Earns Trust
Publish performance benchmarks, expose optimization decisions, and provide visibility into inference stack implementations. Customers validate our recommendations and understand the trade-offs in their specific context.

### 4. Field-Validated
Guidance emerges from real customer implementations, not theoretical best practices. Customer engagements validate approaches in production scenarios and feed learnings back into the platform.

### 5. Industry Relevant
Keep content current with the latest inference stack trends, open-source tooling, and optimization techniques. Monitor specialized inference providers and incorporate new approaches as they prove valuable.

## Content Structure

Every piece of content lives in `content/pages/` as either:
- A **folder** with `article.md` + assets + visualizations
- A **standalone** `article-name.md` file (for simple content)

### Folder-Based Article (Recommended)

```
content/pages/my-article/
├── article.md           # Main content (required)
├── bibliography.bib     # Citations (optional)
├── assets/              # Images, data (optional)
│   ├── chart.png
│   └── diagram.svg
└── visualizations/      # TypeScript viz code (optional)
    └── my-viz.ts
```

### Standalone Article (Simple Content)

```
content/pages/simple-article.md
```

## Creating an Article

### 1. Create the Folder and article.md

```bash
mkdir -p content/pages/my-article
cd content/pages/my-article
touch article.md
```

### 2. Add Front Matter

Every `article.md` starts with YAML front matter:

```markdown
---
title: Your Article Title
subtitle: Optional compelling subtitle
category: foundations  # or: guidances, blogs
published: 2025-12-30
authors:
  - Your Name
  - Collaborator Name
description: Brief description for SEO and timeline (shown on homepage)
toc: true  # Table of contents (optional)
image: data:image/svg+xml,...  # Placeholder or actual image URL
---

## Your First Section

Content goes here...
```

**Required fields:**
- `title`: Article title
- `category`: One of `foundations`, `guidances`, or `blogs`
- `published`: Date in YYYY-MM-DD format
- `authors`: List of author names
- `description`: Brief summary

**Optional fields:**
- `subtitle`: Shown under title
- `toc`: Set to `true` to generate table of contents from h2/h3 headings
- `image`: Thumbnail for homepage timeline
  - **Container size: 200px × 120px** (displayed with `object-fit: contain`)
  - Your image will scale proportionally to fit within the container
  - Any aspect ratio works - no cropping will occur
  - Can be a relative path: `./assets/thumbnail.svg`
  - Or an absolute URL: `https://example.com/image.png`
  - Or a data URI: `data:image/svg+xml,...`
- `teaser`: Interactive figure shown in `<d-title>` after subtitle (uses YAML multiline `|`)
  - Perfect for interactive visualizations that introduce the article
  - Should be a `<figure class="teaser">` with a container div and caption
  - Example:
    ```yaml
    teaser: |
      <figure class="teaser">
        <div id="my-viz"></div>
        <figcaption>
          Hover to interact with the visualization.
        </figcaption>
      </figure>
    ```

### 3. Write Content in Markdown

Use standard markdown with these extensions:

**Headings:** h2 and h3 auto-generate IDs for linking
```markdown
## Understanding Inference
### Prefill vs. Decode
```

**Figures:** Use HTML `<figure>` tags
```markdown
<figure>
  <img src="./assets/my-chart.png" alt="Performance comparison">
  <figcaption>
    Figure 1: Throughput vs. latency tradeoffs. Always cite data sources.
  </figcaption>
</figure>
```

**Citations:** Use `<d-cite>` tags (requires bibliography.bib)
```markdown
Continuous batching improves throughput by 2-10x<d-cite key="orca2022"></d-cite>.
```

**Full-width figures:** Add `class="fullwidth"`
```markdown
<figure class="fullwidth">
  <img src="./assets/large-diagram.svg" alt="System architecture">
  <figcaption>Complete inference stack architecture</figcaption>
</figure>
```

### 4. Add Citations (Optional but Encouraged)

Create `bibliography.bib` in your article folder:

```bibtex
@article{orca2022,
  title={Orca: A Distributed Serving System for Transformer-Based Generative Models},
  author={Yu, Gyeong-In and others},
  journal={OSDI},
  year={2022},
  url={https://www.usenix.org/conference/osdi22/presentation/yu}
}

@article{pagedattention2023,
  title={Efficient Memory Management for Large Language Model Serving with PagedAttention},
  author={Kwon, Woosuk and others},
  journal={SOSP},
  year={2023},
  url={https://arxiv.org/abs/2309.06180}
}
```

Then cite in your markdown:
```markdown
Paged attention<d-cite key="pagedattention2023"></d-cite> eliminates memory fragmentation.
```

### 5. Add Assets

Put images, diagrams, and data files in `assets/`:

```
content/pages/my-article/
├── article.md
└── assets/
    ├── architecture.svg
    ├── benchmark-results.png
    └── data.csv
```

Reference them with relative paths:
```markdown
<figure>
  <img src="./assets/architecture.svg" alt="System architecture">
</figure>
```

## Adding Interactive Visualizations

For TypeScript-powered interactive elements, create visualizations in your article folder.

### 1. Add a Container in article.md

```markdown
<figure class="fullwidth">
  <div id="my-interactive-viz" class="viz-container"></div>
  <figcaption>
    Figure 2: Interactive performance simulator. Adjust parameters to see real-time impact.
  </figcaption>
</figure>
```

### 2. Create visualization.ts (or visualizations.ts)

```
content/pages/my-article/
├── article.md
└── visualizations/
    └── visualization.ts  # or: visualizations.ts, my-viz.ts
```

**Important naming:** File must match one of these patterns:
- `visualization.ts` or `visualization.js`
- `visualizations.ts` or `visualizations.js`  
- `*-viz.ts` or `*-viz.js`

### 3. Write the Visualization Code

```typescript
// content/pages/my-article/visualizations/visualization.ts

export function initMyInteractiveViz(): void {
  const container = document.getElementById('my-interactive-viz');
  if (!container) {
    console.warn('Container #my-interactive-viz not found');
    return;
  }

  // Your visualization code here
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center;">
      <h3>Interactive Visualization</h3>
      <p>Click to interact</p>
    </div>
  `;

  // Add interactivity
  container.addEventListener('click', () => {
    console.log('Visualization clicked!');
  });
}
```

**Export naming:** Function name must start with `init` (e.g., `initMyViz`, `initChart`, `initSimulator`)

### 4. Auto-Discovery

The build system automatically:
1. Finds all `visualization*.ts` and `*-viz.ts` files in your article folder
2. Imports and runs any exported functions starting with `init`
3. Runs them when the page loads

You don't need to manually import or register them!

### Example: D3.js Visualization

```typescript
import * as d3 from 'd3';

export function initPerformanceChart(): void {
  const container = document.getElementById('performance-chart');
  if (!container) return;

  const data = [
    { batchSize: 1, throughput: 10 },
    { batchSize: 4, throughput: 35 },
    { batchSize: 16, throughput: 85 },
    { batchSize: 32, throughput: 120 },
  ];

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 40, left: 50 };

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const xScale = d3.scaleBand()
    .domain(data.map(d => d.batchSize.toString()))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.throughput) || 100])
    .range([height - margin.bottom, margin.top]);

  // Bars
  svg.selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => xScale(d.batchSize.toString()) || 0)
    .attr('y', d => yScale(d.throughput))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - margin.bottom - yScale(d.throughput))
    .attr('fill', 'steelblue');

  // Axes
  svg.append('g')
    .attr('transform', `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale));

  svg.append('g')
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale));
}
```

## React Interactive Tools

For complex interactive applications (like the inference visualizer), use React:

```
content/pages/my-tool/
├── article.md           # Page content wrapping the React app
├── src/
│   ├── App.jsx          # Root React component
│   ├── main.jsx         # React entry point
│   ├── components/      # React components
│   │   ├── ConfigPanel.jsx
│   │   └── ResultsView.jsx
│   ├── engine/          # Logic (e.g., simulation)
│   │   └── simulator.js
│   └── styles.css       # App-specific styles
└── visualizations/
    └── visualization.ts  # Mount the React app
```

**visualization.ts** (mounts React):
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App.jsx';

export function initMyTool() {
  const container = document.getElementById('my-tool-root');
  if (!container) return;
  
  if (container.dataset.mounted === 'true') return;
  container.dataset.mounted = 'true';

  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));
}
```

**article.md**:
```markdown
---
title: My Interactive Tool
category: guidances
subcategory: tools
published: 2025-12-30
...
---

## My Interactive Tool

This tool helps you explore inference performance trade-offs.

<figure class="fullscreen">
  <div id="my-tool-root"></div>
</figure>

## How to Use

- Adjust batch size to see throughput impact
- Change GPU type to compare hardware
- ...
```

See `content/pages/inference-visualizer/` for a complete React example.

## Content Quality Standards

### Technical Rigor
- **Provide specific metrics**: Include actual numbers, not vague improvements
  - ❌ "Much faster"
  - ✅ "2.3x throughput improvement (from 45 req/s to 103 req/s)"

- **Show methodology**: Explain how benchmarks were conducted
  - Hardware specifications (GPU model, memory, CPU)
  - Software versions (vLLM 0.2.7, PyTorch 2.1)
  - Workload characteristics (batch size, sequence length, model)

- **Include error bars**: Show confidence intervals and statistical significance
  - P50, P95, P99 latencies
  - Standard deviation across runs
  - Sample size (n=1000 requests)

- **Validate claims**: Every optimization claim should be reproducible
  - Provide benchmark code or methodology
  - Link to data sources
  - Explain assumptions and limitations

### Transparency Requirements
- **Open source benchmarks**: Provide code and data when possible
- **Environment specifications**: Document exact hardware, software, and configuration
- **Limitations**: Clearly state when results may not generalize
  - "Results measured on H100 GPUs may not apply to A100"
  - "Batch sizes above 32 may cause OOM on smaller models"
- **Conflicts of interest**: Disclose any potential biases

### Field Validation
- **Customer stories**: Include real implementation experiences (with permission)
- **Production constraints**: Address scalability, reliability, and operational concerns
- **Cost analysis**: Provide realistic cost implications
  - $/1M tokens
  - Infrastructure costs
  - Operational overhead
- **Migration paths**: Show how to adopt recommendations in existing systems

### Visual Design Principles

Follow [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/):

- **Show, don't just tell**: Use visualizations to make abstract concepts concrete
- **Progressive disclosure**: Start simple, then add complexity as readers engage
- **Multiple perspectives**: Show the same data from different angles
- **Interactive exploration**: Let readers manipulate parameters to understand relationships

## Testing Your Content

### 1. Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:8080
```

Your article will be at: `http://localhost:8080/my-article.html`

### 2. Check the Build

```bash
# Build for production
npm run build

# Check dist/ folder
ls -la dist/
```

Your article should appear as:
- `dist/my-article.html` (the rendered HTML)
- `dist/my-article/assets/...` (your assets)
- `dist/my-article/bibliography.bib` (if you have citations)

### 3. Verify on Homepage

The homepage (`/` or `/index.html`) should list your article in the timeline if it has:
- `title` in front matter
- `published` date
- `category` (foundations, guidances, or blogs)
- `description`

## Example Articles

**Simple article with figures:**
`content/pages/figure-example/`
- Shows how to use `<figure>` and `<figcaption>`
- Demonstrates TypeScript visualizations
- Uses the auto-discovery system

**Complex article with citations:**
`content/pages/recon-article/`
- Full article with bibliography
- Multiple sections with h2/h3 headings
- Table of contents generated automatically
- Citations using `<d-cite>`

**Interactive React tool:**
`content/pages/inference-visualizer/`
- Complete React application
- Simulation engine
- Real-time visualization
- Complex state management

## Submission Process

1. **Fork** the repository
2. **Create** your article folder in `content/pages/`
3. **Write** `article.md` with proper front matter
4. **Add** assets to `assets/` folder
5. **Add** citations to `bibliography.bib` (if needed)
6. **Create** visualizations in `visualizations/` (if needed)
7. **Test** locally with `npm run dev`
8. **Build** with `npm run build` to verify
9. **Commit** your changes
10. **Submit** a pull request with:
    - Clear description of your contribution
    - Evidence of field validation (where applicable)
    - List of all data sources and methodologies
    - Screenshots of key visualizations

## Getting Help

- **Technical questions**: Open an issue with the "question" label
- **Content review**: Request review from domain experts before submission
- **Visualization help**: See existing examples in `content/pages/`
- **Citation format**: Use BibTeX format (see examples)

## Community Standards

All contributions should:

- **Prioritize reader value** over promotional content
- **Maintain objectivity** while acknowledging real-world constraints
- **Credit collaborators** and data sources appropriately
- **Update content** as the field evolves
- **Follow the tenets** (Inference-First, Deeply Technical, Transparent, Field-Validated, Industry Relevant)

Thank you for contributing to Day1Inference! Together, we're creating the definitive resource for production machine learning inference optimization.
