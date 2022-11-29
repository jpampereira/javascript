var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50
console.log(c)

/* COMENTÁRIOS
 *
 * - Procure declarar variáveis utilizando 'let' (é um jeito mais moderno de
 * declarar variáveis).
 * 
 * - O uso de 'var' para realizar declaração permite que você declare uma mesma variável
 * diferentes vezes dentro de um mesmo escopo, algo que não é visto em outras linguagens.
 * O 'let' não permite isso, caso você tente declarar uma mesma variável duas vezes com
 * 'let' dentro do mesmo escopo, o programa acusará erro.
 * 
 * - Por padrão vamos utilizar a seguinte ideia: tudo o que for imutável dentro do nosso
 * programa nós vamos declarar como 'const'. Caso a mudança do valor da variável seja
 * justificada, utilizamos o 'let' para que seja possível atribuir novos valores a ela.
 */