/* - A função arrow foi introduzia no ES6 e tem os seguintes objetivos:
 *
 * 1. Simplificar a sintaxe para escrever funções;
 * 
 * 2. Incentivar o desenvolvedor a construir pequenas funções com
 * objetivos específicos (caminho para o paradigma funcional);
 * 
 * 3. Ser uma solução para o problema do 'this' variar de acordo com
 * o contexto léxico. O 'this' em arrow functions está associado ao
 * contexto onde aquela função ou atributo foram escritos e não ao
 * contexto em que foram chamados.
 */

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

/* - Quando houver apenas uńico parâmetro passado para a função, podemos 
 * omitir os parênteses.
 *
 * - Quando a função tiver apenas uma linha, podemos omitir as chaves e o 
 * 'return'.
 */
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

 /* Quando a função não tem parâmetro ou eles são ignorados, devemos utilizar
 * os parênteses ou o underline.
 */
ola = () => 'Olá'
ola = _ => 'Olá'