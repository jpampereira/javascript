// Coleção dinâmica de pares chave/valor

const produto = new Object()
// const produto = {} // Notação literal

produto.nome = 'Cadeira' // Notação Ponto
produto['marca do produto'] = 'Genérica' // Notação de Colchetes - Não recomendado!
produto.preco = 220

/* A notação de colchetes é interessante quando o nome do atributo que você deve
 * acessar está armazenado em uma variável em forma de string. Se você já sabe
 * qual atributo acessar, a notação ponto é bem mais simples.
 */

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculaValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro)

/* Se você tentar acessar um atributo ou método de um objeto
 * 'null' ou 'undefined', um erro será gerado no código.
 */
console.log(carro.condutores) // undefined - condutores não existem em 'carro', mas carro existe
console.log(carro.condutores.length) // Dá erro! - Não podemos acessar atributos/métodos de objetos null/undefined