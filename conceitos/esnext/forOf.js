/* A diferença do 'for of' para o 'for in' é que o primeiro itera
 * sobre os valores presentes dentro da estrutura, enquanto o
 * segundo itera sobre os índices. Ou seja, o valor armazenado na
 * variável que recebe a iteração atual do array é o valor propriamente
 * dito daquela posição e não o seu índice, como no 'for in'
 */

// Percorrendo String
for (let letra of "Cod3r") {
    console.log(letra)
}

// Percorrendo Array
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i) // Imprime os índices
}

for (let assunto of assuntosEcma) {
    console.log(assunto) // Imprime os valores
}

// Percorrendo Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// Percorrendo Set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}