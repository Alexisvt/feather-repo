// @flow
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');

// const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'babel-polyfill',
    __dirname + '/app/'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  externals: {
    'socket.io': 'io'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // HTMLWebpackPluginConfig
  ]
};