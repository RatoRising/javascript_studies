// NOTA: Arrays são tipados como objetos em Javascritp, logo, retornarão também chave(índice) e valor

let num = [10, 20, 30, 40];

// Retorna o ínidice dos itens dentro do array.
console.log('Retorna o ínidice dos itens dentro do array.')
console.log(Object.keys(num));
console.log('')

// Retorna o valor dos itens dentro do array.
console.log('Retorna o valor dos itens dentro do array.')
console.log(Object.values(num));
console.log('')

// Retorna um array com subarrays separando o índice e valor.
console.log('Retorna um array com subarrays separando o índice e valor.')
console.log(Object.entries(num));