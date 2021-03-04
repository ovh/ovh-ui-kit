const baseConfig = require('@ovh-ux/ui-kit.config/src/webpack.dist.config');
const merge = require('webpack-merge');
const glob = require('glob');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: glob.sync('**/src/index.js', {}).reduce((acc, filePath) => {
    const [componentName] = filePath.split('/src/index.js');
    const entry = `oui-${componentName}`;
    acc[entry] = [`./${filePath}`];
    return acc;
  }, {}),
  output: {
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    path: path.resolve('.', 'dist', 'js'),
  },
});
