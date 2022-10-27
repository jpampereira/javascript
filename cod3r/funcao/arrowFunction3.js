let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

/* O 'THIS' NÃO VARIA DE FORMA ALGUMA EM ARROW FUNCTIONS: Arrow functions 
 * possuem prioridade sobre a função 'bind', ou seja, se você tentar 
 * chamar uma arrow function utilizando o 'bind' para definir para qual 
 * contexto léxico ela deve olhar, nada acontecerá, pois arrow functions 
 * são "mais fortes".
 */

// objeto         -> this === objeto
// function       -> this === global
// arrow function -> this === module.exports