const express = require('express');
const app = express();

app.listen('3000');
app.use(express.json())


app.route('/').get((req, res) => res.send('ola'))

app.route('/:variavel').get((req, res) => res.send(req.params.variavel))

app.route('/idpage/:nome').get((req, res) => res.send(req.params.nome))