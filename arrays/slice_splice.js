// criar arrays com construtor

let arr1 = ['a', 'b', 'c']
let arr2 = [...arr1, 'd']
console.log(arr1)
console.log(arr2)

// Populando um array vazio criado através do construtor
// quando você atribui um valor diretamente a um índice ele vai ocupar o espaço determinado enquanto os outros continuam vazios
// quando você insere através do .push ele irá aumentar o tamanho do array, pois não foi definida nenhuma posição e ele irá adiconar ao final do array
let arr3 = new Array(10)
arr3[2] = 3
arr3[3] = 4
arr3.push(1, 2, 3, 4, 5)
console.log(arr3)

// extraindo valores de um array e criando um novo arrays somente com os itens extraídos
// A partir do índice indicado no primeiro parâmetro, deve se considerar a quantidade de itens desejada menos o valor do índice.
let frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
let citricos = frutas.slice(2, 4);
console.log(frutas) // Array não alterado
console.log(citricos) // Novo array criado

// excluindo um item do array e alterando o array original com os itens remanescentes
// A partir do índice indicado no primeiro parâmetro, é extraída a quantidade de itens indicada no segundo parâmetro.
let techs = ['html', 'css', 'js'];
techs.splice(1, 1) // Desse modo, o splice irá extrair os itens indicados e alterar o array original
console.log('ARRAY ORIGINAL')
console.log(techs)

// Neste exemplo, o resultado é o mesmo que é esperado do splice, pois é armazenado em uma nova variável o valor extraído.
// Aqui o newTechs já recebe o array original alterado pelo método anterior, logo, ele retorna apenas js.
console.log('NEW ARRAY')
let newTechs = techs.splice(1,1)
console.log(newTechs)


//excluindo um item do array através da identificação do seu índice e alterando o array original
let techs2 = ['html', 'css', 'js', 'nodejs', 'sql'];
let index = techs2.indexOf('nodejs')
techs2.splice(index, 1)
console.log(techs2)