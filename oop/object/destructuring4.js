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

function pegarNomeCompleto({nome, sobrenome}) {
   return `${nome} ${sobrenome}`;
}

console.log(pegarNomeCompleto(pessoa))