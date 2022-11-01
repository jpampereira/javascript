/* - array.forEach() é um método que permite a iteração sobre um array, da mesma forma
 * que fazemos utilizando as estruturas de repetição. Passa-se para ela como parâmetro
 * uma função do tipo callback que será executada a cada iteração sobre o array. Essa
 * callback pode receber até três parâmetros: o primeiro é o valor armazenado na posição
 * atual da iteração, o segundo valor é o índice atual e o terceiro é o array completo.
 * 
 * - Existem diferentes métodos que permitem iterar sobre arrays, qual utilizar depende
 * da sua necessidade. No caso do 'forEach', ele deve ser escolhido quando queremos iterar
 * sobre um array mas queremos deixar a responsabilidade de processamento de seus valores
 * para a função callback passada como parâmetro.
 */

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Alternativa 1

aprovados.forEach(function(nome, indice, /*array*/) {
    console.log(`${indice + 1}) ${nome}`)
    // console.log(array)
})

// Alternativa 2

aprovados.forEach(nome => console.log(nome))

// Alternativa 3

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)