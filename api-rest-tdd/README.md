# API REST em Node.JS aplicando testes (TDD) desde o princípio

## 1. Links

[Curso](/)

[Repositório do Projeto](/)

[Gerador de JWT](https://jwt.io/)

## 2. API

- APIs (Application Programming Interface) são importantes pois fornecem dados para diferentes sistemas, não ficando restritas a uma linguagem ou natureza da aplicação (web, desktop, mobile, etc.).

## 3. TEST DRIVEN DEVELOPMENT (TDD)

- Em português, **Desenvolvimento guiado por testes**.

- Os testes são de extrema importância para garantir a segurança e confiabilidade da nossa aplicação.

## 4. Projeto Node.JS

### 4.1. Inicialização do Projeto

- Para iniciar um projeto em Node.JS, devemos executar o seguinte comando:

    ```
    npm init -y
    ```

    | Comando | Descrição                                                                                                                |
    | ------- | ------------------------------------------------------------------------------------------------------------------------ |
    | `npm`   | Gerenciador de pacotes do Node (Node Package Manager)                                                                    |
    | `-y`    | Caso não insira essa *flag*, serão feitas diversas perguntas. Utilizando esse parâmetro, todas são respondidas com *yes* |

- Inicialmente, serão criados os arquivos `package.json` que armazena informações referentes à aplicação, como nome, versão, descrição, autor, dependências, etc., e o arquivo `package-lock.json`, que traz mais detalhes sobre as dependências da aplicação.

### 4.2. O arquivo `package.json`

- Estrutura básica de um arquivo `package.json`:

    ```
    {
        "name": "node",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "devDependencie1": "^0.0.0",
            "devDependencie2": "~0.0.0",
            "devDependencie3": "0.0.0"
        }
        "dependencies": {
            "dependencie1": "^0.0.0",
            "dependencie2": "~0.0.0",
            "dependencie3": "0.0.0"
        }
    }
    ```

- Descrição dos principais campos desse arquivo:

    | Campo             | Descrição                                                                         |
    | ----------------- | --------------------------------------------------------------------------------- |
    | `name`            | Nome da aplicação                                                                 |
    | `version`         | Versão da aplicação                                                               |
    | `description`     | Descrição da aplicação                                                            |
    | `main`            | Arquivo que deve ser executado primeiro quando a aplicação for executada          |
    | `scripts`         | Podemos criar atalhos para execução de comandos e/ou scripts via linha de comando |
    | `keywords`        | Palavras-chave relacionadas à aplicação                                           |
    | `author`          | Autores da aplicação                                                              |
    | `license`         | Licenças da aplicação                                                             |
    | `devDependencies` | Dependências em fase desenvolvimento da aplicação                                 |
    | `dependencies`    | Dependências em fase de produção da aplicação                                     |

### 4.3. Instalação de Dependências

- Para instalar uma dependência, devemos executar o seguinte comando:

    ```
    npm install <nome-dependencia>
    ```

- Parâmetros que podem ser utilizados junto do comando de instalação:

    | Comando              | Descrição                                                                                                                                                     |
    | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `i` ou `install`     | Comando para instalação de dependências                                                                                                                       |
    | `-D` ou `--save-dev` | Indica que a dependência em questão é necessário apenas durante o desenvolvimento da aplicação                                                                |
    | `-S` ou `--save`     | Indica que a dependência em questão é necessária para o correto funcionamento da aplicação quando disponibilizada em produção                                 |
    | `-g` ou `--global`   | Indica que a dependência deve ser instalada de forma global, não sendo necessário executar o comando novamente caso a mesma seja utilizada em outros projetos |
    | `-E`                 | Indica que a dependência instalada deve ser sempre utilizada na versão indicada (provavelmente para evitar problemas de compatibilidade entre versões)        |

- Os arquivos das dependências instaladas ficam no diretório `node_modules`.

- Evite instalar dependências de forma global.

### 4.4. Versionamento

- Durante a instalação de uma dependência, podemos especificar a versão que desejamos instalar (caso essa informação não seja inserida, a versão `latest` disponível no `npm` será instalada):

    ```
    npm install <nome-dependencia>@<versao>
    ```

- Como exemplo, seja `23.6.0` a versão de uma dependência utilizada em nosso projeto. O que cada um desses números indica?

    | Número | Nome             | Descrição                                                                                                   |
    | ------ | ---------------- | ----------------------------------------------------------------------------------------------------------- |
    | 23     | Upgrade Major    | Indica que a versão adiciona novas funcionalidades que implicam em problema de compatibilidade              |
    | 6      | Upgrade Minor    | Indica que a versão adiciona novas funcionalidades, porém, que não implicam em problemas de compatibilidade |
    | 0      | Upgrade de Patch | Indica que a versão em questão realiza correções de bugs                                                    |

- No arquivo `package.json`, onde são listadas as dependências do projeto, podemos especificar as versões aceitas pelas mesmas

    ```
    "dependencies": {
        "dependencia1": "23.6.0"  // Instalar a versão exata
        "dependencia2": "^23.6.0" // Caso existam versões mais recentes de Upgrade Minor, podem ser instaladas
        "dependencia3": "~23.6.0" // Caso existam versões mais recentes de Upgrade de Patch, podem ser instaladas
    }
    ```

## 5. ESLINT

- A dependência `eslint` nos ajuda a manter a organização/padronização do código de acordo com as tendências utilizadas no mercado.

### 5.1. Inicialização

- Após sua instalação, executamos o seguinte comando para iniciá-la:

    ```
    ./node_modules/.bin/eslint --init
    ```

    - Algumas perguntas serão realizadas e no fim mais algumas dependências serão instaladas.
    - O arquivo `eslintrc.json` é criado e armazena as configurações do lint.

### 5.2. Executando através de scripts

- Como já dito anteriormente, no arquivo `package.json`, podemos criar atalhos para executar determinados scripts e/ou comandos via linha de comando.
    - No atributo `scripts`, definimos um nome como chave e o valor é o que será executado;
    - Exemplo:
        
        ```
        "scripts": {
            "lint": "eslint src/** test/** --fix"
        }
        ```

    - O parâmetro `--fix` permite que o `eslint` faça correções automaticamente quando executado. Porém, não funciona com todo tipo de erro (consultar documentação).
    - Para executar o script do exemplo via linha de comando:

        ```
        npm run lint
        ```

- Algumas palavras como `start` e `test` já são reconhecidas pelo Node, portante, não necessitam do comando `run`.

- A extensão **ESLINT** para **Visual Studio Code** facilita o uso do LINT para padronizar o seu código, alertando para possíveis erros de formatação em tempo real, sem a necessidade de se executar um comando toda vez que desejar realizar essa verificação.


## 6. Desenvolvimento Orientado à Testes com o JEST

- O JEST permite a criação de scripts para automatização de testes em aplicações Node.JS.

### 6.1. Inicialização

- O arquivo de testes deve ter a extensão `.test.js`.

- No arquivo `eslintrc.json` deve ser informado que estamos utilizando o JEST:

    ```
    "env": {
        "jest": true
    }
    ```

- Os testes funcionam como documentação da solução. Caso alguém solicite, você pode apresentar os critérios utilizados no desenvolvimento e que os testes passam em todos eles.

### 6.2. Problema do caractére de quebra de linha

- Por padrão, o `eslint` utiliza o **LF** (*Line Feed*), costumeiramente utilizado em sistemas UNIX, como caractére de quebra de linha, enquanto o Windows utiliza o CRLF (*Carriage Return-Line Feed*). 

- Podemos definir no arquivo `eslintrc.json` qual o sistema utilizado na aplicação, para que ele identifique o caractére de quebra de linha corretamente:

    ```
    "rules": {
        "linebreak-style: ["error", "windows"]
    }
    ```

- Podemos também desativar essa regra:

    ```
    "rules": {
        "linebreak-style: "off"
    }
    ```   

- Consultar a documentação para saber como manipular cada uma das regras.

### 6.3. Diretivas

- Formato básico de um teste:

    ```
    test('Nome do teste', () => {
        // Aqui serão feitas as verificações
    });
    ```

- Utilizamos a diretiva `expect`para realizar as verificações:

    ```
    test('Verifica número', () => {
        const num = 10;

        expect(num).toBeNull();
        expect(num).toBe(10);
        expect(num).toBeGreaterThan(9);
        expect(num).toBeLessThan(11);
    });

    test('Verifica array e objeto', () => {
        const arr = [
            { name: 'João Pedro', mail: 'joao@mail.com' }
        ];

        expect(arr).toHaveLength(1);
        expect(aar[0]).toHaveProperty('name', 'João Pedro');
    });
    ```

    - A propriedade `toHaveProperty` verifica se o objeto possui determinada propriedade.
        - Se passado um parâmetro, é verificado se o objeto possui aquele atributo;
        - Se passado dois parâmetros, é verificado se o objeto possui algum atributo com o nome passado no primeiro parâmetro e se o mesmo possui como valor o passado no segundo parâmetro.

- Uma função interessante do arquivo de testes é permitir definirmos que um teste deve ser ignorado ou que apenas ele deve ser executado:

    ```
    test.only('...', () => { ... }); // Apenas ele será executado e os demais ignorados
    test.skip('...', () => { ... }); // O teste em questão será ignorado
    ```

    - No resultado final, os testes ignorados aparecerão como `skipped`.

- Com a diretiva `beforeAll`, podemos determinar um bloco de código que será executado antes do início dos testes especificados no arquivo.
    - No contexto do projeto, essa diretiva foi utilizada para sempre criar um único usuário antes dos testes e assim gerar o token de acesso, não sendo necessário criá-los separadamente o que acaba gerando redundância no código.

- Outra opção é a diretiva `beforeEach`, que executa o bloco de código associado antes da execução de cada um dos testes especificados no arquivo.
    - No contexto do projeto, essa diretiva foi utilizada para criar um usuário diferente em cada um dos testes para evitar situações de conflito entre testes.

- A diretiva `describe` nos permite agrupar dois ou mais testes para que eles sejam compreendidos pelo JEST como um único.
    - Incentiva a reutilização de código (vide linha `79` do arquivo `src/test/routes/transaction.test.js`);
    - Permite o particionamento de um teste mais complexo (vide linha `43` do arquivo `src/test/routes/transfer.test.js`). Caso o modo verboso esteja ativado, será possível visualizar os passos realizados no teste com muita mais clareza do que se ele estive todo concentrado em um único `test`;
    - Caso utilizemos diretivas como `beforeAll` ou `beforeEach` dentro desse bloco, eles serão executados apenas para os testes que também encontram-se nesse escopo, de forma isolada. 

### 6.4. Desempenho

- Devemos nos atentar a questões de desempenho dos testes. Pode ser que em algumas situações os testes podem demorar mais do que o adequado por realizar diversas operações como interação via HTTP e acesso à bancos de dados.

- Caso o tempo de um teste seja acima do adequado, o tempo desse teste será destacado em vermelho no console, ao final da sua execução.

### 6.5. Modo Seguro

- O modo seguro não é algo nativo e sim uma proposta do autor para tornar o desenvolvimento mais seguro.

- A ideia é que os testes sejam executados toda vez que houver uma alteração nos arquivos da aplicação ou de testes e que essas sejam salvas.
    - Isso garante a segurança no desenvolvimento, facilitando o encontro de erros no código em tempo de desenvolvimento e facilitando o retorno à um estado consistente anterior.

- Para executar o JEST nesse modo:

    ```
    jest --watchAll --verbose=true
    ```

    - Caso o parâmetro `verbose` seja configurado como `true`, o nome dos testes executados são exibidos na tela, trazendo mais detalhes sobre o que foi realizado.

- Podemos inclusive criar um script para esse comando no `package.json` e chamá-lo de `secure-mode`.

## 7. Bancos de Dados em Node.JS com Knex

- O `knex` é uma biblioteca que permite a manipulação de bancos de dados através do Node.JS.
    - Suporta diversos sistemas, como: Postgres, MariaDB, Oracle, etc.;
    - Knex é um Query Builder, que permite a criação de querys SQL a partir de código JavaScript, tornando-o mais flexível e evitando misturar JS com SQL, o que acaba causando uma poluição na escrita.

### 7.1. O arquivo `knexfile.js`

- No arquivo de configuração do Knex (`knexfile.js`) nós especificamos as informações referentes aos bancos de dados de testes, homologação e produção, como endereço, porta, usuário, senha, sistema gerenciador de banco de dados utilizado e sua versão. 

### 7.2. Inicialização

- Após a instalação da dependência, devemos integrá-la a nossa aplicação:

    ```
    const app = require('express')();
    const knex = require('knex');

    const knexFile = require('../knexfile');

    app.db = knex(knexFile.test);
    ```

### 7.3. Migrations

- Ao longo da vida útil de uma aplicação, mudanças estruturais podem ocorrer nos bancos de dados o qual a API interage, como adição ou remoção de tabelas e colunas, alteração nos seus nomes, etc.
    - Porém, pode ser difícil manter essas mudanças rastreáveis, construindo uma linha do tempo. Nesse caso as `migrations` irão ajudar;
    - Migrations são arquivos que definem mudanças estruturais nos bancos de dados;

- Devemos inicialmente definir no arquivo `knexfile.js` onde os arquivos de migration serão depositados.

- Para criar uma migration:

    ```
    node_modules/.bin/knex migrate:make <nome-arquivo> --env <ambiente>
    ```

- Estrutura básica de um arquivo de migration:

    ```
    exports.up = (knex, Promise) => {

    };

    exports.down = (knex, Promise) => {

    };
    ```
    
    - No arquivo criado, deve se definir duas funções: `up` e `down`. A primeira é o comando que será executado para realizar a alteração desejada (ex.: criação de uma tabela, adição ou edição de uma coluna, etc.), enquanto a segunda é o comando que irá desfazer a alteração realizada (remoção de tabela, remoção de coluna, etc.), caso necessário;
    - O parâmetro `knex` é o objeto que contém os métodos de migrations, enquanto o parâmetro `Promise` nos permite executar diferentes atividade paralelamente, através do método `Promise.all()`.

- Exemplo da criação da tabela `users`:

    ```
    exports.up = (knex, Promise) => {
        return knex.schema.createTable('users', (t) => {
            t.increments('id');
            t.string('name').notNull(); // tipo do campo, nome do campo, constraints
            t.string('mail').notNull();
            t.string('passwd').notNull();
        });
    };

    exports.down = (knex, Promise) => {
        return knex.schema.dropTable('users');
    }
    ```

- Na frente do nome do arquivo de migration gerado, há o *timestamp* da sua criação, para que se saiba a ordem de realização das alterações;

- Para executar a alteração de uma migration:

    ```
    node_modules/.bin/knex migrate:latest --env <ambiente>
    ```

    - Esse comando pode ser realizado direto do arquivo de testes:

        ```
        app.db.migrate.latest();
        ```

- Para desfazer uma migration:

    ```
    node_modules/.bin/knex migrate:rollback --env <ambiente>
    ```

    - Esse comando pode ser realizado direto do arquivo de testes:

        ```
        app.db.migrate.roolback();
        ```

    - Digamos que em um cenário hipotético você realiza o *rollback* em três migrations que foram inseridas uma a uma. Se você em seguida executar `migrate:latest`, ele irá refazer as três migrations, na ordem em que elas foram criadas.
        Agora, se você der um novo *rollback*, as três novamente serão desfeitas, pos o *rollback* não atua apenas em cima da última migration, e sim, no último conjunto de mudanças ocorridas, independentemente dela ter uma ou mais migrations.

### 7.4. Seeds

- Ao longo do curso fizemos a inserção de dados nas tabelas para realização de testes através do JEST, porém, essa técnica, além de mais trabalhosa, acaba poluindo o código.

- A inserção de registros em tabelas através de arquivos de `seeds` é uma opção que torna os códigos de teste mais organizados dividindo responsabilidades: arquivos de teste realizam apenas testes, enquanto arquivos de seeds fazem a inserção de registros nas tabelas do banco de dados.

- Essa funcionalidade não é uma exclusividade do knex e é uma alternativa à criação de scripts SQL ou arquivos XML como utilizado no DBUnit.

- Assim como nas migrations, precisamos indicar no `knexfile.js` onde serão depositados os arquivos de seeds.

- Para criar um arquivo de seed:

    ```
    node_modules/.bin/knex seed:make <nome-arquivo> --env <ambiente>
    ```

- Para executar esse arquivo e inserir os dados no banco:

    ```
    node_modules/.bin/knex seed:run --env <ambiente>
    ```

    - Esse comando pode ser realizado direto do arquivo de testes:

        ```
        app.db.seed.run();
        ```

- Tomar cuidado com a questão do ID dos registros incluídos, pois a divisão de responsabilidades entre os testes e a inserção dos dados nas tabelas, não nos permite mais obter esses IDs dinamicamente para manipulá-los nos testes. Portanto, uma alternativa é fixar esse ID na inserção do registro no banco, ao invés de deixar que o postgre faça essa atribuição automaticamente. Algumas possibilidades:
    - Toda vez que for inserir os dados, recriar as tabelas para garantir que os registros sempre vão começar do ID 1;
    - Fixar IDs altos que dificilmente serão alcançados por registros inseridos via teste;
    - Usar IDs negativos.


### 7.5. Log de consultas ao banco

- Acaba poluindo muito o log, mas é interessante para ver o que está sendo realizado no banco, principalmente durante testes para identificar possíveis bugs.

- Uma opção é o `knex-logger`.
    - Ressalva: o projeto tem uma única versão de mais de 4 anos atrás. Das duas, uma: ou o projeto é estável ou foi abandonado;
    - Deve-se associar o `knex-logger` com o banco de dados da aplicação:

        ```
        const app = require('express')();
        const knexLogger = require('knex-logger');

        // ...

        app.use(knexLogger(app.db));
        ```

- Outra opção é utilizar os logs internos do knex. Porém, nesse caso, é necessário codificar essas funções.

### 7.6. INSERT

- Para realizar um `INSERT` via knex:

    ```
    const create = async () => {
        const result = await app.db('users').insert({ name: 'João Pedro Pereira', mail: 'joao@mail.com', passwd: '123456' }, '*');
        return result;
    };
    ```

- A operação realizada pela função `create` é equivalente a seguinte query SQL:

    ```
    INSERT INTO users ('name', 'mail', 'passwd')
    VALUES ('João Pedro Pereira', 'joao@mail.com', '123456')
    RETURNING *;
    ```


- Quando o `RETURNING` é configurado, a promise de `INSERT` retorna um array com todos os valores inseridos. Ou seja, é possível inserir mais de uma linha no banco em uma mesma requisição, basta colocá-las dentro de uma lista.
    - O `RETURNING` não funciona em MySQL;
    - Se quisermos retornar apenas alguns campos e não todas as colunas do registro inserido, devemos colocar os nomes das colunas desejadas dentro de uma lista.

### 7.7. SELECT

- Para realizar um `SELECT` via knex:

    ```
    const read = async () => {
        const result = await app.db('users').select(['name', 'mail']).where({ id: 1 });
        return result;
    };
    ```

- A operação realizada pela função `read` é equivalente a seguinte query SQL:

    ```
    SELECT name, mail
    FROM users
    WHERE id = 1;
    ```

### 7.8. UPDATE

- Para realizar um `UPDATE` via knex:

    ```
    const update = async () => {
        const result = await app.db('users').update({ mail: 'joao.pereira@mail.com' }, ['name', 'mail']).where({ id: 1 });
        return result;
    };
    ```

- A operação realizada pela função `update` é equivalente a seguinte query SQL:

    ```
    UPDATE users
    SET mail = 'joao.pereira@mail.com'
    WHERE id = 1
    RETURNING name, mail;
    ```

### 7.9. DELETE

- Para realizar um `DELETE` via knex:

    ```
    const delete = async () => {
        const result = await app.db('users').del().where({ id: 1 });
        return result;
    };
    ```

- A operação realizada por `remove` é equivalente a:

    ```
    DELETE FROM users
    WHERE id = 1;
    ```

### 7.10. JOIN

- Para realizar um `JOIN` via knex:

    ```
    const readComJoin = async () => {
        const result = await app.db('accounts').select().join('users', 'users.id', 'accounts.user_id').where({ 'accounts.id': 1 });
        return result;
    };
    ```

    - O primeiro parâmetro de `join()` indica com qual tabela será realizada a atividade de agrupamento, o segundo parâmetro diz respeito em qual campo dessa tabela está localizada a chave primária que será utilizada, e o terceiro parâmetro diz respeito ao campo da tabela referenciada em `FROM` que contém a chave estrangeira.

- A operação realizada por `readComJoin` é equivalente a:

    ```
    SELECT *
    FROM accounts
    JOIN users ON accounts.user_id = users.id
    WHERE accounts.id = 1
    ``` 

## 8. Supertest

- A biblioteca `supertest` nos permite testar APIs de forma facilitada.

- Utilizamos o que chamamos de verbos HHTP para fazer as requisições de acordo com a operação que desejamos realizar.

- Existem diversos verbos, mas os quatro mais utilizados que dizem respeito as operações de CRUD (CREATE, READ, UPDATE, DELETE) são:

    | Verbo  | Descrição                |
    | ------ | ------------------------ |
    | GET    | Obter dados              |
    | POST   | Inserir novos dados      |
    | PUT    | Alterar dados existentes |
    | DELETE | Remover dados            |

- Podemos haver dois endpoints com o mesmo endereço, desde que utilizem verbos diferentes.

- Toda requisião HTTP retorna uma `Promise`, por isso utilizamos o `then` para ter acesso ao conteúdo da resposta em caso de sucesso.

- Uma request bem sucedida sempre retorna o status **200**.

- O conteúdo esperado pode ser acessado no `body` da resposta.

- Para exemplificar o uso dos verbos, vamos utilizar a tabela `users` utilizada como exemplo durante a apresentação do `Knex`.

### 8.1. POST

- Quando desejamos inserir novos dados na nossa aplicação, realizamos uma requisição *POST* para a nossa API. Nesse caso, devemos indicar os dados que devem ser inseridos no `body` da requisição, utilizando o método `.send()`, que antes de anexar e enviar os dados, os converte para JSON.

    ```
    test('Deve inserir usuário com sucesso', () => {
        return request(app).post('/users')
            .send({ name: 'João Pedro', mail: 'joao@mail.com', passwd: '123456' })
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.name).toBe('João Pedro')
            });
    });
    ```

### 8.2. GET

- O usuário deve ser capaz de fazer um *GET* em `/users` e a aplicação deve retornar uma lista com todos os usuários cadastrados.

    ```
    test('Deve listar todos os usuários', () => {
        return request(app).get('/users')
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body).toHaveLength(1);
                expect(res.body[0]).toHaveProperty('name', 'João Pedro');
            });
    });
    ```

- Para acessarmos um único registro, devemos inserir o id do usuário desejado na rota requisitada:

    ```
    test('Deve listar um único usuário', () => {
        return request(app).get('/users/1')
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body.name).toBe('João Pedro');
            });
    });
    ```

### 8.3. PUT

- Para conseguir editar um usuário armazenado na tabela `users`, devemos enviar uma requisição para a rota `/users` utilizando o verbo `PUT`.
    - Nesse caso, devemos informar o `id` do usuário em questão na rota (como em `GET` por um único usuário) e os valores que devem ser alterados devem ser enviados através do `send`, como no caso de inserir um novo usuário.

        ```
        test('Deve alterar um usuário', () => {
            return request(app).put('/users/1')
                .send({ mail: 'joao@mail.com' })
                .then((res) => {
                    expect(res.status).toBe(200);
                    expect(res.body.name).toBe('João Pedro')
                });
        });
        ```

### 8.4. DELETE

- A remoção de um usuário segue o mesmo padrão de `PUT`, onde devemos inserir o `id` do usuário que desejamos manipular na chamada da rota.
    - Nesse caso, como não queremos fazer nenhuma inserção ou edição no usuário, não precisamos enviar nada no `body`.

        ```
        test('Deve remover um usuário', () => {
            return request(app).delete('/users/1')
                .then((res) => {
                    expect(res.status).toBe(200);
                });
        });
        ```

## 9. Modularização da aplicação com Consign

- O `consign` é uma dependência que facilita a gestão dos módulos de uma aplicação, realizando um *autoload*.

- Na nossa aplicação, utilizamos o `consign` para dividir responsabilidades como as rotas configuradas e os serviços de banco de dados em diferentes arquivos, trazendo maior organização para o código:

    ```
    consign({ cwd: 'src' }) // Indica o diretório que o consign deve olhar
        .include('./config/middlewares.js')
        .into(app);
    ```

    - No código acima, o `consign` importa o módulo configurado em `middlewares.js`.
    
- O módulo deve respeitar o seguinte formato para que o `consign` consiga importá-lo:

    ```
    module.exports = (app) => {
        // ...
    }
    ```

    - Caso o desejo seja inserir algum atributo ou método em `app`, deve-se colocar um retorno ao final da *arrow function*.

## 10. Desenvolvimento de APIs com Express

- O Express é um framework que permite a construção de servidores web em Node.JS.

- Para criarmos novas rotas, devemos instanciar um objeto `express.Route`

    ```
    const router = new Router();

    const users = [];
    ```

### 10.1. Middlewares

- *Middlewares* são funções intermediárias que realizam algum processamento e permitem o prosseguimento da requisição.

- O que diferencia um middleware de uma rota comum é que no que a requisição cai para ele, ele a processa e permite que a mesma siga em diante para ser processada por outras funções. No caso de uma rota comum, no que a requisição caísse nela, nada do que vier após ser executado.

- O `body-parser` é um exemplo, pois ele é executado toda vez que uma requisição do tipo `POST` ou `PUT` é realizada, para converter as informações do body da requisição para o formato esperado pela aplicação;

- Utilizamos o método `app.use()` para extendermos o Express com outros módulos. Essa extensão é feita através da adição de middlewares.

- Outra diferença desses middlewares é que além dos atributos `req` e `res`, elas podem possuir outros dois atributos: um objeto `err` que captura erros lançados pela aplicação e ainda não tratados, além de uma função `next()`, que indica que o processamento da requisição deve continuar após ela.

```
app.use((req, res, next) => {
    console.log('Passou por aqui!");
    const err = new Error();
    next(err);
});

app.use((err, req, res, next) => {
    console.log('Erro tratado!');
})
```

- Quando algum parâmetro é passado para `next`, entende-se que houve algum erro durante o processamento e o mesmo é passado adiante para ser tratado por outro middleware.

- A ordem de declaração dos middlewares importa.

### 10.2. Body Parser

- Para conseguir manipular as informações enviadas no `body` em requisições do tipo `POST` e `PUT`, é necessário realizar uma conversão. Para isso, utilizamos o `body-parser`, um módulo utilizado para converter o `body` da requisição para diferentes formatos, entre eles, o JSON.

    ```
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    ```

- Nesse momento, o Body Parser é um middleware que será executado toda vez que uma requisição com informações no body seja recebida e irá convertê-lo.

### 10.3. POST

- Toda rota desenvolvida possui dois parâmetros: o primeiro é o caminho para acessar aquela funcionalidade e o segundo é o método que determina o que será feito quando o usuário realizar uma requisição.
    - Esse método possui dois parâmetros: requisição (`req`) e resposta (`res`). Todas as informações enviadas na requisição são acessadas em `req` e tudo o que deve ser retornado para o requisitante é armazenado em `res`;
    - O método `.json()` converte o valor passado como parâmetro para o formato JSON, o anexa ao  `body` da resposta e envia para o requisitante.
    - Caso nenhuma informação for retornada no body da resposta, utilizamos o método `.send()`.
    - Como já explicado, as informações enviadas são acessadas através do body da requisição, logo, estão disponíveis em `req.body`;

        ```
        router.post('/users', (req, res) => {
            users.push(req.body)
            res.status(200).json(req.body);
        });
        ```

### 10.4. GET

- Rota para listar todos os usuários cadastrados:

    ```
    router.get('/users', (req, res) => {
        res.status(200).json(users);
    });
    ```

- Até o momento, criamos uma rota utilizando o `GET` para listar todas as contas da tabela. Para criarmos uma rota utilizando o `GET` para retornar uma única conta através do seu ID, devemos fazer:

    ```
    router.get('/users/:id', (req, res) => {
        const userId = req.params.id;
        res.status(200).json(users[userId-1]);
    });
    ```

    - Quando inserimos os dois pontos na rota, estamos querendo informar que aquele valor será uma variável;

- Para obter variáveis passadas na rota (como no caso de `id`), devemos acessar `req.params.id`.

### 10.5. PUT

- Rota para alterar um usuário cadastrado:

    ```
    router.put('/users/:id', (req, res) => {
        const user = users[req.params.id-1];
        const newUser = { ...user, ...req.body };
        
        users[userId-1] = newUser;

        res.status(200).json(newUser);
    });
    ```

### 10.6. DELETE

- Rota para deletar um usuário cadastrado:

    ```
    router.delete('/users/:id', (req, res) => {
        const userId = req.params.id;
        users.splice(userId-1, 1);

        res.status(200).send();
    });
    ```

## 11. Autenticação via JWT e Passport

### 11.1. Armazenar senha criptografada

- Um erro muito grave é armazenar as senhas dos usuários no banco de dados de forma crua. Caso alguém consiga acesso a esse banco, terá acesso a conta de todos os usuários do serviço em questão.

- Para corrigir essa questão, podemos utilizar a dependência `bcrypt-nodejs`.

```
const salt = bcrypt.genSaltSync(10);
const encryptedPasswd = bcrypt.hashSync(passwd, salt);
```

- A primeira linha gera um valor de 10 caractéres aleatórios para ser concatenado a senha, assim, o valor do hash gerado sempre seja diferente, mesmo que a senha seja a mesma.

- A segunda linha gera o hash utilizando a senha crua e a string aleatória.

### 11.2. Deve receber token ao logar

- Para o usuário ter acesso as informações que a API fornece, ele deve realizar autenticação na mesma, passando usuário e senha e recebendo de volta um token de acesso.

- Deve ser criada a rota `/auth/signin` que será responsável por realizar essa validação e retornar o token de acesso.

- Utilizamos a dependência `jwt` (JSON Web Token) para gerar o token de autenticação.

- Para gerar o token, o JWT utiliza algumas informações do usuário, além de um segredo, que deve ficar bem escondido no seu programa:

- Esse código está implementado no projeto em `src/routes/auth.js`.

- Para gerar o token, é verificado se o usuário em questão está cadastrado e se a senha é a mesma que a salva no banco no formato de hash, utilizando o método `bcrypt.compareSync()`. Caso as senhas coincidam, um token é gerado, utilizando o método `encode` da dependência `jwt`, junto das informações do usuário e um segredo. Por fim, esse token gerado é retornado.

- Quando houver tentativa de autenticação com um usuário ou senha inválidos, não informar qual deles está errado para não facilitar a vida de possíveis hackers.

### 11.3. Não deve acessar uma rota protegida sem token

- Apesar de já termos autenticado o usuário e senha gerando um token, ainda sim é possível acessar as rotas sem realizar esse procedimento, pois as mesmas encontram-se protegidas.

- Para realizar a autenticação do token, vamos utilizar as dependências `passport` e `passport-jwt`.
    - O `passport` permite a construção de um middleware para ser responsável pela autenticação de usuários da API;
    - O `passport-jwt` permite que essa autenticação ocorra utilizando a ideia de JSON Web Tokens.

- Esse código está implementado em `src/config/passport.js`.

- Inicialmente, é necessário extrair as funcionalidades que vamos utilizar do `passport-jwt`:
    - `Strategy`: objeto responsável por definir a estratégia de autenticação;
    - `ExtractJwt`: objeto que contém os métodos de obtenção do token da requisição.

- O parâmetro `params` contém o segredo utilizado para gerar o token de autenticação e o método para obter esse token (no caso, será obtido do header da requisição). Com essas informações, é possível obter os dados do usuário utilizados para gerar o token junto do segredo.

- É instanciado um novo objeto `Strategy`, que contém essas informações para obter os dados do usuário, além de uma função que será responsável por realizar a autenticação do token.

- Essa função contém dois parâmetros: `payload`, que contém os dados do usuário obtidos através do token e do segredo, e `done`, utilizado para determinar quando o middleware deve finalizar sua execução.

- Com as informações do usuário em mãos, é feita uma busca no banco pelo mesmo e caso seja encontrado, o middleware é finalizado com sucesso, caso contrário, é devolvido informando que não foi possível autenticar o token.

- Essa estratégia é vinculada ao `passport`.

- E o método de autenticação é exportado como módulo.

- Essa autenticação deve ser realizada antes de qualquer método de qualquer rota:

    ```
    app.route('/users')
        .all(...)
        .get(...)
        .post(...)
    ```

- A cláusula `all` exige que qualquer execução daquela rota, seja qual o verbo utilizado, passe por aquele ponto. Em caso de sucesso (nesse caso, usuário validado), a requisição segue seu fluxo natural em direção ao seu processamento.

### 11.4 Criação de usuário via signup

- A criação de usuário deve ser realizada através da rota `/auth/signup`.

### 11.5. Enviar token nos testes

- Para utilizar os endpoints, agora é necessário realizar a autenticação através do token, e isso é feito utilizando a diretiva `set` do `supertest`, após a requisição:

    ```
    const res = await request(app).post('/users')
        .set('authorization', `bearer ${token}`)
        .send({ name: 'João', mail: 'joao@mail.com', passwd: '123456' });
    ```

## 12. Manipulação de Datas com Moment

- Uma dificuldade comum entre diferentes programadores é a manipulação de datas. Utilizamos a dependência `moment` para facilitar essa atividade.

- Após importar a dependência, podemos armazenar o horário corrente em uma variável da seguinte forma:

    ```
    const moment = require('moment');

    const current = moment(); // Equivalente a const current = new Date();
    ```

- Para adicionar ou subtrair dias de uma data:

    ```
    const past = moment().subtract({ days: 5 });
    const future = moment().add({ days: 5 });
    ```

    - Podemos fazer essa adição ou subtração em dias, meses, anos, horas, minutos, segundos, etc.

## 13. Arquitetura do Projeto

### 13.1. Gerenciamento de erros

- Assim, podemos criar uma função genérica que realizar o tratamento necessário dos erros para devolvê-los aos requisitantes.

- A partir de agora, as funções invocadas pelas rotas não serão mais responsáveis por devolver esses erros aos usuários.
    - Os serviços devem identificá-los esses error e lançá-los através da clásula `throw`;
    - As funções invocadas pelas rotas identificam que um erro foi lançado, através da cláusula `catch`, que permite que esse erro siga em frente utilizando a função `nex(err)`;
    - A seguinte função em `app.js` receberá o erro ocorrido, vai identificá-lo e retorná-lo da forma mais adequada:

        ```
        app.use((err, req, res, next) => {
            const { name, msg, stack } = err;

            if (name === 'ValidationError') res.status(400).json({ error: msg })
            else res.status(500).json({ name, msg, stack });
            next(err);
        });
        ```

- Podemos criar objetos de erro como `ValidationError` para padronizá-los.

### 13.2. Um usuário só consegue visualizar suas próprias informações

- Uma coisa que faz sentido é que um usuário consiga manipular apenas suas contas. 
    - Porém, seu `id` não pode ser extraído da requisição enviada, caso contrário, o requisitante pode inserir qualquer `id` no `body` e com isso obter as informações de outro usuário.

- Uma forma de obter o `id` do usuário que está autenticado, devemos utilizar o atributo `req.user.id`.
    - Quando realizamos a autenticação do usuário com o token, o `passport` armazena as informações do `payload` em `req.user`.

- Da forma que foi construído, mesmo que o usuário passe um `id` na requisição, ele é sobrescrito pelo obtido em `req.user.id`.

- Podemos configurar um middleware que será executado caso a rota da requisição possua determinado parâmetro:

    ```
    router.param('id', (req, res, next) => {
        app.services.transaction.find({ 'transactions.id': req.params.id })
            .then((transaction) => {
                if (transaction.length > 0 && transaction[0].user_id === req.user.id) next();
                else throw new RecursoIndevidoError();
            }).catch((err) => next(err));
    });
    ```

- Esse middleware verifica se a rota da requisição envia o atributo `id`, e caso sim, compara o `id` do usuário vinculado a transação com o `id` do usuário autenticado, para evitar que pessoas consigam visualizar dados de outras.