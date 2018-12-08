'use strict'

const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'js/bundle.js',
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),

    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
              camelCase: 'dashesOnly'
            }
          },
          {
            loader: "sass-loader"
          }]
      },
      {
        test: /.(ttf|otf|eot|svg|png|jpeg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ],
  },
};
