
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const {
  babelLoader,
  eslintLoader,
  fileLoader,
  htmlLoader,
  styleLoader,
} = require('./webpack.rules');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': process.env.NODE_ENV,
  }),
  new LodashModuleReplacementPlugin({
    shorthands: true,
    paths: true,
  }),
];

module.exports = {
  plugins,
  module: {
    rules: [
      babelLoader,
      eslintLoader,
      fileLoader,
      htmlLoader,
      styleLoader,
    ],
  },
};
