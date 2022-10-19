const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
//console.log('Escola ' + escola + '!')
console.log(escola.replace('3', 'e'))

console.log('Ana,Maria,Pedro'.split(','))

/* COMENTÁRIOS:
 *
 * - JS é uma linguagem que não procura ficar jogando erros
 * na cara do desenvolvedor o tempo inteiro. Isso é bom pois
 * da muitas opções para o programador, mas por outro lado, 
 * necessita de mais atenção por parte do mesmo pois alguns
 * erros podem não ser reportados, dificultando a detecção de
 * bugs.
 */