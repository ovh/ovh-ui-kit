const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'oui': './src/index.js',

    // Themes
    'oui-b10': './src/_base-10.less',
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: '[name].js',
  },
  plugins: [
    // Extract CSS to separate files
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),

    // Remove unwanted JS files created by Webpack
    // When creating an entry for CSS only (known bug)
    // https://github.com/webpack/webpack/issues/1967
    new ExtraneousFileCleanupPlugin({
      extensions: ['.js'],
    }),
  ],
  externals: {
    'bloodhound-js': 'Bloodhound',
    clipboard: 'ClipboardJS',
    flatpickr: 'flatpickr',
    'popper.js': 'Popper',
    'ui-select': '"ui.select"', // Doesn't support module import
  },
});
