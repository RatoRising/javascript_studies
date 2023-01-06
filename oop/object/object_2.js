// Object Destructuring - Array -------------------------------
const filmes = [
    {
        id: 1,
        titulo: "Aprendendo a programar",
        descricao: "Aprendendo tudo direitinho para ser bom 1",
        duracao: 90
    },

    {
        id: 2,
        titulo: "Aprendendo a programar 2",
        descricao: "Aprendendo tudo direitinho para ser bom 2",
        duracao: 30
    },

    {
        id: 3,
        titulo: "Aprendendo a programar 3",
        descricao: "Aprendendo tudo direitinho para ser bom 3",
        duracao: 60
    }

]

// Desestruturando o objeto array ---------------
const [{id, titulo, descricao, duracao}] = filmes
console.log(titulo) // Retorna o título do primeiro item do array
console.log(filmes[1]) // Retorna todas as informações do índice indicado
console.log(filmes[1].titulo) // Retorna o título do índice 1 do array
filmes.map(filme => console.log(filme.descricao)) // Retorna a descrição de todos os itens do array
