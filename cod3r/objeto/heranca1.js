/* Herança é um conceito que permite que objetos herdem atributos
 * e métodos de outros objetos com características semelhantes (ou
 * não), evitando a reescrita e a ambiguidade no código.
 * 
 * Exemplo: Dois objetos, 'ferrari' e 'volvo' podem herdar os atributos
 * e métodos do objeto 'carro', pois ambos são carros, e ainda podem
 * ter seus atributos e métodos específicos, que dizem respeito as suas
 * particularidades. */

const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)