let btnSendFiles = document.getElementById('sendFiles');
btnSendFiles.addEventListener('click', sendFiles);

async function sendFiles() {
	let arquivo = document.getElementById('arquivo').files[arquivo.length];

	let body = new FormData();
	body.append('title', 'One Title');
	body.append('arquivo', arquivo);

	let req = await fetch('https://o-site-que-recebera-os-dados.com.br/upload', {
		method: 'POST',
		body: body,
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
}

console.log(sendFiles());
