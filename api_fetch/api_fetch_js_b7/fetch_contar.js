let btnShowPosts = document.getElementById('loadPosts');
btnShowPosts.addEventListener('click', loadPost);

function loadPost() {
	document.getElementById('posts').innerHTML = 'Buscando...';

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((result) => result.json())
		.then((json) => (document.getElementById('posts').innerHTML = json.length + ' posts'))
		.catch((error) => console.log('Deu problema!'));

	fetch('https://jsonplaceholder.typicode.com/comments')
		.then((result) => result.json())
		.then((json) => (document.getElementById('comments').innerHTML = json.length + ' comments'))
		.catch((error) => console.log('Deu problema!'));
}
