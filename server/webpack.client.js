const { resolve } = require('path')

module.exports = {
  // Tell webpack the root file for our server app
  entry: './src/client/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  },

  // Tell webpack to run bable on every file it runs through
  module: {
   rules: [
     {
       test: /\.js?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       options: {
         presets: [
           'react',
           'stage-0',
           [ 'env', { targets : { browsers: [ 'last 2 versions' ] } } ]
         ]
       }
     }
   ] 
  }
}