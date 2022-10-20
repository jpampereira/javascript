/* - Arrays são tratados como objetos em JS.
 *
 * - Por ser uma linguagem de tipagem fraca, os arrays em JS são estruturas
 * heterogêneas, ou seja, permitem dados de diferentes tipos dentro da mesma
 * estrutura. Porém, as boas práticas dizem que devem utilizar arrays de forma
 * homogênea.
 * 
 * - Diferentemente de outras linguagens, como Java e C, onde é necessário estabelecer
 * um tamanho fixo para ele em sua declaração. Arrays em JS são dinâmicos e seu tamanho
 * aumenta de acordo com os elementos adicionados.
 */

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Não muito utilizada
console.log('Aprovados')

aprovados = ['Bia', 'Carlos','Ana'] // Notação Literal - Recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //  Não da erro! Devolve 'undefined'

aprovados[3] = 'Paulo'
aprovados.push('João') // Adiciona no final do array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena o array
console.log(aprovados)

delete aprovados[1] // aprovados[1] = undefined após o delete
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Remove dois elementos a partir da primeira posição e adiciona 'Elemento1' e 'Elemento2' no lugar
console.log(aprovados)