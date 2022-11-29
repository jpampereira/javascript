/* O método array.every() verifica se todos os elementos do array que
 * invocou o método respeitam a condição passada como parâmetro. Esse
 * método retorna um valor booleano, 'true' se todos os elementos
 * respeitarem a condição e 'false' caso contrário.
 */

// Refazendo o desafio 1 da aula 'reduce2.js': Todos os alunos são bolsistas?

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(`Todos os alunos são bolsistas? ${alunos.every(a => a.bolsista)}`)
