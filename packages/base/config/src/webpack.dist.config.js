const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.base.config');
const { cssExtractLoader } = require('./webpack.rules');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(), // Enable scope hoisting
    new MiniCssExtractPlugin({
      filename: '../css/oui.css',
      allChunks: true,
    }),
  ],
  module: {
    rules: [
      cssExtractLoader,
    ],
  },
});
