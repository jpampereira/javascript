/* - O arquivo 'package.json' guarda a descrição do nosso projeto, como seu 
 * nome, versão, dependências, etc. 
 *
 * - O arquivo 'package-lock.json' traz uma descrição mais detalhada das
 * dependencias que precisam ser instaladas para que o projeto possa
 * ser executado corretamente.
 * 
 * - O parâmetro '--save' (ou '-S') na hora de instalar uma biblioteca externa salva aquela
 * biblioteca no arquivo 'package.json' como uma dependencia do projeto. O parâmetro
 * '--save-dev' (ou '-D') tem o mesmo objetivo, mas indica que aquela biblioteca é uma dependência
 * apenas durante o desenvolvimento.
 * 
 * - O comando 'npm i axios@0.17.1 -E' instalara exatamente a versão 0.17.1 do axios. O
 * parâmetro '-E' indica que deve ser sinalizado nas dependências do projeto no arquivo
 * 'package.json' que é necessário instalar EXATAMENTE aquela versão para o projeto'.
 * 
 * - Para instalar as dependências descritas em um arquivo 'package.json', executamos o
 * comando 'npm install' (ou 'npm i') dentro do diretório onde desejamos instalá-los.
 * 
 * - É possível definir no 'package.json' scripts a serem executados. Podemos definir,
 * por exemplo, um script para subir um servidor local para testarmos nossa aplicação web.
 * Em outro momento podemos executar um script para criar certos arquivos que serão
 * necessários para subir a aplicação em produção. Para executarmos um desses scripts 
 * definidos no arquivo, devemos utilizar o comando 'npm run <script>'. Alguns scripts
 * possuem nomes que já são reconhecidos como "test", "start", "stop", "restart" e nesses
 * casos podemos omitir a palavra 'run'. 
 */

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // client HTTP para fazer requisição de arquivos remotos

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url)
    .then(response => {
        const funcionarios = response.data

        // Mulher chinesa com menor salário?
        const func = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menorSalario)

        // const func = funcionarios.filter(f => f.genero === 'F' && f.pais === 'China').sort((f1, f2) => f1.salario - f2.salario)[0] // Minha solução
        console.log(func)
    })