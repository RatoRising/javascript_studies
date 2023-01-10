const express = require('express');
const app = express();

app.listen('3000');
app.use(express.json())


app.route('/').get((req, res) => {
   const {nome, cidade, livros_fav} = req.body
   res.send(`Meu nome é ${nome}, moro em ${cidade} e estou lendo ${livros_fav[0]}.`)
})

