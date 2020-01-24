'use strict'
const assert = require('assert')
const todayIs = require('.')

assert.strictEqual(typeof todayIs(), 'string')
