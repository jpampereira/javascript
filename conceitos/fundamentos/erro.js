function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw { // Lançar erro
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { // Tente executar esse bloco de código
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { // Capture o erro para tratá-lo
        tratarErroELancar(e)
    } finally { // Executar esse bloco de código independentemente de ocorrer erro ou não
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

// Evite mostrar ao usuário informações de infraestrutura e mensagens de erro geradas pela linguagem (mensagens cruas)