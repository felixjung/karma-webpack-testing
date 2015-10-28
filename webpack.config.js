'use strict';

var webpack = require('webpack');
var path = require('path');

var alias = {
  foobar: 'bar/foobar.js',
};

module.exports = {
  entry: './src/foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [ __dirname, path.resolve(__dirname, 'src/modules'), path.resolve(__dirname, 'test') ],
    modulesDirectories: [
      'bar'
    ],
    alias: alias
  },
  noParse: Object.keys(alias)
};
