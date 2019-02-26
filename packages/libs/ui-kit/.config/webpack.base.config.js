const autoprefixer = require("autoprefixer");
const formatter = require("eslint-friendly-formatter");
const path = require("path");
const webpack = require("webpack");

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemcalcPlugin = require("less-plugin-remcalc");

const rootPath = path.join(__dirname, "..");
const exclude = [/node_modules(?![\/\\](@ovh))/, /dist/];

module.exports = {
  entry: {
    component: ["./src/js/index.js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": process.env.NODE_ENV
    }),
    new LodashModuleReplacementPlugin({
      shorthands: true,
      paths: true
    }),
    new MiniCssExtractPlugin({
      filename: "../css/oui.css",
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        use: [
          { loader: "eslint-loader", options: { formatter } }
        ],
        exclude
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader", options: {
              rootMode: "upward",
            }
          },
        ],
        exclude
      }, {
        test: /\.(html|svg)$/,
        use: [
          {
            loader: "html-loader", options: {
              interpolate: true,
              minimize: true
            }
          }
        ],
        exclude
      }, {
        test: /\.css|.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader", options: {
              sourceMap: true,
              plugins: () => [autoprefixer({ browsers: ["last 2 versions", "ie 11"] })]
            }
          },
          {
            loader: "less-loader", options: {
              plugins: [RemcalcPlugin],
              sourceMap: true
            }
          }
        ],
        exclude
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?|.(woff(2)?|ttf|eot|svg)(\?[a-f0-9]{32})?$/,
        use: [
          {
            loader: 'file-loader', options: {
              name: '[folder]/[name].[ext]',
              outputPath: '../fonts',
              publicPath: '../fonts'
            }
          }
        ]
      }
    ]
  }
};
