// JS é multiparadigma, ou seja, pode ser programado de forma procedural, orientada à objetos, funcional, etc.

const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // Atributos e métodos podem ser adicionas dinamicamente
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar nomes de atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    desconto: 0.40
}

console.log(prod2)

delete prod2.desconto // Remove o atributo 'desconto' do objeto 'prod2'
console.log(prod2)

'{ "nome": "Camisa Polo", "preco": 79.90 }' // Formato JSON

/* COMENTÁRIOS:
 *
 * - Objeto JS != JSON.
 * - JSON é utilizado para interoperabilidade/comunicação entre sistemas.
 * - JSON significa JavaScript Object Notation.
 * - Objetos são atributos e métodos, enquanto JSON é texto.
 */