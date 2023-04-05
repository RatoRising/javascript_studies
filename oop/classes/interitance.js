class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}

   // método
	read() {
		return `Estou lendo ${title}`;
	}
}

class ItBook extends Book {
   // É necessário inserir os parâmetros da classe anterior para que herde os dados
	constructor(title, author, pages, technology) {
		super(title, author, pages);
		this.technology = technology;
	}
}

let book = new Book('A title', 'A author', 500);
let newbook = new Book('A 2 Title', 'A 2 author', 200);
let itBook = new ItBook('A IT title', 'A IT author', 300, "Tech Talks" )

console.log(book.pages);
console.log(newbook);
console.log(itBook)