/* Quando requisitamos um objeto utilizando o método 'require', o node faz
 * cache dele para que quando uma nova instância dele for solicitado dentro 
 * do mesmo arquivo, o mesmo objeto seja utilizado. Para driblar isso e 
 * conseguirmos um novo objeto a cada requisição, podemos utilizar as funções 
 * factory.
 */

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)