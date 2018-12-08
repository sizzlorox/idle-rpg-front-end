'use strict'

const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
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

    new CompressionPlugin({
      minRatio: 0.8,
      deleteOriginalAssets: true,
      algorithm: 'gzip',
      threshold: 8192,
      filename: '[path].gz[query]'
    }),

    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
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

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false,
            beautify: false
          },
          compress: true,
          keep_classnames: false,
          keep_fnames: false
        },
        sourceMap: false
      })
    ]
  }
};
