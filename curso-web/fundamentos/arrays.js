const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // Se acessarmos posições além do tamanho do nosso array não é gerado um erro, é retornado o valor 'undefined'.

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adiciona elementos no final do array
console.log(valores)

console.log(valores.pop()) // remove o valor da última posição do array e retorna ele
delete valores[0] // remove um valor de uma determinada posição
console.log(valores)

console.log(typeof valores)

/* COMENTÁRIOS: 
 *
 * - Arrays em JS são heterogêneos, ou seja, aceitam valores de diferentes tipos dentro
 * de uma mesma estrutura. Eles também não possuem tamanho fixo, ou seja, na sua
 * declaração não é necessário informar o seu tamanho, como acontece em linguagens como
 * C e Java.
 * 
 * - Apesar dos arrays em JS permitirem valores de diferentes tipos, não é uma boa prática
 * utilizar essa possibilidade.
 */