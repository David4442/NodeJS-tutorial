const names = require('./4-firstmodules')
const sayHi = require('./5-secondmodules')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')
sayHi('David')
console.log(data.person)
sayHi(names.person2);
