const baseConfig = require("@ovh/ui-kit.core/src/config/webpack.base.config");
const path = require("path");
const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(".", "dist", "js"),
        filename: "oui.js",
        chunkFilename: "[id].[chunkhash].js"
    },
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
    watch: true
});
