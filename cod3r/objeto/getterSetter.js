const sequencia = {
    _valor:  1, // Convenção para identificar atributos privados
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        } 
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

/* - O JS não aceita sobrecarga de métodos (métodos com o mesmo
 * nome, porém, com assinaturas diferentes), a não ser que sejam
 * métodos getters ou setters.
 *
 * - Não é uma boa prática permitir o acesso aos atributos de um
 * objeto de forma direta, pois permite que sejam atribuídos a eles
 * valores inválidos (por exemplo, idade negativa). A ideia dos 
 * métodos Setters é fazer uma validação no valor atribuído para
 * impedir possíveis inconsistências.  
 */