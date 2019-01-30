const autoprefixer = require("autoprefixer");
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemcalcPlugin = require("less-plugin-remcalc");

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules(?![\/\\](@ovh))/, /dist/];

module.exports = merge(baseConfig, {
    mode: "production",
    resolve: {
        mainFields: ["src", "main"]
    },
    output: {
        path: path.resolve(rootPath, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "postcss-loader", options: {
                        sourceMap: true,
                        plugins: () => [
                            autoprefixer({ browsers: ["last 2 versions", "ie 11"] })
                        ]
                    } },
                    "resolve-url-loader",
                    { loader: "less-loader", options: { sourceMap: true, plugins: [ RemcalcPlugin ] } }
                ]
            }
        ]
    }
});
