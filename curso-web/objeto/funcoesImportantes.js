const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// >>> 1. Array com todos os nomes de atributos e métodos do objeto:
console.log(Object.keys(pessoa))

// >>> 2. Array com todos os valores de atributos e métodos do objeto:
console.log(Object.values(pessoa))

// >>> 3. Array onde cada posição é um array de duas posições, uma contendo a chave e a outra o valor (Uma utilidade interessante desse método é poder criar querys SQL's de forma dinâmica):
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// >>> 4. Além de adicionar um atributo a um objeto, permite definir algumas propriedades para ele

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,  // Não será enumerado em Object.keys()
    writable: false,    // Não será possível alterar o valor desse atributo (valor constante)
    value: '01/01/2019' // Valor atribuído
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Podemos definir essas propriedades durante a criação do objeto
// const pessoa = {
//     nome: 'João',
//     idade: 24,
//     peso: 90,
//     dataNascimento: {enumerable: true, writable: false, value: '11/12/1996'}
// }

// >>> 5. Concatenação de objetos
const dest = { a: 1 }
const o1 = { b: 1 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Os atributos de 'o1' e 'o2' serão copiados para 'dest'

// >>> 6. Impedir que os valores de um objeto sejam modificados
Object.freeze(obj)
obj.c = 123
console.log(obj)