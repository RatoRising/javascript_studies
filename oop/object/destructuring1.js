let pessoa = {
   nome: 'Jão',
   sobrenome: 'Melão',
   idade: 25,
   social: {
      facebook: 'JMelão',
      instagram: 'JãoMelão'
   },
   nomeCompleto: function () {
      return `${this.nome} ${this.sobrenome}`;
   }
};

// Como no exemplo abaixo, em idade, é possível definir um valor padrão que será utilizado caso o objeto não possua aquele valor definido.
// também é possível renomear (?) o parâmetro/variável do objeto, conforme descrito abaixo na prop name.
let {nome:pessoaNome, sobrenome, idade = 0} = pessoa;

console.log(pessoaNome, sobrenome, idade)