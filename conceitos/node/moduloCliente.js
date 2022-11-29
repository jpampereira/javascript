const moduloA = require('./moduloA') // Importando o moduloA.js para o moduloCliente.js
const moduloB = require('./moduloB') // Se o arquivo importado for JavaScript, não é necessário informar a extensão

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)