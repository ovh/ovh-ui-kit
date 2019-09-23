const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const formatter = require('eslint-friendly-formatter');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemcalcPlugin = require('less-plugin-remcalc');

const exclude = [/node_modules(?![/\\](@ovh))/, /dist/];

const eslintLoader = {
  enforce: 'pre',
  test: /\.js$/,
  use: [
    { loader: 'eslint-loader', options: { formatter } },
  ],
  exclude,
};

const babelLoader = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              corejs: 3,
              useBuiltIns: 'usage',
            },
          ],
        ],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-transform-runtime',
          'babel-plugin-angularjs-annotate',
          'babel-plugin-lodash',
        ],
        comments: false,
        env: {
          test: {
            plugins: [
              ['babel-plugin-istanbul', {
                exclude: [
                  '**/*-utils.js',
                  '**/*.spec.js',
                ],
              }],
            ],
          },
        },
      },
    },
  ],
  exclude,
};

const htmlLoader = {
  test: /\.(html|svg)$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: true,
        minimize: true,
      },
    },
  ],
  exclude,
};

const styleLoader = {
  test: /\.css|.less$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader', options: { sourceMap: true } },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
          autoprefixer(),
          cssnano({ preset: 'default' }),
        ],
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
  exclude,
};

const cssExtractLoader = {
  test: /\.css|.less$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    { loader: 'css-loader', options: { sourceMap: true } },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
          autoprefixer(),
          cssnano({ preset: 'default' }),
        ],
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
  exclude,
};

const fileLoader = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?[a-f0-9]{32})?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[folder]/[name].[ext]?[hash]',
        outputPath: '../fonts',
        publicPath: '../fonts',
      },
    },
  ],
};

module.exports = {
  babelLoader,
  cssExtractLoader,
  eslintLoader,
  fileLoader,
  htmlLoader,
  styleLoader,
};
