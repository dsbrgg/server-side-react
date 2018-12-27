const { resolve } = require('path')

module.exports = {
  // Inform webpack that we're building a bundle
  // for nodejs, rather than the browser
  target: 'node',

  // Tell webpack the root file for our server app
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build')
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