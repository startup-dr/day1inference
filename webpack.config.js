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
    return markdown.render(mdWithFragments);
};

// Generate index page with article listings
const generateIndex = () => {
    const articles = [];
    const files = glob.sync(`${PAGES_PATH}/*.md`);
    
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = matter(content);
        
        if (parsed.data.title && parsed.data.date && parsed.data.category) {
            articles.push({
                title: parsed.data.title,
                description: parsed.data.description || '',
                category: parsed.data.category,
                date: parsed.data.date,
                url: path.basename(file, '.md') + '.html'
            });
        }
    });
    
    // Sort by date descending
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
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
            const { articles, byCategory } = generateIndex();
            const fragments = loadFragmentsMap();
            
            const indexTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Day 1 Inference</title>
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .subtitle { color: #666; margin-bottom: 3rem; }
        .section { margin-bottom: 3rem; }
        .section h2 { border-bottom: 2px solid #333; padding-bottom: 0.5rem; }
        .articles { display: grid; gap: 1.5rem; }
        .article { border: 1px solid #ddd; padding: 1.5rem; border-radius: 8px; }
        .article h3 { margin: 0 0 0.5rem 0; }
        .article a { text-decoration: none; color: #0066cc; }
        .article a:hover { text-decoration: underline; }
        .article .meta { color: #666; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .article .description { color: #333; }
    </style>
</head>
<body>
    <h1>Day 1 Inference</h1>
    <p class="subtitle">Foundations, Guidances, and Insights for Machine Learning</p>
    
    <div class="section">
        <h2>Latest Articles</h2>
        <div class="articles">
            ${articles.slice(0, 5).map(a => `
                <div class="article">
                    <h3><a href="${a.url}">${a.title}</a></h3>
                    <div class="meta">${a.category} • ${a.date}</div>
                    <div class="description">${a.description}</div>
                </div>
            `).join('')}
        </div>
    </div>
    
    ${Object.entries(byCategory).map(([cat, items]) => items.length > 0 ? `
        <div class="section">
            <h2>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
            <div class="articles">
                ${items.map(a => `
                    <div class="article">
                        <h3><a href="${a.url}">${a.title}</a></h3>
                        <div class="meta">${a.date}</div>
                        <div class="description">${a.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '').join('')}
    
    <script src="main.bundle.js" type="module" defer></script>
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
