const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: {
    'oui': [
      './src/oui.js',
      './src/oui.less',

      // Themes
      './src/oui-b10.less'
    ],
  },
  output: {
    path: path.resolve('.', 'dist', 'js'),
    filename: '[name].js',
  },
  externals: {
    'bloodhound-js': 'Bloodhound',
    clipboard: 'ClipboardJS',
    flatpickr: 'flatpickr',
    'popper.js': 'Popper',
    'ui-select': '"ui.select"', // Doesn't support module import
  },
});
