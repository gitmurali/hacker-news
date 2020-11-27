const base = {
  test: /\.(js)$/,
  exclude: /(node_modules)/,
  rules: [
    {
      enforce: 'pre',
      loader: require.resolve('eslint-loader')
    },
    {
      loader: require.resolve('babel-loader'),
      options: {
        sourceMaps: 'both',
        plugins: [
          [
            require.resolve('babel-plugin-named-asset-import'),
            {
              loaderMap: {
                svg: {
                  ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                }
              }
            }
          ]
        ]
      }
    }
  ]
}

module.exports = base
