const fs = require('fs') // módulo nativo do Node.JS para manipulação de arquivos

const caminho = __dirname + '/arquivo.json' // '__dirname' armazena o caminho para o diretório do arquivo js em questão

// síncrono... EVITE!!
// Se for um arquivo pequeno o impacto será mínimo, mas para arquivos grandes evite o uso
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`) // Por ser assíncrono, seu conteúdo será impresso após os console.log posteriores
})

// SÍNCRONO!
// Ele converte automaticamente de JSON para objeto
// Se você omite a extensão, ele entende que é JS
const config = require('./arquivo.json')
console.log(config.db)

// Devolve todos os arquivos presentes em um diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})