let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* Anteriormente, havia sido dito que a diferença entre a declaração
 * de variáveis com 'var' e 'let' é que 'var' permitia declarar a mesma
 * variável diversas vezes dentro do mesmo escopo. Porém, existe outra
 * diferença mais importante: variáveis declaradas com 'var' possuem dois
 * tipos de escopo: global e de função. Enquanto as variáveis declaradas
 * com 'let' possuem, além desses dois escopos, escopo de bloco (estruturas
 * condicionais e de repetição).
 */