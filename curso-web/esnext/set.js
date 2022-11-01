/* - Estruturas do tipo 'Set' é uma estrutura do tipo conjunto. Ela é não indexada
 * e não permite repetições. 
 *
 * - Objetos e Arrays são estruturas indexadas pois permitem acesso a um único valor
 * dentro da estrutura através de nomes literais e índices, respectivamente. No Set
 * não conseguimos acessar um único valor a partir de um identificador.
 */

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) // Retorna a quantidade de elementos do conjunto
console.log(times.has('Vasco')) // Verifica se um valor está presente no conjunto
times.delete('Flamengo') // Remove um valor de um conjunto
console.log(times.has('Flamengo'))

// Criando um conjunto a partir de um Array - A repetição do array não será inserida no conjunto Set.
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)