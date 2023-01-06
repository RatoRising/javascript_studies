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