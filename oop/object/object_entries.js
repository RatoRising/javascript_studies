/* Object.keys = retorna os índices dos itens do array
Object.values = retorna os valores dos itens dos arrays
Object.entries = retorna os índices e valores dos itens dos arrays */


let pessoa = {
   name: 'Rato',
   sobrenome: 'Marrato',
   age: 40
}

// Retorna o ínidice dos itens dentro do array.
console.log('Retorna a chave dos itens dentro do array.')
console.log(Object.keys(pessoa))
console.log('')

// Retorna o valor dos itens dentro do array.
console.log('Retorna o valor dos itens dentro do array.')
console.log(Object.values(pessoa))
console.log('')

// Retorna um array com subarrays separando o índice e valor.
console.log('Retorna um array com subarrays separando chave e valor.')
console.log(Object.entries(pessoa))


Object.freeze(pessoa) // Não permite alterações de nenhum tipo no objeto
Object.seal(pessoa) // Não permite adiconar ou remover props, mas permite alteração de valores