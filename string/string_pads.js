/* O padStart e o padEnd são completadores de campos
e eles recebem dois parâmetros, sendo o primeiro o tamanho
que deveria ter a string e o segundo será o valor/símbolo que substituirá
os campos vazios ou a serem substituídos, conforme exemplos abaixo.
*/

let tel = 'N'
console.log(tel.padEnd(9, "a1a2a3a4"))

let cartao = '2568.8256.2568.2033';
let ultimos4Digitos = cartao.slice(-5);
let ocultarInicioCartao = `Seu cartão é ${ultimos4Digitos.padStart(19, "* ")}?`
console.log(ocultarInicioCartao)

let primeiros4Digitos = cartao.slice(0, 5);
let ocultarFinalCartao = `Seu cartão é ${primeiros4Digitos.padEnd(19, ' *')}?`
console.log(ocultarFinalCartao)