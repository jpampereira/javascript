console.log('1' > '2') // false
console.log('1' > '1') // false
console.log('2' > '1') // true
console.log('4' > '2') // true

console.log('4' > '12') // true
console.log('5' > '42') // true
console.log('3' > '29') // true

/* Se compararmos valores entre 0 e 9, podemos perceber que
 * a saída das expressões booleanas são as esperadas. Porém,
 * se fizermos a comparação com valores maiores do que 9, é 
 * considerado apenas o primeiro digito do número, fazendo 
 * com que, por exemplo, '4' > '12' seja verdadeiro, pois
 * 4 > 1. Com isso, podemos ver que não é uma boa abordagem
 * comparar números em formato de string.
 */