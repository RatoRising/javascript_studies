/* 
Com o map você pode executar funções após iterar sobre o conteúdo do array
e gerar um novo array com os dados trabalhados.
*/


let lista1 = [45, 4, 9, 16, 25];
let lista2 = [];

// arrow function simplificado porque só tem um parâmetro
//lista2 = lista1.map(parametro => parametro * 2);


// arrow function com sintaxe completa
/*
lista2 = lista1.map((parametro) => {
   let valor2 = 1;
   return parametro * 2 * valor2;
});
*/

/* função dentro do map
lista2 = lista1.map(function(parametro) {
   return parametro * 2;
});
*/
console.log(lista2)

// UM OUTRO EXEMPLO
console.log('UM OUTRO EXEMPLO')
const vetor = [1, 2, 3, 4, 5, 6];
const vetorTransformado = vetor.map((x) => x + 1);
console.log(vetorTransformado)


console.log('AQUI É O SEGUNDO EXEMPLO COM .MAP')
const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];
const retornoMap = nomes.map((nomeAtual) => {
   console.log(nomeAtual);
   return nomeAtual.toUpperCase();
})
console.log(retornoMap)