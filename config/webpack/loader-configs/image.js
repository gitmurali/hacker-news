module.exports = {
  test: /\.(png|jpg|jpeg|gif|webp|ico)$/,
  rules: [
    {
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/',
          name: 'resources/images/[name].[ext]'
        }
      }
    },
    {
      use: {
        loader: 'img-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 85
          }
        }
      }
    }
  ]
}
