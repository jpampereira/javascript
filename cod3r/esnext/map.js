/* Map é uma estrutura do tipo chave/valor, assim como os objetos.
 * A grande diferença é que o Map aceita chaves de diferentes tipos
 * e não apenas valores literais. Ou seja, a chave de uma estrutura
 * Map pode ser uma função, um objeto, um número e até mesmo uma
 * string, como é nos objetos. 
 */

const tecnologias = new Map()
tecnologias.set('react', { framework: false }) // Adicionando um par chave valor a estrutura
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react').framework) // Resgatando o valor relacionado a uma chave

// Criando uma estrutura com diversos pares chave/valor
const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // Verifica se aquela chave está presente dentro da estrutura
chavesVariadas.delete(123) // Remove aquela chave da estrutura
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // Informa a quantidade de elementos dentro da estrutura (igual ao '.length' dos arrays)