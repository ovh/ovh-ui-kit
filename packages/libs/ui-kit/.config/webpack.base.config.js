const formatter = require("eslint-friendly-formatter");
const webpack = require("webpack");

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const exclude = [/node_modules/, /dist/];

module.exports = {
    entry: {
        component: ["./src/js/index.js"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        new LodashModuleReplacementPlugin({
            shorthands: true,
            paths: true
        })
    ],
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                use: [{
                    loader: "eslint-loader",
                    options: {
                        formatter
                    }
                }],
                exclude
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude
            }, {
                test: /\.(html|svg)$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        interpolate: true,
                        minimize: true
                    }
                }],
                exclude
            }, {
                test: /\.(woff2?|ttf|eot|otf|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    }
};
