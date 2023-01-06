/* find retorna o primeiro item que atende ao requisito buscado independente de sua posição no array.
No caso deste exemplo, ele retornará o 45 que é o primeiro item do array que atende ao requisito.
Quando o retorno for true ele irá informar o dado encontrado.
*/


let lista1 = [45, 4, 9, 16, 25];
let lista2 = [];

// arrow function na forma mais simples junto com o operador ternário que pode ser usada quando existe apenas um parâmetro.
lista2 = lista1.find(parametro => parametro > 0 ? true : false);
console.log(lista2)


// OUTRO EXEMPLO --------------------------
let listaNomes = [
   {id:1, nome: 'Clarice', sobrenome: 'Lispector'},
   {id:2, nome: 'José',    sobrenome: 'de Alencar'},
   {id:3, nome: 'José',    sobrenome: 'Saramago'},
];

let pessoaNaLista = listaNomes.find(parametro => {
   return parametro.nome === 'José' ? true: false;
});

let pessoaNaLista2 = listaNomes.find(parametro => {
   return parametro.id === 3 ? true: false;
});

console.log(pessoaNaLista, pessoaNaLista2)