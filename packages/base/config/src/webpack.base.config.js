
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const {
  babelLoader,
  eslintLoader,
  fontLoader,
  htmlLoader,
  svgLoader,
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
      svgLoader,
      fontLoader,
      babelLoader,
      eslintLoader,
      htmlLoader,
    ],
  },
};
