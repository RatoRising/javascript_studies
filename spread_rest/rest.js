// // Sem a utilização do operador rest irá retornar apenas o primeiro parâmetro, uma vez que um único parâmetro foi definido
// function adicionarSemRest(numeros) {
//    console.log(numeros);
// }
// adicionarSemRest(5, 6, 7);

// Neste caso, com o operador rest, a função irá retornar todos os parâmetros adicionados em um array.
function adicionarComRest(...paramX) {
	return paramX;
}
console.log(adicionarComRest(5, 6, 7));

// Neste caso, com o operador rest, a função irá retornar um único item em um array que não utilizou o rest e os demais em outro array com o rest.
function adicionarComRest2(paramX, ...paraRest) {
	return [paramX, paraRest.join(", ")];
}
console.log(adicionarComRest2(5, 6, 7));

// USANDO REST COM SPREAD
let nomes = [ 'Jão', 'Maria' ];
let novosNomes = [ 'Ana', 'Paulo', 'Zorro' ];

let dadosAtualizados = adicionarComRest(...nomes, 'Ana', 'Paulo', 'Zorro');
console.log(dadosAtualizados);


function adicionarRestComSpread() {
	let nomesConsolidados = [ ...nomes, ...novosNomes ];
	return nomesConsolidados;
}
console.log(adicionarRestComSpread());


function soma (...valores) {
   var total = 0

   for (const item of valores) {
     total += item
   }

   return total
 }

 console.log(soma(1, 2, 3, 4, 50, 10, 23))

