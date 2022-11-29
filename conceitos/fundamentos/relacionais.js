console.log('01)', '1' == 1) // Igualdade irrestrita - Leva em consideração apenas o valor
console.log('02)', '1' === 1) // Igualdade restrita - Leva em consideração tanto o valor quanto o tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

/* Dar preferência para o operador de igualdade restrita, para não haver
 * problemas em relação ao tipo das variáveis testadas.
*/

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // Comparação de objetos
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // Comparação de valores
console.log('12)', undefined == null)
console.log('13)', undefined === null)