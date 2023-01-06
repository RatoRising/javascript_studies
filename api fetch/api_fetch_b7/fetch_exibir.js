let btnShowPosts = document.getElementById('load_posts').addEventListener('click', loadPost);
let btnShowComments = document.getElementById('load_comments').addEventListener('click', loadComments);

function loadPost() {
	document.getElementById('posts').innerHTML = 'Buscando...';

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((result) => result.json())
		.then((json) => showPosts(json))
		.catch((error) => console.log('Deu problema!'));
}


function showPosts(lista) {
	let posts = '';

	for (let i in lista) {
		posts += `<h3>${lista[i].title}</h3>`;
		posts += `<p>${lista[i].body}</p>`;
		posts += `< = = = = = = = = = = = = = = >`;
	}
	document.getElementById('posts').innerHTML = `${posts}`;
}

function loadComments() {
	document.getElementById('comments').innerHTML = 'Buscando...';

	fetch('https://jsonplaceholder.typicode.com/comments')
		.then((result) => result.json())
		.then((json) => showComments(json))
		.catch((error) => console.log('Deu problema!'));
}

function showComments(lista) {
	let comments = '';
	for (let i in lista) {
		comments += `<h3>${lista[i].name}</h3>`;
		comments += `<p>${lista[i].body}</p>`;
		comments += `< = = = = = = = = = = = = = = >`;
	}
	document.getElementById('comments').innerHTML = comments;
}
