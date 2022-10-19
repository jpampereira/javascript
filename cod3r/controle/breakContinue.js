const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // Sai do laço de repetição
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y === 5) {
        continue // Vai para a próxima iteração do laço 
    }
    console.log(`${y} = ${nums[y]}`)
}

// 'break' e 'continue' atuam sobre estruturas de repetição ao qual estão inseridos

/* - Como 'break' e 'continue' atuam sobre as estruturas de repetição que estão logo
 * acima deles, podemos utilizar rótulos para direcionar esses comandos para as
 * estruturas as qual estamos interessados.
 * 
 * - No exemplo abaixo, sem rótulos o 'break' atuaria sobre o 'for' interno, porém, 
 * com o rótulo 'externo', ele irá atuar sobre o 'for' externo.
 * 
 * - EVITE UTILIZAR ISSO!
 */

externo:
for (a in nums) {
    for (b in nums) {
        if (a === 2 && b === 3) {
            break externo
        }
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')