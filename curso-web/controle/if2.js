function teste1(num) {
    if(num > 7) // Quando omitimos as chaves no 'if', apenas uma sentença de código (linha) será associada a esse bloco
        console.log(num)
    
    console.log('Final') // Sempre será executado, independentemente do valor de 'num'
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com o ;
        console.log(num)
    }
}

teste2(6)
teste2(8)