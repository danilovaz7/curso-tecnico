
#### Miro: [Link para o quadro](https://miro.com/app/board/uXjVNiW0kM0=/?share_link_id=124668713269)

Hoje o conteúdo será bem *denso*, mas peço uma atenção especial porque veremos *conceitos fundamentais* para progredirmos no desenvolvimento desse semestre.

# HTTP

Não podemos começar a produzir *software* para a *Web* se não entendermos o que é o *protocolo HTTP* e portanto como é feita a comunicação hoje na internet.

**Hypertext Transfer Protocol (Protocolo de Transferência de Hipertexto)**
O protocolo nada mais é do que a forma com que se comunicam o cliente e o servidor, algumas regras definidas pra que um consiga passar informações ao outro e eles sempre se entendam.

- **Cliente** - É o navegador do usuário, por exemplo o *Chrome*
- **Servidor** - É a máquina em que estão hospedados os arquivos necessários para visualizarmos as páginas

Uma coisa importante do *HTTP* é que o *Cliente* e o *Servidor* não tem contato um com o outro a não ser durante a *requisição* em curso, e se quiserem trocar mais informações, precisarão fazer uma nova *requisição* passando *todas* as informações novamente, já que não guardam elas naturalmente.

Existe também o *HTTPS*, que hoje já é *amplamente utilizado* na Web e extremamente preferível, já que os dados das mensagens são *criptografados* antes de cada envio. O HTTPS nada mais é do que um *certificado digital no servidor*, garantindo que os dados naveguem *seguros*. Simplificando, é um protocolo HTTP + Camada de segurança SSL/TLS.

A comunicação é feita através da Internet, pelo *TCP/IP*, mas o importante é que existe um ciclo de **Requisição** e **Resposta** através do *HTTP*

![[Requisição HTTP.png]]

- O **Cliente**, através de um *navegador* (geralmente), acessa um site através da sua **URL**
	- Por exemplo: https://www.liceusantista.com.br
- O cliente está conectado na *Internet*, que através do conjunto de protocolos *TCP/IP*, estabelece a conexão com o **Servidor** correspondente para levar os dados da **Requisição**
	- Existe também uma tradução da *URL* que é feita usando **DNS**
- Quando a conexão é estabelecida, o *cliente* envia uma requisição chamada *mensagem HTTP* e então o cliente é *desconectado*
- O **Servidor** *recebe* essa mensagem, *processa* o que for necessário e prepara uma *resposta* também em forma de *mensagem HTTP* para o *cliente*
	- Ele então *reestabelece a conexão* com o *cliente* para devolver a *resposta*

---
### A mensagem HTTP

As mensagens passadas entre cliente e servidor tem um *formato* específico, mas seu *conteúdo geralmente difere* dependendo se é uma *requisição ou resposta* do servidor.

Mensagens geralmente tem uma *linha inicial*, *cabeçalhos* e *corpo*:

```http
POST /v1/user HTTP/1.1
Host: api.example.com
x-api-key: API_KEY
Content-Type: text/json

{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
    }
}
```

##### Método
Temos definido o *método* da requisição, que descreve o *tipo de ação* a ser processada pelo servidor, e isso afeta o *formato* esperado da requisição.
- **GET:** É usado para recuperar dados do servidor, e não deve alterar o estado do recurso no servidor.
	- Idempotente (várias requisições idênticas têm o mesmo efeito que uma única requisição).
	- **Exemplo**: `GET /users` (obter uma lista de usuários).
- **HEAD:** É usado para recuperar os cabeçalhos de uma resposta sem o corpo.
	- Funciona como um GET, mas sem o corpo da resposta.
	- **Exemplo**: `HEAD /users` (obter os cabeçalhos da lista de usuários).
- **POST:** É usado para enviar dados para criar um novo recurso no servidor.
	- Não é idempotente (várias requisições idênticas podem resultar em vários recursos criados).
	- **Exemplo**: `POST /users` com corpo `{ "name": "Gustavo" }` (criar um novo usuário).
- **PUT:** É usado para atualizar um recurso existente ou criar um novo recurso se ele não existir, que geralmente chamamos de *"upsert"*.
	- Idempotente (várias requisições idênticas têm o mesmo efeito que uma única).
	- **Exemplo**: `PUT /users/123` com corpo `{ "name": "Davi" }` (atualizar o nome do usuário 123).
- **DELETE:** É usado para remover um recurso do servidor.
	- Idempotente (várias requisições idênticas têm o mesmo efeito que uma única).
	- **Exemplo**: `DELETE /users/123` (deletar o usuário 123).
- **PATCH:** É usado como o método *PUT*, mas para atualizar apenas informações *parciais* do recurso.
- **OPTIONS:** É usado para descrever as opções de comunicação com o recurso de destino. 
	- **Exemplo**: `OPTIONS /users` (obter métodos suportados para o recurso `/users`).

Na prática, poucas vezes deixamos de usar os métodos habituais: *GET, POST, PUT e DELETE*.

##### URL
Os recursos na web são identificados por *URLs (Uniform Resource Locators)* ou URIs. Uma *URI* é uma sequência de caracteres que identifica um nome ou um recurso na web.

![[URL.png]]

#### PATH (Caminho)
Importante também notar a importância do `PATH` aqui, ou *caminho/rota*. Ele determina *"seções e subseções"* do site ou serviço e geralmente seguem alguns padrões, mas depende exclusivamente do que o servidor disponibiliza.

##### Headers (Cabeçalhos)
Os *cabeçalhos HTTP* contêm *informações adicionais* sobre a requisição ou a resposta. Eles incluem dados como o tipo de conteúdo, a data da requisição, chaves de autenticação, cookies, e muitos outros.

##### Body (Corpo)
O **body** pode ser passado tanto em *requisições* quanto em *respostas* HTTP e geralmente contém *informações importantes* para a operação a ser realizada.
- No caso de **requisições**, o *body* geralmente é importante em requests do tipo `POST` ou `PUT` para *transmitir os dados necessários para o servidor* processar a entidade.
- No caso de **respostas**, o *body* geralmente é importante em requests do tipo `GET` para *responder os dados requisitados pelo cliente*, frequentemente no formato de *HTML* ou *JSON*.

### Resposta HTTP
```http
HTTP/1.1 200 OK
Date: Sun, 28 Mar 2023 10:15:00 GMT
Content-Type: application/json

{
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
    }
}
```

### Parâmetros de requisições HTTP

Como pudemos ver nas mensagens de *request*, temos diferentes *categorias de informações* que precisam ser *passadas* pelo cliente *ao servidor* para ele ser capaz de processar a operação, esses são os **parâmetros**.

> É importante entendermos que os tipos de parâmetros a serem usados dependem exclusivamente do que o servidor espera, já que é ele quem determina isso. Existem, porém, boas práticas nesse caso.

#### Query Parameters
São *anexados à URL* após o ponto de interrogação (`?`). Usados principalmente para passar pequenos pedaços de informação.
- Esses parâmetros de query funcionam muito bem para determinar como deve ser tratada uma lista de informações:
	- Filtragem
	- Ordenação
	- Paginação
- Em um exemplo de URL: `https://site.com/users?page=1&per_page=20`, `page` e `per_page` são query parameters.

#### Path Parameters
São *parte* integrante do *caminho* da URL e são usados para *identificar recursos específicos*.
- Exemplo: `https://site.com/users/123`, onde `123` é um path parameter que identifica um usuário específico.
- Geralmente segue o padrão *coleção/elemento*.

#### Header Parameters
Como já vimos, os parâmetros passados no *Header* contêm metadados sobre a requisição ou resposta, como informações de autenticação, tipo de conteúdo, etc.
- Exemplo: `Content-Type: application/json`

#### Body Parameters
Como já vimos, são dados enviados no *Body* da requisição. Geralmente usados com métodos que modificam dados no servidor, como `POST` e `PUT`. Os dados geralmente são enviados em formatos JSON, XML e outros.

---

### Parâmetros comuns por métodos

#### GET
- **Query Parameters**: Usados para especificar filtros, buscas e outras opções de consulta.
- **Exemplo**: `GET /users?active=true` (recuperar usuários ativos).

#### POST
- **Body Parameters**: Usados para enviar os dados do novo recurso.
- **Exemplo**: `POST /users` com corpo `{ "name": "Gustavo" }` (criar um novo usuário).

#### PUT
- **Path Parameters**: Usados para identificar o recurso a ser atualizado.
- **Body Parameters**: Contêm os dados atualizados do recurso.
- **Exemplo**: `PUT /users/123` com corpo `{ "name": "Davi" }` (atualizar nome do usuário 123).

#### DELETE
- **Path Parameters**: Usados para identificar o recurso a ser deletado.
- **Exemplo**: `DELETE /users/123` (deletar o usuário 123).

---

## Que tal brincarmos um pouco?

Trouxe novamente o **repositório de APIs abertas** para experimentarmos um pouco com as *requests HTTP*. 

**API** é sigla para *Application Programming Interface*, ou Interface de Programação de Aplicações. APIs são as *aplicações* ou sistemas com os quais nos comunicamos utilizando esses métodos HTTP que vimos. Passaremos muitas das próximas aulas vendo mais no detalhe sobre APIs, já que estaremos desenvolvendo elas.

> Caso não queiram esperar, para mais detalhes, segue um [artigo da AWS sobre APIs](https://aws.amazon.com/pt/what-is/api/)
##### O Repositório
[Nesse repositório](https://www.github.com/public-apis/public-apis) foi feito uma curadoria de APIs abertas para acesso geral, com elas conseguimos brincar bastante e estudar como essas requisições funcionam. Que tal pegarmos alguma dessas APIs para brincar?

Para utilizarmos tranquilamente algumas das APIs disponíveis economizando o máximo de tempo, infelizmente precisamos que elas cumpram alguns requisitos:
- Não exijam autenticação
- Sejam bem documentadas
- Não retornem dados muito complexos
#### Separei algumas que chequei:
- [Valorant API](https://valorant-api.com)
- [Frutas (em inglês)](www.fruityvice.com/)
	- [Outra referência de doc](https://publicapis.io/fruity-vice-food-api/)
- [API de baralho](https://deckofcardsapi.com)
- [API de Pokemons](https://pokeapi.co)

### Isso é muito legal para chamadas GET

Esses acima são recursos legais de APIs para brincarmos principalmente com requisições *GET*, *experimentando* parâmetros de *path* e de *query*. Mesmo que não tenhamos acesso uma API real com banco de dados integrado, podemos também utilizar uma *API "mock"* para fazermos requisições *POST*, *PUT* e *DELETE*.

Podemos utilizar uma *API aberta* chamada [**JSONPlaceholder**](https://jsonplaceholder.typicode.com/), que recebe requisições de diversos tipos e apenas retorna um sucesso e informações "teste", que não tem nennhum tipo de dados reais, mas que podemos utilizar, por exemplo, para testarmos projetos de front-end que ainda não têm um back-end disponível para chamar.

> No nosso caso, iremos utilizar apenas para experimentarmos requisições *além de GET*

#### Para fazer as chamadas
Vamos usar a *extensão* do *Visual Studio Code* chamada **REST Client**, que permite usarmos arquivos `.http` para descrevermos requisições simples e executarmos a chamada às APIs, por exemplo:
```http
// demo.http

GET https://pokeapi.co/api/v2/pokemon/mudkip

###

POST https://jsonplaceholder.typicode.com/posts

{
	"title": "Meu novo post!",
	"body": "Esse é um post feito através de um POST na API",
	"userId": 1
}
```