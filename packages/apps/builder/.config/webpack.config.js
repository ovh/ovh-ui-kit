const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'oui': './src/oui.js',

    // Themes
    'oui-b10':      './src/oui-b10.less',
    'oui-ods':      './src/oui-ods.less',
    'oui-ods-dark': './src/oui-ods-dark.less',
  },
  output: {
    filename: '[name].js',
    library: 'oui',
    libraryTarget: 'umd',
    path: path.resolve('.', 'dist', 'js'),
    // libraryTarget: 'umd',
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
    'bloodhound-js': {
      commonjs: 'bloodhound-js',
      commonjs2: 'bloodhound-js',
      amd: 'bloodhound-js',
      root: 'Bloodhound',
    },
    clipboard: {
      commonjs: 'clipboard',
      commonjs2: 'clipboard',
      amd: 'clipboard',
      root: 'ClipboardJS',
    },
    flatpickr: {
      commonjs: 'flatpickr',
      commonjs2: 'flatpickr',
      amd: 'flatpickr',
      root: 'flatpickr',
    },
    'popper.js': {
      commonjs: 'popper.js',
      commonjs2: 'popper.js',
      amd: 'popper.js',
      root: 'Popper',
    },
    'ui-select': {
      commonjs: 'ui-select',
      commonjs2: 'ui-select',
      amd: 'ui-select',
      root: '"ui.select"', // Doesn't support module import
    },
  },
});
