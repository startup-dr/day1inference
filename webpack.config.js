const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Handlebars = require("handlebars");
const fs = require("fs");
const markdown = require("markdown-it")({ html: true });
const matter = require("gray-matter");
const glob = require("glob");

const FRAGMENTS_PATH = "src/fragments";
const PAGES_PATH = "content/pages";

const loadFragmentsMap = (() => {
    let cachedFragments = null;
    return (articleDir = null) => {
        if (cachedFragments === null) {
            cachedFragments = {};
            // Load global fragments recursively
            const walkDir = (dir, basePath = '') => {
                const files = fs.readdirSync(dir);
                files.forEach(file => {
                    const filePath = path.join(dir, file);
                    const relativePath = path.join(basePath, file);
                    if (fs.statSync(filePath).isDirectory()) {
                        walkDir(filePath, relativePath);
                    } else if (file.endsWith('.html')) {
                        const nameWithoutExt = relativePath.replace(/\.html$/, '');
                        const fragmentKey = 'fragment-' + nameWithoutExt.replace(/\\/g, '/').replace(/\//g, '/');
                        const content = fs.readFileSync(filePath, "utf8");
                        cachedFragments[fragmentKey] = content;
                    }
                });
            };
            walkDir(FRAGMENTS_PATH);
        }
        
        // Load article-specific fragments if articleDir provided
        const fragments = { ...cachedFragments };
        if (articleDir) {
            const articleFragmentsPath = path.join(articleDir, 'fragments');
            if (fs.existsSync(articleFragmentsPath)) {
                const walkDir = (dir, basePath = '') => {
                    const files = fs.readdirSync(dir);
                    files.forEach(file => {
                        const filePath = path.join(dir, file);
                        const relativePath = path.join(basePath, file);
                        if (fs.statSync(filePath).isDirectory()) {
                            walkDir(filePath, relativePath);
                        } else if (file.endsWith('.html')) {
                            const nameWithoutExt = relativePath.replace(/\.html$/, '');
                            const fragmentKey = 'fragment-' + nameWithoutExt.replace(/\\/g, '/').replace(/\//g, '/');
                            const content = fs.readFileSync(filePath, "utf8");
                            fragments[fragmentKey] = content;
                        }
                    });
                };
                walkDir(articleFragmentsPath);
            }
        }
        
        return fragments;
    };
})();

const transformHandlebars = (data) => {
    const fragments = loadFragmentsMap();
    const template = Handlebars.compile(data.toString('utf8'));
    return template(fragments);
};

const transformMarkdownWithFragments = (data, filepath) => {
    const articleDir = path.dirname(filepath);
    const fragments = loadFragmentsMap(articleDir);
    const parsed = matter(data.toString('utf8'));
    
    // Check if this is a tools subcategory for wider layout
    const isToolsLayout = parsed.data.subcategory === 'tools';
    
    // Extract footnotes from content (footnote definitions at the bottom)
    const footnotes = {};
    const footnoteRegex = /\[\^(\d+)\]:\s*(.+?)(?=\n\[\^|\n\n|$)/gs;
    let match;
    while ((match = footnoteRegex.exec(parsed.content)) !== null) {
        footnotes[match[1]] = match[2].trim();
    }
    
    // Remove footnote definitions from content
    let contentWithoutFootnotes = parsed.content.replace(/\[\^(\d+)\]:\s*.+?(?=\n\[\^|\n\n|$)/gs, '').trim();
    
    // Split content into banner and body using <!-- banner-start --> and <!-- banner-end --> markers
    const bannerStartMatch = contentWithoutFootnotes.match(/<!-- banner-start -->([\s\S]*?)<!-- banner-end -->/);
    const bannerContent = bannerStartMatch ? bannerStartMatch[1].trim() : '';
    const bodyContent = bannerStartMatch 
        ? contentWithoutFootnotes.replace(/<!-- banner-start -->[\s\S]*?<!-- banner-end -->/, '').trim()
        : contentWithoutFootnotes;
    
    const bannerTemplate = Handlebars.compile(bannerContent);
    const bodyTemplate = Handlebars.compile(bodyContent);
    
    const bannerHtml = bannerContent ? markdown.render(bannerTemplate(fragments)) : '';
    let bodyHtml = markdown.render(bodyTemplate(fragments));
    
    // Replace inline footnote references [^1] with citation links
    bodyHtml = bodyHtml.replace(/\[\^(\d+)\]/g, (match, num) => {
        const footnoteText = footnotes[num] || '';
        return `<span class="citation"><a href="#ref-${num}">[${num}]</a><span class="citation-popup">${footnoteText}</span></span>`;
    });
    
    // Generate TOC from headers
    const tocEnabled = parsed.data.toc === true; // default false
    let tocHtml = '';
    if (tocEnabled) {
        const headers = [];
        const headerRegex = /<h([2-3])>(.*?)<\/h\1>/g;
        let match;
        while ((match = headerRegex.exec(bodyHtml)) !== null) {
            const level = match[1];
            const text = match[2].replace(/<[^>]*>/g, ''); // strip HTML tags
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            headers.push({ level, text, id });
        }
        
        if (headers.length > 0) {
            tocHtml = '<div class="toc-title">Contents</div>' + 
                headers.map(h => `<a href="#${h.id}" class="toc-link toc-${h.level}">${h.text}</a>`).join('');
        }
    }
    
    // Add IDs to headers in body HTML
    const bodyHtmlWithIds = bodyHtml.replace(/<h([2-3])>(.*?)<\/h\1>/g, (match, level, text) => {
        const cleanText = text.replace(/<[^>]*>/g, '');
        const id = cleanText.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>`;
    });
    
    // Generate references section if footnotes exist
    let referencesHtml = '';
    if (Object.keys(footnotes).length > 0) {
        const sortedRefs = Object.entries(footnotes).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
        referencesHtml = `
        <div class="references">
            <h2>References</h2>
            ${sortedRefs.map(([num, text]) => `
                <div class="reference-item" id="ref-${num}">
                    <span class="reference-number">[${num}]</span>
                    <span>${text}</span>
                </div>
            `).join('')}
        </div>`;
    }
    
    const authors = parsed.data.authors || [];
    const reviewers = parsed.data.reviewers || [];
    const subtitle = parsed.data.subtitle || '';
    const pubDate = parsed.data.date ? new Date(parsed.data.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York'
    }) : '';
    
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/svg+xml" href="/logo-icon.svg">
    <link rel="stylesheet" href="/styles/main.css">
    <title>${parsed.data.title || 'Day 1 Inference'}</title>
</head>
<body${isToolsLayout ? ' class="tools-layout"' : ''}>
    ${fragments['fragment-nav']}
    
    <div class="article-grid">
        <header class="article-header">
            ${parsed.data.category ? `<div class="article-category">${parsed.data.category.charAt(0).toUpperCase() + parsed.data.category.slice(1)}</div>` : ''}
            <h1>${parsed.data.title || ''}</h1>
            ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
        </header>
        
        ${bannerHtml ? `<div class="banner">${bannerHtml}</div>` : ''}
    </div>
    
    ${authors.length || reviewers.length || pubDate ? `
    <div class="metadata">
        <div class="metadata-wrapper">
            ${authors.length ? `<div class="meta-item"><strong>Authors</strong>${authors.map(a => `<div>${a}</div>`).join('')}</div>` : ''}
            ${reviewers.length ? `<div class="meta-item"><strong>Reviewers</strong>${reviewers.map(r => `<div>${r}</div>`).join('')}</div>` : ''}
            ${pubDate ? `<div class="meta-item"><strong>Published</strong><div>${pubDate}</div></div>` : ''}
        </div>
    </div>
    ` : ''}
    
    <div class="article-grid">
        ${tocEnabled ? `<aside class="toc">${tocHtml}</aside>` : ''}
        
        <article class="article-body${tocEnabled ? '' : ' no-toc'}">
            ${bodyHtmlWithIds}
        </article>
    </div>
</body>
</html>`;
};

// Generate index page with article listings
const generateIndex = () => {
    const articles = [];
    
    // Load external links
    const externalLinksPath = path.join(PAGES_PATH, '../external-links.json');
    let externalLinks = [];
    if (fs.existsSync(externalLinksPath)) {
        externalLinks = JSON.parse(fs.readFileSync(externalLinksPath, 'utf8'));
        externalLinks.forEach(link => {
            const date = new Date(link.created);
            const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'America/New_York'
            });
            
            articles.push({
                title: link.title,
                description: link.description || '',
                category: link.category,
                subcategory: link.subcategory || null,
                image: link.image || null,
                date: link.created,
                updated: link.updated || null,
                displayDate: formattedDate,
                displayUpdated: null,
                url: link.url,
                isExternal: true
            });
        });
    }
    
    // Find all markdown files (both root level and in folders)
    const findMarkdownFiles = (dir) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        const files = [];
        
        entries.forEach(entry => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                // Look for article.md in subdirectories
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
        
        if (parsed.data.title && (parsed.data.created || parsed.data.date) && parsed.data.category) {
            const created = parsed.data.created || parsed.data.date; // fallback to date for old articles
            const date = new Date(created);
            const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'America/New_York'
            });
            
            let formattedUpdated = null;
            if (parsed.data.updated) {
                const updated = new Date(parsed.data.updated);
                formattedUpdated = updated.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    timeZone: 'America/New_York'
                });
            }
            
            // Generate URL from file path
            const relativePath = path.relative(PAGES_PATH, file);
            const urlPath = relativePath.endsWith('/article.md') 
                ? path.dirname(relativePath)
                : relativePath.replace('.md', '');
            
            articles.push({
                title: parsed.data.title,
                description: parsed.data.description || '',
                category: parsed.data.category,
                subcategory: parsed.data.subcategory || null,
                image: parsed.data.image || null,
                date: created,
                updated: parsed.data.updated || null,
                displayDate: formattedDate,
                displayUpdated: formattedUpdated,
                url: urlPath + '.html'
            });
        }
    });
    
    // Sort by updated date if exists, otherwise date
    articles.sort((a, b) => {
        const dateA = new Date(a.updated || a.date);
        const dateB = new Date(b.updated || b.date);
        return dateB - dateA;
    });
    
    // Group by category
    const byCategory = {
        foundations: articles.filter(a => a.category === 'foundations'),
        guidances: articles.filter(a => a.category === 'guidances'),
        blogs: articles.filter(a => a.category === 'blogs')
    };
    
    return { articles, byCategory };
};

const generateGuidancesHTML = (articles, fragments) => {
    const bySubcategory = {
        solutions: articles.filter(a => a.subcategory === 'solutions'),
        tools: articles.filter(a => a.subcategory === 'tools'),
        benchmarks: articles.filter(a => a.subcategory === 'benchmarks')
    };
    
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Guidances</title>
    <link rel="icon" type="image/svg+xml" href="logo-icon.svg">
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body>
    ${fragments['fragment-nav']}
    
    <main>
        <div class="hero">
            <h1>Guidances</h1>
            <p>Best practices and how-to guides</p>
        </div>
        
        <div class="search-box">
            <input type="text" id="search" placeholder="Search guidances..." />
        </div>
        
        <div class="subcategories">
            ${Object.entries(bySubcategory).map(([subcat, items]) => `
                <section class="subcategory-section">
                    <h2>${subcat.charAt(0).toUpperCase() + subcat.slice(1)}</h2>
                    <div class="guidance-list">
                        ${items.map(a => `
                            <article class="guidance-item" data-title="${a.title.toLowerCase()}" data-description="${a.description.toLowerCase()}">
                                <h3><a href="${a.url}">${a.title}${a.isExternal ? ' <svg style="display: inline; width: 0.7em; height: 0.7em; margin-left: 0.3em; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>' : ''}</a></h3>
                                <div class="description">${a.description}</div>
                            </article>
                        `).join('')}
                    </div>
                </section>
            `).join('')}
        </div>
    </main>
    
    <link rel="stylesheet" href="/styles/guidances.css">
    
    <script>
        document.getElementById('search').addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.guidance-item').forEach(item => {
                const title = item.dataset.title;
                const description = item.dataset.description;
                if (title.includes(query) || description.includes(query)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    </script>
</body>
</html>`;
};

class GenerateIndexPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateIndexPlugin', (compilation, callback) => {
            const { articles, byCategory } = generateIndex();
            const fragments = loadFragmentsMap();
            
            // Generate main index page
            const indexTemplate = generateIndexHTML(articles, fragments, 'Day 1 Inference', 'Machine learning foundations, guidances, and insights', true);
            
            compilation.assets['index.html'] = {
                source: () => indexTemplate,
                size: () => indexTemplate.length
            };
            
            // Generate category pages (sorted by updated date)
            Object.entries(byCategory).forEach(([category, categoryArticles]) => {
                if (categoryArticles.length > 0) {
                    // Sort by updated date for category pages
                    const sortedArticles = [...categoryArticles].sort((a, b) => {
                        const dateA = new Date(a.updated || a.date);
                        const dateB = new Date(b.updated || b.date);
                        return dateB - dateA;
                    });
                    
                    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
                    
                    // Special layout for guidances
                    if (category === 'guidances') {
                        const categoryHTML = generateGuidancesHTML(sortedArticles, fragments);
                        compilation.assets[`${category}.html`] = {
                            source: () => categoryHTML,
                            size: () => categoryHTML.length
                        };
                    } else if (category === 'blogs') {
                        // Timeline view for blogs
                        const categoryHTML = generateIndexHTML(sortedArticles, fragments, categoryTitle, `${categoryTitle} articles`, true);
                        compilation.assets[`${category}.html`] = {
                            source: () => categoryHTML,
                            size: () => categoryHTML.length
                        };
                    } else {
                        const categoryHTML = generateIndexHTML(sortedArticles, fragments, categoryTitle, `${categoryTitle} articles`, false);
                        compilation.assets[`${category}.html`] = {
                            source: () => categoryHTML,
                            size: () => categoryHTML.length
                        };
                    }
                }
            });
            
            callback();
        });
    }
}

const generateIndexHTML = (articles, fragments, title, subtitle, isMainPage = false) => {
    if (isMainPage) {
        // Timeline view for main page
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="icon" type="image/svg+xml" href="logo-icon.svg">
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body>
    ${fragments['fragment-nav']}
    
    <main>
        <div class="hero">
            <h1>${title}</h1>
            <p>${subtitle}</p>
        </div>
        
        <div class="articles">
            ${articles.map(a => `
                <article class="article">
                    <div class="article-content">
                        <div class="article-text">
                            <div class="meta">
                                ${a.category}${a.subcategory ? ` / ${a.subcategory}` : ''} • ${a.displayDate}
                            </div>
                            <h2><a href="${a.url}">${a.title}${a.isExternal ? ' <svg style="display: inline; width: 0.8em; height: 0.8em; margin-left: 0.3em; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>' : ''}</a></h2>
                            <div class="description">${a.description}</div>
                        </div>
                        ${a.image ? `<img src="${a.image}" alt="${a.title}" class="article-image">` : ''}
                    </div>
                </article>
            `).join('')}
        </div>
    </main>
    
    <link rel="stylesheet" href="/styles/timeline.css">
</body>
</html>`;
    }
    
    // Grid view for category pages
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="icon" type="image/svg+xml" href="logo-icon.svg">
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body>
    ${fragments['fragment-nav']}
    
    <main>
        <div class="hero">
            <h1>${title}</h1>
            <p>${subtitle}</p>
        </div>
        
        <div class="articles-grid">
            ${articles.map(a => `
                <article class="article-card">
                    ${a.image ? `<img src="${a.image}" alt="${a.title}" class="card-image">` : ''}
                    <div class="card-content">
                        <div class="meta">
                            ${a.category}${a.subcategory ? ` / ${a.subcategory}` : ''} • 
                            ${a.displayUpdated ? `Last Updated ${a.displayUpdated}` : a.displayDate}
                        </div>
                        <h2><a href="${a.url}">${a.title}${a.isExternal ? ' <svg style="display: inline; width: 0.8em; height: 0.8em; margin-left: 0.3em; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>' : ''}</a></h2>
                        <div class="description">${a.description}</div>
                    </div>
                </article>
            `).join('')}
        </div>
    </main>
    
    <link rel="stylesheet" href="/styles/grid.css">
</body>
</html>`;
};

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "src/fragments/**/*", to: "fragments/[name][ext]" },
                { from: "src/styles/**/*", to: "styles/[name][ext]" },
                {
                    from: "content/pages/**/*.md",
                    to: ({ context, absoluteFilename }) => {
                        const relativePath = path.relative(path.join(context, 'content/pages'), absoluteFilename);
                        const outputPath = relativePath.endsWith('/article.md')
                            ? path.dirname(relativePath) + '.html'
                            : relativePath.replace('.md', '.html');
                        return outputPath;
                    },
                    transform: (content, absoluteFilename) => transformMarkdownWithFragments(content, absoluteFilename),
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
