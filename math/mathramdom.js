// Gera numeros aleatórios inteiros, onde 200 é o número máximo para aparecer.
let valor = Math.floor(Math.random() * 200);

console.log(valor);

// Gera números integer aleatórios de 1 a 60
let nQtty = 6;
function lotteryGen() {
	let receiver = [];
	for (let i = 0; i < nQtty; i++) {
		receiver.push(Math.ceil(Math.random() * (59 + 1)));
	}
	return receiver;
}
console.log(lotteryGen());

// Gera número integer aleatório de 0 a 60
function aleatoryGen() {
	let receiver = Math.floor(Math.random() * (60 + 1));
	console.log(receiver);
}
console.log(aleatoryGen());

// Gera números aleatórios entre dois números
function getRandomArbitrary(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(20, 50));