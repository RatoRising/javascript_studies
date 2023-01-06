// Filter sempre faz uma verificação boleana, em casos verdadeiros irá retornar os valores buscados em um novo array, em caso falso retornará um array vazio.
const ordNum = (a, b) => a - b; // função para ordenção de valores
const ordName = (a, b) => a.localeCompare(b)

console.log('RESULTADO LISTA 1');
const lista1 = [ 45, 4, 9, 16, 25 ];
let lista2 = lista1.filter((parametro) => (parametro < 20 ? true : false)).sort(ordNum);
console.log(lista2);
console.log('');
console.log('');

console.log('RESULTADO LISTA 2');
const vetor1 = [ 10, 4, 5, 6, 2, 7, 3, 8, 9, 1 ];
const vetor2 = vetor1.filter((x) => x <= 8).sort(ordNum);
console.log(vetor2);
console.log('');
console.log('');

console.log('RESULTADO LISTA 3');
let frutas = [ 'laranja', 'pera', 'banana', 'abacaxi', 'maçã' ];
let frutasGrandes = frutas.filter((item) => item.length > 4)
console.log(frutasGrandes.sort(ordName));


// OUTROS TESTES
const numbers = [ 10, 20, 30, 40, 50 ];
const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 }
];


const filteredItem = items.filter((item) => item.price <= 100).sort((a, b) => a.price - b.price);
console.log(filteredItem);

const forEachItems = items.forEach((item) => {
	console.log(item.name, item.price);
});

// reducer para array de objetos deve ser informado o valor inicial o não funcionará
const reducerObject = items.reduce((accum, item) => accum + item.price, 0);
console.log(reducerObject);

const reducerArray = numbers.reduce((accum, item) => accum + item);
console.log(reducerArray);
