let btnShowPosts = document.getElementById('loadPosts');
btnShowPosts.addEventListener('click', loadPost);

async function loadPost() {
	document.getElementById('posts').innerHTML = 'Buscando...';

	let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: 'Título de teste',
			body: 'Corpo de teste',
			userId: 4
		}),
		headers: {
			'content-Type': 'application/json'
		}
	});

	let json = await req.json();
	console.log(json);
}
