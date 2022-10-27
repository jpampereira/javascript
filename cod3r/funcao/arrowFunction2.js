/* Funções arrow 'travam' o 'this' para o contexto léxico em que elas foram criadas, portanto,
 * mesmo que 'setInterval' seja executado no contexto global, a função foi declarada dentro do
 * contexto de uma função.
 */

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa