const webpack = require('webpack')
const resolve = require('path').resolve
const dotenv = require('dotenv').config({ path: '.env' })

module.exports = {
  devtool: 'source-map',
  output: {
    path: resolve(process.cwd(), 'build/client'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
        API_URL: JSON.stringify(dotenv.parsed.API_URL)
      }
    })
  ]
}
