/*Includes verifica um array ou string e verifica se o item buscado está contido no grupo e retorna true ou false.
Ele é case sensitive, logo, irá diferenciar maiúsculas de minúsculas
*/

let umaString = 'Rato Marrato Includes Testing'
let names = ['Rato', 'Marrato', 'Ratamahatta']

console.log(umaString.includes('Rato')); // true porque tem a palavra
console.log(names.includes('rato')); // false porque é case sensitive
console.log(names.includes('Rato')); // true porque tem o elemento

// a bausca é feita por separadores, no arr 4 não há letra d isolada, já em word o D está dentro de um conteúdo sem separadores visíveis
const arr4 = ['bala', 'chiclete', 'sorvete', 'doce de leite']
console.log(arr4.includes('d')) // false porque a letra "d" sozinha não é um elemento do array

const phrase = "Eu gosto de comer doce de leite e sorvete"
console.log(phrase.includes('leite')) // true porque a palavra consta no texto

// transformando uma cadeia de careacteres em elementos de um array
const word = "Diferentão"
console.log(word.includes('D'))
console.log(Array.from(word))

let a = [1, 2, 3].includes(200)
console.log(a)

// Check if a value exists in a string using both as parameters.
function stringIncludes (strA, strB) {
   let strAFiltered = (strA.toLowerCase().includes((strB.toLowerCase())))
   return strAFiltered
   }
   console.log(stringIncludes('I drove to New York in a van with my friend', 'Friend'))