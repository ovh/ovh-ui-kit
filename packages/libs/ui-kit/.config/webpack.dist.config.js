const baseConfig = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    mode: "production",
    devtool: "source-map",
    externals: {
        angular: "require('angular')",
        "angular-aria": "require('angular-aria')",
        "angular-sanitize": "require('angular-sanitize')",
        "bloodhound-js": "require('bloodhound-js')",
        clipboard: "require('clipboard')",
        flatpickr: "require('flatpickr')",
        "popper.js": "require('popper.js')",
        "ui-select": "require('ui-select')"
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
