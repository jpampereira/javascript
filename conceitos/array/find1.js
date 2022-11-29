/* O método array.find() verifica se algum dos elementos do array que
 * invocou o método respeitam a condição passada como parâmetro. Esse
 * método retorna o primeiro elemento que respeitar a condição e 
 * 'undefined' caso contrário.
 */

// Refazendo o desafio 2 da aula 'reduce2.js': Algum aluno é bolsista?

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const bolsista = alunos.find(a => a.bolsista);
console.log(`Algum aluno é bolsista? ${JSON.stringify(bolsista)}`);