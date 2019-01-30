const autoprefixer = require("autoprefixer");
const baseConfig = require("./webpack.base.config");
const cloneDeep = require("lodash/cloneDeep");
const merge = require("webpack-merge");
const path = require("path");
const RemcalcPlugin = require("less-plugin-remcalc");
const webpack = require("webpack");

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules/, /dist/];

const client = "webpack-hot-middleware/client?noInfo=true&reload=true";
const server = "webpack/hot/dev-server";
const config = cloneDeep(baseConfig);

module.exports = merge(config, {
    mode: "development",
    devtool: "source-map",
    entry: {
        app: [
            client,
            server
        ]
    },
    output: {
        path: path.join(rootPath, "dist"),
        publicPath: ""
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        mainFields: ["src", "main"]
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude,
                use: [
                    { loader: "style-loader", options: { sourceMap: true } },
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
            }
        ]
    }
});
