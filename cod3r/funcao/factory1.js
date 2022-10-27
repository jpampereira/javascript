/* Factorys são funções que funcionam como fábricas. Você passa
 * os dados como parâmetros da função e ela retorna um objeto.
 */

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())