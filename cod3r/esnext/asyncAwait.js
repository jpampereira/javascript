const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplficiar o uso de promises...
// Deixar um código assíncrono com aspecto de síncrono 
// Você deve utilizar o await para funções que retornam Promises
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B') //  Só vai ser executado depois que getTurma('A') retornar uma resposta
    const tc = await getTurma('C') //  Só vai ser executado depois que getTurma('B') retornar uma resposta
    return [].concat(ta, tb, tc)
} // retorna um objeto asyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))