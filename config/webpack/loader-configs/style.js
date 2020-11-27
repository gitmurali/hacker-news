const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const absolute = file => path.resolve(__dirname, '../../../', file)

const modules = [
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]'
      }
    }
  }
]

const sassLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]--[hash:base64:5]'
      },
      sourceMap: true,
      localsConvention: 'camelCase'
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded'
    }
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        absolute('src/resources/scss/variables/*.scss'),
        absolute('src/resources/scss/mixins/*.scss')
      ]
    }
  }
]

module.exports = {
  // test: /\.(css|scss)(\?.+)?$/,
  // loader: [MiniCssExtractPlugin.loader, ...sassLoaders]
  oneOf: [
    {
      test: /\.(css|scss)(\?.+)?$/,
      include: absolute('node_modules/'),
      loader: [MiniCssExtractPlugin.loader, ...modules]
    }, {
      test: /\.(css|scss)(\?.+)?$/,
      loader: [MiniCssExtractPlugin.loader, ...sassLoaders]
    }
  ]
}
