function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))

/* - Por conta da flexibilidade do JS, é possível passar mais ou
 * ou menos parâmetros para as funções do que de fato elas estão
 * esperando.
 * 
 * - Em linguagens como Java e C, quando declaramos uma função, nós
 * temos que indicar o tipo do retorno. Porém, com a flexibilidade do
 * JS, não precisamos indicar, podendo em uma mesma função retornar
 * valores de diferentes tipos, dependendo da situação. NÃO É RECOMENDADO!
 * 
 * - Funções sempre retornam algum valor, mesmo que o usuário não
 * determine ele na implementação do código. Nesse caso, a função
 * retornará 'undefined'.
 */