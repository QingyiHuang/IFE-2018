const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
   rules: [
     {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     },
     {
       test: /\.san$/,
       use: [
         'san-loader'
       ]
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
     }
   ]
 },
  resolve: {
      alias: {
          san: process.env.NODE_ENV === 'production'
              ? 'san/dist/san.js'
              : 'san/dist/san.dev.js'
      }
  }
};