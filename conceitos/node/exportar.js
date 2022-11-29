/* - 'this' e 'exports' são variáveis internas do Node.JS que armazenam a referência 
 * para o objeto de 'module.exports'. Portanto, se sobrescrevermos elas com um novo
 * objeto, 'module.exports' não será alterado, e sim apenas os seus valores. Por isso,
 * quando for atribuir um novo objeto para definir o que será visível fora do arquivo, 
 * devemos usar a notação 'module.exports'.
 * 
 * - O que de fato vai ser exportado está em 'module.exports'.
 */

console.log(module.exports)
console.log(module.exports === this)
console.log(exports === module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {
    publico: true
}