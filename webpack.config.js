'use strict'

var webpack = require('webpack')
var path = require('path')

var env = process.env.NODE_ENV

var config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    
  ]
}

module.exports = config
