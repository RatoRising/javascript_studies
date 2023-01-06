// // require é utilizado para a importação de módulos nativos do node
// let path = require('path')
// console.log(path.basename(__filename))

const getFlagValue = require('./exports')

console.log(`Eaees ${getFlagValue('--name')}, ${getFlagValue('--greetings')}`)