# todayis

[![NPM Version](https://img.shields.io/npm/v/todayis.svg)](https://npmjs.org/package/todayis)
[![NPM Downloads](https://img.shields.io/npm/dm/todayis.svg)](https://npmjs.org/package/todayis)
[![Build Status](https://travis-ci.org/wesleytodd/todayis.svg?branch=master)](https://travis-ci.org/wesleytodd/todayis)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)

Tell me what day it is please.

```
$ npm i todayis
```

```javascript
const todayIs = require('todayis')
console.log(todayIs()) // friday
console.log(todayIs((day) => `Hello, today is ${day}.`)) // Hello, today is friday.
```
