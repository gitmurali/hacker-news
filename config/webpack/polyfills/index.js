/**
 * Polyfills
 *
 * If you need to support older browsers that don't have certain
 * JavaScript functionality yet, you may need to polyfill the
 * feature. To do this, just const the specific function from
 * the core-js library (or an external polyfill, if you're sure
 * you need it. Resist the temptation to include the whole of core-js,
 * as it can add a lot of weight to your bundle.
 * core-js: https://github.com/zloirock/core-js
 */

require('core-js/es/array/for-each')
require('core-js/es/array/find')
require('core-js/es/array/from')
require('core-js/es/array/includes')
require('core-js/es/object/assign')
require('core-js/es/object/values')
require('core-js/es/object/entries')
require('core-js/es/object/keys')
require('core-js/es/object/from-entries')
require('core-js/es/set') // IE10 Fix
require('core-js/es/promise')
require('core-js/es/map') // IE10 Fix
require('core-js/es/string/includes')
require('regenerator-runtime/runtime')
