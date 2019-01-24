const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: "source-map",
    externals: {
        angular: "angular",
        "angular-aria": "angular-aria",
        "angular-sanitize": "angular-sanitize",
        "bloodhound-js": "bloodhound-js",

        // Must import minified version (https://github.com/zenorocha/clipboard.js/issues/570)
        clipboard: "clipboard/dist/clipboard.min",
        flatpickr: "flatpickr",
        "popper.js": "popper.js",
        "ui-select": "ui-select"
    },
    output: {
        path: path.resolve(".", "dist", "js"),
        filename: "oui.min.js"
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": process.env.NODE_ENV
        }),
        new webpack.optimize.ModuleConcatenationPlugin() // Enable scope hoisting
    ]
});
