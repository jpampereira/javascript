let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'texto' || 123)) // devolve o primeiro valor true

/* Permite determinar um valor padrão pra uma variável se o valor dela não for válido.
 * No exemplo abaixo: Se a variável 'nome' vier preenchida, imprima o valor armazenado,
 * caso contrário, imprima 'Desconhecido'. 
 * */
let nome = ''
console.log(nome || 'Desconhecido')

// Outro exemplo de uso
let booleano = 1
if (booleano) {
    console.log('Olá, Mundo!')
}