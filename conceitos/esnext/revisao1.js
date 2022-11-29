// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a) // var não possui escopo de bloco, logo, vai ser possível acessá-la em um escopo mais abrangente

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 } // As variáveis não precisam ter o mesmo nome dos atributos
console.log(i, nome)