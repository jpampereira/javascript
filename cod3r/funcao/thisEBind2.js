function Pessoa() {
    this.idade = 0
    const self = this // Uma forma de driblar a questão da mudança de contexto

    global.setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // A cada 1 segundo, a função anônima é 'disparada'
}

new Pessoa

/* - O método 'setInterval' está armazenado no contexto global do Node.JS, o que chamamos de métodos nativos, os
 * quais não precisam ser declarados e muito menos importados, como nos casos das bibliotecas auxiliares.
 * 
 * - Assim sendo, quando esse método executa a função passada como parâmetro, ele está executando-a em seu contexto, 
 * mesmo que ela esteja dentro de um objeto, como é o caso do código acima. Logo, o 'this' contido na função anônima
 * não possui relação com o da função construtora, por isso quando executado, retorna o resultado 'NaN', uma vez que 
 * o 'this' global não possui internamente um atributo chamado 'idade', assim, incrementar um valor que não existe,
 * produzirá esse resultado.
 * 
 * - Uma forma de driblar essa questão, é vincular o 'this' do contexto onde a função foi declarada com uma variável
 * (no exemplo acima, 'self'). Outra forma é utilizar o método 'bind', que indica para a função o contexto ao qual
 * ela está sendo executada.
 * 
 * - Uma coisa pra se ajudar a pensar: como dito, 'setInterval' é um método do objeto 'global', assim, quando executamos
 * ele, estamos fazendo 'global.setInterval', porém, o Node.JS permite que o objeto seja omitido. Dessa forma fica mais
 * claro percebermos que setInterval não está sendo executado por 'Pessoa' e sim por outro contexto.
 */