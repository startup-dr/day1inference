# Contributing to Day1Inference

Welcome! This guide shows you how to contribute inference-focused content to Day1Inference. Each article lives in its own folder with markdown, assets, and optional TypeScript visualizations.

**Table of Contents:**
- [Our Tenets](#our-tenets)
- [Content Structure](#content-structure)
- [Creating an Article](#creating-an-article)
- [Adding Interactive Visualizations](#adding-interactive-visualizations)
- [React Interactive Tools](#react-interactive-tools)
- [Content Quality Standards](#content-quality-standards)
- [Testing Your Content](#testing-your-content)
- [Submission & Review Process](#submission--review-process)
- [Review Guidelines for Reviewers](#review-guidelines-for-reviewers)
- [Getting Help](#getting-help)

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

## Submission & Review Process

Day1Inference uses a peer review process inspired by [Distill's review process](https://distill.pub/journal/). All articles require **2 approving reviews** before publication.

### For Authors: Submitting an Article

1. **Create a branch** for your article:
   ```bash
   git checkout -b article/your-article-name
   ```

2. **Create your article** in `content/pages/your-article-name/`:
   ```
   content/pages/your-article-name/
   ├── article.md
   ├── assets/
   │   └── [images and other assets]
   └── visualizations/  # optional
       └── visualization.ts
   ```

3. **Add required frontmatter** to your article:
   ```yaml
   ---
   title: Your Article Title
   subtitle: Optional subtitle
   category: foundations  # or: guidances, blogs
   published: 2026-01-21
   authors:
     - Your Name
   description: Brief description for SEO and timeline
   ---
   ```

4. **Test locally**:
   ```bash
   npm install
   npm run build
   npm run dev  # Verify at http://localhost:8080
   ```

5. **Create a Pull Request**:
   - Push your branch to GitHub (or fork and push)
   - Open a PR against `main` branch
   - Fill out the PR template completely
   - Include in PR description:
     - **Article category** (foundation/guidance/tool)
     - **Author checklist** (see template)
     - **Abstract/Summary** of the article
     - **Target audience** and prerequisites
     - **Known issues** or areas needing attention
     - **Screenshots** of key visualizations
   - Request reviewers (or editors will assign)

6. **Respond to review feedback**:
   - Address comments inline in the PR
   - Make revisions by pushing new commits
   - Discuss and clarify with reviewers
   - Mark conversations as resolved when addressed
   - Request re-review when ready

7. **Merge and deploy**:
   - Once you have 2 approvals, the PR can be merged
   - GitHub Actions automatically builds and deploys
   - Your article goes live at day1inference.com!

### Example Pull Request

See [PR #1](https://github.com/startup-dr/day1inference/pull/1) for a complete example of:
- How to structure a PR description
- What level of detail to provide
- Example reviews from two reviewers
- How to present your article for review

### Branch Protection

The `main` branch is protected with these rules:
- ✅ **Require pull request reviews** before merging
- ✅ **Require 2 approving reviews** from reviewers
- ✅ **Dismiss stale reviews** when new commits are pushed
- ✅ **Require conversation resolution** before merging

This ensures all articles undergo thorough peer review before publication.

---

## Review Guidelines for Reviewers

### How to Review an Article

1. **You'll be assigned** as a reviewer on a PR (or you can volunteer)
2. **Read the full article** - Use the "Files changed" tab on GitHub
3. **Evaluate using the checklist** (see below)
4. **Provide feedback**:
   - Add inline comments on specific lines in the GitHub PR
   - General comments in the PR conversation
   - Use "Request changes" button if revisions are needed
   - Use "Approve" button when ready for publication
5. **Choose anonymity** - Indicate in your review if you want public credit

### Review Checklist: 10 Dimensions

Rate each dimension on a scale of 1-5 (higher is better) and provide comments:

#### Outstanding Communication (5 dimensions)

1. **Article Structure (1-5)**: Clear intro/motivation, logical flow, appropriate organization, effective headings, strong conclusion
2. **Writing Style (1-5)**: Clear language, appropriate technical depth, well-explained concepts, minimal jargon, engaging
3. **Diagram & Interface Style (1-5)**: High-quality visuals, consistent design, accessible colors, clear labels, professional
4. **Impact of Visualizations (1-5)**: Diagrams enhance understanding, interactives add value, visual examples clarify, figures support narrative
5. **Readability (1-5)**: Appropriate for audience, monotonic complexity increase, no difficulty jumps, key concepts highlighted

#### Scientific Correctness & Integrity (5 dimensions)

6. **Well-Supported Claims (1-5)**: Evidence-backed, appropriate citations, no unsupported assertions, reproducible results
7. **Limitations (1-5)**: Honest evaluation, trade-offs explained, scope bounded, edge cases addressed, caveats stated
8. **Reproducibility (1-5)**: Clear methodology, complete code examples, replicable steps, dependencies listed
9. **Citations (1-5)**: Relevant prior work, recent developments, original sources credited, complete bibliography, working links
10. **Intellectual Honesty (1-5)**: Balanced perspective, rigorous approach, alternative viewpoints, conflicts disclosed, ethics addressed

### What Makes a Good Review?

✅ **Constructive** - Focus on improving the article, not just critiquing
✅ **Specific** - Point to exact lines, sections, or issues
✅ **Actionable** - Provide clear suggestions for improvement
✅ **Balanced** - Note both strengths and weaknesses
✅ **Thorough** - Use the full 10-dimension checklist
✅ **Respectful** - Maintain professional, collegial tone

### Example Review Comments

**Good:**
> Line 42: The claim that "model X outperforms Y by 3x" needs evidence. Consider adding:
> - Link to benchmark paper
> - Your own reproduction with methodology
> - Or rephrase as "In our tests, model X showed 3x improvement..."

**Not as helpful:**
> This section is confusing.

### Common Issues to Check

- [ ] Technical accuracy and correctness
- [ ] Citation completeness (all claims backed by sources)
- [ ] Code examples work and are complete
- [ ] Images load and display properly
- [ ] Links are not broken
- [ ] Spelling and grammar
- [ ] Accessibility (alt text on images, color contrast)
- [ ] Mobile responsiveness of visualizations

### Review Timeline

- **Initial review**: Within 2 weeks of assignment
- **Re-review** (after revisions): Within 1 week

### Final Recommendation

Provide one of these recommendations:

- ✅ **Accept as-is** - Ready to publish without changes
- ✅ **Accept with minor revisions** - Small fixes (typos, formatting, minor clarifications)
- ⚠️ **Major revisions needed** - Significant changes required before acceptance
- ❌ **Reject** - Does not meet standards or fit the publication

### Anonymity Options

You can choose to be:
- **Publicly credited** - Your name listed as a reviewer (with affiliation if desired)
- **Anonymous** - Listed as "Anonymous Reviewer" with no attribution

Indicate your preference in your review comments.

### After Review

Once 2 reviewers approve:
1. Author or editor merges the PR
2. GitHub Actions automatically deploys
3. Article goes live on day1inference.com
4. Non-anonymous reviewers are credited in acknowledgments

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
