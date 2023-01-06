// // Criando evento
// const { EventEmitter } = require('events');

// const event = new EventEmitter();

// event.on('saySomeWord', () => console.log('I knew it'));
// // event.once('saySomeWord', () => console.log("I knew it")) // executa o listener uma única vez

// event.emit('saySomeWord');
// event.emit('saySomeWord');

// Herdando EventEmitter
const { inherits } = require('util');
const { EventEmitter } = require('events');

// Função construtora
function Character(name) {
	this.name = name;
}

// Requisitando a herança indicando como primeiro parâmetro quem irá herdar e como segundo o que irá herdar
inherits(Character, EventEmitter);

// Chamado função construora para criação de persnagem
const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} Colorado!`));
console.log('Oh! E agora, quem poderá me defender?');
chapolin.emit('help');

const theRock = new Character('The Rock');
let cara = 'Vin Diesel';
// recebe como primeiro parâmetro o valor que deve ser ouvido e como segundo a função a ser executada
theRock.on('smash', () => console.log(`Eu sou o ${theRock.name} e vim pra quebrar o ${cara}!`));
// executa a função e emite após receber o valor que deverá ser ouvido
theRock.emit('smash');
