let lista1 = [45, 4, 9, 16, 25];
let lista2 = [];

/* findIndex funciona exatamente da mesma forma que o find, no entanto, ele retorna o índice do valor encontrado no array.
*/
lista2 = lista1.findIndex((parametro) => {
   if (parametro < 10) {
      return true;
   } else {
      return false;
   }

   /* Para simplificação do código poderá ser usada, além da arrow function usada aqui, o operador ternário.

   return parametro < 10 ? true : false;
   ou
   return (parametro < 10) ? true : false;
   
   */
});

console.log(lista2)