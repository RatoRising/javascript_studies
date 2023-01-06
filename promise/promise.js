// PROMISSE
function pegarTemperatura() {
	return new Promise((resolve, reject) => {
		console.log('Buscando informações...');

		setTimeout(() => resolve('mil grau!'), 2000);
	});
}

// // ou pode ser armazenada em uma variável
// let promessa = new Promise((resolve, reject) => {
// 		console.log('Buscando informações...');

// 		setTimeout(() => resolve('mil grau!'), 2000);
// 	});


// UTILIZANDO A PROMISSE
// Utilizando uma variável para armazenar a promise e aplicando os métodos na variável
let temperatura = pegarTemperatura();
temperatura
	.then((nameX) => console.log(`A temperatura encontrada foi ${nameX}`))
	.catch((error) => console.log('Vish, achei o barato não!'));

// Utilizando uma função regular e aplicando os métodos na promise, neste caso irá retornar o catch, pois falta o parãmetro no then
// function entregarTemperatura() {
// 	pegarTemperatura()
// 		.then(() => console.log(`A temperatura encontrada foi ${entregaInfo}`))
// 		.catch(() => console.log('Vish, achei o barato não!'));
// }
// console.log(entregarTemperatura());
