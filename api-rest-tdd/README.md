# API REST em Node.JS aplicando testes (TDD) desde o princípio

- A divisão dos capítulos segue a mesma do curso

**COLOCAR LINK DO CURSO**

**COLOCAR LINK PARA O REPOSITÓRIO DO PROJETO**

## 1. Introdução

- API's são importantes pois fornecem dados para diferentes sistemas, não ficando presas a uma linguagem ou natureza da aplicação (web, desktop, mobile, etc.).

- Os testes são de extrema importância para garantir a segurança e confiabilidade da nossa aplicação.

- TDD = *Test-driven development* (em português, Desenvolvimento guiado por testes).

**FALAR SOBRE TDD**

## 2. Iniciando a API

### 2.1. Devo criar o projeto

- Para iniciar um projeto em Node.JS, devemos executar o seguinte comando:

    ```
    npm init -y
    ```

    - `npm`: Gerenciador de pacotes do Node (Node Package Manager);
    - `-y`: Caso não insira essa *flag*, serão feitas diversas perguntas. Nesse caso, todas são respondidas com *yes*.

- Inicialmente é criado um arquivo `package.json` que armazena informações referentes à aplicação, como nome, versão, descrição, autor, dependências, etc.

- Podemos instalar a dependência **ESLINT** para nos ajudar a manter a organização/padronização do código:

    ```
    npm i -D eslint
    ```

    - `i` ou `install`: indica que será realizada uma instalação;
    - `-D` ou `--save-dev`: indica que a dependência em questão deve ser salva como dependência apenas de desenvolvimento;
    - `eslint`: dependência instalada.

- Os arquivos da dependência instalada ficam no diretório `node_modules`.

- Evitar instalar dependências de forma global.

- Para iniciar o **ESLINT**, devemos digitar o seguinte comando:

    ```
    ./node_modules/.bin/eslint --init
    ```

    - Algumas perguntas serão realizadas e no fim mais algumas dependências serão instaladas.
    - O arquivo `eslintrc.json` é criado e armazena as configurações do lint.

- Devem ser criados os diretórios `src` para armazenar os códigos da nossa aplicação e `test` para armazenar os testes.
    - Estrutura de diretórios inicial:

    ```
    seubarriga
        node_modules
        src
        test
        .eslintrc.json
        package-lock.json
        package.json
    ```

- No arquivo `package.json`, nós podemos criar atalhos para executar determinados scripts e/ou comandos no terminal.
    - No atributo `scripts`, definimos um nome como chave e o valor é o que será executado;
    - Exemplo:
        
        ```
        "scripts": {
            "lint": "eslint src/** test/** --fix"
        }
        ```

    - Para executar o script na linha de comando:

        ```
        npm run lint
        ```

    - O parâmetro `--fix` permite que o lint faça correções automaticamente quando executado. Porém, não funciona com todo tipo de erro (consultar documentação).
    - A extensão do ESLINT para Visual Studio Code facilita o uso do LINT para padronizar o seu código, alertando para possíveis erros de formatação em tempo real, sem a necessidade de se executar um comando toda vez que desejar realizar essa verificação.

### 2.2 Devo conhecer o básico das asssertivas do Jest

- Para instalar o JEST:

    ```
    npm install -D jest@23.6.0 -E
    ```

    - `@23.6.0`: indica a versão que deve ser instalada;
    - `-E`: Informa que não deve ser aceitas outras versões (instalar a versão exata).

- Como funciona o versionamento:

    ```
    23.6.0
    ```

    | Número | Descrição | Nome |
    | ------ | --------- | ---- |
    | 23 | Indica que a versão adiciona novas funcionalidades que implicam em problema de compatibilidade | Upgrade Major
    | 6 | Indica que a versão adiciona novas funcionalidades, porém, que não implicam em problemas de compatibilidade | Upgrade Minor
    | 0 | Indica que a versão em questão realiza correções de bugs | Upgrade de patch

    - Você pode definir no seu `package.json` qual o tipo de versão que deve ser permitida:

        ```
        "eslint": "23.6.0"  // Versão exata
        "eslint": "^23.6.0" // Aceita upgrade minor
        "eslint": "~23.6.0" // Aceita upgrade de patch
        ```

- O arquivo de testes deve ter a extensão `.test.js`.

- No arquivo `eslintrc.json` deve ser informado que estamos utilizando o JEST:

    ```
    "env": {
        "jest": true
    }
    ```

- Por padrão, o ESLINT utiliza o LF, costumeiramente utilizado em sistemas UNIX, como caractére de quebra de linha, enquanto o Windows utiliza o CRFL. Caso estejamos desenvolvendo nossa aplicação em um sistema Windows, podemos indicar qual caractére de quebra de linha seguir:

    ```
    "rules": {
        "linebreak-style: ["error", "windows"]
    }
    ```

    - Se quisermos desativar regras também utilizamos esse trecho do arquivo (consultar documentação para saber como manipular cada uma das regras).

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
    ```

    - Existem várias outras verificações que podem ser feitas, inclusive manipulando objetos.

### 2.3. Deve responder na porta 3001

- Os testes funcionam como documentação da solução.
    - Caso alguém solicite, você pode apresentar os critérios utilizados no desenvolvimento e que os testes passam em todos eles.

- O Express é um framework que permite a construção de servidores web em Node.JS.
    - Para instalá-lo:

        ```
        npm i -S -E express@4.16.4
        ```

        - `-S` ou `--save`: Salva como uma dependência da aplicação, ou seja, no que a mesma for disponibilizada em produção, essa dependência é essencial para o seu perfeito funcionamento.

- A biblioteca `supertest` nos permite testar APIs de forma facilitada.

### 2.4. Deve responder na raiz

- Separar a aplicação (`app`) do servidor (`server`) faz com que não precisemos determinar endereço, porta e nem subir a aplicação durante o período de desenvolvimento e testes, fazendo isso apenas na entrega em produção.

### 2.5. Devo trabalhar no modo seguro:

- O modo seguro não é algo nativoe sim uma proposta do autor para tornar o desenvolvimento mais seguro.

- A ideia é que os testes sejam executados toda vez que houver uma alteração nos arquivos da aplicação ou de testes e que essas sejam salvas.
    - Isso garante a segurança no desenvolvimento, facilitando o encontro de erros no código em tempo de desenvolvimento e facilitando o retorno à um estado consistente anterior.

- Para executar o JEST nesse modo:

    ```
    jest --watchAll
    ```

- Podemos inclusive criar um script para esse comando no `package.json` e chamá-lo de `secure-mode`.

## 3. /users

### 3.1. Devo listar todos os usuários

- Nessa primeira funcionalidade, o usuário deve ser capaz de fazer um *GET* em `/user` e a aplicação deve retornar uma lista com todos os usuários cadastrados.

```
test('Deve listar todos os usuários', async () => {
    await request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty('name', 'John Doe');
        });
});
```

- Toda requisião HTTP retorna uma Promise, por isso utilizamos o `then` para ter acesso ao conteúdo da resposta em caso de sucesso.

- Uma request bem sucedida sempre retorna o status **200**.

- A lista de usuários pode ser obtida no `body` da resposta.

- A propriedade `toHaveProperty` verifica se o objeto possui determinada propriedade.
    - Se passado um parâmetro, é verificado se o objeto possui aquele atributo;
    - Se passado dois parâmetros, é verificado se o objeto possui algum atributo com o nome passado no primeiro parâmetro e se o mesmo possui como valor o passado no segundo parâmetro.

```
app.get('/users', (req, res) => {
    const users = [
        { name: 'John Doe', mail: 'john@mail.com' },
    ]

    res.status(200).json(users);
});
```

- Todo endpoint desenvolvido possui dois parâmetros: o primeiro é o caminho para acessar aquela funcionalidade e o segundo é o método que determina o que será feito quando o usuário realizar uma requisição.
    - Esse método possui dois parâmetros: requisição (`req`) e resposta (`res`). Todas as informações enviadas na requisição são acessadas em `req` e tudo o que deve ser retornado para o requisitante é armazenado em `res`;
    - O método `.json()` converte o valor passado como parâmetro para o formato JSON, o anexa ao  `body` da resposta e envia para o requisitante.

### 3.2. Deve inserir usuário com sucesso

```
test('Deve inserir usuário com sucesso', async () => {
    await request(app).post('/users')
        .send({ name: 'Walter Mitty', mail: 'walter@mail.com' })
        .then((res) => {
            expect(res.status).toBe(200);
            expecy(res.body.name).toBe('Walter Mitty')
        });
});
```

- Quando desejamos inserir novos dados na nossa aplicação, realizamos uma requisição *POST* para a nossa API. Nesse caso, devemos indicar os dados que devem ser inseridos no `body` da requisição, utilizando o método `.send()`, que antes de anexar e enviar os dados, os converte para JSON. 

- Utilizamos o que chamamos de verbos HHTP para fazer as requisições de acordo com a operação que desejamos realizar.
    - Existem diversos verbos, mas os quatro mais utilizados que dizem respeito as operações de CRUD (CREATE, READ, UPDATE, DELETE) são:

        | Verbo | Descrição |
        | ----- | --------- |
        | GET | Obter dados |
        | POST | Inserir novos dados |
        | PUT | Alterar dados existentes |
        | DELETE | Remover dados|

    - Podemos haver dois endpoints com o mesmo endereço, desde que utilizem verbos diferentes.

- Para conseguir manipular as informações enviadas no `body` da requisição do lado da aplicação, é necessário realizar uma conversão. Para isso utilizamos o `body-parser`, um módulo utilizado para converter o `body`da requisição para diferentes formatos, entre eles, o JSON.

```
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/users', (req, res) => {
    res.status(200).json(req.body);
});
```

### 3.3. Devo organizar meus arquivos

- *Middlewares* são funções que são executadas durante o processamento de uma requisição.
    - O `body-parser` é um exemplo, pos ele é executado toda vez que uma requisição do tipo POST é realizada, para converter as informações do body da requisição para o formato esperado pela aplicação;
    - Podemos separá-los em outro arquivo no diretório `src/config`;
    - O método `app.use()` é utilizado para extendermos o Express com outros módulos. Essa extensão é feita através da adição de middlewares que serão executados sempre antes de qualquer requisição ser processada.

- O `consign` é uma dependência que facilita a gestão dos módulos de uma aplicação, fazendo um *autoload*.
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

### 3.4. Devo criar arquivo de rotas

- Uma boa prática é separar as rotas criadas em arquivos, afim de aumentar a organização do projeto.

- O método `app.route()` permite a criação de rotas de forma encadeada, eliminando redundâncias e tornando o código mais organizado.

### 3.5. Devo instalar o postgress

- Não foram realizadas anotações dessa aula.

### 3.6. Devo criar a estrutura da tabela de usuários

- O `Knex` é uma biblioteca que permite a manipulação de bancos de dados através do Node.JS.
    - Suporta diversos sistemas, como: Postgres, MariaDB, Oracle, etc;
    - Knex é um Query Builder, que permite a criação de querys SQL a partir de código JavaScript, tornando o código mais flexível e evitando misturar código JS com SQL, o que acaba causando uma poluição da escrita.

- Ao longo da vida útil de uma aplicação, mudanças estruturais podem ocorrer nos bancos de dados o qual a API interage, como adição ou remoção de tabelas e colunas, alteração nos seus nomes, etc.
    - Porém, pode ser difícil manter essas mudanças rastreáveis, construindo uma linha do tempo. Nesse caso as `migrations` irão ajudar;
    - Migrations são arquivos que definem mudanças estruturais nos bancos de dados;
    - Elas ficam armazenadas em `src/migrations` (ou outro diretório que você determina no arquivo de configuração do Knex);
    - Para criar uma `migration`:

    ```
    node_modules/.bin/knex migrate:make <migration-name> --env <environment>
    ```

    - No arquivo criado, deve se definir duas funções: `up` e `down`. A primeira é o comando que será executado para realizar aquela alteração, enquanto a segunda é o comando que irá desfazer a alteração realizada, caso necessário;
    - Na frente do nome do arquivo de migration gerado há o timestamp da sua criação, para que se saiba a ordem de realização das alterações;
    - Para executar a alteração de uma migration:

    ```
    node_modules/.bin/knex migrate:<migration-name> --env <environment>
    ```

    - No arquivo de configuração do knex (`knexfioe.js`) nós especificamos as informações referentes aos bancos de dados de testes, homologação e produção, como endereço, porta, usuário, senha, sistema gerenciador de banco de dados utilizado, além de onde serão criadas as migrations. 


### 3.7. Devo refatorar para usar o banco de dados

- Para utilizarmos o Knex em nossa aplicação, devemos integrá-lo:

```
const knex = require('knex');

const knexfile = require('../knexfile');

app.db = knex(knexfile.test);
```

- Desse modo, devemos refatorar o código para utilizarmos o banco de dados como forma de persistência dos dados em nossa aplicação:

    ```
    module.exports = (app) => {
        const findAll = (req, res) => {
            app.db('users').select()
                .then((result) => res.status(200).json(result));
        };

        const create = async (req, res) => {
            const result = await app.db('users').insert(req.body, '*');
            res.status(200).json(result);
        };

        return { findAll, create };
    };
    ```

    - A operação realizada por `findAll` é equivalente a:

    ```
    SELECT * FROM users
    ```

    - Enquanto a operação `create` é o mesmo que:

    ```
    INSERT INTO users ("mail", "name", "passwd")
    VALUES ("walter@mail.com", "Walter Mitty", "123456")
    RETURNING *;
    ```

    - O `RETURNING` não funciona em MySQL;
    - Quando o `RETURNING` é configurado, a promise de `INSERT` retorna um array com todos os valores inseridos. Ou seja, é possível inserir mais de uma linha no banco em uma mesma requisição, basta colocá-las dentro de uma lista.

### 3.8. Devo logar consultas

- Acaba poluindo muito o log, mas é interessante para ver o que está sendo realizado no banco, principalmente durante testes para identificar possíveis bugs.

- Uma opção é o `knex-logger`.
    - Ressalva: o projeto tem uma única versão de mais de 4 anos atrás. Das duas, uma: ou o projeto é estável ou foi abandonado;
    - Deve-se associar o `knex-logger` com o banco de dados da aplicação:

        ```
        app.use(knexLogger(app.db));
        ```

- Outra opção é utilizar os logs internos do knex. Porém, nesse caso, é necessário codificar essa função.

- Uma função interessante do arquivo de testes é permitir definirmos que um teste deve ser ignorado ou que apenas ele deve ser executado:

    ```
    test.only('...', () => { ... }); // Apenas ele será executado e os demais ignorados
    test.skip('...', () => { ... }); // O teste em questão será ignorado
    ```

- No resultado final, os testes ignorados aparecerão como `skipped`.

### 3.9. Devo separar camada de serviço

- Podemos separar as querys realizadas en outro arquivo, dentro do diretório `src/services`, aumentando a organização do código e permitindo o reuso dessas querys. Assim, quando uma rota quiser realizar uma query, ele apenas chama a mesma através de uma função.

### 3.10-13 Não deve inserir usuário sem nome, email, senha e como email já existente

- Essas validações devem ocorrer na camada de serviços e essa deve devolver um objeto de erro para a rota que a invocou. A rota fica responsável apenas por verificar se houve erro, e caso sim, retorná-lo para o requisitante.

## 4. /accounts

### 4.1. Devo criar a estrutura da tabela de contas

- Para desfazermos uma migration:

    ```
    node_modules/.bin/knex migrate:rollback --env <environment>
    ```

- Digamos que em um cenário hipotético você realiza o *rollback* em três migrations que foram inseridas uma a uma. Se você em seguida executar `migrate:latest`, ele irá refazer as três migrations, na ordem em que elas foram criadas.
    Agora, se você der um novo *rollback*, as três novamente serão desfeitas, pos o *rollback* não atua apenas em cima da última migration, e sim, no último conjunto de mudanças ocorridas, independentemente dela ter uma ou mais migrations.

### 4.2. Devo inserir uma conta com sucesso

- Não foram realizadas anotações dessa aula.

### 4.3. Deve listar todas as contas

- Não foram realizadas anotações dessa aula.

### 4.4. Deve retornar conta por ID

- Até o momento, criamos uma rota utilizando o `GET` para listar todas as contas da tabela. Para criarmos uma rota utilizando o `GET` para retornar uma única conta através do seu ID, devemos fazer:

    ```
    app.route('/accounts/:id')
    ```

    - Quando inserimos os dois pontos, estamos querendo informar que aquele valor será uma variável;
    - Assim, para realizar a busca da conta com id 153, devemos fazer:

    ```
    localhost:3001/accounts/153
    ```

    - Para obter o valor de `id` na execução da função associada a rota, devemos acessar `req.params.id`.
        - Quando executamos um `POST` para inserir algo no banco, os dados vem em `req.body`;
        - Quando executamos um `GET` para obter uma linha da tabela, os dados vem em `req.params`.

### 4.5. Deve alterar uma conta

- Quando realizamos um `PUT` para para alterar algum registro da tabela, devemos inserir o id desse registro na rota (como no caso do `GET` para um único registro), e os valores que devem ser alterados, no `body`.

```
request(app)
    .put(`/accounts/${req.params.id}`).
    .send(req.body);

// req.params.id = 153
// req.body = { name: 'Acc Updated' }
```

```
const update = (id, account) => {
    return app.db('accounts')
        .update(account, '*')
        .where(id);
};

// account = { name: 'Acc Updated' }
// id = 153
```

- A operação realizada por `update` é equivalente a:

```
UPDATE accounts
SET name = 'Acc Updated'
WHERE id = 153
RETURNING *;
```

### 4.6. Deve remover uma conta:

- Quando realizamos um `DELETE` para remover algum registro de uma tabela, devemos inserir o `id` desse registro na rota (assim como no caso do `GET` para um único registro e do `PUT`).

```
request(app)
    .delete(`/accounts/${req.params.id}`);

// req.params.id = 153
```

```
const remove = (id) => {
    app.db('accounts')
        .del()
        .where({ id });
}

// id = 153
```

- A operação realizada por `remove` é equivalente a:

```
DELETE FROM ACCOUNTS
WHERE id = 153;
```

### 4.7. Não deve inserir uma conta sem nome

- Não foram realizadas anotações dessa aula.

### 4.8. Devo gerenciar os erros

- Não foram realizadas anotações dessa aula.

### 4.9. Devo entender os middlewares do Express

- Os middlewares, como já explicado, funcionam como funções intermediárias, executadas antes da função de destino iniciar o processamento da requisição.

- O que diferencia um middleware de uma rota comum é que no que a requisição cai para ele, ele a processa e permite que a mesma siga em diante para ser processada por outras funções.
    - No caso de uma rota comum, no que a requisição caísse nela, nada do que vier após ser executado.

- A diferença desses middlewares é que além dos atributos `req` e `res`, elas possuem um terceiro atributo: uma função `next()`, que indica que o processamento da requisição deve continuar após ela.

```
app.use((req, res, next) => {
    console.log('Passou por aqui!");
});
```

- A ordem de declaração dos middlwares importa.

### 4.10 Devo gerenciar os erros de uma forma genérica

- Além do parâmetro `next`, os middlewares também possuem outro parâmetro que é o de erro.

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

## 5. /auth

### 5.1. Deve armazenar senha criptografada

- Um erro muito grave é armazenar as senhas dos usuários no banco de dados de forma crua. Caso alguém consiga acesso a esse banco, terá acesso a conta de todos os usuários do serviço em questão.

- Para corrigir essa questão, podemos utilizar a dependência `bcrypt-nodejs` na versão `0.0.3`.

```
const salt = bcrypt.genSaltSync(10);
const encryptedPasswd = bcrypt.hashSync(passwd, salt);
```

- A primeira linha gera um valor de 10 caractéres aleatórios para ser concatenado a senha, assim, o valor do hash gerado sempre seja diferente, mesmo que a senha seja a mesma.

- A senha linha gera o hash utilizando a senha crua e a string aleatória.

### 5.2. Deve receber token ao logar

- Para o usuário ter acesso as informações que a API fornece, ele deve realizar autenticação na mesma, passando usuário e senha e recebendo de volta um token de acesso.

- Deve ser criada a rota `/auth/signin` que será responsável por realizar essa validação e retornar o token de acesso.

- Utilizamos a dependência `JWT` (JSON Web Token) para gerar o token de autenticação.

- Para gerar o token, o JWT utiliza algumas informações do usuário, além de um segredo, que deve ficar bem escondido no seu programa:

    ```
    app.services.user.findOne({ mail: req.body.mail })
        .then((user) => {
            if (bcrypt.compareSync(req.body.passwd, user.passwd)) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    mail: user.mail
                };

                const token = jwt.encode(payload, secret);
                res.status(200).json({ token });
            }
        }).catch((err) => next(err));
    ```

    - Para gerar o token, é verificado se o usuário em questão está cadastrado e se a senha é a mesma que a salva no banco no formato de hash, utilizando o método `bcrypt.compareSync()`. Caso as senhas coincidam, um token é gerado, utilizando o método `encode` da dependência `jwt`, junto das informações do usuário e um segredo. Por fim, esse token gerado é retornado.

    - Quando houver tentativa de autenticação com um usuário ou senha inválidos, não informar qual deles está errado para não facilitar a vida de possíveis hackers.

### 5.3. Não deve autenticar usuário com senha errada

- Não foram realizadas anotações dessa aula.

### 5.4. Não deve acessar uma rota protegida sem token

- Apesar de já termos autenticado o usuário e senha gerando um token, ainda sim é possível acessar as rotas sem realizar esse procedimento, pois as mesmas encontram-se protegidas.

- Para realizar a autenticação do token, vamos utilizar as seguintes dependências:
    - `passport@0.4.0`;
    - `passport-jwt@4.0.0`.

- O `passport` permite a construção de um middleware para ser responsável pela autenticação de usuários da API.

- O `passport-jwt` permite que essa autenticação ocorra utilizando a ideia de Web Tokens.

- Inicialmente, é necessário extrair as funcionalidades que vamos utilizar do `passport-jwt`:
    - `Strategy`: objeto responsável por definir a estratégia de autenticação;
    - `ExtractJwt`: objeto que contém os métodos de obtenção do token da requisição.

```
const { Strategy, ExtractJwt } = passportJwt;
```

```
const params = {
    secretOrKey: secret // secret = 'Segredo'
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const Strategy = new Strategy(params, (payload, done) => {
    app.service.user.findOne({ id: payload.id })
        .then((user) => {
            if (user) done(null, { ...payload });
            else done(null, false);
        }).catch((err) => done(err, false));
});

passport.use(Strategy);

return { authenticate: () => passport.authenticate('jwt', { session: false }) };
```

- O parâmetro `params` contém o segredo utilizado para gerar o token de autenticação e o método para obter esse token (no caso, será obtido do header da requisição). Com essas informações, é possível obter os dados do usuário utilizados para gerar o token junto do segredo.

- É instanciado um novo objeto `Strategy`, que contém essas informações para obter os dados do usuário, além de uma função que será responsável por realizar a autenticação do token.

- Essa função contém dois parâmetros: `payload`, que contém os dados do usuário obtidos através do token e do segredo, e `done`, utilizado para determinar quando o middleware deve finalizar sua execução.

- Com as informações do usuário em mãos, é feita uma busca no banco pelo mesmo e caso seja encontrado, o middleware é finalizado com sucesso, caso contrário, é devolvido informando que não foi possível autenticar o token.

- Essa estratégia é vinculada ao `passport`.

- E o método de autenticação é exportado como módulo.

- Essa autenticação deve ser realizada antes de qualquer método de qualquer rota:

    ```
    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.routes.users.findAll)
        .post(app.routes.users.create)
    ```

- A cláusula `all` exige que qualquer execução daquela rota, seja qual o verbo utilizado, passe por aquele ponto. Em caso de sucesso, a requisição segue seu fluxo natual em direção ao seu processamento.

### 5.5 Deve criar usuário via signup

- A criação de usuário deve ser realizada através da rota `/auth/signup`.

### 5.6. Deve enviar token nos testes

- No arquivo de testes, se utilizarmos a diretiva `beforeAll`, podemos determinar instruções que sempre serão executadas antes dos testes.
    - No contexto do projeto, o `beforeAll` era utilizado para sempre criar um usuário antes dos testes e gerar o token de acesso, para que não seja necessário fazer isso para cada um dos testes, já que todas as rotas agora são protegidas e portanto exigem autenticação.

- Para utilizar os endpoints, agora é necessário realizar a autenticação através do token, e isso é feito utilizando a diretiva `set` após a requisição:

    ```
    const res = await request(app).post('/users')
        .set('authorization', `bearer ${token}`)
        .send({ name: 'João', mail: 'joao@mail.com', passwd: '123456' });
    ```

## 6. /accounts #2

### 6.1. Devo desacoplar o meu roteamento

- Em situações onde o número de rotas é extenso, pode ser interessante desacoplá-las do arquivo de roteamento. Nesse caso, o arquivo de rotas contém apenas o endereço inicial de cada rota e o arquivo onde elas realmente estão implementadas faz o direcionamento, dado o verbo HTTP utilizado.

- Exemplo:

    ```
    /auth -> No arquivo de configurações de rotas

    post /signup post /signin -> No arquivo de implementação de rotas
    ```

- Assim, nos arquivos onde as rotas são implementadas, instanciamos um objeto `express.Route`, vinculamos as rotas implementadas a ele, e ao ínvés de expormos os métodos no `return`, devolvemos o roteador:

```
const express = require ('express');

module.exports = (app) => {
    const router = new Router();

    // ...

    router.post('/', (req, res, next) => {
        app.services.account
            .save({ ...req.body, user_id: req.user.id })
            .then((result) => res.status(200).json(result[0]))
            .catch((err) => next(err));
    });

    // ...

    return router;
};
```

- Tanto o método anterior quanto esse são válidos, ver qual deles se encaixa melhor na sua aplicação.

- Esse método também facilita nos casos de lançamento de novas versões, evitando o retrabalho de criar todas as rotas novamente.

### 6.2. Deve listar apenas as contas do usuário

- Uma coisa que faz sentido é que um usuário consiga manipular apenas suas contas. 
    - Porém, seu `id` não pode ser extraído da requisição enviada, caso contrário, o requisitante pode inserir qualquer `id` no `body` e com isso obter as informações de outro usuário.

- Uma forma de obter o `id` do usuário que está autenticado, devemos utilizar o atributo `req.user.id`.
    - Quando realizamos a autenticação do usuário com o token, o `passport` armazena as informações do `payload` em `req.user`.

- Da forma que foi construído, mesmo que o usuário passe um `id` na requisição, ele é sobrescrito pelo obtido em `req.user.id`.

- Como vimos anteriormente, o `beforeAll` executa um bloco de código antes de iniciar os testes, Porém, ele executa uma única vez para todos os testes.
    - Podemos utilizar o `beforeEach` para executar esse bloco de código antes de cada teste, gerando um resultado diferente para cada um deles.

### 6.3. Não deve inserir uma conta com nome duplicado

- Não foram realizadas anotações dessa aula.

### 6.4. Não deve retornar uma conta de outro usuário

- Não foram realizadas anotações dessa aula.

### 6.5. Não deve alterar ou remover a conta de outro usuário

- Não foram realizadas anotações dessa aula.

## 7. /transaction

### 7.1. Devo criar a estrutura da tabela de transações

- Não foram realizadas anotações dessa aula.

### 7.2. Deve listar apenas as transações do usuário

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

- Para realizar um `JOIN` com o `Knex`:

    ```
    app.db('transactions')
        select()
        .join('accounts', 'accounts.id', 'acc_id')
        .where(filter);

    // filter = { 'transactions.id': req.params.id }
    // req.params.id = 153
    ```

    - O primeiro parâmetro de `join()` indica com qual tarefa será realizada a atividade de agrupamento, o segundo parâmetro diz respeito em qual campo dessa tabela está localizada a chave primária que será utilizada, e o terceiro parâmetro diz respeito ao campo da tabela referenciada em `FROM` que contém a chave estrangeira.

    - Equivalente a:

        ```
        SELECT *
        FROM transactions AS t
        JOIN accounts AS a ON t.acc_id = a.id
        WHERE t.id = 153
        ``` 

### 7.3. Devo criar snippets customizados

- Não foram realizadas anotações dessa aula.

### 7.4. Deve inserir uma transação com sucesso

- Não foram realizadas anotações dessa aula.

### 7.5. Deve retornar uma transação por ID

- Não foram realizadas anotações dessa aula.

### 7.6. Deve alterar uma transação

- Não foram realizadas anotações dessa aula.

### 7.7. Deve remover uma transação

- Não foram realizadas anotações dessa aula.

### 7.8. Não deve manipular transação de outro usuário

- Não foram realizadas anotações dessa aula.

### 7.9. Deve ajustar o sinal das transações

- Não foram realizadas anotações dessa aula.

### 7.10. Deve validar a inserção da transação

- Não foram realizadas anotações dessa aula.

### 7.11. Devo aprender a reusar código

- Podemos agregar uma série de testes para que eles sejam ententidos como um único e internamente esses são executados de forma isolada do resto, permitindo questões como reutilização de código (vide uso no script `transaction.test.js`).
    - Basta utilizarmos o comando `describe`.

### 7.12. Não deve remover uma conta sem transação

- Não foram realizadas anotações dessa aula.

### 7.13. Devo analisar desempenho dos testes