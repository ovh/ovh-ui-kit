const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const { babelLoader, styleLoader } = require('@ovh-ux/ui-kit.config/src/webpack.rules');

module.exports = async ({ config }) => {
  config.module.rules.push(babelLoader);

  // For @storybook/addon-docs
  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });

  // For @storybook/addon-storysource
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  // For LESS files
  config.module.rules.push(styleLoader);

  config.resolve.alias.angular = require.resolve('angular');

  return config;
};
