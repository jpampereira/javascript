const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');
require('./api/produto')(app, 'com param!');

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

app.use(bodyParser.text()); // Interpreta o body como texto
app.use(bodyParser.json()); // Interpreta o body como JSON
app.use(bodyParser.urlencoded({ extended: true })); // Interpreta o body como URL encoded - Padrão de submissão de formulários
app.use(saudacao('João'));

app.use((req, res, next) => {
	console.log('Antes...');
	next(); // Express trabalha no modelo chain of responsabilities
});

app.get('/clientes/relatorio', (req, res) => {
	res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`);
});

app.post('/corpo', (req, res) => {
	// Sem o body-parser

	// let corpo = '';
	// req.on('data', function(parte) {
	// 	corpo += parte;
	// });

	// req.on('end', function() {
	// 	res.send(corpo);
	// });

	// Com o body-parser
	res.send(req.body); 
});

app.get('/cliente/:id', (req, res) => {
	res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get('/opa', (req, res, next) => {
	console.log('Durante...');

	// Múltiplos formatos de resposta
	res.json({
		data: [
			{ id: 7, nome: "Ana", position: 1 },
			{ id: 34, nome: "Bia", position: 2 },
			{ id: 73, nome: "Carlos", position: 3 }
		],
		count: 3,
		skip: 0,
		limit: 3,
		status: 200
	});

	// res.json({
	// 	nome: 'iPad 32Gb',
	// 	price: 1899,
	// 	discount: 0.12
	// });

	// res.send('<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>');
	
	// next();
});

app.use((req, res) => {
	console.log('Depois...'); // Nunca será executado pois app.get não utilizou o 'next'
});

app.listen(3000, () => {
	console.log('Back-end executando...');
});