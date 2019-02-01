
const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");

const rootPath = path.join(__dirname, "..");

module.exports = merge(baseConfig, {
    mode: "production",
    resolve: {
        mainFields: ["src", "main"]
    },
    output: {
        path: path.resolve(rootPath, "dist")
    }
});
