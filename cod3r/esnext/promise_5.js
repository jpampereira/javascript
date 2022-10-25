function funcionarOuNao(valor, chanceErro) {
	return new Promise((resolve, reject) => {
		try {
			con.log('temp')
			if (Math.random() < chanceErro) {
				reject('Ocorreu um erro!')
			} else {
				resolve(valor)
			}
		} catch (e) {
			reject(e)
		}
	})
}

funcionarOuNao('Testando...', 0.5)
	.then(v => `Valor: ${v}`)
	.then(
		v => consol.log(v),
		err => console.log(`Erro Esp.: ${err}`)
	)
	.then(() => console.log('Quase Fim!'))
	.catch(err => console.log(`Erro: ${err}`))
	.then(() => console.log('Fim!'))

/* - O tratamento de erro/da resposta de reject de uma Promise pode ser feito
 * de duas formas:
 *
 * 1. Usando o método 'catch';
 * 2. Passando um segundo parâmetro em 'then': then(<em caso de resolve>, <em caso de reject>).
 *  
 * - O catch pode ser executada tanto quando a Promise retorna 'reject' quanto
 * quando um dos 'then' tem algum erro (vide linha 19) 
 *
 * - Apesar do 'catch' geralmente ser colocado na última posição, Podemos 
 * ter um 'then' depois de catch, que será executado tanto em caso de sucesso 
 * quanto de erro (exatamente como funciona o 'finally').
 */