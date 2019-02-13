const autoprefixer = require("autoprefixer");
const capitalize = require("lodash/capitalize");
const formatter = require("eslint-friendly-formatter");
const fs = require("fs");
const merge = require("lodash/merge");
const path = require("path");
const template = require("lodash/template");
const toLower = require("lodash/toLower");
const webpack = require("webpack");

const DirectoryTreePlugin =  require("directory-tree-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemcalcPlugin = require("less-plugin-remcalc");

const rootState = "showcase";
const rootPath = path.join(__dirname, "..");
const pagesConfig = require("../src/pages.config.json");
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

        // Enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),

        // Create the directory tree from ./src/pages files
        new DirectoryTreePlugin({
            name: "src/pages",
            dir: "./src/pages",
            path: "./src/pages.data.json",
            extensions: /\.html|\.md/,
            enhance: (item, options) => {
                const indexWeight = 100;
                const fileWeight = 10;
                const dirWeight = 1;
                const path = toLower(item.path).replace(new RegExp(`^${options.name}\/|.(html|md)$`, "g"), "");

                if (item.type === "file") {
                    // Files
                    item.path = item.path.replace(options.name, ".");
                    item.state = `${rootState}./${path}`;
                    item.title = capitalize(item.name.replace(/.(html|md)$/, ""));
                    item.url = `/${path.replace(/(index|readme)?/, "")}`;
                    item.weight = (item.name.search(/index|readme/) !== -1) ? indexWeight : fileWeight;

                    // Add config from ./src/pages.config.json
                    if (pagesConfig[item.state]) {
                        merge(item, pagesConfig[item.state]);
                    }
                } else {
                    // Directory
                    item.title = capitalize(item.name);
                    item.state = `${rootState}./${path}/`;
                    item.redirectTo = `${rootState}./${path}/readme`;
                    item.weight = dirWeight;
                }

                return item;
            },
            sort: (a, b) => {
                // First sort by 'weight' (desc)
                let sortIndex = b.weight - a.weight;

                // If same weight, sort by 'name' (asc)
                return (!sortIndex)
                    ? a.name.localeCompare(b.name)
                    : sortIndex;
            }
        }),
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
                    { loader: "less-loader", options: {
                        plugins: [ RemcalcPlugin ],
                        sourceMap: true
                    } }
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
