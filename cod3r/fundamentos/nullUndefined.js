/* Existem dois tipos de atribuição: por valor e por referência.
 *
 * - Atribuição por valor: quando atribuímos a uma variável algum valor de tipo
 * primitivo (inteiro, boolean, string).
 * 
 * - Atribuição por Referência: quando atribuímos a uma variável um objeto, por
 * exemplo. A variável não guarda o objeto literalmente, ela armazena o endereço
 * de memória em que esse objeto se encontra.
 */

const a = {name: "Teste"}
console.log(a)

const b = a
console.log(b)

b.name = 'Opa'
console.log(a, b)

/* Como 'a' e 'b' armazenam o endereço de memória que o objeto encontra-se e 
 * não o seu valor literal, caso você mude o objeto a partir de 'a', a mudança
 * será percebida em 'b' e vice-versa.
 */

// b = 3;

/* Apesar de 'a' e 'b' serem constantes, é possível você modificar o objeto
 * que elas guardam a referência de memória. O que não é possível é atribuir
 * um novo objeto com um outro endereço de memória ou até mesmo valores de 
 * outro tipo como numeros, texto, arrays a elas.
 */

let c = 3
let d = c
d++
console.log(c, d)

/* Valores primitivos (números, texto) fazem atribuição por valor, ou seja, o valor 
 * é armazenado no endereço de memória daquela variável de forma literal. Então, se
 * você copia o valor de 'c' em 'd' e logo em seguida modifica o valor de 'd', a
 * mudança não será percebida em c, que continuará tendo o seu valor original.
 */

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

/* null != undefined
 *
 * - undefined significa que a variável em questão foi declarada
 * mas nunca foi inicializada, ou seja, nunca foi atribuído um valor
 * a ela.
 * 
 * - null significa que a variável não referencia nenhum endereço de
 * memória.
 * 
 * - Evitar usar undefined: deixe para a linguagem definir o que é
 * undefined.
 * 
 * - Se quiser zerar uma variável, utilize null.
 * 
 * - É recomendado que toda variável seja inicializada com algum valor.
 */