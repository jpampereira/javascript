// Fuja do escopo global, ou seja, evite declarar variáveis de forma global

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)