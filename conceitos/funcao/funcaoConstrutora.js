/* - O JavaScript é uma linguagem multiparadigma, e entre os vários que podem ser utilizados, está a Programação
 * Orientada à Objetos (POO). Porém, a POO nessa linguagem possui algumas peculiaridades, como o fato de não
 * existir o conceito de classes na prática (apesar de existir a palavra reservada 'class' mas ela ser apenas
 * uma Syntax Sugar) sendo tudo ser feito através de funções e o modelo de herança fugir do convencional e ser
 * baseada em protótipos.
 * 
 * - Assim, o equivalente as tradicionais classes que servem de molde para a criação (ou instanciação) objetos,
 * são as funções construtoras, que nada mais são do que funções normais como qualquer outra, que podem ser
 * instanciadas a partir da palavra reservada 'new', gerando um novo objeto contendo seus atributos e métodos.
 */

function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo Privado
    let velocidadeAtual = 0

    // Método Público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método Público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // Podemos omitir os parênteses quando nenhum argumento é passado
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)