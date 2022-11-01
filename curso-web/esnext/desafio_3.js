// Desafio: encapsular dentro de uma Promise a leitura de um arquivo

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dado.txt')

function lerArquivo(caminho) {
	return new Promise((resolve, reject) => {
		fs.readFile(caminho, (err, conteudo) => {
			if (err) reject(err)
			else resolve(conteudo.toString())
		})
	})
}

lerArquivo(caminho)
	.then(conteudo => conteudo.split('\n'))
	.then(linhas => linhas.join(', '))
	.then(conteudo => `O valor final é: ${conteudo}`)
	.then(console.log)
	.catch(console.log)