// Função em JS é First-Class Object/Citizens - São objetos que possuem todas as funcionalidades dos outros objetos da linguagem
// High-order function - Funções que recebem ou retornam outras funções
// Funções em JS são tratadas como dados

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { } // Função Anônima

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)