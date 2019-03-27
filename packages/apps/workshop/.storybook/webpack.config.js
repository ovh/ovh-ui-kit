const autoprefixer = require('autoprefixer');
const RemcalcPlugin = require('less-plugin-remcalc');

const exclude = [/node_modules(?![/\\](@ovh))/, /dist/];

module.exports = async ({config }) => {
  // For @storybook/addon-storysource
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  // For LESS files
  config.module.rules.push({
    test: /\.css|.less$/,
    use: [
      { loader: 'style-loader', },
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [autoprefixer({ browsers: ['last 2 versions', 'ie 11'] })],
        },
      },
      {
        loader: 'less-loader',
        options: {
          plugins: [RemcalcPlugin],
        },
      },
    ],
    exclude,
  });

  config.resolve.alias.angular = require.resolve('angular');

  return config;
};
