function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))

/* 'arguments' é um array interno de funções que armazena os valores passados como parâmetro em sua chamada.
 * Assim, ao inves de obter esses valores através da assinatura da função (function <nome-func>(<argumentos>)),
 * podemos obtê-los acessando esse array interno.
 */