const baseConfig = require('@ovh/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: {
    component: ['./src/index.js'],
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: 'oui.js',
  },
  externals: {
    angular: 'require("angular")',
    'angular-aria': 'require("angular-aria")',
    'angular-sanitize': 'require("angular-sanitize")',
    'bloodhound-js': 'require("bloodhound-js")',
    clipboard: 'require("clipboard")',
    flatpickr: 'require("flatpickr")',
    'popper.js': 'require("popper.js")',
    'ui-select': 'require("ui-select")',
  },
});
