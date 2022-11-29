// Novo recurso do ES2015

// Esse operador serve para extrair informações de estruturas como arrays e objetos

// Ele é interessante para fazer a declaração de várias variáveis na mesma linha

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Traduzindo: extraia as informações de nome e idade de 'pessoa'
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true } = pessoa // 'true' é o valor padrão para 'bemHumorada' caso venha vazio
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa
// console.log(ag, num)