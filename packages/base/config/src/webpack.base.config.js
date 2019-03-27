
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
  eslintRule,
  jsRule,
  htmlRule,
  styleRule,
  fontRule,
} = require('./webpack.rules');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': process.env.NODE_ENV,
  }),
  new LodashModuleReplacementPlugin({
    shorthands: true,
    paths: true,
  }),
  new MiniCssExtractPlugin({
    filename: '../css/oui.css',
    allChunks: true,
  }),
];

module.exports = {
  plugins,
  module: {
    rules: [
      eslintRule,
      jsRule,
      htmlRule,
      styleRule,
      fontRule,
    ],
  },
};
