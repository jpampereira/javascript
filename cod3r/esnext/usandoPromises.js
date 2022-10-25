// com promise...
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
                    resolve(JSON.parse(resultado)) //  Se ele conseguir fazer o parse
                } catch(e) {
                    reject(e) // Se ele não conseguir fazer o parse
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// O resultado é devolvido apenas quando todas as Promises são resolvidas (ou alguma é rejeitada)
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // Concatena uma matriz com todas as turmas formando um único array
    .then(alunos => alunos.map(aluno => aluno.nome)) // Extrai os nomes dos alunos
    .then(nomes => console.log(nomes)) // Imprime a lista dos alunos das três turmas
    .catch(e => console.log(e.message))

/* - Nesse caso ele não consegue fazer o parse do resultado
 * pois não existe turma D, então a Promise é rejeitada.
 *
 * - Sempre faça o tratamento do erro.
 */
getTurma('D').catch(e => console.log(e.message))