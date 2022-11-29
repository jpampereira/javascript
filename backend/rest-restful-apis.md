# Entendendo e documentando REST/RESTful APIs

- Anotações realizadas durante o curso.

## 1. Links

[Curso](https://www.udemy.com/share/101AtK/)

## 2. Entendendo os conceitos que permeiam as RESTful APIs

### 2.1. O que é uma API Application

- Application Programming Interface (Interface de Programação de Aplicativos).

- API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software.

- **Analogia:** para um DJ conseguir tocar, ele deve conhecer o que os botões dos seus aparelhos de trabalho fazem. Nas APIs, esses botões seriam as rotinas da APIs, que descrevem as ações que podem ser realizadas no serviço que aquela API cobre.

- Com o advento dos *client-side frameworks*, mais e mais desenvolvedores estão se preocupando em desenvolver o back-end que é compartilhado entre diferentes sistemas.

- A API não fica vinculada a um único tipo de sistema ou linguagem de programação.

	![Esquema API](./imagens/api.png)

### 2.2. Resource, URI, URL, URN e IRI

#### 2.2.1. Resource

- Recursos são elementos de informação, que através de um identificador global podem ser manipulados.

- Exemplo: desejo um recurso para manipular (costumeiramente: criar, selecionar, editar ou remover) os usuários da minha aplicação:
  - Recurso: Usuário;
  - ID: /user.

- A nomeação de um recurso sempre é formado por um substantivo, nunca um verbo (Isso porque o identificador de um recurso deve fazer menção a entidade que desejamos manipular e não como manipulá-las).

#### 2.2.2. URI (Uniform Resource Identifier)

- Identificador Uniforme de Recursos, ou seja, é uma cadeia de caractéres compacta usada para identificar ou denominar um recurso na internet.

- Exemplo:
  - Recurso: Usuário;
  - URI: www.meusite.com/user.

#### 2.2.3. URL (Uniform Resource Locator)

- Localizador-Padrão de Recursos, é o endereço de um recurso disponível em uma rede.

- Exemplo:
  - Recurso: Impressora;
  - URL/URI: http://www.meusite.com/printer.

#### 2.2.4. URN (Uniform Resource Name)

- Nome Uniforme de Recurso, é um tipo de URI que usa o URN Scheme e que tem por objetivo a identificação única do recurso, de forma persistente e independente da sua localização.

- Não é utilizado.

- A ideia é que um recurso tenha identificador único desvinculado de qualquer URI/URL e caso inseríssemos essa URN em um resolvedor, ele retornaria as URLs que contém aquele conteúdo.

- [Saiba mais](http://pt.wikipedia.org/wiki/URN)

#### 2.2.5. IRI (Internationalized Resource Identifier)

- Identificador de Recursos Internacionalizado é a uma generalização do URI.

- Enquanto URIs são limitados a um subconjunto de caractéres ASCII, IRIs podem conter caractéres do Conjunto Universal de Caractéres (*Universal Character Set* - Unicode/ISO 10646).

### 2.3. O que é REST?

- O termo Referência de Estado Representacional (*Representational State Transfer* - REST) foi introduzido e definido no ano de 2000 através de uma tese de Ph.D do cientista Roy Fielding, um dos principais autores da especificação do protocolo HTTP.

- O intuito geral da tese era a formalização de um conjunto de melhores práticas denominadas *constraints*.

- Essas *constraints* tinham como objetivo determinar a forma na qual padrões como HTTP e URI deveriam ser modelados, aproveitando de fato todos os recursos oferecidos pelos mesmos.

#### 2.3.1. Cliente-Servidor

- A principal característica dessa *constraint* é separar as responsabilidades de diferentes partes de um sistema.

- Essa divisão pode se dar de diferentes formas, iniciando por exemplo com a separação entre mecanismos de interface do usuário (*front-end*) e o *back-end* da aplicação.

- Isso nos permite a evolução e escabilidade destas responsabilidades de forma independente.

#### 2.3.2. Stateless

- Essa característica propõe que cada requisição ao servidor não deve ter ligação com requisições anteriores ou futuras, ou seja, cada requisição deve conter todas as informações necessárias para que ela seja tratada com sucesso pelo servidor.

#### 2.3.3. Cache

- Para uma melhor performance, um sistema REST deve permitir que suas respostas sejam passíveis de cache.

- Para casos onde o número de requisições é expressivo, se faz necessário para não afetar a disponibilidade do sistema.

#### 2.3.4. Interface Uniforme

- Bastante esforço deve ser feito para que o sistema possua uma interface modelada seguindo alguns padrões importantes.

- Quando se fala sobre uma interface, os elementos abaixo devem ser considerados:
  - Recursos;
  - Mensagens autodescritivas;
  - Hypermedia.

- Devemos pensar em criar uma interface que permita a manipulação desses conceitos.

- Exemplo:

	![Entidade-Operações](./imagens/api-exemplo-recurso.png)

#### 2.3.5. Sistema em Camadas

- Com o intuito de permitir a escalabilidade necessária para grandes sistemas distribuídos, um sistema REST deve ter capacidade de adicionar elementos intermediários e que sejam totalmente transparentes para seus clientes.

- Exemplo: Balanceador de Carga.

#### 2.3.6. Código sob demanda

- A ideia é aumentar a flexibilidade dos clientes, como por exemplo um código JavaScript que só é baixado quando determinada página é carregada.

- Apesar de ser algo interessante, essa prática reduz a visibilidade do cliente, por isso é opcional.

### 2.4. REST vs RESTful

- Quando estamos discutindo sobre o modelo e sobre as características que vimos anteriormente, você deve utilizar o termo **REST**, já no momento em que você estiver falando de uma implementação que usa essas mesmas características, você deve utilizar **RESTful**.

- **REST** nada mais é que um conjunto de melhores práticas denominadas *constraints*.

- Se a API segue os princípios **REST**, ela é uma API **RESTful**, caso contrário, teremos apenas uma API HTTP.

- **Representações:** quando o usuário solicita dados a API, ele pode informar o tipo de dado que ele espera.
  - Formatos mais utilizados: JSON (*JavaScript Object Notation*) e XML (*eXtensible Markup Language*).

	![Representações em Requisições HTTP](./imagens/representacoes-dos-dados.jpg)

### 2.5. REST vs SOAP (Simple Object Access Protocol)

| REST | SOAP |
| ---- | ---- |
| Modelo Arquitetural | Protocolo |
| Requisição HTTP simples | Usa SOAP envelopado no HTTP para fazer chamadas RPC (*Remote Procedure Call*) |
| Suporta vários tipos de formato (XML, JSON, YAML) | Suporta apenas XML |

### 2.6. cURL

- É uma ferramenta de linha de comando para obter ou enviar arquivos utilizando a sintaxe de URLs.

- Para instalá-la:

	- Linux: `sudo apt-get install curl`;
	- Windows: Baixar cygwin que emula terminais Linux;
	- Existem opções online.

- Uma requisição com o curl é composta da própria palavra, da URL a qual você quer acessar e um conjunto de flags que permitem modificá-la:

	| Flag | Descrição | Exemplo |
	| ---- | ---- | ---- |
	| `-H` | Permite adicionar ou substituir campos no header/cabeçalho HTTP. | `-H "Content-Type: application/json"` |
	| `-d` | Utilizamos essa opção quando queremos enviar dados no corpo da requisição. | `-d '{ "name" : "João" }'` |
	| `-i` ou `-include` | A resposta da requisição mostrará o cabeçalho, além do corpo com os dados solicitados. | - |
	| `-I` ou `-head` | A resposta da requisição mostrará apenas o cabeçalho, sem o corpo. | - |
	| `-X` ou `-request` | Essa opção determina o método/verbo HHTP que deve ser utilizado. Por padrão, é utilizado o `GET`. | `-X POST` |
	| `-v` | Faz com que o resultado seja mais verboso, mostrando o passo a passo realizado na conversa entre cliente e servidor, como o *Three-way handshake*. | - |
	| `--help` | Lista de flags com suas descrições. | - |

- Fake REST API online para testes: `https://jsonplaceholder.typicode.com/`.

### 2.7. Analisando uma resposta HTTP

- O que o cURL mostra como resposta de uma requisição HTTP pode ser dividido em 4 partes.

- Requisição pelo cURL:

	```
	curl -i 'https://jsonplaceholder.typicode.com/users/1'
	```

- Resposta:

	```
	HTTP/1.1 200 OK
	Date: Tue, 22 Nov 2022 00:10:17 GMT
	Content-Type: application/json; charset=utf-8
	Transfer-Encoding: chunked
	Connection: keep-alive
	X-Powered-By: Express
	X-Ratelimit-Limit: 1000
	X-Ratelimit-Remaining: 999
	X-Ratelimit-Reset: 1668975404
	Vary: Origin, Accept-Encoding
	Access-Control-Allow-Credentials: true
	Cache-Control: max-age=43200
	Pragma: no-cache
	Expires: -1
	X-Content-Type-Options: nosniff
	Etag: W/"1fd-+2Y3G3w049iSZtw5t1mzSnunngE"
	Via: 1.1 vegur
	CF-Cache-Status: HIT
	Age: 7127
	Server-Timing: cf-q-config;dur=6.9999998686399e-06
	Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=BtZHkxfVyCg%2BLPl28bc6nOBuT2uvF%2BsR%2BK5BzzlOKxkvfBM5aQ2vvra13U9lWJ220bVy6YtzyVVHhRvWYyIkADkNIoUTW7biQ4KfTKd9DIwKc9synlo9xkWVn4VzQQLUwZv1hgnoQwr02tVPW0UF"}],"group":"cf-nel","max_age":604800}
	NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
	Server: cloudflare
	CF-RAY: 76dd70f288081a30-EWR
	Content-Encoding: gzip
	alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400

	{
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"address": {
			"street": "Kulas Light",
			"suite": "Apt. 556",
			"city": "Gwenborough",
			"zipcode": "92998-3874",
			"geo": {
				"lat": "-37.3159",
				"lng": "81.1496"
			}
		},
		"phone": "1-770-736-8031 x56442",
		"website": "hildegard.org",
		"company": {
			"name": "Romaguera-Crona",
			"catchPhrase": "Multi-layered client-server neural-net",
			"bs": "harness real-time e-markets"
		}
	}
	```

#### 2.7.1. Start Line (Linha de Início)

- Obrigatória.

- No exemplo acima, é a primeira linha da resposta e pode ser dividida em duas partes:
  
	| Nome | Exemplo | Descrição |
	| ---- | ---- | ---- |
	| Request Line | `HTTP/1.1` | Versão do HTTP utilizada. |
	| Status Line | `200 OK` | Resposta do servidor. |

#### 2.7.2. Header Fields (Cabeçalho de Campos)

- 0 ou mais linhas.

- Representam os metadados da requisição e resposta HTTP. Eles contém informações de como a transferência dos dados deve ser manipulada.

- Alguns exemplos de *Header Fields*:

	| Campo | Descrição |
	| ----- | --------- |
	| `Content-Type` | Informa o formato da informação enviada de forma serializada |
	| `Content-Length` | Informa o tamanho do corpo da mensagem (em octetos). Esse campo é utilizado para verificar se chegou tudo. |

- *Header Fields* não oficiais começam com **"X"**, mas essa convenção caiu em desuso, pois existem diversos oficiais e deve-se tentar utilizá-los antes de criar os seus. 

#### 2.7.3. Empty Line (Linha Vazia)

- Obrigatória.

- Delimita o fim do *Header Fields* e início do *Message Body*.

#### 2.7.4. Message Body (Corpo da Mensagem/Requisição)

- Opcional.

- Contém os dados que foram enviados na requisição ou resposta, no formato especificado em `Content-Type`.

### 2.8. Métodos/Verbos HTTP

- Existem 9 métodos os quais podemos utilizar para a criação de uma API RESTful. Esse conjunto de métodos possui a semântica de operações possíveis a serem efetuadas sob determinado recurso.

- Os quatro primeiros métodos HTTP apresentados são os mais utilizados e representam as operações básicas que podem ser realizadas em registros de bancos de dados.

#### 2.8.1. GET

- É utilizado quando existe a necessidade de obter um recurso.

- Ele é considerado idempotente, ou seja, independente da quantidade de vezes que é executado sob um recurso, o resultado sempre será o mesmo, pois esse método não altera dados.

	```
	curl -i 'https://jsonplaceholder.typicode.com/posts/1'
	```

	ou

	```
	curl -i -X GET 'https://jsonplaceholder.typicode.com/posts/1'
	```

#### 2.8.2. POST

- Utilizado para a criação de um recurso a partir do uso de uma representação.

	```
	curl -i -X POST 'https://jsonplaceholder.typicode.com/posts' \
	-H 'Content-Type: application/json' \
	-d '{ "userId": 1, "title": "Título do Artigo", "body": "Descrição do artigo" }'
	```

- O operador `\` nos permite quebrar um comando em várias linhas dentro do terminal.

#### 2.8.3. PUT

- Utilizado como forma de atualizar um determinado recurso.

	```
	curl -i -X PUT 'https://jsonplaceholder.typicode.com/posts/1' \
	-H 'Content-Type: application/json' \
	-d '{ "userId": 2, "title": "Título do Artigo 2", "body": "Descrição do artigo 2" }'
	```

#### 2.8.4. DELETE

- Tem como finalidade a remoção de um determinado recurso.

	```
	curl -i -X DELETE 'https://jsonplaceholder.typicode.com/posts/1'
	```

#### 2.8.5. HEAD

- Muito parecido com o `GET`, a única diferença é que o servidor não retorna o corpo depois de receber a requisição.

	```
	curl -I 'https://jsonplaceholder.typicode.com/posts'
	```

#### 2.8.6. PATCH

- Realiza modificações parciais nos recursos, ou seja, fazer a alteração de valores específicos de um recurso, ao invés de enviar todos os dados novamente.

- Enquanto o método `PUT` só permite a "substituição" inteira do recurso, o `PATCH` permite modificações parciais.

- Ajuda a diminuir o tráfego de dados na rede.

	```
	curl -i -X PATCH 'https://jsonplaceholder.typicode.com/posts/1' \
	-H 'Content-Type: application/json' \
	-d '{ "title": "Título do Artigo" }'
	```

#### 2.8.7. OPTIONS

- É a forma que o cliente possui de perguntar ao servidor quais os requisitos para um determinado recurso.

- Por exemplo, pode ser utilizado para saber quais métodos podem ser aplicados ou qual URL permitida para se comunicar com determinado recurso.

	```
	curl -i -X OPTIONS 'https://jsonplaceholder.typicode.com/posts'
	```

- O *Header Field* `access-control-allow-methods` retorna os métodos permitidos para o recurso.

- Em muitos casos, porém, apenas a informação de quais os métodos permitidos não é o bastante. É interessante que seja retornado no corpo da requisição informações mais completas sobre os métodos do recurso e quais os atributos necessários para cada um deles.
  - Veja mais em `https://zacstewart.com/2012/04/14/http-options-method.html`.

#### 2.8.8. TRACE

- Ecoa de volta a requisição recebida para que o cliente veja se houveram mudanças e adições feitas por servidores intermediários.

- Desabilitado por questões de segurança.

#### 2.8.9. CONNECT

- Converte a requisição de conexão para um túnel TCP/IP transparente, usualmente para facilitar a comunicação criptografada com SSL (HTTPS) através de um proxy HTTP não criptografado. 

### 2.9. Safe Methods

- São métodos considerados "salvos". Eles não fazem causam nenhum efeito de qualquer um dos lados da requisição.

- Você pode até implementar algo para quando o *Safe Method* for chamado, como por exemplo, atualizar o contador de acessos a determinado recurso, mas o cliente não pode ser responsável por essa alteração enviando parâmetros.

- Esses métodos são `GET` e `HEAD`.

- **Métodos Idempotentes:** é uma propriedade matemática e da ciência da computação, que quando executada múltiplas vezes o resultado não será alterado depois da primeira vez.
  - Ou seja, o impacto de enviar dez requisições HTTP para um método idempotente será o mesmo de enviar uma única;
  - `GET`, `HEAD`, `PUT`, `DELETE`, `OPTIONS` e `TRACE`.

### 2.10 Modelo de Maturidade Richardson

- Apesar de Roy Fielding deixar bastante claro que para uma API ser considerada RESTful, ela precisa obrigatoriamente seguir todas as *constraints* definidas em seu trabalho. Na prática, muitas vezes precisamos de uma abordagem um pouco mais simples.

- Sendo assim, Leonard Richardson propôs um modelo de quatro níveis para que alcancemos uma API REST, onde passo-a-passo podemos ir melhorando a API e também ter a percepção de qual nível de maturidade ela se encontra.

- Os níveis 0, 1 e 2 talvez sejam mais familiares, e de fato são mais fáceis de implementar, porém, deve ficar claro que os mesmos não são considerados RESTful.

#### 2.10.1. Nível 0 - POX

- Você certamente já deve ter desenvolvido ou visto em algum lugar uma API que segue esse modelo de design. Apesar de ser o nível mais distante do que de fato REST propõe, muitas APIs ditas como RESTful se encontram nesse nível de maturidade.

- Nesse nível, as mensagens podem ser serializadas em formatos como XML, JSON ou outros.
  - É importante lembrar, como dito anteriormente, que não é o formato da mensagem que define ou não se um sistema é REST.

- Nesse nível, as normas para nomeação dos recursos não são respeitadas.:

	```
	POST /salvarCliente

	<salvarCliente>
	<Nome>João Pedro Pereira </Nome>
	...
	</salvarCliente>
	```

	- A URI não deve fazer menção a ação realizada (isso é papel dos verbos HTTP) e sim ao recurso manipulado.

- Os métodos HTTP também não utilizados de forma adequada:

	| Verbo HTTP | URI | Ação |
	| ---- | ---- | ---- |
	| GET | /buscarCliente/1 | Visualizar |
	| POST | /salvarCliente | Criar |
	| POST | /alterarCliente/1 | Alterar |
	| GET/POST | /deletarCliente/1 | Remover |

- Um outro problema constantemente encontrado, é a manipulação incorreta dos códigos de resposta do HTTP. Códigos e mensagens de erro são frequentemente manipuladas nas mensagens geradas pela aplicaçação, o que impede que elementos de gateway e proxy trabalhem de forma adequada:

	```
	GET /buscarCliente/1

	HTTP/1.1 200 OK

	<buscarCliente>
	<status>Cliente não encontrado</status>
	<codigo>404</codigo>
	</buscarCliente>
	```

	- Apesar da mensagem sugerir que o cliente solicitado não foi encontrado, a resposta HTTP apresenta uma informação totalmente diferente (`200 OK`), ou seja, existe uma diferença semântica entre a resposta HTTP e a representação gerada pela aplicação.

- Em resumo, no nível 0 podemos dizer que você nem mesmo está utilizando o HTTP de forma correta.

#### 2.10.2. Nivel 1 - Recursos

- No nível 1, passamos a usar recursos como forma de modelar e organizar a API. Neste nível, não precisamos conhecer a funcionalidade de cada método e sim apenas o recurso ao qual temos acesso.

- Evoluímos para:

	| Verbo HTTP | URI | Ação |
	| --- | --- | --- |
	| GET | /cliente/1 | Visualizar |
	| POST | /cliente | Criar |
	| PUT | /cliente/1 | Alterar |
	| DELETE | /cliente/1 | Remover |

- Começamos a utilizar os conceitos de recursos que foram apresentados no início do curso.

- Modelamos corretamente os recursos, agora precisamos usar os métodos HTTP da forma correta, para que a gente possa criar todas as interações necessárias sob um recurso.

- No nível 1 dizemos que agora temos recursos!

#### 2.10.3. Nível 2 - Verbos HTTP

- Nesse nível, o HTTP deixa de exercer um papel apenas de transporte e passa a exercer um papel semântico na API, ou seja, seus verbos passam a ser utilizados com o propósito para o qual foram criados.

- Começamos a utilizar os recursos, métodos HTTP e Status Code de forma correta.

- Enviando:

	```
	POST /cliente

	<Cliente>
	<Nome>João Pedro Pereira</Nome>
	...
	</Cliente>
	```

- Recebendo:

	```
	201 CREATED
	Location: /cliente/1
	```

- É importante notar 2 aspectos nessa resposta: 
  - O primeiro é a utilização correta da resposta `201 CREATED`. Como foi solicitado a criação de um recurso, nada mais adequado que uma resposta que informe que o recurso foi criado com sucesso.;
  - Além disso, um importante aspecto é a presença do *Header* `Location`. Esse *Header* informa em qual endereço o recurso criado se encontra disponível.

- No nível 2 dizemos que agora utilizamos os verbos HTTP de forma correta.

- [Clique aqui](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) para verificar a documentação MDN com os Status Code disponíveis.

#### 2.10.4. Nível 3 - HATEOAS (Hypermedia As The Engine Of Application State)

- Em seu blog pessoal, Fielding deixa muito claro que APIs que não utilizam HATEOAS não podem ser consideradas RESTful, mesmo assim, você vai encontrar muitos conteúdos sobre REST que nem ao menos cita essas características.

- Apesar de aparentemente ser algo não muito familiar, HATEOAS é um conceito presente no dia-a-dia de todos os usuários da web. Ele tem como elemento principal uma representação Hypermedia, que permite descrever seu estado atual e quais os seus relacionamentos com outros futuros estados.

	```
	GET /cliente/1

	HTTP/1.1 200 OK

	<Cliente>
		<Id>1</Id>
		<Nome>João Pedro Pereira</Nome>
		<link rel="deletar" href="/cliente/1" />
		<link rel="notificar" href="/cliente/1/notificacao" />
	</Cliente>
	```

  - No exemplo acima, o cliente da API deverá entender o significado dos relacionamentos "deletar" e "notificar" para que consiga de fato consumir os links de forma adequada.

- No nível 3 dizemos que temos controle de Hypermedia!

### 2.11. Outras ferramentas para realizar requisições HTTP

- HTTPie: Ferramenta de linha de comando parecida com o curl, porém, com mais opções;
- Postman: Opção com interface gráfica;
- REST Client: Extensão do Visual Studio Code.

### 2.12. Media Types

- Media Type é uma string que define qual o formato do dado e como ele deve ser lido pela máquina. Isso permite um computador diferenciar entre JSON e XML, por exemplo.

- Exemplos de Media Types:
  - `application/json`;
  - `application/xml`;
  - `multipart/form-data`;
  - `text/html`.

- Um Media Type é composto por duas partes separadas por uma barra. A primeira se refere ao tipo e a segunda ao subtipo. Também é possível especificar alguns parâmetros adicionais, como por exemplo `charset=UTF-8`.

- A primeira parte contém um tipo registrado de alto nível, que pode ser: application, audio, image, text, example, message, model, multipart e video.

- Para informar o Media Type, usamos o *Header Field* `Accept` no momento da requisição.

- O `mockbin.org` é um serviço que permite testar requisições HTTP.

	```
	curl mockbin.org/request -H 'Accept: application/xml' 
	```

- Esse *Header Field* não se limita apenas a um valor, pode-se também encadear outros tipos em uma mesma requisição, bastando para isso separá-las por vírgula.

	```
	curl mockbin.org/request -H 'Accept: application/json;q=0.5,application/xml;q=0.1'
	```

	- O parâmetro `q` define *Quality Factor*, que informa a ordem preferida de retorno da requisição. Esse parâmetro deve estar no intervalo de 0 à 1, sendo 1 o de maior prioridade;
	- No exemplo acima, a  preferência é pelo retorno da requisição no formato JSON.

- **MIME Type** era o nome utilizado para **Media Type** antigamente.

- `Content-Type` vs `Accept`: é comum a confusão entre os campos, mas devemos saber que o `Content-Type` é o campo que identifica o formato do conteúdo da requisição, ou seja, em uma requisição do tipo `POST`, o formato dos dados enviados no corpo deve ser indicado por `Content-Type`, enquanto o `Accept` informa o tipo de retorno do servidor.

### 2.13. Gerindo Erros

- Naturalmente, quando fazemos requisições RESTful, receberemos como retorno um possível erro, seja por falha no formato da requisição, seja por causas internas referentes ao servidor (erros mais comuns).

- Isso não significa que o retorno apresentado seja uma mensagem clara, que não deixa dúvidas sobre o que aconteceu de fato.

- Pois bem, o intuito da gerência de erros em APIs RESTful é informar ao requisitante uma mensagem que retrate o que de fato ocorreu. Mais do que isso, um **status code** que não seja genérico e sim, útil.

- Existem cinco classes de HTTP Status Code. São elas:
  - **1xx Informacional:** Códigos começados com 1 são conhecidos como códigos informacionais. A maioria deles não são usados nos dias atuais;
  - **2xx Success:** Esses códigos indicam que houve sucesso no intercâmbio entre servidor e cliente; 
  - **3xx Redirection:** Os códigos 3xx indicam que cliente deve fazer uma ação adicional antes da requisição estar completa;
  - **4xx Client Error:** Nesse caso, o código indica que existe algo errado com a requisição do cliente;
  - **5xx Server Error:** O cliente enviou uma requisição válida, mas o servidor não foi capaz de processá-la com sucesso.

### 2.14. Versionamento

- Versionamento não faz parte das *constraints* REST, nem também do Modelo de Maturidade Richardson, mas é indispensável para criar APIs que sofrem mudanças ao longo do tempo.

- Opções:
  - **Subdomínio:** `api1.example.com/users`;
  - **URL:** `example.com/v1/users`;
  - **URL com parâmetros:** `example.com/users?v=1`;
  - **HTTP Header customizado:** `X-API-Version: 1`;
  - **Accept Header com Media Type customizado:** `Accept: application/vnd.myapi.v2+json`;
  - **Accept Header com opção de versão:** `Accept: application/vnd.myapi+json;version=2.0`.

- Atualmente, uma dos mais utilizados é o versionamento através de URL, por ser de fácil implementação, evita erros por parte de programadores novatos, e permitir compartilhar URLs facilmente.

### 2.15. Caching

- Caching é extremamente importante, não só para os usuários, mas também para reduzir o custo de rodar aplicações.

- Para casos onde temos uma aplicação que deve realizar consultas em um banco de dados para cada requisição enviada, isso pode se tornar extremamente custoso dependendo da quantidade de requisições por minuto ou segundo, sendo necessário muito servidores (ou servidores parrudos) para darem conta de todo esse trabalho. Ou talvez uma alternativa seja utilizar *caching*.

- Na computação, qualquer valor que é difícil e computacionalmente custoso de obter deve ser cacheado.

- As únicas coisas que não devem ser cacheadas são as que mudam com muita frequência.

- Uma vez feito o cache, como saber que ele está desatualizado.
  - Esse processo chama-se *cache invalidation* (invalidação de cache) e não é algo simples de se fazer;
  - Para nossa sorte, o HTTP já conta com tudo que precisamos para fazer cache do lado do cliente.

- Pontos chave sobre *caching*:
  - Cache pode salvar uma enorme quantidade de tempo;
  - A medida que diminuimos o tempo de requisição, suas aplicações precisarão de menos poder para rodar e isso implica em gastar menos com servidores;
  - Cache permite uma aplicação escalar mais facilmente, especialmente se a maioria das requisições retornam dados;
  - Infelizmente nem tudo pode ser cacheado. Alguns dados *real-time* precisam ser buscado todas as vezes. O restante pode ser cacheado por um período de tempo, seja alguns segundos ou um dia, dependendo da frequência em que os dados mudam.

### 2.16. Cache no Cliente

- Os objetivos do caching HTTP são eliminar o envio de requisições o máximo possível, e caso uma requisição precise ser feita, reduzir os dados de resposta.

- O primeiro objetivo pode ser alcançado usando-se um mecanismo de expiração conhecido como `Cache-Control`, e o segundo é através do mecanismo de validação `ETag` ou `Last-Modified`.

- O header `Cache-Control` pode ser usado para definir uma política de cache para um recurso.
  - Exemplos:

	```
	Cache-Control: max-age=3600
	Cache-Control: no-cache
	Cache-Control: private, max-age=86400
	```

  - **max-age:** Especifica em segundos quanto tempo o recurso pode ser cacheado. É interessante notar que esse cache também pode ser feito por intermediários, como roteadores e proxys, não só o browser em si;
  - **private/public:** Define quem pode fazer o cache. **Public** significa que qualquer um pode fazer o cache. **Private** por sua vez indica que o cache só pode ser feito pelo browser, ou seja, os intermediários como os CDNs, roteadores e proxys não podem fazer cache;
  - **no-cache/no-store:** Essas duas diretivas se confundem, mas a **no-store** informa que a resposta não deve ser armazenada seja no browser ou em seus intermediários, já o **no-cache** significa que a resposta pode ser cacheada, mas não pode ser reusada sem antes checar o servidor. ela pode ser combinada com um **ETag** a que veremos a seguir;
  - Existem outras diretivas que podem ser utilizadas.

- Exemplo:

	```
	pepspereira@DESKTOP-6GVS9B2:~$ curl -I http://ge.globo.com
	HTTP/1.1 301 Moved Permanently
	X-Served-From: Core, Show Services GCP
	Expires: Thu, 24 Nov 2022 05:04:42 GMT
	Cache-Control: max-age=10
	X-XSS-Protection: 1; mode=block
	X-Request-Id: d662fcb0-e561-45be-ab24-f1102f97e78f
	Location: https://ge.globo.com/
	Content-Security-Policy: upgrade-insecure-requests
	Date: Thu, 24 Nov 2022 05:04:32 GMT
	X-Content-Type-Options: nosniff
	Content-Type: text/html
	X-Mobile: desktop
	Age: 0
	Vary: X-Forwarded-Proto, Accept-Encoding, User-Agent, Wall-Subscription-Level, Origin
	X-Bip: 819476926 asra01lx16ca01.globoi.com
	Via: 2.0 CachOS
	Content-Length: 162
	Connection: keep-alive
	```

	- Podemos ver no exemplo acima que o site do Globo Esporte utiliza um cache de 10 segundos.

### 2.17. ETag

- Até agora vimos como prevenir requisições usando o header `Cache-Control`, mas infelizmente na maior parte das APIs web isso é raramente possível.

- Outra forma de ganhar tempo e largura de banda é usando o header **ETag**.

- **ETag** vem de **Entity Tag** e destina-se a ssegurar um token de validação identificando uma versão específica de uma resposta.

- Exemplo:
	- Em um primeiro momento, um cliente faz uma requisição de um recurso (`/users/jackson`), na resposta o servidor inclui o token atual (`12345`)na header **ETag**.

		```
		curl http://www.example.com/users/jackson

		HTTP/1.1 200 OK
		Content-Length: 2048
		ETag: "12345"

		[DATA]
		```

	- Em um segundo momento o cliente envia uma nova requisição para `/users/jackson` e inclui o token **ETag** recebido no header `If-None-Match`. Quando a requisição é recebida pelo servidor, ele checa o valor do header If-None-Match e compara com o ETag atual.
	- Caso não haja modificações

		```
		curl http://www.example.com/users/jackson \
		-H 'If-None-Match: "12345"'

		HTTP/1.1 304 Not Modified
		ETag: "12345"
		```

	- Caso haja modificações

		```
		curl http://www.example.com/users/jackson \
		-H 'If-None-Match: "12345"'

		HTTP/1.1 200 OK
		Content-Length: 2048
		ETag: "6789"

		[DATA]
		```

- É importante lembrar que o token ETag pode ter uma representação de letras e números, como por exemplo um HASH. Por outro lado, um hash ao ser calculado tem um custo computacional considerável, então, caso o recurso seja atualizado diversas vezes, talvez ele não seja a melhor solução.

- Contrapondo ao hash, é possível usar a data da última atualização (**timestamp**) do recurso para verificar se o mesmo encontra-se desatualizado.
  - Para esses casos o melhor é usar a header `Last-Modified` associado à header `If-Modified-Since`, seguindo a mesmo lógica do **ETag**.

- Exemplo:
	- Requisição inicial:

		```
		curl http://www.example.com/users/jackson

		HTTP/1.1 200 OK
		Content-Length: 2048
		Last-Modified: Sun, 29 Apr 1998 05:00:00 GMT

		[DATA]
		```
	
	- Em caso de não modificação desde a última solicitação:

		```
		curl http://www.example.com/users/jackson \
		-H 'If-Modified-Since: Sun, 29 Apr 1998 05:00:00 GMT'

		HTTP/1.1 304 Not Modified
		Last-Modified: Sun, 29 Apr 1998 05:00:00 GMT
		```

	- Em caso de modificação desde a última solicitação:

		```
		curl http://www.example.com/users/jackson \
		-H 'If-Modified-Since: Sun, 29 Apr 1998 05:00:00 GMT'

		HTTP/1.1 200 OK
		Content-Length: 2050
		Last-Modified: Mon, 30 Apr 1998 06:00:00 GMT

		[DATA]
		```

- Deve-se lembrar ainda que existem outros headers que podem ser usados para criar requisições HTTP condicionais.

### 2.18. Cache com diferentes tipos de representação

- Pelo que vimos até agora, podemos fazer requisições para diferentes tipos de representação usando para isso o header `Accept`.

- Mas o que ainda não sabemos é que nosso browser, por padrão, usa o método HTTP e a URI como chave para registrar respostas cacheadas, ou seja, mesmo que tenhamos várias representações diferentes, por se tratar do mesmo verbo HTTP e mesma URI, o browser ficará confuso de qual resposta deve fazer cache.

- Para resolver esse problema, existe o header `Vary`, que permite indicarmos outros itens para a composição da chave do cache.

- Exemplo:

	```
	curl http://www.mysite.com/users -H "Accept: application/json"

	HTTP/1.1 200 OK
	Vary: Content-Type
	Cache-Control: max-age=86400
	Content-Type: application/json
	Content-Length: 128
	```

  - O servidor retornará na resposta HTTP um header `Vary` informando os campos, além do método e URI, que devem ser considerados para formar a chave de identificação do cache;
  - Assim, nossa atual chave será `GET/users application/json`, e isso permitirá que o browser faça o cache de todas as representações.

- O header `Vary` pode conter mais de um campo:

	```
	curl http://www.mysite.com/users \
		-H "Accept: application/xml"
		-H "Accept-Language: br"
		-H "Accept-Encoding: gzip"

	HTTP/1.1 200 OK
	Vary: Content-Type, Content-Language, Content-Encoding
	Cache-Control: max-age=86400
	Content-Type: application/xml
	Content-Language: br
	Content-Encoding: gzip
	Content-Length: 1024
	```

	- Nesse caso, nossa chave seria `GET/users application/xml:br:gzip`.

### 2.19. Autenticação

- Autenticação é uma parte importante de qualquer aplicação Web moderna, ela tem a missão de identificar quem está usando a aplicação e se ela tem permissão para usá-la.

- Alguns websites ainda gerenciam a autenticação através de cookies conforme a RFC 6265.
	- Mas, cookies são criados para permitir o servidor gravar e manter os estados (**stateful**), o que é completamente contrário ao que o REST propõe (**stateless**), ou seja, uma requisição não depende da outra;
	- A ideia do *stateless* é permitir aplicações web mais escaláveis e de fácil *caching* para serem mais efetivas.

- O padrão do esquema de autenticação HTTP **basic** e através de **digest** são stateless, mas, atualmente muitas empresas precisam identificar seus usuários e querem diminuir a barreira para que eles usem seus produtos. Isso significa não ficar pedindo a senha do usuário frequentemente, de preferência apenas uma única vez.

- Quando uma aplicação web oferece ferramentas para outras aplicações web através de API, a autenticação pode ser feita através de uma **API Key** ou **API secret token**  como são conhecidas.

- Em resumo, uma API Key é uma combinação de letras e números bem grande, como um hash, e fica sendo transmitida em todas as requisições para identificar a aplicação e geralmente é combinada com um email/senha.

- Aqui vale uma ressalva. Como estas API Keys trafegam entre o servidor e o cliente, é importante que o servidor tenha configurado os **certificados SSL** (https://letencrypt.org/) para garantir a maior segurança possível.

- Diferentemente de aplicações, quando um usuário utiliza um serviço ele também deve ser identificado, geralmente com seu email/senha, mas, enviar esses dados a cada requisição com certeza não é o ideal.
	- Para tal, uma das soluções é no momento em que o usuário faz o login, o mesmo recebe um token baseado em suas credenciais e daí pra frente o token servirá de identificação nas próximas requisições.

### 2.20. Identificação x Autenticação x Autorização

- **Identificação:** Para esse conceito vamos usar um exemplo. O Google Maps permite desenvolvedores que possuam apenas a API Key pesquisar endereços. 
	- Ou seja, eles usam apenas uma API Key para serem **identificados** e caso necessário o Google pode limitar o acesso para a quantidade de requisições, por exemplo;
	- Mas, desse modo o desenvolvedor pode repassar sua API Key para outros amigos e eles poderão usá-la também.

- **Autenticação:** A autenticação se dá quando comprovamos quem somos, usando por exemplo a combinação login/senha.

- **Autorização:** A autorização por sua vez tem o intuito de definir o que podemos ou não fazer, pois, mesmo que o sistema identifique e me autentique, minhas credenciais podem estar permitidas a apenas ler um determinado conteúdo, por exemplo.

### 2.21. Autenticação com HTTP

- Os mecanismos padrões de autenticação com HTTP são definidos como **Basic** (básica) e **Digest** (resumida).
	- Esses dois mecanismos foram projetados seguindo as *constraints* REST, ou seja, eles são *stateless*.

- Nesses dois mecanismos o conjunto usuário/senha é incluído em cada requisição, **codificado em Base64** para a autenticação **Basic** e com um **hash MD5** para a autenticação **Digest**.

- A documentação informa que para uma autenticação o cliente deve enviar o header `Authorization` no seguinte formato:

	```
	Authorization: auth-scheme hashed-credentials
	```

	- `auth-scheme` é o tipo de autenticação que será realizado;
	- `hashed-credentials` é o token de autenticação.

- Uma autenticação básica seria:

	```
	Authorization: Basic am9objpwYXNz
	```

- Para fazer uma requisição de autenticação básica HTTP via cURL, teríamos:

	```
	curl -u user:pass http://www.example.com
	```

	- O parâmetro `-u` é utilizado para passar um usuário e senha. O cURL pegará essas credenciais passadas e as converterá para Base64 e enviará o resultado no formato apresentado anteriormente.

- Para a autenticação do tipo **Digest**, teríamos:

	```
	curl --digest -u user:pass http://www.example.com
	```

- Em retorno à requisição feita com o header `Authorization`, caso as credenciais não sejam autorizadas, o servidor deve retornar o status code `401 Unauthorized` e setar o header `WWW-Authenticate` com o **tipo de autenticação** que deve ser usado e qual o domínio (realm).
	
	```
	WWW-Authenticate: Basic realm="Perfil"
	```

	- A diretiva de domínio **realm** é opcional e indica a proteção de um determinado espaço, pois uma mesma aplicação pode-se ter diferentes áreas protegidas usando diferentes esquemas de autenticação.

### 2.22. Autenticação baseada em Token

- A autenticação baseada em token consiste em enviar o usuário/senha para o servidor e receber em troca um token que será informado em cada requisição através da header `Authorization`.

- A diferença entre esse método de autenticação e o HTTP visto anteriormente é que no caso do HTTP o próprio browser abre um prompt para o usuário inserir suas credenciais, enquanto no caso do token, essa interação é realizada pelo formulário presente na página web.

- Para enviar as credenciais:

	```
	curl htp://www.example.com/login \
	-i -d '{ "mail": "joao@mail.com", "password": "supersecret" }'
	```

- Resposta informando o token:

	```
	HTTP/1.1 200 OK
	Content-Type: application/json
	Content-Length: 51
	Connection: keep-alive
	Server: thin

	{ "access_token": "6afc7f5db9eaaf7eab" }
	```

- Para realizar requisições com o token:

	```
	curl -i -H 'Authorization: Token 6afc7f5db9eaaf7eab' \
	http://localhost:4567
	```

- Geralmente essa é a escolha para o uso em Web APIs, mas ela não é considerada *stateless* pois o servidor precisará armazenar o Token e isso caracteriza manter o estado.

- Qual o mal da conexão stateful?
	- Será necessário replicar os dados armazenados na medida em que se escala o número de servidores para que todos possuam o token para realizar a autenticação;
	- Quando tiver muitos clientes você precisará gerir muitos tokens;
	- Se cada cliente armazenado tiver mais de um token, isso pode dobrar facilmente.

### 2.23. Stateless Authentication com OAuth

- Documentação oficial: https://oauth.net/

- É um protocolo aberto para realizar autenticação segura através de um método simples e padronizado para aplicações web, mobile e desktop.

- Consiste em utilizar um servidor intermediário para realizar a autenticação dos usuários da aplicação.

- Exemplo: 
	1. Desejamos realizar a autenticação em um serviço e o mesmo nos da a opção fazer isso utilizando o Facebook; 
	2. O serviço retorna um token que deve ser utilizado no Facebook para validar o acesso;
	3. Após validar o acesso com o Facebook, o mesmo retorna um token que deve ser utilizado para fazer a validação do lado do serviço;
	4. O serviço confirmará com o Facebook se ele mesmo gerou aquele token. Em casos positivos, o acesso é liberado ao usuário.

- Pergunta: Isso realmente é *stateless*?

### 2.24. Stateless Authentication com JWT (JSON Web Tokens)

- Documentação oficial: https://jwt.io/

- JSON Web Tokens (JWT) é um padrão aberto (RFC 7519) que define uma forma compacta (para evitar overhead) e autocontida (pois o token deve conter todas as informação necessárias para realizar a validação) para transmissão de dados segura entre partes, utilizando objetos JSON.

- O OAuth utiliza um servidor intermediário para realizar a autenticação do cliente, porém, alguns entendem que esse tipo de autenticação não é *stateless*. No JWT, por sua vez, todas as informações para realizar a autenticação estão em posse do cliente, não sendo necessário armazenar nenhuma informação do lado do servidor.

- Como é criado o token:
	- O token é formado por três partes:

		```
		xxxxx.yyyyy.zzzzz
		```

	- A primeira parte (`xxxxx`) é formada por um JSON que armazena quais os tipos de encriptação e formato de autenticação utilizados e é codificado utilizando **Base64Url**:

		```
		{
			"alg": "HS256",
			"typ": "JWT"
		}
		```

	- A segunda parte (`yyyyy`) também é um JSON convertido em Base64Url, que contém informações sobre o usuário que está tentando realizar a autenticação, como por exemplo, nome e e-mail:

		```
		{
			"name": "Joao",
			"mail": "joao@mail.com"
		}
		```

	- A terceira parte (`zzzzz`) é a assinatura, utilizada para realizar a validação do token. Ela é formada pelas duas primeiras partes, codificadas em Base64Url, juntos de um segredo, uma string que apenas o servidor tem conhecimento e permite que ele realize essa validação. Essas informações são criptografadas utilizando o algoritmo especificado em `alg`, no primeiro trecho:

		```
		HMACSHA256(
			base64UrlEncoded(header) + "." +
			base64UrlEncoded(payload),
			secret)
		```

	- Seja `secret = "Segredo!"`, o token JWT nesse caso será:

		```
		eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9hbyIsIm1haWwiOiJqb2FvQG1haWwuY29tIn0.UZRFEKZd7qAEzwKC5iiQylkeCgK1ikn3JrF3Fsl9odM
		```

- Como funciona a autenticação com JWT:

	![Autenticação JWT](./imagens/autenticacao-jwt.PNG)

	1. O cliente realiza uma requisição do tipo POST, enviando em seu corpo as credenciais de acesso, para um endpoint específico, como por exemplo, `/login`;
	2. Caso as credenciais estejam corretas, o servidor envia no corpo da resposta o token JWT;
	3. Para toda requisição realizada, o cliente deve enviar no header `Authorization` o token em questão;
	4. O servidor realiza a validação do token enviado na requisição utilizando um segredo e em caso de aceite, envia os dados do recurso solicitado pelo cliente.

- Autenticação pelo cURL:
	- Requisição:

		```
		curl -X POST http://www.example.com/login \
		- H "Content-Type: application/json" \
		- d '{ "username": "Joao", "password": "123456" }'
		```

	- Resposta:

		```
		{
			"authorization_bearer": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9hbyIsIm1haWwiOiJqb2FvQG1haWwuY29tIn0.UZRFEKZd7qAEzwKC5iiQylkeCgK1ikn3JrF3Fsl9odM"
		}
		```

- Solicitando um recurso utilizando token JWT:

	```
	curl http://www.example.com/resource/1 -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9hbyIsIm1haWwiOiJqb2FvQG1haWwuY29tIn0.UZRFEKZd7qAEzwKC5iiQylkeCgK1ikn3JrF3Fsl9odM"
	```

## 3. Projetando e Documentando nossa primeira API RESTful

### 3.1. Conhecendo o Swagger.io

- Documentação oficial: https://swagger.io/

- É uma ferramenta que permite projetar, gerar o código em diferentes linguagens de programação e e até mesmo gerar a documentação das nossas APIs.

### 3.2. Swagger Editor

- [Clique aqui](http://editor.swagger.io/) para acessar o Swagger Editor.

- A API é projetada utilizando um documento YAML e a partir dele podemos fazer um build para determinada linguagem de programação (opção `Generate Server`) e sua documentação (opção `Generate Client`).

### 3.3. API Projetada

- Vamos projetar uma API que vai manipular usuários, portanto, nosso recurso (*resource*) será `users`.
	- Não esquecer da convenção de sempre colocar como nome do recurso um substantivo no plural.

- `Users` possuirá três atributos:
	- `id`: inteiro, chave primária;
	- `email`: texto;
	- `name`: texto.

- Em cima desse recurso vamos realizar as operações de **CRUD** (**C**REATE, **R**EAD, **U**PDATE, **D**ELETE) e utilizaremos uma representação em JSON (Ex.: `{ "name": "Joao Pedro Pereira", email: "joao@email.com" }`).

### 3.4. Documento YAML gerado

```
swagger: '2.0'
info:
  title: Lista de Usuários
  description: Essa API provê o acesso aos usuários do sistema.
  contact:
    name: João Pedro de Abreu Martins Pereira
    email: jpampereira@gmail.com
  version: 0.0.1
# the domain of the service
host: api.meusite.com
# Array of all schemes that your API supports
schemes:
  - https
#will be prefixed to all paths
basePath: /v1
produces:
  - application/json
paths:
  /users:
    get:
      summary: 'Listar os usuários'
      description: 'Esse endpoint retorna uma lista com **todos** os usuários cadastrados na aplicação.'
      tags:
        - Users
      responses:
        200:
          description: 'Retorna uma lista de usuários.'
          schema:
            type: array
            items:
              $ref: '#/definitions/User'
        default:
          description: 'Erro inesperado.'
          schema:
            $ref: '#/definitions/Error'
    post:
      summary: 'Criar um usuário'
      description: 'Esse endpoint cria um usuário no sistema.'
      parameters:
        - name: user
          in: body
          description: 'Usuário'
          required: true
          schema:
            $ref: '#/definitions/User'
      tags:
        - Users
      responses:
        201:
          description: 'Usuário cadastrado com sucesso!'
          schema:
            $ref: '#/definitions/User'
        default:
          description: 'Erro inesperado.'
          schema:
            $ref: '#/definitions/Error'
    put:
      summary: 'Atualizar um usuário'
      description: 'Esse endpoint atualiza um usuário no sistema. O ID deve ser informado. Nesse caso, todo o usuário é atualizado.'
      parameters:
        - name: user
          in: body
          description: 'Usuário'
          required: true
          schema:
            $ref: '#/definitions/User'
      tags:
        - Users
      responses:
        200:
          description: 'Usuário atualizado com sucesso!'
          schema:
            $ref: '#/definitions/User'
        404:
          description: 'Usuário não encontrado! Não esqueça de informar o ID.'
          schema:
            $ref: '#/definitions/Error'
        default:
          description: 'Erro inesperado.'
          schema:
            $ref: '#/definitions/Error'
    patch:
      summary: 'Atualizar um usuário'
      description: 'Esse endpoint atualiza um usuário no sistema. O ID deve ser informado. Nesse caso, apenas os atributos informados são atualizados.'
      parameters:
        - name: user
          in: body
          description: 'Usuário'
          required: true
          schema:
            $ref: '#/definitions/User'
      tags:
        - Users
      responses:
        200:
          description: 'Usuário atualizado com sucesso!'
          schema:
            $ref: '#/definitions/User'
        404:
          description: 'Usuário não encontrado! Não esqueça de informar o ID!.'
          schema:
            $ref: '#/definitions/Error'
        default:
          description: 'Erro inesperado.'
          schema:
            $ref: '#/definitions/Error'
  /users/{id}:
    get:
      summary: 'Mostrar apenas um usuário'
      description: 'Esse endpoint retorna **apenas o usuário a qual foi informado o id**.'
      parameters:
      - name: id
        in: path
        description: 'ID do usuário'
        required: true
        type: integer
      tags:
        - Users
      responses:
        200:
          description: 'Retorna um usuário'
          schema:
            $ref: '#/definitions/User'
        default:
          description: 'Erro inesperado.'
          schema:
            $ref: '#/definitions/Error'
    delete:
      summary: 'Apagar um usuário'
      description: 'Esse endpoint apaga o usuário a qual foi informado o **id**.'
      parameters:
      - name: id
        in: path
        description: 'ID do usuário'
        required: true
        type: integer
      tags:
        - Users
      responses:
        200:
          description: 'Usuário removido com sucesso!'
        404:
          description: 'Usuário não encontrado.'
          schema:
            $ref: '#/definitions/Error'
        410:
          description: 'Esse usuário não existe mais.'
        default:
          description: 'Erro inesperado.'
          schema:
            $ref: '#/definitions/Error'
definitions:
  User:
    type: object
    required:
      - email
      - name
    properties:
      id:
        type: integer
        description: 'Código do usuário'
      email:
        type: string
        description: 'E-mail do usuário'
      name:
        type: string
        description: 'Nome do usuário'
  Error:
    type: object
    properties:
      code:
        type: integer
        format: int32
      message:
        type: string
      fields:
        type: string
```
