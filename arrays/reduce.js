/* O reduce pode ser criado a partir de uma função reducer que será chamada no método reduce.
--- Chamar o reducer dentro do método reduce(), nesse caso, ainda é possível adicionar um elemento para a função
como visto abaixo, o valor 10 logo após o reducer, como no 1º exemplo abaixo.
--- Também poderá ser usado na forma de arrow function como está no 2º exemplo abaixo.

-> Este é o 1º exemplo com a função reducer:
const reducer = (a, b) => a + b;
const media = array.reduce(reducer, 10);

-> Este é o 2º exemplo em arrow function:
const media = array.reduce((a, b) => a + b);
*/

/* O terceiro parâmetro indicado no retorno da função,
(o número zero), indica o estado incial.
É importante ter em mente o tipo de cálculo que ser feito,
pois num caso de multiplicação, todo o valor será multiplicado por 0,
nesse caso, deverá ser colocado o número 1 para que multiplique por 1.
*/

const array = [70, 85, 100, 100, 85];
const media = array.reduce((a, b) => a + b) / array.length;

function notaDoaluno() {
   media
   if (media < 59) return 'E';
   if (media < 69) return 'D';
   if (media < 79) return 'C';
   if (media < 89) return 'B';
   return 'A'
}

console.log(media)
console.log(notaDoaluno())


let arr = [2, 4, 3, 1]

const organize = arr.sort((a, b) => a - b);
const sum = arr.reduce((a, b) => a + b);
const mul = arr.reduce((a, b) => a * b);
const div = arr.reduce((a, b) => a / b);
const noRep = [...new Set(arr)];


console.log(organize)
console.log(sum)
console.log(mul)
console.log(div) // porque ele divide em ordem sequencial?
console.log(noRep)