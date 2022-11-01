// IIFE -> Immediately Invoked Function Expression

/* Padrão muito utilizado para fugir do escopo global:
 * O trecho de código será executado na mesma hora que declarado,
 * e o que for declarado dentro dessa função não estará disponível
 * no escopo global, que é sempre preferível.
 */

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()