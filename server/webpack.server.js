const { resolve } = require('path')

const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base.js')

const config = {
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

  externals: [ webpackNodeExternals() ]
}

module.exports = merge(baseConfig, config)