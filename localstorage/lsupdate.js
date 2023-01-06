let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
	e.preventDefault();
	let nome = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let data = {
		nome,
		email
	};

	if (nome === '' || email === '') {
		return alert('Todos os campos devem ser preenchidos!');
	}

	let convertData = JSON.stringify(data);
	localStorage.setItem('lead', convertData);
	btn.value = 'Cadastrado com sucesso!';
});
