// O Set exclui os números repetidos no novo array. O uso do spread evita a legenda do Set.

let arr1 = [1, 1, 3, 3, 2, 5, 5, 4, 6, 6];
let arrSemRepeticao = [...new Set(arr1)];

let ordenarNumeros = (a, b) => a - b;
arrSemRepeticao.sort(ordenarNumeros)
//arrSemRepeticao.sort((a, b) => a - b)

console.log(arrSemRepeticao);



// Excluindo repetições sem o set.
// Neste exemplo, o laço irá verificar se o número do array existe no uniqueArray, como ele é um array vazio ele irá inserir todos os números, exceto o que ele já tiver inserido na primeira verificação.
const array = [4, 4, 1, 2, 3, 2, 3]
function getUnique(arr) {
   let uniqueArr = []

   for (let i of arr) {
      if (uniqueArr.indexOf(i) === -1) {
         uniqueArr.push(i)
      }
   }
   console.log(uniqueArr)
}

getUnique(array)