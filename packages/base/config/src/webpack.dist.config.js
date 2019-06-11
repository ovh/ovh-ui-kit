const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const { cssExtractLoader } = require('./webpack.rules');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  plugins: [
    // Enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  module: {
    rules: [
      cssExtractLoader,
    ],
  },
});
