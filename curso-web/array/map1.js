/* - O método array.map(), assim como o array.forEach(), é utilizado para
 * iterar sobre arrays. Ele possui a mesma estrutura, recebendo como
 * parâmetro uma função callback que será chamada a cada iteração sobre
 * o array e essa pode receber os mesmos três parâmetros: o valor da posição
 * atual, o índice atual e o array completo. A diferença entre as das é que
 * o map serve a um propósito específico, mapear um array para um novo array.
 * 
 * - É importante ressaltar que esse método não altera o array que o chamou, e
 * sim gera um novo vetor que será retornado pela função.
 * 
 * - O array retornado, portanto, possui a mesma quantidade de elementos do
 * array de entrada, mas com seus valores modificados de acordo com a operação
 * realizada dentro da função callback.
 */

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)