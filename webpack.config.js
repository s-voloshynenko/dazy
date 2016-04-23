'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssLoader = 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions';
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: cssLoader
    }, {
      test: /\.sass$/,
      loader: cssLoader + '!sass-loader?indentedSyntax=sass'
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};
