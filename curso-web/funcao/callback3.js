// Exemplo de callback no browser
// A mensagem será impressa no console do browser quando clicarmos dentro da página (body) com o mouse
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}