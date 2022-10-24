/* É necessário realizar essa importação uma única vez para que nossos componentes criados 
 * em 'global' fiquem disponíveis em toda a aplicação.
 */

require('./global')

console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)