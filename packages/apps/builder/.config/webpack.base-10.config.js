const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  entry: {
    component: ['./src/base-10.js'],
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: 'oui-b10.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/oui-b10.css',
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
