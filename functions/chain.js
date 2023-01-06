// composição de funções "encadeamento"
const people = [ 'Rato', 'Marrato', 'Vieira', 'Neves' ];
const chosenLetter = 'v'
const upperCaseStartingWithChosenLetter = people
	.map((person) => person.toLowerCase())
	.filter((person) => person.startsWith(chosenLetter))
	.map((rPerson) => rPerson.toUpperCase());

console.log(upperCaseStartingWithChosenLetter);