const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const { styleLoader } = require('./webpack.rules');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      styleLoader,
    ],
  },
});
