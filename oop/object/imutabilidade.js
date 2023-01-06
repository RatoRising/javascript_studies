/*
No conceito de imutabildiade, uma constante nunca será alterada, caso queiramos
adicionar ou remover dados, devemos criar uma nova variável que receberá a 
primeira como referência mais as alterações a serem feitas.
*/

// Variável inicial
const user = {
   name: 'Rato',
   lastName: 'Marrato'
};

// função que concatena os atributos da primeira constante
function getUserWithFullName() {
   return {
      ...user, // repete os dados de user
      fullName: `${user.name} ${user.lastName}` // adiciona o nome completo
   }
};

// Variável que recebe as alterações.
const userWithFullName = getUserWithFullName()

console.log(userWithFullName)