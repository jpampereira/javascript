// Atribuição de uma função a uma variável/constante
const soma = function (x, y) {
    return x + y
}

// Passagem de função como parâmetro de outra função
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

// Declaração de funções em objetos
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()