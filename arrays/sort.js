/*
Para ordenar números de um array é necessária uma função que compare os números, pois eles são verificados pelo unicode, e o js irá verificar sempre o primeiro valor
de um número.
*/

// Exemplo de números
const ordNum = (a, b) => a - b
let array1 = [ 45, 4, 9, 16, 25 ];
array1.sort(ordNum);
console.log(array1);

// Arrays de strings
let array2 = [ 'ovo', 'leite', 'creme de leite', 'farinha' ];
array2.sort()
array2.reverse() // Depois de ordenar é retornado a inversão em ordem alfabética, se não for feita a ordenação ele irá apenas retornar o inverso dos valores no array
console.log(array2);


// Arrays de objetos
let cars = [ { brand: 'fiat', year: 2015 }, { brand: 'bmw', year: 2018 }, { brand: 'ferrari', year: 2020 } ];
let byName = cars.sort((a, b) => a.brand.localeCompare(b.brand)); // organiza por nome, fazendo comparação em UTF-8
// let byYear = cars.sort((a, b) => a.year - b.year); // Organiza por ano/número

// cars.sort(function(a, b) {
// 	return a.brand < b.brand ? -1 : a.brand > b.brand ? 1 : 0;
// }); // Utiliza fórmula que compara a com b e se a for menor retrocede 1 e se for maior ascende 1, se for igual fica 0

console.log(cars);


// Ordering by properties
const orderByString = (propName) => (a, z) => a[propName].localeCompare(z[propName]);
const orderByNumber = (propName) => (a, z) => a[propName] - z[propName];

const person1 = { name: 'aryan', height: 178 };
const person2 = { name: 'kaush', height: 182 };
const person3 = { name: 'dbhishek', height: 176 };
const people = [ person1, person2, person3 ];
const peopleSorted = people.sort(orderByNumber('height'));
console.log(peopleSorted);

const car1 = { brand: 'fiat', year: 2015, id: 5 };
const car2 = { brand: 'bmw', year: 2018, id: 2 };
const car3 = { brand: 'ferrari', year: 2020, id: 3 };
const carsss = [ car1, car2, car3 ];
const carsssSorted = carsss.sort(orderByString('brand'));
console.log(carsssSorted);