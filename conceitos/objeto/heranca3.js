const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// O primeiro parâmetro é o objeto pai e o segundo é o filho
const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

/* - Quando utilizamos o método 'Object.keys()' são listados apenas
 * os atributos e métodos pertencentes a aquele objeto, sem inserir
 * os herdados pelo seu pai, caso haja um. Para listar todos, inclusive
 * os herdados, devemos utilizar a estrutura abaixo.
 * 
 * - O método 'hasOwnProperty()' é um método que retorna um valor lógico
 * informando se o valor do atributo passado como parâmetro pertence ao
 * objeto em questão
 */

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}