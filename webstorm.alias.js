const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './src'),
      '@actions': path.resolve(__dirname, './src/actions'),
      '@api': path.resolve(__dirname, './src/api'),
      '@resources': path.resolve(__dirname, './src/resources'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@scss': path.resolve(__dirname, './src/resources/scss'),
      '@sagas': path.resolve(__dirname, './src/sagas'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@hocs': path.resolve(__dirname, './src/hocs'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@translations': path.resolve(__dirname, './src/translations'),
      '@factories': path.resolve(__dirname, './src/factories'),
      '@svgs': path.resolve(__dirname, './src/resources/svgs'),
      '@hoc': path.resolve(__dirname, './src/higher-order-components')
    }
  }
}
