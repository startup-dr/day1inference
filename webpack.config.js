const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Handlebars = require("handlebars");
const fs = require("fs");
const markdown = require("markdown-it")({ html: true });

const FRAGMENTS_PATH = "src/fragments";

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
    const mdContent = data.toString('utf8');
    const template = Handlebars.compile(mdContent);
    const mdWithFragments = template(fragments);
    return markdown.render(mdWithFragments);
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
                { from: "src/fragments/*", to: "fragments/[name].html" },
                { 
                    from: "src/index.html", 
                    to: "index.html",
                    transform: transformHandlebars, 
                },
                {
                    from: "content/pages/*.md",
                    to: "[name].html",
                    transform: transformMarkdownWithFragments,
                },
                { from: "public/CNAME", to: "CNAME" },
            ],
        }),
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
