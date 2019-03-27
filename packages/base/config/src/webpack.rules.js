const autoprefixer = require('autoprefixer');
const formatter = require('eslint-friendly-formatter');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemcalcPlugin = require('less-plugin-remcalc');

const exclude = [/node_modules(?![/\\](@ovh))/, /dist/];

const eslintRule = {
  enforce: 'pre',
  test: /\.js$/,
  use: [
    { loader: 'eslint-loader', options: { formatter } },
  ],
  exclude,
};

const jsRule = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            { useBuiltIns: 'usage' },
          ],
        ],
        plugins: [
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

const htmlRule = {
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

const styleRule = {
  test: /\.css|.less$/,
  use: [
    {
      loader: process.env.NODE_ENV === 'production'
        ? MiniCssExtractPlugin.loader
        : 'style-loader',
    },
    { loader: 'css-loader', options: { sourceMap: true } },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: () => [
          autoprefixer({ browsers: ['last 2 versions', 'ie 11'] }),
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

const fontRule = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?|.(woff(2)?|ttf|eot|svg)(\?[a-f0-9]{32})?$/,
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
  eslintRule,
  jsRule,
  htmlRule,
  styleRule,
  fontRule,
};
