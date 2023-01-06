let medals = [ 'ouro', 'prata', 'bronze' ];
let numero = 0; // - 1

function medalhaPorPosto() {
	if (numero > medals.length || numero === 0 ) {
		return 'Você não ganhou medalhas desta vez, mas continue participando!';
	} else {
		return `De acordo com a sua posição você ganhou a medalha de ${medals[numero - 1].toLocaleUpperCase()}!`;
	}
}
console.log(medalhaPorPosto());

function medalhas() {
	switch (numero) {
		case 1:
			if (numero === 1) console.log('De acordo com a sua posição você ganhou a medalha de ' + 'OURO!');
			break;

		case 2:
			if (numero === 2) console.log('De acordo com a sua posição você ganhou a medalha de ' + 'PRATA!');
			break;

		case 3:
			if (numero === 3) console.log('De acordo com a sua posição você ganhou a medalha de ' + 'BRONZE!');
			break;

		default:
			console.log('Você não ganhou medalhas desta vez, mas continue participando!');
	}
}
console.log(medalhas());
