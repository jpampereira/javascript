// CÓDIGO NÃO EXECUTÁVEL

/* Anterior as linguagens estruturadas, existiam as linguagens
 * não estruturadas, que funcionam através de desvios de fluxo,
 * com o uso da palavra 'go to'. Nessas linguagens, você podia
 * pular para qualquer trecho do código, o que os tornava de 
 * difícil leitura e afetava a sua qualidade.
 */

// Procedural - Focada no procedimento, nos passos de execução
processamento(valor1, valor2, valor)

// OO

/* - No paradigma procedural você tinha dados e funções/procedimentos
 * que manipulavam esses dados. No caso do paradigma OO, nós temos
 * dados personalizados que agrupam esses dados e funções.
 * 
 * - O objeto funciona como uma cápsula.
 */

objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}

objeto.processamento()

/* Princípios importantes:
 * 
 * 1. Abstração: Quando o paradigma OO foi idealizado, entendia-se que poderiamos
 * modelar as coisas do mundo real como objetos que possuem atributos e métodos.
 * Porém, muitos dos objetos do mundo real possuem determinadas especificidades que
 * não são interessantes ou não vão agregar valor ao propósito do nosso código, sendo
 * necessário um exercício de abstração por parte do desenvolvedor para modelar o
 * objeto apenas com atributos e métodos que são entendidos como necessários para que
 * a aplicação atinja seu objetivo. Exemplo: Temos um objeto que modela um carro. Se
 * o programa desenvolvido for servir ao Detran, dono do veículo, renavan, multas 
 * atreladas ao veículo são exemplos de atributos que seriam importantes existir no 
 * objeto. Porém, esses mesmos atributos não serveriam o propósito do objeto carro em 
 * um programa voltado para uma mecânica, que ia precisar de outros atributos como 
 * modelo do motor e outras especificidades sobre o carro que interessam apenas o universo 
 * da mecânica. Portanto, é necessário abstrair os objetos para que criemos eles apenas 
 * com os atributos e métodos necessários para servir ao nosso objetivo final.
 * 
 * 2. Encapsulamento: Procurar não externalizar detalhes de implementação de um objeto
 * para o resto da aplicação, havendo apenas uma interface que permita a comunicação
 * e acesso a esse objeto. O encapsulamento permite que criemos objetos mais independentes,
 * onde se alterarmos a forma de implementação do objeto, essa mudança só seja sentida
 * internamente, sem que isso afete a forma como outros objetos interagem com ele.
 * 
 * 3. Herança (prototype): Podemos reutilizar objetos de duas formas: Composição e Herança.
 * A Composição é uma relação 'tem um', onde um objeto possui outros objetos dentro dele.
 * Exemplo: Um objeto do tipo 'carro' tem um objeto do tipo 'motor', não sendo necessário 
 * que toda a complexidade do objeto 'motor' esteja dentro de 'carro', mas 'motor' compõe
 * 'carro'. A Herança é uma relação 'é um', onde um objeto erda característica de seus
 * ancestrais. Exemplo: Um homem é um ser humano, um ser humano é um mamífero, uma mamífero
 * é um animal, e assim vai... DÊ PREFERÊNCIA AO USO DE COMPOSIÇÃO.
 * 
 * 4. Polimorfismo: Os objetos podem sofrer alterações conforme a necessidade. 
 */