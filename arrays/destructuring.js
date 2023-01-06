let info = ['Rato Marrato', 'Rato', 'Marrato', '@ratomarrato'];

//let [nomeCompleto, nome, instagram, sobrenome] = info;
//console.log(nomeCompleto, nome, instagram, sobrenome);

let [nomeCompleto, , , instagram] = info;
console.log(nomeCompleto, instagram);



/*
Existe a opçáo de criar um array desconstruído, mas não é usual, pode ser utilizado quando,
no início de um programa você já precise definir diversas váriavies/constantes, inclusive definindo valores padrões
como no exemplo da idade abaixo.

let [nome, sobrenome, idade = 25] = ['Rato', 'Marrato'];
console.log(nome, sobrenome, idade);
*/