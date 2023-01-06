const express = require('express');
const app = express();

app.listen('3000');

//midleware
app.use(express.json())

// app.route('/').get((req, res) => res.send('hellow world'))
// app.route('/').post((req, res) => res.send(req.body));

/* app.route('/').get((req, res) => res.send(author))
let author = "Vieira"
app.route('/').put((req, res) => {
   author = req.body.author
   res.send(author)
}); */

/* app.route('/:identificador').delete((req, res) => {
   res.send(req.params.identificador)
}) */

app.route('/').get((req, res) => res.send(req.query.name))
app.route('/').post((req, res) => res.send(req.body))
app.route('/:parametro').get((req, res) => res.send(req.params.parametro))