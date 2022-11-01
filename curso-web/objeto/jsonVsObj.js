// JSON (JavaScript Object Notation)

/* JSON é utilizado na interoperabilidade de sistemas distintos
 * e até mesmo dentro do próprio sistema. Essa facilidade deve-se
 * ao fato do JSON possuir formato textual e não possuir 
 * particularidades para funcionar em cada sistema. Ele também é
 * utilizado para a criação de regras em sistemas (Ex: as regras
 * do Impact são feitas em JSON)
 */

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }
console.log(JSON.stringify(obj)) // Conversão Objeto JS -> JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Conversão JSON -> Objeto JS
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

/* - É permitido atributos de todos os tipos: números, strings,
 * booleanos, vetores e objetos.
 *
 * - O nome dos atributos devem SEMPRE estar entre ASPAS DUPLAS.
 * 
 * - Se um objeto que for convertido para JSON possuir funções,
 * essas funções não serão convertidas para JSON.
 */

const pessoa = {
    nome: 'Ana',
    idade: 47,
    casada: true,
    filhos: [{
        nome: 'Pedro',
        idade: 20
    }, {
        nome: 'Julia',
        idade: 16
    }],
    falar() {
        console.log('Bom dia!')
    }
}

console.log(JSON.stringify(pessoa))