const webpack = require('webpack')
const resolve = require('path').resolve
const dotenv = require('dotenv').config({ path: '.env' })

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  stats: 'minimal',
  output: {
    path: resolve(process.cwd(), 'build/client'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('local'),
        API_URL: JSON.stringify(dotenv.parsed.API_URL)
      }
    })
  ]
}
