const rato = "rato".slice(1, 3)

console.log(rato)

/* let number = 33.345
console.log(number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})) */
let words = ['cama', 'mesa', 'banho']
let phrase = "Eu quero ser o melhor programador do mundo"

let metodoSplit = phrase.split(" ")
let metodoJoin = metodoSplit.join("_")
let metodoJoin2 = words.join('....')

// converte uma string (texto) num array através de um fator comum, neste exemplo o espaço vazio entre eles
console.log(metodoSplit)

// junta os dados de um array inserindo um separador qualquer entre eles, nesse caso o underscore
console.log(metodoJoin)

// junta os dados de um array inserindo um separador qualquer entre eles, nesse caso o ....
console.log(metodoJoin2)

