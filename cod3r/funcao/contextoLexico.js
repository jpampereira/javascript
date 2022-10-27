// As funções carregam consigo o contexto em que elas foram declaradas

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()  
}

exec()

// A função 'minhaFuncao' foi declarada no contexto léxico Global, enquanto "const valor = 'Local'" foi declarada no contexto da função exec