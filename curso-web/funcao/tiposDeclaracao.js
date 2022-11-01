/* A diferença entre criar funções do jeito tradicional e funções
 * anônimas armazenadas em variáveis, é que funções tradicionais
 * podem ser chamadas em qualquer ponto do código, até mesmo em
 * linhas acima de onde a função foi declarada, diferentemente das
 * funções anônimas armazenadas em variáveis, que causaria erro.
 * Isso acontece porque o interpretador carrega todas as funções
 * declaradas de forma tradicional antes de executar o código.
 */

console.log(soma(3, 4))
// console.log(sub(3, 4)) // Vai dar erro
// console.log(mult(3, 4)) // Vai dar erro

// Function declaration
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function (x, y) {
    return x - y
}

// Named function expression - Não muito utilizada - Útil durante o debug do código pois a function irá aparecer na stack
const mult = function mult(x, y) {
    return x * y
}