let lista1 = [45, 4, 9, 16, 25];
let lista2 = [];

/* every sempre faz uma verificação boleana, e não retorna um novo array, mas se é true ou false.
Esse método retorna true apenas se todos os itens corresponderem a verificação.
*/
lista2 = lista1.every((parametro) => {
   if (parametro > 20) {
      return true;
   } else {
      return false;
   }
});

console.log(lista2)