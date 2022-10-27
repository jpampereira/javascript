function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 30
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

/* - O primeiro parâmetro é o objeto que será utilizado como contexto 
 * daquela execução e os demais são os parâmetros da função.
 *
 * - A diferença entre 'call' e 'apply' é que no segundo caso os
 * parâmetros da função devem estar dentro de um array.
 */

console.log(getPreco.call(carro, 0.17, '$')) 
console.log(getPreco.apply(carro, [0.17, '$']))