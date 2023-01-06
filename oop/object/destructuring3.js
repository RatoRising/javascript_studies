let pessoa = {
   nome: 'Jão',
   sobrenome: 'Melão',
   idade: 25,
   social: {
      facebook: 'JMelão',
      instagram: {
         url: '@JãoMelão',
         seguidores: 120
      }
   },
};

function pegarNomeCompleto(obj) {
   return `${obj.nome} ${obj.sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa))