const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo 
// Se preocupa em mostrar como está sendo feito

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// Declarativo 
// Mais interessantes - Deixamos algumas questões sob responsabilidade da linguagem
// As funções abstraem como está sendo feito, nos importamos apenas em saber o que está sendo feito

// Essas linhas podem ser reutilizadas por outras funções
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

// Solução é apenas essas duas linhas
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

/* SQL é um exemplo de linguagem declarativa, pois estamos preocupados em dizer para o banco
 * o que ele deve fazer através das querys e não estamos nos importando em como ele vai fazer 
 * para obter aquele resultado.
 */