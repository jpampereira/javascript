/* O método array.some() verifica se ao menos um dos elementos do array 
 * que invocou o método respeitam a condição passada como parâmetro. 
 * Esse método retorna um valor booleano, 'true' se ao menos um elemento
 * respeitar a condição e 'false' caso contrário.
 */

// Refazendo o desafio 2 da aula 'reduce2.js': Algum aluno é bolsista?

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(`Algum aluno é bolsista? ${alunos.some(a => a.bolsista)}`)