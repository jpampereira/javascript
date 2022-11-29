// let a = 1
// console.log(a)

// console.log(typeof Promise) // Function
// console.log(typeof p) // Object (Função instanciada)

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
	resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then(primeiroElemento)
 .then(primeiroElemento)
 .then(letraMinuscula)
//  .then(v => console.log(v))
 .then(console.log) 
 
/* Quando nós temos uma callback que recebe um único parâmetro e chama 
 * outra função inserindo esse valor, podemos apenas chamá-la, omitindo
 * os parênteses (vide linha 18).
 */