const autoprefixer = require('autoprefixer');
const RemcalcPlugin = require('less-plugin-remcalc');

module.exports = {
  module: {
    rules: [{
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    },{
      test: /\.css|.less$/,
      use: [
        {
          loader: 'style-loader' },
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [autoprefixer({ browsers: ['last 2 versions', 'ie 11'] })],
          },
        },
        {
          loader: 'less-loader',
          options: {
            plugins: [RemcalcPlugin],
            sourceMap: true,
          },
        },
      ],
    }],
  },
  resolve: {
    alias: {
      angular: require.resolve("angular")
    }
  }
};

