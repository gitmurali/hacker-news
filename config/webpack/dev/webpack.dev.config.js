const { merge } = require('webpack-merge')

const base = require('../base/webpack.base.config')
const client = require('./webpack.dev.client.config')
const shared = require('./webpack.dev.shared.config')

module.exports = merge(base.shared, base.client, shared, client)
