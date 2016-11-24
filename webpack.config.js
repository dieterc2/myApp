var path = require('path');
var webpack = require('webpack');

var config = {
   entry: './src/main.js',

   output: {
      path: path.join(__dirname, '/'),
      filename: 'public/index.js',
      publicPath: '/'
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
