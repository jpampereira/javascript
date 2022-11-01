// Arrow Function
// Sintaxe mais flexível
// Prioriza a ideia de termos funções de uma única linha (bem específicas)
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// Operador rest
function total(...numeros) { // Nesse contexto, ele é chamado de 'Rest' pois agrupa as variáveis em um array
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))