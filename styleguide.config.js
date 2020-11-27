const path = require('path')
const webpackConfig = require('./config/webpack/dev/webpack.dev.config.js')

module.exports = {
  webpackConfig: webpackConfig,
  skipComponentsWithoutExample: false,
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: 'src/components/**/[A-Z]*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2
    },
    {
      name: 'Containers',
      content: 'docs/containers.md',
      components: 'src/containers/**/[A-Z]*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
      sectionDepth: 2
    }
  ],
  require: [
    'babel-polyfill',
    path.join(__dirname, 'src/resources/scss/style.scss')
  ],
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/StyleGuideRenderer'),
    SectionsRenderer: path.join(__dirname, 'src/styleguide/SectionsRenderer')
  }
}
