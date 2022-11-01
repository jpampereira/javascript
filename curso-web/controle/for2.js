const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// 'i' é o índice do array e não o valor naquela posição
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

// 'atributo' armazena cada um dos nomes de atributos do objeto 'pessoa', um a cada iteração, e não o valor de cada um deles.
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

/* - É importante que as variáveis 'i' e 'atributo' sejam declaradas utilizando 
 * 'let' para que elas não estejam disponíveis fora das estruturas de controle.
 * 
 * - Faz sentido utilizar a palavra reservada 'in' para percorrer arrays quando
 * sabemos que vamos percorrer ele por um todo, tornando o código mais enxuto. 
 */

