const autoprefixer = require("autoprefixer");
const baseConfig = require("./webpack.base.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const RemcalcPlugin = require("less-plugin-remcalc");

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules/, /dist/];

module.exports = merge(baseConfig, {
    mode: "production",
    resolve: {
        mainFields: ["src", "main"]
    },
    output: {
        path: path.resolve(rootPath, "dist")
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name]-[hash].css",
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude,
                use: ExtractTextPlugin.extract({
                    fallback: ["css-loader", "postcss-loader", "less-loader"],
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "postcss-loader", options: {
                            sourceMap: true,
                            plugins: () => [
                                autoprefixer({ browsers: ["last 2 versions", "ie 11"] })
                            ]
                        } },
                        "resolve-url-loader",
                        { loader: "less-loader", options: { sourceMap: true, plugins: [RemcalcPlugin] } }
                    ]
                })
            }
        ]
    }
});
