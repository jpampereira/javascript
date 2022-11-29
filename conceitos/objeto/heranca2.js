// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' // Não faça isso em casa!

const avo    = { attr1: 'A' }
const pai    = { __proto__: avo, attr2: 'B' }
const filho  = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

/* Todo objeto possui um atributo '__proto___', que guarda
 * seu objeto pai. Por padrão, quando um objeto é criado sem 
 * especificar seu pai, este atributo aponta para 'Object.prototype', 
 * um objeto vazio que está no topo da cadeia de protótipos.
 */

const carro =  {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

/* Podemos sobreescrever métodos e atributos de um objeto pai
 * em seu objeto filho, com essas mudanças sendo presentes apenas
 * no filho. Isso é chamado de 'shadowing'.
 */

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() { // shadowing
        return `${this.modelo}: ${super.status()}`
    }
}

/* Para fazermos referência ao atributo ou método do objeto pai,
 * devemos usar a palavra reservada 'super'.
 */

// O primeiro parâmetro é o objeto filho e o segundo é o objeto pai
Object.setPrototypeOf(ferrari, carro) // ferrari.__proto__ = carro
Object.setPrototypeOf(volvo, carro) // volvo.__proto__ = carro
 
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())