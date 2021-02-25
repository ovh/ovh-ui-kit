const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  entry: {
    'oui-core': [
      './src/oui-core.less',
    ],
    'oui-flags': [
      './src/oui-flags.less',
    ],
    'oui-icons': [
      './src/oui-icons.less',
    ],
    oui: [
      './src/index.less',
    ],
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
});
