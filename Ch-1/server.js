//CommonJS module instead of ES6 module
const os = require('os')
const path = require('path')
const math = require('./math')
//Eg.
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

console.log(math.add(2, 3))
console.log(math.sub(6, 8))
console.log(math.mul(8, 5))
console.log(math.div(2, 3))