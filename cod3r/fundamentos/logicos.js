function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // Se 'trabalho1' for 'true', ele nem analisa 'trabalho2' pois a operação irá gerar 'true' de qualquer forma
    const comprarTv50 = trabalho1 && trabalho2 // Se 'trabalho1' for 'false', ele nem analisa 'trabalho2' pois a operação irá gerar 'false' de qualquer forma
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2 // alternativa de ou exclusivo
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

/* - Se o nome do atributo é igual ao nome da variável que armazena o valor que será colocado no mesmo, 
 * podemos omitir o nome do atributo que o JS automaticamente irá criar os atributos com o nome das variáveis.
 * 
 * - o 'return' acima é o mesmo que:
 * 
 * return {
 *      comprarSorvete: comprarSorvete,
 *      comprarTv50: comprarTv50,
 *      comprarTv32: comprarTv32,
 *      manterSaudavel: manterSaudavel 
 * }
 * 
 * Perceba que esse código é redundante!
 */

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))