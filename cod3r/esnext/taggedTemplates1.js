// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes) // Partes escritas da Template String
    console.log(valores) // Tudo o que foi interpolado na Template String
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)