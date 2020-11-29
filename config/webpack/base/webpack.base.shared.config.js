const resolve = require('path').resolve
const javascript = require('../loader-configs/javascript')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const absolute = file => resolve(__dirname, '../../../', file)

module.exports = {
  entry: {},
  output: {},
  stats: 'normal',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [javascript]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hacker-news',
      template: absolute('src/public/')
    })
  ]
}
