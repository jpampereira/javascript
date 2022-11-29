/* - O método array.filter(), assim como o array.forEach(), é utilizado para
 * iterar sobre arrays. Ele possui a mesma estrutura, recebendo como
 * parâmetro uma função callback que será chamada a cada iteração sobre
 * o array e essa pode receber os mesmos três parâmetros: o valor da posição
 * atual, o índice atual e o array completo. A diferença entre as das é que
 * o filter serve a um propósito específico, filtrar um array gerando um 
 * subarray do original.
 * 
 * - É importante ressaltar que esse método não altera o array que o chamou, e
 * sim gera um novo vetor que será retornado pela função.
 * 
 * - O array retornado, portanto, possui os elementos do array original que
 * respeitarem a condição passada na callback.
 */

const produtos = [
    {  nome: 'Notebook', preco: 2499, fragil: true },
    {  nome: 'iPad Pro', preco: 4199, fragil: true },
    {  nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    {  nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const ehCaro = produto => produto.preco >= 500
const ehFragil = produto => produto.fragil

console.log(produtos.filter(ehCaro).filter(ehFragil))