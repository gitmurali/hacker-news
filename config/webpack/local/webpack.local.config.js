const { merge } = require('webpack-merge')

const base = require('../base/webpack.base.config')
const client = require('./webpack.local.client.config')

module.exports = merge(base.shared, base.client, client)
