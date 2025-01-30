
Como não podemos dedicar muitas aulas apenas ao desenvolvimento do *projeto avaliativo* em curso, vamos *prosseguir com o conteúdo*! E também nada melhor do que pegar uma *aula dupla* que nos foi oferecida e introduzir o assunto mais esperado do momento: *vamos fazer uma API!*

---
# APIs

Uma **API (Application Programming Interface)** é um conjunto de *regras* e definições que permitem que diferentes softwares se comuniquem entre si. Basicamente, uma *API* define os *métodos* e as formas como os desenvolvedores podem interagir com um software, serviço ou plataforma. As *APIs* são fundamentais para a construção de *aplicativos modernos*, permitindo que diferentes sistemas compartilhem dados e funcionalidades de forma *padronizada e segura*, sem que o usuário final perceba as complexidades envolvidas.

### REST

**REST (Representational State Transfer)** é um estilo de *arquitetura* para projetar esses sistemas para se comunicarem na Web. Ele define um *conjunto de princípios e restrições* que padronizam a comunicação entre sistemas via *HTTP*, utilizando as operações comuns que vimos como GET, POST, PUT, DELETE, entre outras.

**Por que utilizamos REST?**
   - **Simplicidade e Flexibilidade:** REST utiliza os padrões existentes da Web, como HTTP, o que torna sua implementação relativamente simples e amplamente suportada.
   - **Escalabilidade:** Devido à sua natureza stateless, onde cada chamada ao servidor é independente, REST facilita a escalabilidade de aplicações.
   - **Interoperabilidade:** APIs REST podem ser utilizadas por diferentes tecnologias e linguagens de programação, promovendo a integração entre sistemas heterogêneos.

#### O que é RESTful
**RESTful** refere-se à *aplicação prática* desses princípios ao implementar uma *API*. Quando dizemos que uma API é *RESTful*, significa que ela *adere aos princípios do REST*, utilizando os métodos HTTP corretamente, seguindo uma estrutura de URL bem definida e manipulando recursos através de suas representações.

> Todo o padrão de chamadas que vimos na aula sobre *HTTP*, desde a utilização dos *métodos* até a forma como nomeamos os *caminhos* para esses recursos na *URL*, foi utilizando *REST*.


---

# Express

**Express** é uma biblioteca minimalista e flexível para o **Node.js** que facilita a construção de aplicações web e APIs. Ele fornece um conjunto robusto de funcionalidades para criar servidores e gerenciar rotas, manipular requisições e respostas HTTP, além de integrar middleware para lidar com tarefas como autenticação, validação, e manipulação de dados.

O Express é amplamente utilizado devido à sua simplicidade e à vasta comunidade que oferece uma infinidade de pacotes complementares.

> Mais pra frente, utilizaremos ferramentas que o Express oferece para implementarmos um sistema robusto de *rotas*, *autenticação* e alguns *padrões de projeto*.

E como não há mais muito o que dizer sobre o Express então **nada melhor do que introduzirmos já com código.**

Em primeiro lugar, vamos criar um *projetinho* e instalar a biblioteca *express* utilizando o *NPM*:
```bash
npm init -y
npm install express
```

Agora vamos começar nossa aplicação com um *código* simples:
```node
import express from 'express'

const app = express() // Inicializa a aplicação Express

// Inicia o servidor na porta 3000
app.listen(3000)
```

##### E já temos um servidor rodando!
Por enquanto é pouquíssima coisa, mas já conseguimos fazer uma requisição para ver o que ele nos retorna! Vocês já devem até imaginar o que

> *Spoiler:* recebemos um status 404 (Not found), é legal de saber que o *express* já lida com rotas não encontradas pra nós *por padrão*

Então para que tenhamos alguma **rota** disponível para ser chamada na nossa aplicação, teremos que criá-la. Vamos definir um *GET* para o caminho *raiz* da aplicação (`/`):
```node
app.get('/', (req, res) => {
  res.send('Esse é o meu primeiro servidor express!')
})
```

*E lógico, vamos refazer a requisição para nosso app!*

---

## Podemos prosseguir com um CRUD simples

Vamos utilizar um array basicão para guardar as informações que vierem do servidor, vou deixar o código aqui e vamos tentar construir ele aos poucos até chegar lá:
```node
let alunos = []
  
app.get('/alunos', (req, res) => {
  res.send(alunos)
})

app.post('/alunos', (req, res) => {
  const aluno = req.body
  alunos.push(aluno)
  
  res.send('Aluno cadastrado com sucesso')
})
```

*Aqui já conseguiremos perceber um problema:* não é possível receber os dados do *corpo (body)* da requisição. Isso se dá porque o Express não espera uma comunicação em formato de JSON por padrão.

- **Corpo da requisição ignorado:** Se você enviar um JSON no corpo de uma requisição sem usar `express.json()`, o `req.body` será `undefined`. Isso ocorre porque o Express, por padrão, não sabe como interpretar o conteúdo do corpo da requisição sem a ajuda de um middleware apropriado.

#### O Middleware `express.json()`

Vamos adicionar essa linha de código no nosso app:
```node
app.use(express.json());
```
- E passou a funcionar! Mas e agora, por quê?

O `express.json()` é um *middleware* utilizado no Express para processar requisições com corpos de dados no formato *JSON*. Basicamente, ele permite que sua aplicação Express interprete os dados enviados no corpo de requisições HTTP **POST**, **PUT** ou **PATCH** que estejam no formato JSON.

Por exemplo, se você enviar dados como `{"name": "João"}` no corpo de uma requisição POST, o `express.json()` transforma esse JSON em um objeto JavaScript acessível no seu código como `req.body`.

### O que é `app.use()`?

`app.use()` é um método do Express utilizado para aplicar *middlewares* em sua aplicação. Ele permite que você adicione funcionalidades ao pipeline de requisições, ou seja, que você *intercepte* as requisições antes que elas cheguem às rotas definidas.
- **Global:** Quando você usa `app.use()`, o middleware é aplicado a **todas** as rotas da aplicação.
- **Específico:** Você também pode usar `app.use()` com um **caminho específico** para aplicar o middleware apenas a rotas que correspondem àquele caminho.

---

### Curtiram o desenvolvimento até aqui?

**O que acharam?** Bem simples para sairmos desenvolvendo uma *API* com *Node* usando o *Express*, não? Que tal tentarem fazer as rotas de *PUT* - pra atualizar um registro - e *DELETE* - para deletar um registro.