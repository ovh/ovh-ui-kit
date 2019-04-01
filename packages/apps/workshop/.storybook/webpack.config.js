const { styleLoader } = require('@ovh/ui-kit.config/src/webpack.rules');

module.exports = async ({ config }) => {
  // For @storybook/addon-storysource
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  // For LESS files
  config.module.rules.push(styleLoader);

  config.resolve.alias.angular = require.resolve('angular');

  return config;
};
