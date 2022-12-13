# API REST em Node.JS aplicando testes (TDD) desde o princípio

- Anotações realizadas durante o curso.

## 1. Links

[Curso](https://www.udemy.com/share/101uM8/)

[Repositório do Projeto 1 - seubarriga](/)

[Repositório do Projeto 2 - knowledge](/)

[Gerador de JWT](https://jwt.io/)

## 2. API

- APIs (Application Programming Interface) são importantes pois fornecem dados para diferentes sistemas, não ficando restritas a uma linguagem de programação ou a natureza da aplicação (web, desktop, mobile, etc.).

## 3. TEST DRIVEN DEVELOPMENT (TDD)

- Em português, **Desenvolvimento guiado por testes**.

- Os testes são de extrema importância para garantir a segurança e confiabilidade da nossa aplicação.

- O TDD é uma prática de desenvolvimento onde, primeiramente, os cenários de teste unitários são mapeados e escritos e só depois há o desenvolvimento do código da aplicação, afim de satisfazer esses testes.

## 4. Projeto Node.JS

### 4.1. Inicialização do Projeto

- Para iniciar um projeto em Node.JS, devemos executar o seguinte comando:

    ```
    npm init -y
    ```

    | Comando | Descrição                                                                                                                 |
    | ------- | ------------------------------------------------------------------------------------------------------------------------- |
    | `npm`   | Gerenciador de pacotes do Node (Node Package Manager).                                                                    |
    | `-y`    | Caso não insira essa *flag*, serão feitas diversas perguntas. Utilizando esse parâmetro, todas são respondidas com *yes*. |

- Inicialmente, serão criados os arquivos `package.json` que armazena informações referentes à aplicação, como nome, versão, descrição, autor, dependências, etc., e o arquivo `package-lock.json`, que traz mais detalhes sobre essas dependências.

### 4.2. O arquivo `package.json`

- Estrutura básica de um arquivo `package.json`:

    ```
    {
        "name": "node",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "start": "node index.js",
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

    | Campo             | Descrição                                                                    |
    | ----------------- | ---------------------------------------------------------------------------- |
    | `name`            | Nome da aplicação.                                                           |
    | `version`         | Versão da aplicação.                                                         |
    | `description`     | Descrição da aplicação.                                                      |
    | `main`            | Arquivo que deve ser executado primeiro quando a aplicação for inicializada. |
    | `scripts`         | Lista de alias para execução de comandos e/ou scripts via linha de comando.  |
    | `keywords`        | Palavras-chave relacionadas à aplicação.                                     |
    | `author`          | Autores/Desenvolvedores da aplicação.                                        |
    | `license`         | Licença utilizada pela aplicação.                                            |
    | `devDependencies` | Dependências necessárias durante o desenvolvimento.                          |
    | `dependencies`    | Dependências necessárias em produção.                                        |

### 4.3. Instalação de Dependências

- Para instalar uma dependência, devemos executar o seguinte comando:

    ```
    npm install <nome-dependencia>
    ```

- Parâmetros que podem ser utilizados junto do comando de instalação:

    | Comando              | Descrição                                                                                                                                                                        |
    | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `i` ou `install`     | Comando para instalação de dependências.                                                                                                                                         |
    | `-D` ou `--save-dev` | Indica que a dependência em questão é necessária apenas durante o desenvolvimento da aplicação.                                                                                  |
    | `-S` ou `--save`     | Indica que a dependência em questão é necessária para o correto funcionamento da aplicação quando disponibilizada em produção.                                                   |
    | `-g` ou `--global`   | Indica que a dependência deve ser instalada de forma global, não sendo necessário executar o comando novamente caso a mesma seja utilizada em outros projetos (não recomendado). |
    | `-E`                 | Indica que a dependência instalada deve ser sempre utilizada na versão indicada (provavelmente para evitar problemas de compatibilidade entre versões).                          |

- Podem ser instaladas diversas dependências ao mesmo tempo:

    ```
    npm install <nome-dependencia-1> <nome-dependencia-2> ... <nome-dependencia-n>
    ```

- Os arquivos das dependências instaladas ficam no diretório `node_modules`.
  - Uma boa prática é utilizarmos um arquivo `.gitignore` para indicar que esse diretório não precisa ser versionado pelo Git;
  - Como já explicado, as dependências necessárias para o correto funcionamento da aplicação são descritas na seção `dependencies` de `package.json`. Assim, caso o código da aplicação seja baixado em outra máquina sem as dependências em questão, para instalá-las, é necessário apenas realizar o seguinte comando:
    
    ```
    npm install
    ```

  - Nesse momento, todas as dependências descritas no arquivo `package.json` serão instaladas.

### 4.4. Versionamento

- Durante a instalação de uma dependência, podemos especificar a versão que desejamos instalar (caso essa informação não seja inserida, a versão `latest` disponível no `npm` será instalada):

    ```
    npm install <nome-dependencia>@<versao>
    ```

- Como exemplo, seja `23.6.0` a versão de uma dependência utilizada em nosso projeto. O que cada um desses números significa?

    | Número | Nome                 | Descrição                                                                                                                                |
    | ------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | 23     | Upgrade Major        | A mudança desse número indica que a nova versão adiciona novas funcionalidades que implicam em problema de compatibilidade.              |
    | 6      | Upgrade Minor        | A mudança desse número indica que a nova versão adiciona novas funcionalidades, porém, que não implicam em problemas de compatibilidade. |
    | 0      | Upgrade de Patch/Fix | A mudança desse número indica que a nova versão em questão realiza correções de bugs.                                                    |

- No arquivo `package.json`, onde são listadas as dependências do projeto, podemos especificar as versões aceitas pelas mesmas

    ```
    "dependencies": {
        "dependencia1": "23.6.0"  // Instalar a versão exata
        "dependencia2": "^23.6.0" // Caso existam versões mais recentes de Upgrade Minor, podem ser instaladas
        "dependencia3": "~23.6.0" // Caso existam versões mais recentes de Upgrade de Patch, podem ser instaladas
    }
    ```

## 5. Padronização de código com LINT

- A dependência `eslint` nos ajuda a manter a organização/padronização do código de acordo com tendências de mercado.

### 5.1. Inicialização

- Após sua instalação, executamos o seguinte comando para iniciá-la:

    ```
    ./node_modules/.bin/eslint --init
    ```

    - Algumas perguntas serão realizadas e no fim mais algumas dependências serão instaladas.
    - O arquivo `eslintrc.json` é criado e armazena as configurações do lint.

### 5.2. Executando através de scripts

- Como já dito anteriormente, no arquivo `package.json`, podemos criar atalhos para executar determinados scripts e/ou comandos via linha de comando.
    - No atributo `scripts`, definimos um nome como chave e o valor é o comando que de fato será executado. Exemplo:
        
        ```
        "scripts": {
            "lint": "eslint src/** test/** --fix"
        }
        ```
    
    - No exemplo acima, o lint fará uma verificação em todos os arquivos dos diretórios `src` e `test`;
    - O parâmetro `--fix` permite que o `eslint` faça correções automaticamente quando executado. Porém, não funciona com todo tipo de erro (consultar documentação).
    - Para executar o script do exemplo via linha de comando:

        ```
        npm run lint
        ```

- Algumas palavras como `start` e `test` já são reconhecidas pelo Node, portante, não necessitam do comando `run`.

- Se a dependência estiver instalada de forma local e esteja sendo executada via linha de comando, é necessário passar todo o caminho `node_modules/.bin/...`. Caso ela esteja instalada de forma global ou estiver sendo executada através de um `script` em `package.json`, então esse caminho se faz desnecessário.

- A extensão **ESLINT** para **Visual Studio Code** facilita o uso do LINT para padronizar o seu código, alertando para possíveis erros de formatação em tempo real, sem a necessidade de se executar um comando toda vez que desejar realizar essa verificação.

### 5.3. Problema do caractére de quebra de linha

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

## 6. Desenvolvimento Orientado à Testes com JEST

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

- Para executar o JEST:

    ```
    ./node_modules/.bin/jest
    ```

### 6.2. Diretivas

- Formato básico de um teste:

    ```
    test('Nome do teste', () => {
        // Aqui serão realizadas as verificações
    });
    ```

- Utilizamos a diretiva `expect` para realizar as verificações:

    ```
    test('Verifica número', () => {
        const num = 10;

        expect(num).not.toBeNull();
        expect(num).toBe(10);
        expect(num).toBeGreaterThan(9);
        expect(num).toBeLessThan(11);
    });

    test('Verifica array e objeto', () => {
        const arr = [
            { name: 'João Pedro', mail: 'joao@mail.com' }
        ];

        expect(arr).toHaveLength(1);
        expect(arr[0]).toHaveProperty('name', 'João Pedro');
    });
    ```

    - A propriedade `toHaveProperty` verifica se o objeto possui determinada propriedade.
        - Se passado um parâmetro, é verificado se o objeto possui aquele atributo;
        - Se passado dois parâmetros, é verificado se o objeto possui algum atributo com o nome passado no primeiro parâmetro e se o mesmo possui como valor o passado no segundo parâmetro.

- Uma função interessante do arquivo de testes é definirmos que um teste deve ser ignorado ou que apenas ele deve ser executado:

    ```
    test.only('Apenas esse teste será executado e os demais ignorados', () => {
        // ...
    });
    ```

    ```
    test.skip('Esse teste será ignorado', () => {
        // ...
    });
    ```

    - No resultado final, os testes ignorados aparecerão como `skipped`.

- Com a diretiva `beforeAll`, podemos determinar um bloco de código que será executado uma única vez antes do início dos testes especificados no arquivo.
    - No contexto do projeto, essa diretiva foi utilizada para sempre criar um único usuário antes dos testes e assim gerar o token de acesso, não sendo necessário criá-los separadamente o que acaba gerando redundância no código.

- Outra opção é a diretiva `beforeEach`, que executa o bloco de código associado antes da execução de cada um dos testes especificados no arquivo.
    - No contexto do projeto, essa diretiva foi utilizada para criar um usuário diferente em cada um dos testes para evitar situações de conflito entre eles.

- A diretiva `describe` nos permite agrupar dois ou mais testes para que eles sejam compreendidos pelo JEST como um único.
    - Incentiva a reutilização de código (vide `src/test/routes/transaction.test.js:79`);
    - Permite o particionamento de um teste mais complexo (vide `src/test/routes/transfer.test.js:43`). Caso o modo verboso esteja ativado, será possível visualizar os passos realizados no teste com muita mais clareza do que se ele estive todo concentrado em um único `test`;
    - Caso utilizemos diretivas como `beforeAll` ou `beforeEach` dentro desse bloco, eles serão executados apenas para os testes que também encontram-se nesse escopo, de forma isolada. 

### 6.3. Desempenho

- Devemos nos atentar a questões de desempenho dos testes. Pode ser que em algumas situações os testes podem demorar mais do que o adequado por realizar diversas operações como interação via HTTP e acesso à bancos de dados.

- Caso o tempo de um teste seja acima do adequado, o tempo desse teste será destacado em vermelho no console, ao final da sua execução.

### 6.4. Modo Seguro

- O modo seguro não é algo nativo e sim uma proposta do autor para tornar o desenvolvimento mais seguro.

- A ideia é que os testes sejam executados toda vez que houver uma alteração nos arquivos da aplicação ou de testes e que essas sejam salvas.
    - Isso garante a segurança no desenvolvimento, facilitando o encontro de erros no código em tempo de desenvolvimento e facilitando o retorno à um estado consistente anterior.

- Para executar o JEST nesse modo:

    ```
    jest --watchAll --verbose=true --runInBand --forceExit
    ```

    - Caso o parâmetro `verbose` seja configurado como `true`, o nome dos testes executados são exibidos na tela, trazendo mais detalhes sobre o que foi realizado;
    - Quando o número de arquivos de testes aumenta, pode ser que alguns cenários acabem interferindo em outros, causando erros não esperados. Para evitar esse problema, adicionamos o parâmetro `--runInBand`, para que os arquivos não sejam executados em paralelo, e sim, sequencialmente;
    - O parâmetro `--forceExit` é para evitar que o JEST fique preso esperando que todas as Promises sejam retornadas para assim ele finalizar a execução.

- Podemos inclusive criar um script para esse comando no `package.json` e chamá-lo de `secure-mode`.

### 6.5. Cobertura

- É difícil contemplar todos os possíveis cenários de uma aplicação, logo, os testes não garantem que ela está livre de erros e sim que todos os cenários pensados pelo desenvolvedor estão funcionando corretamente.

- A cobertura não serve para garantir que a aplicação não possui erros, e sim para avaliar o quanto do seu código foi testado durante esses cenários mapeados.
  - Exemplo: Em um `try-catch`, o cenário de sucesso foi obtido durante os testes, porém, o cenário de erro que é coberto pelo `catch` não foi acionado em nenhum momento durante sua execução. A cobertura irá alertar que esse trecho não foi testado, e cabe ao desenvolvedor entender a necessidade de se testar aquele bloco de código ou não. 

- Para adicionar cobertura aos nossos testes:

    ```
    jest --coverage
    ```

    - Ao final dos testes, um relatório será impresso no terminal com métricas obtidas dessa análise de cobertura, além da criação de um diretório `coverage`, contendo um documento HTML que permite a visualização desses mesmos dados através do browser;
    - Essa cobertura realiza quatro tipos de análises:

        | Nome       | Descrição                                    |
        | ---------- | -------------------------------------------- |
        | Statements | % de expressões executadas.                  |
        | Branches   | % de blocos de códigos `if-else` executados. |
        | Functions  | % de funções executadas.                     |
        | Lines      | % de linhas de código executadas.            |

    - Em posse dessas informações, podemos ter noção de trechos de códigos que não foram executados por nenhum dos testes e, se interessante, criar cenários para que eles sejam contemplados.

- Não necessariamente testes que não contemplam 100% de um código são vulneráveis, já que alguns trechos são executados em situações muito específicas que muitas vezes não necessitam de testes. Assim, podemos estabelecer métricas de aceitabilidade quanto a essas porcentagens no arquivo `package.json`:

    ```
    "jest": {
        "coverageThreshold": {
            "global": {
                "statements": 80,
                "branches": 80,
                "functions": 80,
                "lines": 80
            },
            "./src/services": {
                "lines": 100
            }
        }
    }
    ```

    - O parâmetro `global` define métricas para a aplicação como um todo. Porém, podemos estabelecer métricas para trechos de forma separada (`./src/services`), quando entendermos que determinados módulos necessitam de maior rigidez quanto a questão de cobertura.
    - No exemplo acima, se for identificada uma porcentagem menor do que 80% na cobertura de `statements`, `branches`, `functions` ou `lines` do código da aplicação como um todo; ou menor do que 100% das `lines` dos arquivos do diretório `src/services`, mesmo que todos os cenários de testes sejam executados com sucesso, o JEST retornará uma mensagem de erro informando que os testes não passaram pela análise de cobertura. 

## 7. Bancos de Dados em Node.JS com Knex

- O `knex` é uma biblioteca que permite a manipulação de bancos de dados através do Node.JS.
    - Suporta diversos sistemas, como: Postgres, MariaDB, Oracle, etc.;
    - Knex é um Query Builder, que permite a criação de querys SQL a partir de código JavaScript, tornando-o mais flexível e evitando misturar JS com SQL, o que acaba causando uma poluição na escrita.

### 7.1. O arquivo `knexfile.js`

- No arquivo de configuração do Knex (`knexfile.js`) nós especificamos as informações referentes aos bancos de dados de testes, homologação e produção, como endereço, porta, usuário, senha, sistema gerenciador de banco de dados utilizado e sua versão.

- O arquivo pode ser criado manualmente ou através do seguinte comando;

    ```
    /node_modules/.bin/knex init
    ```

### 7.2. Inicialização

- Após a instalação da dependência, devemos integrá-la a nossa aplicação:

    ```
    const app = require('express')();
    const knex = require('knex');

    const knexFile = require('../knexfile');

    app.db = knex(knexFile.test);
    ```

    - A partir de então, `app.db` fará referência ao banco de dados da nossa aplicação e será utilizado para realizar todas as manipulações do mesmo.

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
    - O parâmetro `knex` é o objeto que contém os métodos de migrations, enquanto o parâmetro `Promise` nos permite executar diferentes atividade paralelamente, através do método `Promise.all()`;
    - Não necessariamente o `up` vai ser uma função que cria uma tabela e `down` a que remove essa tabela. Caso uma aplicação não necessite mais de uma determinada tabela a partir de um momento, por exemplo, a função de `up` será para remover essa tabela e o `down` para desfazer essa ação, ou seja, recriar a tabela removida.

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

    - Esse comando pode ser realizado direto do código JavaScript:

        ```
        app.db.migrate.latest();
        ```

- Para desfazer uma migration:

    ```
    node_modules/.bin/knex migrate:rollback --env <ambiente>
    ```

    - Esse comando pode ser realizado direto do código JavaScript:

        ```
        app.db.migrate.roolback();
        ```

    - Digamos que em um cenário hipotético você realiza o *rollback* em três migrations que foram inseridas uma a uma. Se você em seguida executar `migrate:latest`, ele irá refazer as três migrations, na ordem em que elas foram criadas.
        Agora, se você der um novo *rollback*, as três novamente serão desfeitas, pos o *rollback* não atua apenas em cima da última migration, e sim, no último conjunto de mudanças ocorridas, independentemente dela conter uma ou mais migrations.

- A tabela `knex_migrations` é criada no banco de dados manipulado e armazena informações sobre as migrações realizadas, enquanto a tabela `knex_migrations_lock` é utilizada para fazer o controle das transações realizadas.

### 7.4. Seeds

- Ao longo do curso fizemos a inserção de dados nas tabelas para realização de testes manualmente através do JEST, porém, essa técnica, além de mais trabalhosa, acaba poluindo o código.

- A inserção de registros em tabelas através de arquivos de `seeds` é uma opção que torna os códigos de teste mais organizados dividindo responsabilidades: arquivos de teste realizam apenas testes, enquanto arquivos de seeds fazem a inserção de registros nas tabelas do banco de dados para serem utilizados por esses testes.

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

    - Esse comando pode ser realizado direto no código JavaScript:

        ```
        app.db.seed.run();
        ```

- Tomar cuidado com a questão do ID dos registros incluídos, pois a divisão de responsabilidades entre os testes e a inserção dos dados nas tabelas, não nos permite mais obter esses IDs dinamicamente para manipulá-los nos testes. Portanto, uma alternativa é fixar esse ID na inserção do registro no banco, ao invés de deixar que o banco faça essa atribuição automaticamente. Algumas possibilidades:
    - Toda vez que for inserir os dados, recriar as tabelas para garantir que os registros sempre vão começar do ID 1;
    - Fixar IDs altos que dificilmente serão alcançados por registros inseridos via teste (recomendado);
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

- Para retornar todas as colunas dos registros (`SELECT *`) é só não especificar nenhuma coluna dentro de `select()`.
  - Nesse caso o `select()` pode ser omitido.

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
        const result = await app.db('users').del().where('id', '=', 1 });
        return result;
    };
    ```

- A operação realizada por `remove` é equivalente a:

    ```
    DELETE FROM users
    WHERE id = 1;
    ```

- Tanto o formato utilizado dentro de `where()` para modificação quanto remoção de registros são válidos.

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

- Outra forma de realizar o JOIN utilizando *alias* para o nome das tabelas:

    ```
    const readComJoin2 = async () => {
        const result = await app.db({ a: 'accounts', u: 'users' }).whereRaw('?? = ?? AND ?? = ?', ['u.id', 'a.user_id', 'a.id', 1]);
        return result;
    };
    ```

### 7.11. RAW

- Em alguns momentos, o Query Builder pode não atender nossas necessidades, sendo necessário escrever queries na mão. Para isso utilizamos o método `raw`:

    ```
    const query = `
        SELECT * 
        FROM accounts 
        JOIN users ON ?? = ??
        WHERE ?? = ?
    `;

    const result = await app.db.raw(query, ['accounts.user_id', 'users.id', 'accounts.id', 1]);
    ```

    - Podemos utilizar *bindings* posicionais para interpolar valores em nossas queries. O símbolo `?` é para bindings de identificadores, como campos das tabelas, e `??` para binding de valores.

## 8. Requisições HTTP com Supertest

- A biblioteca `supertest` nos permite testar APIs de forma facilitada.

- Utilizamos o que chamamos de **verbos HTTP** para fazer as requisições de acordo com a operação que desejamos realizar.

- Existem diversos verbos, mas os quatro mais utilizados que dizem respeito as operações de CRUD (CREATE, READ, UPDATE, DELETE) são:

    | Verbo  | Descrição                      |
    | ------ | ------------------------------ |
    | GET    | Obtenção de dados.             |
    | POST   | Inserção de novos dados.       |
    | PUT    | Alteração de dados existentes. |
    | DELETE | Remoção de dados.              |

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

- A remoção de um usuário segue o mesmo padrão de `PUT`, onde devemos inserir o `id` do usuário que desejamos manipular no endereço da rota.
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

- O `consign` é uma dependência que facilita a gestão dos módulos de uma aplicação através do *autoload*.

- Na nossa aplicação, utilizamos o `consign` para dividir responsabilidades como as rotas configuradas e os serviços de banco de dados em diferentes arquivos, trazendo maior organização para o código:

    ```
    consign({ cwd: 'src' }) // Indica o diretório de trabalho do consign
        .include('./config/passport.js')
        .then('./config/middlewares.js')
        .then('./services')
        .then('./routes')
        .then('./config/router.js')
        .into(app);
    ```

    - No código acima, o `consign` importa para a aplicação (`app`), em Express, os módulos de middlewares, rotas, serviços e autenticação;
    - A variável `app` funciona como o centralizador desses métodos
    
- O módulo deve respeitar o seguinte formato para que o `consign` consiga importá-lo:

    ```
    module.exports = (app) => {
        // ...
    }
    ```

    - Caso o desejo seja inserir algum atributo ou método em `app`, deve-se colocar um retorno ao final da *arrow function*.

## 10. Desenvolvimento de APIs com Express

- O Express é um framework que permite a construção de servidores web em Node.JS.

- Para iniciar o Express:

    ```
    const express = require('express');
    const app = express();
    ```

- Para criarmos uma nova rota, devemos instanciar um objeto `express.Route`

    ```
    const router = new Router();
    ```

### 10.1. Middlewares

- Os *Middlewares* são um padrão de projeto que utiliza funções de forma sequencial, formando uma cadeia de responsabilidades (*chain of responsabilities*).

- O Express utiliza os *Middlewares* como funções intermediárias que realizam algum processamento e permitem o prosseguimento da requisição.

- O que diferencia um middleware de uma rota comum é que no que a requisição cai para ele, ele a processa e permite que a mesma siga em diante para ser processada por outras funções. No caso de uma rota comum, no que a requisição caísse nela, nada do que vier após é executado.

- Exemplos de Middlewares utilizados pelo Express:
  - O `body-parser` é executado toda vez que uma requisição é realizada, para converter as informações do body para o formato esperado pela aplicação (importante principalmente em requisições do tipo `POST` e `PUT` que enviam os dados pelo *body*);
  - O `cors` é executado toda vez que há uma requisição, para verificar se a origem do destinatário pode ter acesso aos recursos daquele serviço web;
  - Na aplicação desenvolvida, realizamos a autenticação do usuário através de um *Middleware*. 

- Utilizamos o método `app.use()` para extender a aplicação com esses *Middlewares*.

- Outra diferença desses middlewares é que além dos atributos `req` e `res`, elas podem possuir outros dois atributos: um objeto `err` que captura erros lançados pela aplicação e ainda não tratados, além de uma função `next`, que indica que o processamento da requisição deve continuar após ela.

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

- Em um único `app.use()` podemos adicionar diversos middlewares:

    ```
    function mid1() { }
    function mid2() { }
    function mid3() { }

    app.use(mid1, mid2, mid3);
    ```

    - Na aplicação desenvolvida, essa técnica era utilizada para inserir métodos de autenticação e validação antes da execução de rotas.

### 10.2. Body Parser

- Para manipularmos as informações enviadas no `body` em requisições do tipo `POST` e `PUT` com  maior facilidade, é necessário realizar uma conversão. Para isso, utilizamos o `body-parser`, uma dependência utilizado para interpretar o `body` da requisição em diferentes formatos, entre eles, o JSON.

    ```
    const bodyParser = require('body-parser');

    app.use(bodyParser.text()); // Interpreta o body como texto
    app.use(bodyParser.json()); // Interpreta o body como JSON
    app.use(bodyParser.urlencoded({ extended: true })); // Interpreta o body como URL encoded - Padrão de submissão de formulários
    ```

- Nesse momento, o body-parser é um *Middleware* que será executado toda vez que uma requisição for interceptada, e irá convertê-la para o formato esperado.

### 10.3. POST

- Toda rota desenvolvida possui dois parâmetros: o primeiro é o caminho para acessar aquela funcionalidade e o segundo é o método que determina o que será feito quando o usuário realizar uma requisição.
    - Esse método possui dois parâmetros: requisição (`req`) e resposta (`res`). Todas as informações enviadas na requisição são acessadas em `req` e tudo o que deve ser retornado para o requisitante é armazenado em `res`;
    - O método `.json()` converte o valor passado como parâmetro para o formato JSON, o anexa ao  `body` da resposta e envia para o requisitante.
    - Caso nenhuma informação seja retornada no body da resposta, utilizamos o método `.send()`.
    - Como já explicado, em requisições do tipo `POST`, as informações enviadas são acessadas através do body e podem ser acessadas em `req.body`;

        ```
        const users = [];

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

    - Quando inserimos os dois pontos na rota, estamos querendo informar que aquele valor será um parâmetro variável passado pelo requisitante;
    - Para obter variáveis passadas na rota, devemos acessar `req.params`.

- Existe outra forma de passar os parâmetros em uma requisição do tipo `GET` onde utilizamos as *querys strings*:
    - Exemplo de URL: `http://localhost:3001?id=1`;
    - O caractere `?` separa a URL dos parâmetros, que devem respeitar o formato `chave=valor` e podem ser múltiplos, sendo separados por `&&`;
    - Esses parâmetros ficam disponíveis em `req.query`:

        ```
        router.get('/users', (req, res) => {
            if (req.query.id !== undefined) {
                const userId = req.query.id;
                res.status(200).json(users[userId-1]);
            } else {
                res.status(200).json(users);
            }
        });
        ```

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

### 10.7. Definir a porta da aplicação

- Definimos que assim que a aplicação for iniciada, ela ficará escutando requisições na porta `3001`:

    ```
    app.listen(3001);
    ```

## 11. Autenticação via JWT e Passport

### 11.1. Armazenar senha criptografada

- Um erro muito grave é armazenar as senhas dos usuários no banco de dados de forma crua. Caso alguém consiga acesso a esse banco, terá acesso a conta de todos os usuários do serviço em questão.

- Para corrigir essa questão, podemos utilizar a dependência `bcrypt-nodejs`.

    ```
    const bcrypt = require('bcrypt-nodejs');

    const salt = bcrypt.genSaltSync(10);
    const encryptedPasswd = bcrypt.hashSync(passwd, salt);
    ```

- O método `genSaltSync` gera um valor de 10 caractéres aleatórios para ser concatenado a senha (de forma síncrona). Assim, o valor do hash gerado sempre seja diferente, mesmo que a senha seja a mesma.

- O método `hashSync` gera o hash (de forma síncrona), utilizando a senha crua e a string aleatória, que será armazenado no banco no lugar da senha crua.

### 11.2 Criação de usuário via signup

- A criação de usuário deve ser realizada através da rota `/auth/signup`.

### 11.3. Deve receber token ao logar

- Para o usuário ter acesso as informações que a API fornece, ele deve realizar autenticação na mesma, passando usuário e senha, criados em `/auth/signup` e recebendo de volta um token de acesso.

- Deve ser criada a rota `/auth/signin` que será responsável por realizar essa validação e retornar o token de acesso.

- Utilizamos a dependência `jwt` (JSON Web Token) para gerar o token de autenticação.

- Para gerar o token, o JWT utiliza algumas informações do usuário (exemplo, nome, email e senha), além de um segredo, que deve ficar bem escondido no seu programa (utilizar um arquivo `.env` para armazenar essa informação):

- Para gerar o token, é verificado se o usuário em questão está cadastrado e se a senha é a mesma que a salva no banco no formato de hash, utilizando o método `bcrypt.compareSync()`. Caso as senhas coincidam, um token é gerado, utilizando o método `encode` da dependência `jwt`, junto das informações do usuário e um segredo. Por fim, esse token gerado é retornado.

- Quando houver tentativa de autenticação com um usuário ou senha inválidos, não informar qual deles está errado para não facilitar a vida de possíveis hackers.

- Esse código está implementado no projeto em `src/routes/auth.js`.

### 11.4. Não deve acessar uma rota protegida sem token

- Apesar de já termos autenticado o usuário e senha gerando um token, ainda sim é possível acessar as rotas sem realizar esse procedimento, pois as mesmas encontram-se protegidas.

- O processo descrito a seguir encontra-se implementado em `src/config/passport.js`.

- Para realizar a autenticação do token, vamos utilizar as dependências `passport` e `passport-jwt`.
    - O `passport` permite a construção de um middleware para ser responsável pela autenticação de usuários da API;
    - O `passport-jwt` permite que essa autenticação ocorra utilizando a tecnica de JSON Web Tokens.

- Inicialmente, é necessário extrair as funcionalidades que vamos utilizar do `passport-jwt`:
    - `Strategy`: objeto responsável por definir a estratégia de autenticação;
    - `ExtractJwt`: objeto que contém o método de obtenção do token da requisição.

- O parâmetro `params` contém o segredo utilizado para gerar o token de autenticação e o método para obter esse token (no caso, será obtido do header da requisição). Com essas informações, é possível obter os dados do usuário utilizados para gerar o token, junto do segredo.

- É instanciado um novo objeto `Strategy`, que contém essas informações para obter os dados do usuário, além de uma função que será responsável por realizar a autenticação do token.

- Essa função contém dois parâmetros: `payload`, que contém os dados do usuário obtidos através do token e do segredo, e `done`, utilizado para determinar quando o middleware deve finalizar sua execução.

- Com as informações do usuário em mãos, é feita uma busca no banco pelo mesmo e caso seja encontrado, o middleware é finalizado com sucesso, caso contrário, é devolvido informando que não foi possível autenticar o token.

- Essa estratégia é vinculada ao `passport`.

- E o método de autenticação é exportado pelo módulo.

- Após a autenticação do usuário, o passport armazena as informações do usuário, obtidas através do token enviado, em `req.user`.  
  - Na nossa aplicação, esse artifício é utilizado para impedir que usuários tenham acesso a informações de outros usuários.

- Essa autenticação deve ser realizada antes de qualquer método de qualquer rota:
    ```
    app.route('/users')
        .all(...)
        .get(...)
        .post(...)
    ```

- A cláusula `all` exige que qualquer execução daquela rota, seja qual o verbo utilizado, passe por aquele ponto. Em caso de sucesso (nesse caso, usuário validado), a requisição segue seu fluxo natural, em direção ao verbo solicitado.

- Na versão final da aplicação desenvolvida, a estratégia utilizada foi um pouco diferente e pode ser vista em `src/config.router.js`.

### 11.5. Enviar token nas requisições

- Para utilizar os endpoints, agora é necessário realizar a autenticação através do token, e isso é feito utilizando a diretiva `set` do `supertest`, após a requisição:

    ```
    const res = await request(app).post('/users')
        .set('authorization', `bearer ${token}`)
        .send({ name: 'João', mail: 'joao@mail.com', passwd: '123456' });
    ```

## 12. Manipulação de Datas com Moment

- Uma dificuldade comum entre diferentes programadores é a manipulação de datas.

- Utilizamos a dependência `moment` para facilitar essa atividade.

- Após importar a dependência, podemos armazenar o horário corrente em uma variável da seguinte forma:

    ```
    const moment = require('moment');

    const current = moment(); // Equivalente a const current = new Date();
    ```

- Para adicionar ou subtrair dias dessa data:

    ```
    const past = moment().subtract({ days: 5 });
    const future = moment().add({ days: 5 });
    ```

## 13. Commits mais seguros com Husky

- A dependência `husky` permite definirmos `hooks`, que executarão comandos sempre antes de um *commit* para realizar validações. Caso alguma dessas validações retorne alguma inconsistência, o mesmo não é commitado até que o desenvolvedor resolva esses problemas.
    - Exemplo:

        ```
        "husky": {
            "hooks": {
                "pre-commit": "npm run lint && npm test"
            }
        }
        ```

        - No exemplo acima, caso o `lint` ou os `testes` retornem algum erro, o *commit* não é realizado.

- O Husky possui outras possibilidades descritas em sua documentação.

- Segundo o Wikipédia: *"Em programação de computadores, o termo **hooking** cobre uma série de técnicas utilizadas para modificar ou melhorar o comportamento de um sistema operacional, aplicações ou outros componentes de software através da interceptação de chamadas de funções, mensagens ou eventos passados entre componentes de software."*

## 14. Chaveamento de contexto utilizando variáveis de ambiente

- Uma prática comum do Express é utilizar variáveis de ambiente do Sistema Operacional para determinar se a aplicação em questão deve ser executada em contexto de **testes** ou **produção**.
  - Essa prática é interessante em casos onde a aplicação precisa definir para qual banco de dados ela deve olhar (vide `src/app.js:9`).

- O padrão do Express é utilizar a variável de ambiente `NODE_ENV` para determinar o contexto de execução.
  - **Obs.:** Até o momento não consegui entender porque utilizar essa variável gera saídas de erro durante os testes, portanto, estou utilizando a variável `SEUBARRIGA_ENV`.

- Para criar uma variável de ambiente no Windows:

    ```
    set NOME_VARIAVEL=valor
    ```

- Para acessar a variável de ambiente pelo Node.JS:

    ```
    process.env.NOME_VARIAVEL;
    ```

- O valor da variável de ambiente pode ser definida nos scripts de inicialização da aplicação, em `package.json`:

    ```
    "scripts": {
        "start": "set NODE_ENV=production && node src/server.js", // Produção
        "test": "set NODE_ENV=development && jest --coverage --runInBand --forceExit" // Testes
    },
    ```

- **Obs.:** Tomar cuidado que o espaço entre o valor da variável de ambiente e o operador de concatenação de comandos do Windows (`&&`) é entendido como parte do valor da variável de ambiente. Das duas umas: remover esse espaço ou realizar um `.trim()` quando a variável for capturada pelo Node.JS:

    ```
    "scripts": {
        "start": "set NODE_ENV=production&& node src/server.js",
        "test": "set NODE_ENV=development&& jest --coverage --runInBand --forceExit"
    },
    ```

    ou

    ```
    process.env.NOME_VARIAVEL.trim();
    ```

## 15. Segurança nos logs com Winston e UUID

- Um erro de segurança grave é expormos para os usuários as mensagens de erro geradas pelas exceções das nossa aplicação, pois essas podem conter informações relacionadas a arquitetura, como por exemplo, a modelagem do seu banco de dados.
  - Essas informações podem ser utilizadas posteriormente por hackers para atacar o sistema com maior facilidade, já que eles sabem como a aplicação funciona.

- Uma alternativa é omití-las do usuário e retornar apenas um ID que pode ser utilizado para consultar um arquivo de log, onde de fato as informações relacionadas a esse erro estarão armazenadas.

### 15.1. Winston

- Se utilizarmos as opções nativas do Node.JS, como o `console.log` para escrita no terminal ou a biblioteca `fs` para manipulação de arquivos de texto, a tarefa de *logging* se tornará mais complexa. O `winston` é uma dependência que procura facilitar essa tarefa. 

- Ele permite definirmos `levels` de criticidade para as informações, e dado esse nível, direcioná-las para um determinado tipo de output, como por exemplo, o terminal ou um arquivo de logs. Ele chama cada uma dessas possibilidades de um `transport`.

### 15.2. UUID

- Segundo o Wikipédia: *Um identificador único universal (do inglês universally unique identifier - **UUID**) é um número de 128 bits usado para identificar informações em sistemas de computação. O termo identificador único global (globally unique identifier - **GUID**) também é utilizado.*

- Utilizando a dependência `uuidv4`, podemos gerar esse identificador único que será gerado para cada erro capturado pela aplicação, e irá retorná-lo para o requisitante.

- Caso deseje reportar o erro, o usuário pode informá-lo aos mantenedores da aplicação, que utilizarão esse UUID para fazer uma busca no arquivo de logs de erros, obtendo assim mais detalhes sobre a falha ocorrida.

## 16. Inicialização da aplicação

### 16.1. Nodemon

- O `nodemon` é uma dependência utilizada em fase de desenvolvimento para realizar a inicialização de aplicações (*Launcher*).

- Diferentemente de inicializar a aplicação através do comando `node`, onde é necessário reiniciar o processo manualmente para que as alterações realizadas sejam perceptíveis, o Nodemon monitora todos os arquivos da aplicação e caso um deles sofra alguma alteração e essa seja persistida, a dependência logo trata de reinicializar a aplicação automaticamente.

### 16.2. pm2

- O `pm2` é uma dependência mais robusta do que o `nodemon`, sendo utilizada em produção para realizar a inicialização da aplicação de forma profissional e segura.

- Caso a aplicação seja inicializada utilizando o comando `node` ou o `nodemon`, o processo criado bloqueia o terminal utilizado, e caso seja fechado, o mesmo é encerrado.
    - No caso do pm2, a linha de comando fica livre para a execução de outras tarefas e é possível fechar o terminal sem interromper o funcionamento da aplicação.

- O pm2 também permite visualizar outras informações, como por exemplo, quantidade de recursos utilizados (processador e memória), número de conexões ativas, requisições e reinicializações, estado atual do processo, etc. 

- Para inicializar uma aplicação:

    ```
    pm2 start <arquivo-inicial> --name <nome-processo>
    ```

    - Podemos nomear o processo e utilizar essa identificação para manipular a aplicação através do pm2;
    - Para todo processo inicializado pelo pm2, um identificador numérico na tabela de processos é associado.

- Abrir um dashboard com informações relevantes sobre os processos gerenciados pelo pm2:

    ```
    pm2 monit
    ```

- Para visualizar as informações de um processo específico:

    ```
    pm2 show <id|nome-processo>
    ```

- Para reiniciar um processo:

    ```
    pm2 restart <id|nome-processo>
    ```

- Para finalizar o pm2:

    ```
    pm2 kill
    ```

## 17. CORS

- CORS (*Cross-origin Resource Sharing*) é uma política utilizada por navegadores web para limitar o acesso a recursos cujo endereço é diferente da origem.

- Os navegadores utilizam headers HTTP para analisar se aquela origem possui permissão para acessar o recurso solicitado.

- É muito comum que aplicações web realizem acesso a diferentes fontes de dados para alimentá-la, assim, a política de CORS é importante para que haja um controle desses recursos que estão sendo acessados para evitar que acessos indevidos não sejam realizados.

- Muito comum a política de CORS barrar o acesso a recursos utilizando o método de requisição `fetch` do JavaScript.

- Para realizar a configuração de CORS do lado do servidor, devemos utilizar a dependência `cors` como middleware:

    ```
    const cors = require('cors');
    app.use(cors({ origin: '*' }));
    ```

- No caso acima, é configurado que qualquer origem pode realizar acesso a API, porém, em casos de aplicações reais, essa não é uma boa prática, sendo melhor limitar quais são as origens/domínios que podem utilizar os recursos da API.

- [Clique aqui](https://www.treinaweb.com.br/blog/o-que-e-cors-e-como-resolver-os-principais-erros) para entender mais a fundo a política de CORS. 