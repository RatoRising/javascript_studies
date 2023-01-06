const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	const items = [
		{
			title: 'D',
			message: 'esenvolvendo em EJS'
		},
		{
			title: 'E',
			message: 'JS é bem bacana'
		},
		{
			title: 'M',
			message: 'as não é fácil não'
		},
		{
			title: 'A',
			message: 'prender a usar corretamente pode levar um tempo'
		},
		{
			title: 'I',
			message: 'sso quer dizer que sua necessidade precisa ser avaliada'
		},
		{
			title: 'S',
			message: 'enão vai estudar tudo sem real ou expressa necessidade'
		}
	];
	const subtitle = "É uma linguagem de modelagems para criação de pagínas HTML utilizando JS"
	res.render('pages/index', {
		qualities: items, subtitle
	});
});

app.get('/about', function(req, res) {
	res.render('pages/about');
});
d
app.listen(8080);
console.log('running free');

