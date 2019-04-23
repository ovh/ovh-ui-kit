const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  entry: {
    component: ['./src/index.js'],
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: 'oui.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/oui.css',
      allChunks: true,
    }),
  ],
  externals: {
    'angular': 'angular',
    'angular-aria': 'ngAria',
    'angular-sanitize': 'ngSanitize',
    'bloodhound-js': 'Bloodhound',
    clipboard: 'Clipboard',
    flatpickr: 'Flatpickr',
    'popper.js': 'Popper',
    'ui-select': 'uiSelect',
  },
});
