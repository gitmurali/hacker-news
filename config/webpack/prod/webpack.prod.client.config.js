const webpack = require('webpack')
const resolve = require('path').resolve
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const dotenv = require('dotenv').config({ path: '.env' })

module.exports = {
  output: {
    path: resolve(process.cwd(), 'build'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_URL: JSON.stringify(dotenv.parsed.API_URL)
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new CompressionWebpackPlugin()
  ]
}
