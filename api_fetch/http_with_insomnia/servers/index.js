const express = require('express');
const axios = require('axios');
const app = express();

app.listen('3000');
app.use(express.json())

app.route('/').get((req, res) => {
	const user = 'jakeliny';
	const url = `https://api.github.com/users/`;

	axios
   .get(`${url}${user}`)
   .then((result) => res.send(result.data))
   .catch((error) => console.log(error));
});
