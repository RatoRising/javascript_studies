// TESTANDO COM ARRAYS
let num1 = [ 1, 2, 3, 4 ];
let num2 = [ 5, 6, 7, 8 ];
let num3 = [ ...num1, 5, 6, 7, 8 ];
let num4 = [ ...num1, ...num2 ];

console.log('RETORNO NUM 1');
console.log(num1);
console.log('RETORNO NUM 2');
console.log(num2);
console.log('RETORNO NUM 3');
console.log(num3);
console.log('RETORNO NUM 4');
console.log(num4);

// TESTANDO COM OBJETOS
let dadosPessoais = {
	nome: 'Rato',
	sobrenome: 'Marrato',
	idade: 40
};
console.log('RETORNO DADOS PESSOAIS');
console.log(dadosPessoais);

let dadosLocais = {
	...dadosPessoais,
	bairro: 'Itaquera',
	cidade: 'São Paulo'
};
console.log('RETORNO DADOS LOCAIS + PESSOAIS');
console.log(dadosLocais);

let dadosSociais = {
	...dadosLocais,
	instagram: '@ratomarrato',
	facebook: '@ratorato'
};
console.log('RETORNO DADOS SOCIAIS + LOCAIS JÁ RECEBENDO PESSOAIS');
console.log(dadosSociais);

let dadosConsolidados = {
	...dadosPessoais,
	...dadosLocais,
	...dadosSociais
};
console.log('RETORNO DADOS CONSOLIDADOS');
console.log(dadosConsolidados);

function dadosAdicionar(dadosConsolidados) {
	let dadosNovos = {
		...dadosConsolidados,
		nacionalidade: 'Brasileira',
		continente: 'Sul Americano'
	};
	return dadosNovos;
}
console.log('RETORNO FUNÇÃO');
console.log(dadosAdicionar(dadosConsolidados));

const produtos = [
	{ descricao: 'Papel Ofício', quantidade: 10, valor: 10.5 },
	{ descricao: 'Lapis preto', quantidade: 20, valor: 0.5 }
];

function total(...produtos) {
	return produtos
   .map((produto) => produto.quantidade * produto.valor)
   .reduce((a, b) => a + b, 0);
}

console.log(total(...produtos));
