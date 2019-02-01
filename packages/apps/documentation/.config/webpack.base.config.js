const autoprefixer = require("autoprefixer");
const formatter = require("eslint-friendly-formatter");
const fs = require("fs");
const path = require("path");
const template = require("lodash/template");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemcalcPlugin = require("less-plugin-remcalc");

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules(?![\/\\](@ovh))/, /dist/];


module.exports = {
    context: rootPath,
    entry: {
        app: [path.resolve(rootPath, "src", "index.js")]
    },
    output: {
        filename: "[name]-[hash].js"
    },
    resolveLoader: {
        alias: {
            "markdown-loader": path.join(__dirname, "loaders", "markdown-loader"),
            "templatePreview-loader": path.join(__dirname, "loaders", "template-preview-loader")
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        // Save bytes on Lodash
        new LodashModuleReplacementPlugin({
            shorthands: true,
            collections: true,
            paths: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(), // Enable scope hoisting
        new HtmlWebpackPlugin({
            inject: false,
            templateContent: (parameters) => {
                const templatePath = path.join(rootPath, "src", "index.html");
                const fn = template(fs.readFileSync(templatePath));
                return fn({ assets: parameters.htmlWebpackPlugin.files });
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude,
                use: [
                    { loader: "eslint-loader", options: { formatter } }
                ]
            }, {
                test: /\.js$/,
                exclude,
                use: "babel-loader"
            }, {
                test: /\.css|.less$/,
                exclude,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "postcss-loader", options: {
                        sourceMap: true,
                        plugins: () => [
                            autoprefixer({ browsers: ["last 2 versions", "ie 11"] })
                        ]
                    } },
                    { loader: "less-loader", options: { sourceMap: true, plugins: [ RemcalcPlugin ] } }
                ]
            }, {
                test: /\.md$/,
                use: [
                    { loader: "html-loader", options: { interpolate: true } },
                    "markdown-loader"
                ]
            }, {
                test: /\.(html|svg)$/,
                exclude,
                use: [
                    { loader: "html-loader", options: {
                        interpolate: true,
                        minimize: true
                    } }
                ]
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    { loader: 'file-loader', options: { name: '[name].[ext]' } }
                ]
            }
        ]
    }
};
