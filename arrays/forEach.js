/*
   O forEach é uma maneira mais elegando do que o laço for
quando se quer iterar sobre um array.
*/

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

console.log('AQUI É O PRIMEIRO EXEMPLO COM .FOREACH')
const retornoForEach = nomes.forEach((nomeAtual) => {
    console.log(nomeAtual);

    return nomeAtual.toUpperCase();
})
console.log(retornoForEach)