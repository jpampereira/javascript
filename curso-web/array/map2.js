const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

const precos = carrinho.map(produto => JSON.parse(produto).preco)
console.log(precos)