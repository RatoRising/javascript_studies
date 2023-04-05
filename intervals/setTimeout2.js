
setTimeout(() => {
	console.log('1. HTML');

	setTimeout(() => {
		console.log('2. CSS');

		setTimeout(() => {
			console.log('3. JavaScript');

			setTimeout(() => {
				console.log('4. React');

				setTimeout(() => {
					console.log('5. TypeScript');

					setTimeout(() => {
						console.log('6. Next JS');
					}, 800);
				}, 800);
			}, 800);
		}, 800);
	}, 800);
}, 800);


/* Callback é uma função/código que ao concluído seja através de um timer ou obtenção de um resultado,
invoca uma função que executará uma tarefa a partir de sua instrução ou do resultado obtido.
*/

function retornar() {
   console.log('Este resultado está sendo retornado após a variável nomeCompleto, apesar de estar antes dela, isso porque o timeout que a invoca tem um delay programado de 2 segundos, ou seja, ele torna a execução assíncrona.')
}

let nome = 'Rato';
setTimeout(retornar, 2000);
let sobrenome = 'Marrato';
let nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto)

// Time to sleep
const sleep = (time) => setTimeout(() => console.log('Sleeping now'), time)
console.log('foo')
sleep(1000);
console.log('bar');