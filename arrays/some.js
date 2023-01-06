let lista1 = [45, 4, 9, 16, 25];
let lista2 = [];

/* some sempre faz uma verificação boleana, e não retorna um novo array, mas se é true ou false.
Esse método retorna true quando um dos itens atende ao requisito.
*/
lista2 = lista1.some((parametro) => parametro > 20 ? true : false);

console.log(lista2)