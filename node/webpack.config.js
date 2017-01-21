var path = require('path');
var fs = require('fs');

module.exports = {
  entry: (path.resolve(__dirname, './lib/index.js')),

  output: {
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'http://127.0.0.1:4337/static/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },

  devServer: {
    contentBase: 'build',
    color: true,
    historyApiFallback: true,
    devtool: 'eval-source-map',
    port: 4337,
    host: '127.0.0.1'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.react.jsx', '.scss']
  }
};
