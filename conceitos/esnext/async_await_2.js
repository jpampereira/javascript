function gerarNumerosEntre(min, max, numerosProibidos) {
	if (min > max) {
		[min, max] = [max, min]
	}
	
	return new Promise((resolve, reject) => {
		const fator = max - min + 1
		const aleatorio = parseInt(Math.random() * fator) + min
        
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
	})
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if (tentativas > 5) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

/* - O tratamento de erro em funções utilizando Async/Await é utilizando
 * a diretiva try-catch-throw.
 *
 * - O 'throw' será responsável pelo que será retornado para o catch em caso
 * de erro na função Async/Await */