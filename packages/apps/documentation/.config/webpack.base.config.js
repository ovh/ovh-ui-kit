const formatter = require("eslint-friendly-formatter");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const path = require("path");
const template = require("lodash/template");
const webpack = require("webpack");

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules(?![\/\\](ovh-ui-angular))/, /dist/];

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
        new LodashModuleReplacementPlugin({
            shorthands: true,
            collections: true,
            paths: true
        }), // Save bytes on Lodash
        new webpack.optimize.ModuleConcatenationPlugin(), // Enable scope hoisting
        new HtmlWebpackPlugin({
            inject: false,
            templateContent: (parameters) => {
                const templatePath = path.join(rootPath, "src", "index.html");
                const fn = template(fs.readFileSync(templatePath));
                return fn({ assets: parameters.htmlWebpackPlugin.files });
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude,
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            formatter
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "resolve-url-loader"
                ]
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            interpolate: true
                        }
                    },
                    "markdown-loader"
                ]
            },
            {
                test: /\.(html|svg)$/,
                exclude,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            interpolate: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|otf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    }
};
