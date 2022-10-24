/* - O npm (Node Package Manager) é o gerenciador de pacotes do Node, que você
 * usa para instalar bibliotecas de terceiros na sua máquina.
 * 
 * - O comando para instalar um pacote é: npm install <nome-pacote>
 * 
 * - O pacote instalado será armazenado dentro de uma pasta chamada node_modules,
 * que armazena todos os módulos de terceiros.
 * 
 * - Pelo fato dessas bibliotecas serem facilmente reproduzidas usando o comando
 * de instalação e pelo fato de possuírem muitos arquivos, não é recomendado que
 * caso nosso projeto seja enviado pro GitHub, que esses arquivos também sejam 
 * armazenados no seu repositório. Quando quisermos específicar um determinado 
 * arquivo ou diretório não deve ser colocado no GitHub, devemos setar o arquivo 
 * '.gitignore' com o seu nome.
 * 
 * - Quando chamarmos uma biblioteca de terceiros, não precisamos passar o caminho
 * relativo no 'require'. Quando passamos apenas o nome da biblioteca, o node por
 * padrão irá procurar dentro do diretório 'node_modules' um diretório que leva o
 * nome passado na requisição, e dentro desse diretório haverá um arquivo chamado
 * 'index.js' que faz de fato a requisição por aquele módulo.
 * 
 * - Quando quisermos instalar algo de forma global (não será armazenado na pasta
 * 'node_modules'), devemos utilizar o parâmetro '-g'.
 * 
 * - A biblioteca 'nodemon' permite que a gente execute o nosso código pelo terminal
 * e caso haja alguma alteração no arquivo, o nodemon irá fazer um reset e começar
 * novamente a execução do projeto. Ex: nodemon usandoModuloesTerceiros.js
*/

const _ = require('lodash')
setInterval(() => console.log(_.random(50, 60)), 2000)