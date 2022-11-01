class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

/* - A palavra reservada 'extends' é utilizada para estabelecer a 
 * relação de herança entre classes.
 *
 * - A palavra reservada 'super' sozinha chama o construtor da classe
 * pai da classe que está sendo instanciada. Se seguida de um nome 
 * utilizando a notação ponto, está fazendo referência a um atributo 
 * ou método que está em seu ancestral. 
 */
