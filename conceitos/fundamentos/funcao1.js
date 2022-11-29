// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// A linguagem é bastante flexível

// Funcao com retorno
function soma(a, b = 1) { // se nenhum valor for passado para b, seu valor padrão será 1
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())