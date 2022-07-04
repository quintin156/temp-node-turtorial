// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum)
// Every module required will start with './'
const names = require('./4-first-module')
const sayHi = require('./5-second-module') 
const data = require('./6-alternative-modules')
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)