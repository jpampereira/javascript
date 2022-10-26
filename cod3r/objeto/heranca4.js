/* - Todas as funções construtoras possuem um atributo chamado 'prototype',
 * que é o objeto protótipo daquela função que armazena todos os seus
 * atributos e métodos.
 * 
 * - Quando instanciamos um objeto através de uma função construtora, seu
 * atributo '__proto__' aponta para o protótipo de sua função construtora.
 * Caso um objeto seja criado a partir da notação literal ou através de 
 * 'new Object', seu '__proto__' apontará para 'Object.prototype', que é
 * um objeto vazio.
 */

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new Object).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)