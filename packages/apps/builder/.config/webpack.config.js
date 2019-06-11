const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'oui': './src/index.js',
    'oui-b10': './src/base-10.js',
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      allChunks: true,
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
