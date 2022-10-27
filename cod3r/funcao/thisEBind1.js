const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Chamando desta forma é compreendido que o contexto de 'falar()' é o objeto 'pessoa'
const falar = pessoa.falar
falar() // O contexto de 'this' neste caso vai ser 'global', que é o contexto léxico da constante 'falar'

const falarDePessoa = pessoa.falar.bind(pessoa) // Você 'trava' a constante 'falarDePessoa' pra ele sempre olhar pro contexto léxico de 'pessoa'
falarDePessoa()