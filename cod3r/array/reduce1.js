/* - O método array.reduce(), assim como o array.forEach(), é utilizado 
 * para iterar sobre arrays. Ele possui uma estrutura diferente, recebendo 
 * como parâmetro uma função callback que será chamada a cada iteração sobre
 * o array, além de um parâmetro que indica o valor inicial da soma. Essa 
 * callback pode receber os seguintes parâmetros: o valor acumulado até o 
 * momento, o valor da iteração atual, o índice atual e o array completo. 
 * 
 * - O reduce serve a um propósito específico, somar todos os elementos de um 
 * array.
 * 
 * - Além da callback, o método 'reduce' também pode receber .
 */

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0 /* Valor Inicial */)

console.log(resultado)