let arr = [3, 5, 7];
arr.foo = 'hello';
arr.push(9);

// Percorre todos os itens do array e retorna os índices mais as props adicionadas.
console.log('Percorre todos os itens do array e retorna os índices mais as props adicionadas.')
for (i in arr) {
   console.log(i);
}

// Percorre o array e retorna somente os valores do itens numerados.
console.log('\nPercorre o array e retorna somente os valores do itens numerados.')
for (i of arr) {
   console.log(i);
}


let frutasGrandes = []
let frutas = [ 'banana', 'laranja', 'abacaxi', 'pera', 'maçã' ];
for (let item of frutas) {
   item.length > 4 ? frutasGrandes.push(item) : false
}
console.log(frutasGrandes);