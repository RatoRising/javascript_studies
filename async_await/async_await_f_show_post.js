let btnShowPosts = document.getElementById('loadPosts');
btnShowPosts.addEventListener('click', loadPost);

async function loadPost() {
	document.getElementById('posts').innerHTML = 'Buscando...';

	let req = await fetch('https://reqres.in/api/unknown', {
		method: 'GET'
		// body: JSON.stringify({
		// 	title: 'Título Teste',
		// 	body: 'Corpo de teste',
		// 	userId: 1
		// }),
		// headers: {
		// 	'Content-type': 'application/json'
		// }
	});

	let json = await req.json();
	montarBlog(json);
}

function montarBlog(lista) {
	let html = '';
	for (let i in lista) {
		html += `<h3>${lista[i].name}</h3>`;
		html += `<p>${lista[i].year}</p>`;
		html += `< = = = = = = = = = = = = = = >`;
	}
	document.getElementById('posts').innerHTML = html;
}
