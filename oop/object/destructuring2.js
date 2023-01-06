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
   nomeCompleto: function () {
      return `${this.nome} ${this.sobrenome}`;
   }
};

// Buscando apenas os dados do objeto dentro de outro objeto.
// let {facebook, instagram} = pessoa.social;

// // buscando dados do objeto mais dados do objeto dentro do objeto.
// let {
//    nome,
//    idade,
//    social: {
//       facebook = 'none',
//       instagram = 'none'
//    }
// } = pessoa;


// buscando dados do objeto, mais dados dentro do objeto que está no objeto e mais dados do inception objeto.

let {nome, idade, social:{instagram:{url:instagram, seguidores = 0}}} = pessoa;
console.log(nome, idade, instagram, seguidores);

