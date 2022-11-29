/* A atribuição de variáveis pode ser feita de duas formas: por
 * valor e por referência. Quando armazenamos um objeto, a variável
 * armazena o endereço de memória do objeto (atribuição por referência).
 * Se criarmos um objeto utilizando a palavra reservada 'const', será
 * possível continuar manipulando ele adicionando e alterando seus
 * atributos e métodos, mas não será possível atribuir outro objeto
 * na mesma constante, pois alteraria o endereço de memória armazenado.
 */

// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana' }

/* Para impedirmos que possam ser alterados, inseridos ou removidos
 * métodos e atributos nos objetos, utilizando a função 'freeze()' de
 * 'Object'.
 */

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'} )
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)