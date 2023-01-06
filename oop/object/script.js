const student1 = {
	name: 'Jão',
	age: 30,
	weight: 80,
	isSubscribed: true,
	number: 1
};

const student2 = {
	name: 'Mary',
	age: 20,
	weight: 70,
	isSubscribed: false,
	number: 2
};

let students = [];


// alocar um novo objeto no array students
students[1] = student1;
students[0] = student2;


// alocar um novo objeto na última posição do array students
students.push(student1);
students.push(student2);
console.log(students);

const student3 = {
	name: 'John',
	age: 20,
	weight: 60,
	isSubscribed: true,
	number: 3,
	address: {
		street: 'My own street',
		number: 771
	}
};


// identificando o conteúdo dos objetos
const chaves = Object.keys(student3);
const valores = Object.values(student3);
const entradas = JSON.stringify(Object.entries(student3));
const valores2 = JSON.stringify(Object.values(student3))
console.log(chaves)
console.log(valores)
console.log(entradas)
console.log(valores2)


// desestruturando em uma variável, deverão ser inseridas as propriedades desejadas
// na desestruturação é possível renomear a chave que será exibida na tela desde que chamada pelo novo valor
// também é possível definir valores padrão para chaves que não existam no ojeto como no caso do nickname abaixo
const { name, age: idade, number, address, nickname = "Um nome" } = student3;
console.log(JSON.stringify({name, idade, number, address, nickname}));

// desestruturando em uma função
function mostraidade({age}) {
	return age;
}
console.log(mostraidade(student3))



// um exemplo de destructuring e acesso com função
const filmes = [
	{ 
		 id: 1,
		 titulo: "Dilema das Redes",
		 descricao: "Um documentario sobre tecnologia.",
		 duracao: 120
	},
	{ 
		 id: 2,
		 titulo: "Us",
		 descricao: "Um filme de terror legal demais.",
		 duracao: 120
	},
	{ 
		 id: 3,
		 titulo: "Corra",
		 descricao: "Um filme de suspense bem legal.",
		 duracao: 120
	},
]

const [{id, titulo, descricao, duracao}]  = filmes

filmes.map(filme => console.log(filme.descricao))