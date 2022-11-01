/* - Ao invés de utilizar 'functions' para criar classes, podemos
 * utilizar a palavra reservada 'class'. Por trás, 'class' também
 * é uma 'function'. Essa nomenclatura existe apenas por ser uma
 * forma mais tradicional de se criar classes presente em outras
 * linguagens como Java, PHP, C#, etc.
 * 
 * - A função 'constructor' é chamada assim que um objeto é 
 * instanciado para aquela classe. É nela onde os objetos recebem
 * os parâmetros passados na instanciação (se houverem) e onde há
 * a inicialização dos atributos (se for necessário).
 */

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())