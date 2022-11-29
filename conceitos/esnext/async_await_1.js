function esperarPor(tempo = 2000) {
	return new Promise(function(resolve) {
		setTimeout(() => resolve(), tempo)
	})
}

// esperarPor()
// 	.then(() => console.log('Executando promise 1...'))
// 	.then(esperarPor)
// 	.then(() => console.log('Executando promise 2...'))
// 	.then(esperarPor) 
// 	.then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

/* O Async/Await também ajuda na organização do código, evitando
 * que deixemos nosso código com vários 'then' aninhados.
 */
async function executar() {
    let valor = await retornarValor()

	await esperarPor(1500)
	console.log(`Async/Await ${valor}...`)
	await esperarPor(1500)
	console.log(`Async/Await ${valor + 1}...`)
	await esperarPor(1500)
	console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

/* - Atualmente só conseguimos utilizar o 'await' dentro de funções que possuam 
 * a marcação 'async'.
 *
 * - Quando chamamos uma função que tenha a marcação 'async', devemos utilizar o 'then', 
 * para capturar a resposta de sucesso e o 'catch' pro erro.
 */