/* Windows e MacOS são case insensitive, diferentemente do Linux (maioria dos servidores web),
 * portanto, coloque dentro de require o caminho com o nome dos diretórios e arquivos como
 * realmente eles são, caso contrário, erros inesperados podem ser gerados.
 */

const modulaA = require('../../moduloA') // Caminho Relativo
// const moduloB = require('/home/joaopedro/Documentos/cursos/javascript/exercicios-js/node/moduloB.js') // Caminho Absoluto - NÃO RECOMENDADO!
console.log(modulaA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http') // Módulo Core/Interno - Não precisa instalá-lo
// http.createServer((req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)