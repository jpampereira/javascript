let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

// Evite nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk

/* COMENTÁRIOS:
 *
 * - O JS é uma linguagem de tipagem dinâmica. Em linguagens de tipagem dinâmica, podemos
 * atribuir a uma mesma variável, valores de diferentes tipos (inteiros, reais, caractéres,
 * textos, etc). Linguagens desse tipo são chamadas de 'Linguagens de Tipagem Fraca'.
 * 
 * - A Tipagem Fraca permite que os códigos sejam mais flexíveis. Porém, apesar desse benefício,
 * a tipagem fraca pode dificultar a detecção de determinados bugs nos programas.
 * 
 * - Apesar da linguagem ser fracamente tipada, quando um valor é atribuído a variável, o tipo
 * dela naquele instante é identificado (comando 'typeof') e é possível realizar diversas
 * operações. 
 */
