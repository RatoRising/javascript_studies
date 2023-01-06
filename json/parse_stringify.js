// JSON = JavaScript Object Notation

let pessoa = {
	nome: 'Rato',
	idade: 40,
	estetica: {
		altura: 1.7,
		peso: 88
	}
};

// Retorna o Objeto
console.log('RETORNA O OBJETO');
console.log(pessoa);
console.log('');

// Retorna o objeto convertido para uma string.
console.log('JSON.stringify - RETORNA OBJETO CONVERTIDO PARA STRING.');
let jsonToString = JSON.stringify(pessoa);
console.log(jsonToString);
console.log('');

// Retorna uma string convertida para um objeto.
console.log('JSON.parse - RETORNA STRING CONVERTIDA PARA OBJETO.');
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);
console.log('');

// Note que no exemplo anterior foram usadas variáveis, no entanto, neste caso, a string precisa ser colocada entre '' para funcionar.
console.log(JSON.parse('{"nome":"Rato","idade":40,"estetica":{"altura":1.7,"peso":88}}'));
console.log('');

//EXEMPLO de como retornar uma string formatada para melhor visualização do objeto
console.log('EXEMPLO de como retornar uma string formatada para melhor visualização do objeto');
const person = {
	name: 'Rato',
	age: 40,
	citizenship: 'Brazilian',
	anything: 'anything'
};
let converted = JSON.stringify(person, 0, 1);
console.log(converted);