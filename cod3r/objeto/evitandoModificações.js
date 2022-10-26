/* 1. Travar o objeto e não permitir que sejam inseridos atributos e métodos dinamicamente.
 * Porém, ainda permite que os já existente sejam modificados e removidos.
 */

const produto = Object.preventExtensions({ nome: 'Qualquer', preco: 1.99, tag: 'promoção' })

console.log('Extensível:', Object.isExtensible(produto)) // Verificar se o objeto é extensível

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

/* 2. Não permitir que novos atributos e métodos sejam inseridos ou removidos dinamicamente.
 * Porém, ainda permite que alteremos os valores desses dados.
 */

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Verificar se o objeto é 'selado'

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + não poder alterar o valor