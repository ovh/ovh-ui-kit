const baseConfig = require("./webpack.base.config");
const cloneDeep = require("lodash/cloneDeep");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const rootPath = path.join(__dirname, "..");

const client = "webpack-hot-middleware/client?noInfo=true&reload=true";
const server = "webpack/hot/dev-server";
const config = cloneDeep(baseConfig);

module.exports = merge(config, {
    mode: "development",
    devtool: "inline-source-map",
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
    }
});
