const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

/* Template Strings são strings delimitadas por crases (`).
 * Diferentemente das strings delimitadas por aspas simples e
 * duplas, as Template Strings permitem a quebra de linha no
 * meio da string (o que utilizando aspas causaria erro) e permite
 * a interpolação (interpretação) de variáveis dentro das mesmas
 * utilizando '${}' não havendo a necessidade de se usar o operador
 * de concatenação (+) para fazer isso.
 */