const webpack = require('webpack')

const resolve = require('path').resolve

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const image = require('../loader-configs/image')
const style = require('../loader-configs/style')
const svg = require('../loader-configs/svg')
const absolute = file => resolve(__dirname, '../../../', file)

module.exports = {
  entry: {
    index: [absolute('config/webpack/polyfills'), absolute('src/index.js')]
  },
  module: {
    rules: [
      style,
      image,
      svg.js
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|zh|fr/),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash:6].css',
      chunkFilename: '[id].[chunkhash:6].css'
    })
  ]
}
