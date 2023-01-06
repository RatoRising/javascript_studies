let aceitar = true;
console.log('Pedindo Uber');

const promessa = new Promise((resolve, reject) => {
	aceitar ? resolve('Seu Uber chegou!') : reject('Pedido negado!');
});

promessa
	.then((resolve) => console.log(resolve))
	.catch((reject) => console.log(reject))
	.finally(() => console.log('Finalizado!'));
