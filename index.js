'use strict'
const englishDays = require('english-days')

module.exports = function (msg = (day) => day) {
  return msg(englishDays[new Date().getDay()])
}
