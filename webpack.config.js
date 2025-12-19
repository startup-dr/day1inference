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
    return () => {
        if (cachedFragments === null) {
            cachedFragments = {};
            const files = fs.readdirSync(FRAGMENTS_PATH);
            files.forEach(file => {
                if (file.endsWith('.html')) {
                    const name = file.replace('.html', '');
                    const content = fs.readFileSync(path.join(FRAGMENTS_PATH, file), "utf8");
                    cachedFragments[`fragment-${name}`] = content;
                }
            });
        }
        return cachedFragments;
    };
})();

const transformHandlebars = (data) => {
    const fragments = loadFragmentsMap();
    const template = Handlebars.compile(data.toString('utf8'));
    return template(fragments);
};

const transformMarkdownWithFragments = (data) => {
    const fragments = loadFragmentsMap();
    const parsed = matter(data.toString('utf8'));
    const template = Handlebars.compile(parsed.content);
    const mdWithFragments = template(fragments);
    const htmlContent = markdown.render(mdWithFragments);
    
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${parsed.data.title || 'Day 1 Inference'}</title>
</head>
<body>
    ${fragments['fragment-nav']}
    <main>
        <article>
            ${htmlContent}
        </article>
    </main>
</body>
</html>`;
};

// Generate index page with article listings
const generateIndex = () => {
    const articles = [];
    const files = glob.sync(`${PAGES_PATH}/*.md`);
    
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = matter(content);
        
        if (parsed.data.title && parsed.data.date && parsed.data.category) {
            const date = new Date(parsed.data.date);
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
            
            articles.push({
                title: parsed.data.title,
                description: parsed.data.description || '',
                category: parsed.data.category,
                subcategory: parsed.data.subcategory || null,
                image: parsed.data.image || null,
                date: parsed.data.date,
                updated: parsed.data.updated || null,
                displayDate: formattedDate,
                displayUpdated: formattedUpdated,
                url: path.basename(file, '.md') + '.html'
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

class GenerateIndexPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('GenerateIndexPlugin', (compilation, callback) => {
            const { articles } = generateIndex();
            const fragments = loadFragmentsMap();
            
            const indexTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Day 1 Inference</title>
</head>
<body>
    ${fragments['fragment-nav']}
    
    <main>
        <div class="hero">
            <h1>Day 1 Inference</h1>
            <p>Machine learning foundations, guidances, and insights</p>
        </div>
        
        <div class="articles">
            ${articles.map(a => `
                <article class="article">
                    <div class="article-content">
                        <div class="article-text">
                            <div class="meta">
                                ${a.category}${a.subcategory ? ` / ${a.subcategory}` : ''} • 
                                ${a.displayUpdated ? `Updated ${a.displayUpdated}` : a.displayDate}
                            </div>
                            <h2><a href="${a.url}">${a.title}</a></h2>
                            <div class="description">${a.description}</div>
                        </div>
                        ${a.image ? `<img src="${a.image}" alt="${a.title}" class="article-image">` : ''}
                    </div>
                </article>
            `).join('')}
        </div>
    </main>
    
    <style>
        .hero {
            text-align: center;
            margin-bottom: 4rem;
        }
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #1e2933;
        }
        .hero p {
            color: #666;
            font-size: 1.1rem;
        }
        
        .articles {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        .article {
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 2rem;
        }
        .article:last-child {
            border-bottom: none;
        }
        .article-content {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
        }
        .article-text {
            flex: 1;
        }
        .article-image {
            width: 250px;
            height: 105px;
            object-fit: cover;
            border-radius: 8px;
            flex-shrink: 0;
        }
        .article .meta {
            color: #999;
            font-size: 0.85rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .article h2 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        .article h2 a {
            color: #1e2933;
            text-decoration: none;
        }
        .article h2 a:hover {
            color: #0066cc;
        }
        .article .description {
            color: #555;
            line-height: 1.6;
        }
    </style>
</body>
</html>`;
            
            compilation.assets['index.html'] = {
                source: () => indexTemplate,
                size: () => indexTemplate.length
            };
            
            callback();
        });
    }
}

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
                { from: "src/fragments/*", to: "fragments/[name].html" },
                {
                    from: "content/pages/*.md",
                    to: "[name].html",
                    transform: transformMarkdownWithFragments,
                },
                { from: "public/CNAME", to: "CNAME", noErrorOnMissing: true },
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
