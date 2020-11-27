const path = require('path')

const js = {
  // test: /\.svg$/,
  // rules: [
  //   { use: 'raw-loader' },
  //   { use: 'img-loader' }
  // ]
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        native: false,
        svgo: false
      }
    }
  ]
}

const scss = {
  test: /\.svg$/,
  include: [
    path.resolve(__dirname, '../../../', 'src/assets/svgs'),
    path.resolve(__dirname, '../../../', 'src/assets/svgs/icons')
  ],
  issuer: /\.scss$/,
  rules: [
    { use: 'url-loader' },
    { use: 'img-loader' }
  ]
}

module.exports = {
  js,
  scss
}
