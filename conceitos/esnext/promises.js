/* - Utilizamos Promises (Promessas) quando queremos ter um processamento assíncrono.
 *  
 * - Ao final do processamento da Promise, em caso de sucesso, algo é retornado
 * e pode ser acessado através da palavra reservada 'then'. Em caso de erro, este
 * pode ser capturado e tratado utilizando a palavra reservada 'catch'.
 */

// Se obtiver sucesso, chama 'resolve', caso contrário, chama 'reject'
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // 'resolve' e 'reject' aceitam um único parâmetro, se precisar passar mais, utilizar objeto ou array
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // resposta da Promise
    .then(outraFrase => console.log(outraFrase)) // Podemos encadear vários 'then' e o resultado de um vai sendo passado pro próximo
    .catch(e => console.log(e)) // tratamento de erro