// middleware pattern (chain of responsability) - Cada passo fica responsável por uma tarefa
// Padrões de projeto são soluções já existentes que resolvem problemas específicos
// Podemos alterar a ordem dos middlewares

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx, next) => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

// Ordem: exec -> execPasso(0) -> passo1 -> execPasso(1) -> passo2 -> execPasso(2) -> passo3