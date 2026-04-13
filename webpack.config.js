const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");
const markdown = require("markdown-it")({ html: true });
const matter = require("gray-matter");
const glob = require("glob");
const { processCitations } = require('./build/citations');

const PAGES_PATH = "content/pages";
const JOURNEYS_PATH = "content/journeys";

// HTML escaping for build-time template interpolation
function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Shared HTML fragments to avoid duplication across page templates
const getNavHTML = () => `
<nav class="site-nav">
    <a href="/" class="nav-logo">
        <img src="/logo.svg" alt="Day 1 Inference" />
        Day 1 Inference
        <span class="nav-logo-tagline">
            <span class="powered-by">powered by</span> <span class="aws">AWS</span>
        </span>
    </a>
    <div class="nav-links">
        <a href="/timeline">All Content</a>
        <a href="https://aws.amazon.com/blogs/machine-learning/" target="_blank" rel="noopener">Blogs ↗</a>
    </div>
</nav>`;

const getHeadHTML = (title, { description = '', extraLinks = '', extraStyles = '' } = {}) => `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
${description ? `<meta name="description" content="${escapeAttr(description)}">` : ''}
<link rel="icon" type="image/svg+xml" href="/logo-icon.svg">
${extraLinks}${extraStyles}
</head>`;

// Reusable search component HTML
const getSearchHTML = (showBrowseLinks = true) => {
    return `
        <div style="text-align: center; margin-bottom: 2rem;">
            ${showBrowseLinks ? '<h3 style="color: #232F3E; font-size: 1.3rem; margin-bottom: 1rem;">Know what you\'re looking for? Search here</h3>' : '<h3 style="color: #232F3E; font-size: 1.3rem; margin-bottom: 1rem;">Search</h3>'}
            <div class="search-container">
                <input 
                    type="text" 
                    id="site-search" 
                    placeholder="Search articles by title or content..."
                    class="search-input"
                />
                <div id="search-results" class="search-results"></div>
            </div>
        </div>
        ${showBrowseLinks ? `
        <div style="text-align: center; color: #666; font-size: 0.95rem;">
            Or <a href="/timeline" style="color: #007f80; text-decoration: none;">browse all content</a> 
            or read our <a href="/recon-article" style="color: #007f80; text-decoration: none;">foundational guide to the RECON framework</a>.
        </div>
        ` : ''}
    `;
};

// Search initialization script
const getSearchScript = (articleIndexJSON) => {
    return `<script type="module">
import { initSearch } from '/search-component.js';

// Article search index
const articleIndex = ${articleIndexJSON};

initSearch(articleIndex);
</script>`;
};

const generateJourneyPage = (journeyData) => {
    const typeColors = {
        overview: '#007f80',    // Dark turquoise - foundational
        article: '#006280',     // Darkest blue - technical depth
        solution: '#38ad87',    // Medium - actionable
        tool: '#f59e0b'         // Orange/yellow - interactive
    };
    
    const typeLabels = {
        overview: 'Overview',
        article: 'Deep Dive',
        solution: 'Solution',
        tool: 'Tool'
    };
    
    // Helper to get metadata from internal articles
    const getArticleMetadata = (url) => {
        if (!url || url.startsWith('http')) return null;
        
        // Convert URL to file path
        const articlePath = url.replace(/^\//, '').replace('.html', '');
        
        // Try to find the article.md file
        const possiblePaths = [
            path.join(PAGES_PATH, articlePath, 'article.md'),
            path.join(PAGES_PATH, `${articlePath}.md`)
        ];
        
        for (const filePath of possiblePaths) {
            if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf8');
                const parsed = matter(content);
                return {
                    title: parsed.data.title || '',
                    description: parsed.data.description || parsed.data.subtitle || ''
                };
            }
        }
        
        return null;
    };
    
    const renderCard = (card) => {
        const color = typeColors[card.type] || '#666';
        const label = typeLabels[card.type] || 'Content';
        const isComingSoon = card.status === 'coming-soon';
        const isExternal = card.url && (card.url.startsWith('http://') || card.url.startsWith('https://'));
        
        // Get metadata from internal articles if sourceType is internal
        let title = card.title || '';
        let description = card.description || '';
        
        if (card.sourceType === 'internal' && card.url) {
            const metadata = getArticleMetadata(card.url);
            if (metadata) {
                title = metadata.title;
                description = metadata.description;
            }
        }
        
        const cardStyle = '';
        const tag = (card.url && !isComingSoon) ? 'a' : 'div';
        const hrefAttr = (card.url && !isComingSoon) ? `href="${escapeAttr(card.url)}"` : '';
        const targetAttr = isExternal ? 'target="_blank" rel="noopener"' : '';
        const comingSoonClass = isComingSoon ? ' journey-content-card--coming-soon' : '';

        return `
        <${tag} class="journey-content-card${comingSoonClass}" ${hrefAttr} ${targetAttr} style="${cardStyle}">
            <div class="card-header">
                <span class="card-type" style="background: ${color};">${escapeHtml(label)}</span>
                ${isComingSoon ? '<span class="coming-soon-badge">Coming Soon</span>' : ''}
                ${isExternal && !isComingSoon ? '<span class="external-badge">↗</span>' : ''}
            </div>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(description)}</p>
        </${tag}>
        `;
    };
    
    const sectionsHTML = journeyData.sections.map(section => `
        <div class="journey-section">
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            ${section.description ? `<p class="section-description">${escapeHtml(section.description)}</p>` : ''}
            <div class="section-cards">
                ${section.cards.map(renderCard).join('')}
            </div>
        </div>
    `).join('');
    
    return `<!doctype html>
<html lang="en">
${getHeadHTML(journeyData.title + ' - Day 1 Inference', { description: journeyData.description, extraStyles: `<style>
.section-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.journey-content-card {
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    transition: all 0.2s ease;
    text-decoration: none;
    color: inherit;
    display: block;
}

.journey-content-card:hover {
    border-color: #38ad87;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(56, 173, 135, 0.3);
}

.journey-content-card--coming-soon {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
}

.journey-content-card--coming-soon .card-type {
    background: #999 !important;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
}

.card-type {
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.coming-soon-badge {
    color: #999;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.external-badge {
    color: #666;
    font-size: 1.25rem;
}

.journey-content-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: #232F3E;
}

.journey-content-card p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
}

.journey-section {
    margin: 3rem 0;
}

.section-title {
    font-size: 1.75rem;
    color: #232F3E;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.section-description {
    color: #666;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .section-cards {
        grid-template-columns: 1fr;
    }
}
</style>` })}
<body>

${getNavHTML()}

<div style="text-align: center; padding: 3rem 2rem 1rem;">
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: #232F3E;">${escapeHtml(journeyData.title)}</h1>
    <p style="font-size: 1.1rem; color: #666; max-width: 800px; margin: 0 auto;">${escapeHtml(journeyData.subtitle)}</p>
</div>

<div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem 4rem;">
    ${sectionsHTML}
    
    <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #e0e0e0; text-align: center;">
        <p style="color: #666;">
            <a href="/" style="color: #007f80; text-decoration: none;">← Back to all journeys</a>
        </p>
    </div>
</div>

<script src="/main.bundle.js"></script>
</body>
</html>`;
};

const transformMarkdownWithFigures = (data, filepath) => {
    const articleDir = path.dirname(filepath);
    const parsed = matter(data.toString('utf8'));
    
    let bodyHtml = markdown.render(parsed.content);
    
    // Check for bibliography.bib file in article directory
    const bibPath = path.join(articleDir, 'bibliography.bib');
    const hasBibFile = fs.existsSync(bibPath);
    
    // Generate TOC from headers
    const tocEnabled = parsed.data.toc === true;
    let tocHtml = '';
    if (tocEnabled) {
        const headers = [];
        const headerRegex = /<h([2-3])>(.*?)<\/h\1>/g;
        let match;
        while ((match = headerRegex.exec(bodyHtml)) !== null) {
            const level = match[1];
            const text = match[2].replace(/<[^>]*>/g, '');
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            headers.push({ level, text, id });
        }
        
        if (headers.length > 0) {
            tocHtml = '<div class="toc-title">Contents</div>' + 
                headers.map(h => `<a href="#${h.id}" class="toc-link toc-${h.level}">${h.text}</a>`).join('');
        }
    }
    
    // Add IDs to headers
    const bodyHtmlWithIds = bodyHtml.replace(/<h([2-3])>(.*?)<\/h\1>/g, (match, level, text) => {
        const cleanText = text.replace(/<[^>]*>/g, '');
        const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>`;
    });

    // Process citations through build-time processor
    const bibContent = hasBibFile ? fs.readFileSync(bibPath, 'utf8') : '';
    const { html: processedHtml, bibliographyHtml } = processCitations(bodyHtmlWithIds, bibContent);

    const authors = parsed.data.authors || [];
    const reviewers = parsed.data.reviewers || [];
    const subtitle = parsed.data.subtitle || '';
    const teaser = parsed.data.teaser || '';
    
    // Format dates
    const publishedDate = parsed.data.published ? new Date(parsed.data.published).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York'
    }) : '';
    
    const updatedDate = parsed.data.updated ? new Date(parsed.data.updated).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York'
    }) : '';
    
    // Build custom byline HTML (replaces Distill's auto-generated d-byline)
    const bylineHTML = `
<div class="custom-byline base-grid">
  <div class="byline-content">
    <div class="byline-section">
      <h3>Authors</h3>
      ${authors.map(author => `<p>${escapeHtml(author)}</p>`).join('')}
    </div>
    ${reviewers.length > 0 ? `
    <div class="byline-section">
      <h3>Reviewers</h3>
      ${reviewers.map(reviewer => `<p>${escapeHtml(reviewer)}</p>`).join('')}
    </div>
    ` : ''}
    ${publishedDate ? `
    <div class="byline-section">
      <h3>Published</h3>
      <p>${publishedDate}</p>
    </div>
    ` : ''}
    ${updatedDate ? `
    <div class="byline-section">
      <h3>Updated</h3>
      <p>${updatedDate}</p>
    </div>
    ` : ''}
  </div>
</div>
    `;
    
    return `<!doctype html>
<html lang="en">
${getHeadHTML(parsed.data.title || 'Day 1 Inference', { description: parsed.data.description || '', extraLinks: '<link rel="stylesheet" href="/styles/article.css">' })}
<body>

${getNavHTML()}

<header class="article-header">
    <h1>${escapeHtml(parsed.data.title || '')}</h1>
    ${subtitle ? `<p class="subtitle">${escapeHtml(subtitle)}</p>` : ''}
    ${/* teaser is intentionally raw HTML from frontmatter */ ''}
    ${teaser ? `\n\n${teaser}` : ''}
</header>
${bylineHTML}

<article class="article-body">
${processedHtml}
</article>

${bibliographyHtml ? `
<section class="article-appendix">
    ${bibliographyHtml}
</section>
` : ''}

<script src="/main.bundle.js"></script>
</body>
</html>`;
};

const generateIndex = () => {
    const articles = [];
    
    const findMarkdownFiles = (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        const files = [];
        
        entries.forEach(entry => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                const articlePath = path.join(fullPath, 'article.md');
                if (fs.existsSync(articlePath)) {
                    files.push(articlePath);
                }
            } else if (entry.name.endsWith('.md')) {
                files.push(fullPath);
            }
        });
        
        return files;
    };
    
    const files = findMarkdownFiles(PAGES_PATH);
    
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = matter(content);
        
        // Skip draft articles
        if (parsed.data.title && parsed.data.published && parsed.data.category && parsed.data.category !== 'draft') {
            const published = parsed.data.published;
            const date = new Date(published);
            const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'America/New_York'
            });
            
            const relativePath = path.relative(PAGES_PATH, file);
            const urlPath = relativePath.endsWith('/article.md') 
                ? path.dirname(relativePath)
                : relativePath.replace('.md', '');
            
            // Resolve relative image paths
            let imagePath = parsed.data.image || '';
            if (imagePath && imagePath.startsWith('./')) {
                // Convert ./assets/image.svg to article-name/assets/image.svg
                const articleDir = path.dirname(relativePath);
                const isArticleMd = relativePath.endsWith('/article.md');
                
                if (isArticleMd) {
                    // For article.md files, the article directory is the parent
                    // Example: recon-article/article.md -> recon-article/
                    const imageRelative = imagePath.replace('./', '');
                    imagePath = '/' + articleDir + '/' + imageRelative;
                } else {
                    // For standalone .md files, use the file's directory
                    // Example: simple-article.md -> simple-article/ (if assets exist)
                    const baseDir = path.dirname(relativePath);
                    const imageRelative = imagePath.replace('./', '');
                    imagePath = '/' + path.join(baseDir, imageRelative).replace(/\\/g, '/');
                }
                
                // Normalize path separators for web
                imagePath = imagePath.replace(/\\/g, '/');
            }
            
            // Extract plain text from markdown content for search
            const plainText = parsed.content
                .replace(/```[\s\S]*?```/g, '') // Remove code blocks
                .replace(/`[^`]+`/g, '') // Remove inline code
                .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Extract link text
                .replace(/#+\s+/g, '') // Remove markdown headers
                .replace(/[*_~]/g, '') // Remove emphasis markers
                .replace(/\n+/g, ' ') // Replace newlines with spaces
                .replace(/\s+/g, ' ') // Normalize whitespace
                .trim();
            
            articles.push({
                title: parsed.data.title,
                description: parsed.data.description || '',
                category: parsed.data.category,
                date: published,
                displayDate: formattedDate,
                url: '/' + urlPath,
                image: imagePath,
                content: plainText // Full content for search index
            });
        }
    });
    
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return articles;
};

class GenerateIndexPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateIndexPlugin', (compilation, callback) => {
            const articles = generateIndex();
            
            // Generate journey pages from JSON
            const journeyFiles = glob.sync(`${JOURNEYS_PATH}/*.json`);
            journeyFiles.forEach(file => {
                const journeyData = JSON.parse(fs.readFileSync(file, 'utf8'));
                const fileName = path.basename(file, '.json');
                // Strip number prefix for output filename (e.g., "1-latency-critical" -> "latency-critical")
                const journeyName = fileName.replace(/^\d+-/, '');
                const journeyHTML = generateJourneyPage(journeyData);
                
                compilation.assets[`${journeyName}/index.html`] = {
                    source: () => journeyHTML,
                    size: () => journeyHTML.length
                };
            });
            
            const indexHTML = `<!doctype html>
<html lang="en">
${getHeadHTML('Day 1 Inference', { description: 'Choose your inference journey', extraLinks: '<link rel="stylesheet" href="/styles/search.css">', extraStyles: `<style>
.journey-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 0 0 3rem 0;
}

.journey-card {
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
    display: block;
}

.journey-card:hover {
    border-color: #38ad87;
    box-shadow: 0 8px 24px rgba(56, 173, 135, 0.25);
    transform: translateY(-4px);
}

.journey-card h2 {
    color: #232F3E;
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.journey-card p {
    color: #555;
    line-height: 1.6;
    margin: 0;
}

.journey-card .arrow {
    margin-top: 1rem;
    color: #38ad87;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.journey-card:hover .arrow {
    gap: 0.75rem;
}

.journey-card--coming-soon {
    opacity: 0.75;
}

.journey-card--coming-soon:hover {
    opacity: 1;
}

@media (max-width: 1024px) {
    .journey-cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

.search-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
}

.search-input {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
}

.search-input:focus {
    border-color: #38ad87;
}

.search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 2px solid #e0e0e0;
    border-top: none;
    border-radius: 0 0 8px 8px;
    max-height: 400px;
    overflow-y: auto;
    display: none;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-result-item {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f0f0f0;
    text-decoration: none;
    color: inherit;
    display: block;
    transition: background-color 0.2s;
}

.search-result-item:hover {
    background-color: #f8f9fa;
}

.search-result-item:last-child {
    border-bottom: none;
}

.search-result-category {
    font-size: 0.75rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
}

.search-result-title {
    font-weight: 600;
    color: #232F3E;
    margin-bottom: 0.25rem;
}

.search-result-description {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.4;
}

.search-result-context {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.5;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: #f8f9fa;
    border-radius: 4px;
    font-style: italic;
}

.search-result-context mark {
    background: #d0ea65;
    color: #232F3E;
    font-weight: 600;
    padding: 0.1rem 0.2rem;
    border-radius: 2px;
    font-style: normal;
}

.search-result-item.no-results {
    color: #888;
    text-align: center;
    font-style: italic;
}

.search-result-item.search-more {
    color: #666;
    text-align: center;
    font-size: 0.9rem;
    background-color: #f8f9fa;
}

.search-result-item.search-more a {
    color: #007f80;
    text-decoration: none;
    font-weight: 600;
}

.search-result-item.search-more a:hover {
    text-decoration: underline;
}
</style>` })}
<body>

${getNavHTML()}

<div style="text-align: center; padding: 4rem 2rem 2rem;">
    <h1 style="font-size: 3rem; margin-bottom: 1rem; color: #232F3E;">Day 1 Inference</h1>
    <p style="font-size: 1.25rem; color: #666;">Choose your inference optimization journey</p>
</div>

<div style="max-width: 1400px; margin: 0 auto; padding: 0 2rem 4rem;">
    <div class="journey-cards">
        ${(() => {
            const journeyFiles = glob.sync(`${JOURNEYS_PATH}/*.json`).sort();
            const journeyIcons = {
                'latency-critical': '⚡',
                'production-inference': '📈',
                'accuracy-critical': '🎯'
            };
            
            return journeyFiles.map(file => {
                const journeyData = JSON.parse(fs.readFileSync(file, 'utf8'));
                const fileName = path.basename(file, '.json');
                // Strip number prefix (e.g., "1-latency-critical" -> "latency-critical")
                const journeyName = fileName.replace(/^\d+-/, '');
                const icon = journeyIcons[journeyName] || '📚';
                const isAvailable = journeyData.status === 'available';
                
                return `
                        <a href="/${escapeAttr(journeyName)}" class="journey-card${!isAvailable ? ' journey-card--coming-soon' : ''}">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <h2 style="margin: 0 0 1rem 0;">${icon} ${escapeHtml(journeyData.title)}</h2>
                                ${!isAvailable ? '<span style="background: #e0e0e0; color: #666; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">COMING SOON</span>' : ''}
                            </div>
                            <p>${escapeHtml(journeyData.description)}</p>
                            <div class="arrow">${isAvailable ? 'Start journey' : 'Preview journey'} →</div>
                        </a>
                    `;
            }).join('\n');
        })()}
    </div>

    <div style="margin-top: 4rem;">
        ${getSearchHTML(true)}
    </div>
</div>

<footer style="background: white; color: #666; padding: 2rem; text-align: center; margin-top: 4rem; border-top: 1px solid #e0e0e0;">
    <p style="margin: 0; font-size: 0.9rem;">
        Copyright © 2026, <a href="https://aws.amazon.com" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">Amazon Web Services, Inc.</a> 
        (<a href="https://aws.amazon.com/terms/?nc1=f_pr" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">Terms & Conditions</a>)
    </p>
</footer>

${getSearchScript(JSON.stringify(articles.map(a => ({
    title: a.title,
    description: a.description,
    category: a.category,
    url: a.url,
    content: a.content
}))))}
<script src="/main.bundle.js"></script>
</body>
</html>`;

            // Also generate timeline page
            const timelineHTML = `<!doctype html>
<html lang="en">
${getHeadHTML('Day 1 Inference - All Content', { description: 'Machine learning foundations, guidances, and insights', extraLinks: '<link rel="stylesheet" href="/styles/search.css">' })}
<body>

${getNavHTML()}

<main style="max-width: 900px; margin: 0 auto; padding: 2rem;">
<div style="max-width: 800px; padding: 0 2rem;">
    ${getSearchHTML(false)}
</div>
${articles.map(a => `
    <div class="article-card">
        <div class="article-content">
            <div class="article-meta">${escapeHtml(a.category)} • ${escapeHtml(a.displayDate)}</div>
            <h3><a href="${escapeAttr(a.url)}">${escapeHtml(a.title)}</a></h3>
            <p>${escapeHtml(a.description)}</p>
        </div>
        ${a.image ? `<img src="${escapeAttr(a.image)}" alt="${escapeAttr(a.title)}" class="article-image" />` : ''}
    </div>
`).join('')}
</main>

${getSearchScript(JSON.stringify(articles.map(a => ({
    title: a.title,
    description: a.description,
    category: a.category,
    url: a.url,
    content: a.content
}))))}
<script src="/main.bundle.js"></script>
</body>
</html>`;

            compilation.assets['index.html'] = {
                source: () => indexHTML,
                size: () => indexHTML.length
            };

            compilation.assets['timeline/index.html'] = {
                source: () => timelineHTML,
                size: () => timelineHTML.length
            };
            
            callback();
        });
    }
}

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "content/pages"),
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "content/pages")],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "content/pages"),
        ],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/styles/**/*", to: "styles/[name][ext]" },
                { from: "src/components/search.js", to: "search-component.js" },
                {
                    from: "content/pages/**/*.md",
                    to: ({ context, absoluteFilename }) => {
                        const relativePath = path.relative(path.join(context, 'content/pages'), absoluteFilename);
                        const outputPath = relativePath.endsWith('/article.md')
                            ? path.dirname(relativePath) + '/index.html'
                            : relativePath.replace('.md', '/index.html');
                        return outputPath;
                    },
                    transform: (content, absoluteFilename) => transformMarkdownWithFigures(content, absoluteFilename),
                },
                {
                    from: "content/pages/**/assets/**/*",
                    to: ({ context, absoluteFilename }) => {
                        const relativePath = path.relative(path.join(context, 'content/pages'), absoluteFilename);
                        return relativePath;
                    },
                    noErrorOnMissing: true,
                },
                { from: "public/CNAME", to: "CNAME", noErrorOnMissing: true },
                { from: "public/404.html", to: "404.html", noErrorOnMissing: true },
                { from: "public/logo.svg", to: "logo.svg", noErrorOnMissing: true },
                { from: "public/logo-icon.svg", to: "logo-icon.svg", noErrorOnMissing: true },
            ],
        }),
        new GenerateIndexPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        watchFiles: ['src/**/*', 'content/**/*'],
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
