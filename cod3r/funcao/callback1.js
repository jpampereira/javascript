const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

/* - Callbacks são funções que são chamadas quando determinado
 * evento acontece.
 *
 * - Exemplos:
 * 
 * 1. Quando determinado lugar do site receber um clique, exiba
 * uma mensagem na tela;
 * 
 * 2. Quando fazemos uma requisição Ajax para um servidor, passamos
 * pra requisição uma callback de sucesso e uma de erro. Caso a
 * requisição retorne o que foi solicitado, a função de sucesso é
 * executada, caso contrário, a função de erro é executada.
 * 
 * 3. No exemplo acima, o evento que ocorre é a iteração sobre o array.
 * Portanto, a cada evento (iteração), a função 'imprimir()' é chamada.
 */