console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6) - Syntax Sugar (ou atalho de sintaxe) - Na verdade, uma 'class' é uma função
console.log(typeof Produto)
console.log(typeof new Produto())

// EM JS, funções podem ter atributos e métodos e podem ser instanciadas