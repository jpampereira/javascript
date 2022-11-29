/* MÉTODOS:
 * 
 * 1. array.push(): adiciona o valor passado como parâmetro na última
 * posição do array.
 * 
 * 2. array.pop(): remove o elemento na última posição do vetor e
 * retorna ele.
 * 
 * 3. array.shift(): remove o elemento na primeira posição do vetor e
 * retorna ele. A diferença de usar essa função ao invés de 'delete
 * array[0]' é que no caso de 'delete', o valor é removido do array,
 * mas aquela posição fica com o valor undefined, enquanto que usando
 * esse método o array é remanejado. 
 * 
 * 4. array.unshift(): adiciona o valor passado como parâmetro no início
 * do array. Importante dizer que a posição inicial não é sobrescrita e
 * sim que todos os elementos presentes no array são deslocados uma
 * posição para a direita e então o valor passado como parâmetro é inserido
 * na primeira posição.
 * 
 * 5. array.splice(): esse método pode tanto remover quanto adicionar (ou os
 * dois ao mesmo tempo) elementos em uma posição específica. O primeiro
 * parâmetro diz respeito a posição inicial onde será realizada a operação
 * em cima do array. O segundo parâmetro diz respeito a quantidade de elementos
 * que serão removidos do array a partir da posição inicial passada (se não
 * quiser remover nenhum elemento, basta colocar '0'). Os parâmetros seguintes
 * dizem respeito a valores que desejam que sejam armazenados na estrutura.
 * Assim como no método 'unshift', os elementos não são sobrescritos e sim
 * deslocados.
 * 
 * 6. array.slice(): retorna um novo array com os elementos de acordo com o
 * intervalo passado como parâmetro. Se passarmos apenas um parâmetro, o
 * método retornará um subarray do array em questão a partir da posição
 * passada como parâmetro até o fim do array. Caso sejam dois parâmetros,
 * o primeiro diz respeito a posição inicial do 'corte' e o segundo a posição
 * final (com essa posição sendo desconsiderada).
 * 
 * 7. array.reverse(): esse método inverte a ordem dos elementos do array 
 * original.
 * 
 * 8. array.sort(): esse método ordena os elementos do array original em ordem
 * alfabética e ascendente (de A à Z). Porém, para ordenar números pode ser um
 * problema, já que a função interpreta os elementos como strings, logo, entende-se, 
 * por exemplo, que 25 é maior que 100, pois 2 é maior do que 1. Nesse caso, deve-se 
 * passar uma função como parâmetro para que a ordenação de números ocorra corretamente
 * de forma crescente:
 * 
 * array.sort(function(a, b) { return a - b });  
 * 
 * 9. array.join(): esse método concatena os elementos do array em uma única string.
 * Pode ser passado como parâmetro qual o símbolo que irá separar os valores concatenados, 
 * e caso nenhum seja especificado, o símbolo padrão é a vírgula.
 */

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // [posição inicial, num. de elementos removidos, elementos para adicionar...]
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Pega a partir do índice 1 até o índice 4, excluindo ele
console.log(algunsPilotos2)