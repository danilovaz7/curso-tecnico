
Hoje, como uma das últimas coisas que veremos esse semestre, gostaria de apresentar pra vocês o que são *Template Engines*, e demonstrar como utilizaríamos o **EJS**, um Template Engine de *Node.JS*.

> Ao final, vou passar uma atividade avaliativa, para solidificarmos o conteúdo

---

# Template Engines

**Template Engines** são ferramentas amplamente utilizadas na programação para simplificar a geração de *conteúdos dinâmicos*, como páginas *HTML*, e-mails ou outros tipos de saída textual. Essencialmente, uma Template Engine permite separar a lógica de aplicação da apresentação visual, facilitando o desenvolvimento e a manutenção de aplicações web.

Essas ferramentas funcionam processando arquivos de modelo (templates) que contêm uma *combinação* de *HTML estático* e *placeholders para dados dinâmicos*. Durante a execução, a Template Engine substitui esses placeholders pelos dados fornecidos pela aplicação.

Podemos usá-las, por exemplo, para exibir informações do banco de dados em uma página HTML. Criando um arquivo de *template* com uma estrutura básica de *HTML* e placeholders (como `{{username}}` ou `<%= username %>` dependendo da engine). Durante a execução, a engine processa esse template, substitui os placeholders pelos valores reais (como o nome do usuário) e entrega o conteúdo pronto ao navegador.

> Geralmente, em grandes aplicações, preferimos que nosso *front-end* seja desenvolvido numa tecnologia própria para isso, como o *ReactJS*. Apesar disso, **Template Engines** são uma ótima maneira de *acelerarmos* o desenvolvimento de páginas simples, sem necessidade de trazer toda a complexidade de outra ferramenta robusta.

Muitos *frameworks modernos* já vêm com **Template Engines** por padrão, como:
- *Ruby on Rails* (Ruby) - ERB (Embedded Ruby)
- *Django* (Python) - Django Template Language (DTL)
- *ASP.NET* (.NET/C#) - Razor

---

# EJS

O **EJS (Embedded JavaScript)** é uma *Template Engine* simples e poderosa para *Node.js*, projetada para gerar HTML dinâmico a partir de dados fornecidos pela aplicação. Ele permite combinar código JavaScript com HTML de forma fácil, usando uma sintaxe intuitiva baseada em tags especiais como `<% %>`.

Com o **EJS**, podemos *inserir variáveis*, executar *lógica condicional*, usar *loops* e até mesmo *incluir templates dentro de outros*. Essa flexibilidade o torna uma escolha popular para aplicações web que precisam renderizar páginas dinâmicas no lado do servidor, especialmente no framework **Express.js**.

#### Vamos entender como usamos o EJS

O **EJS** oferece diferentes tipos de *blocos e tags* para manipular dados e lógica nos templates. Aqui estão os principais:

- Podemos usar `<%= %>` para inserir e *exibir dados dinâmicos* diretamente no HTML.
- Escapa caracteres especiais (como `&`, `<`, `>`).
```html
<h1>Hello, <%= name %>!</h1>
```

- Usa `<% %>` para executar lógica JavaScript *sem imprimir nada* no HTML.
- Útil para *condicionais*, *loops* e outras operações.
```html
<% if (user) { %>
  <h2>Bem-vindo, <%= user.name %>!</h2>
<% } else { %>
  <h2>Faça login para ser identificado.</h2>
<% } %>
```

- Usa-se `<%- %>` para exibir conteúdo dinâmico sem escapar caracteres especiais.
- Ideal para *HTML bruto*, como incluir outros *templates* ou exibir *conteúdo HTML*.
```html
<div><%- htmlContent %></div>
```

- Usamos `<%# %>` para adicionar *comentários* que não aparecem no HTML final.
```html
<%# Isso é um comentário e será ignorado na saída %>
```

- Para *incluir outros templates*, usamos `<%- include('nomeDoTemplate') %>`, permitindo que *reutilizemos* templates em diferentes páginas.
```html
<%- include('header') %>
<h1>Conteúdo da página</h1>
<%- include('footer') %>
```

> Esses blocos tornam o **EJS** flexível e ideal para criar *páginas dinâmicas* e *modulares*, permitindo controlar tanto a *lógica* quanto a *apresentação* no mesmo arquivo de template.

---

## Com isso faremos algo simples

Estou disponibilizando para vocês no Drive, na pasta da aula de hoje, uma pasta `demo` com uma **aplicação pronta** já. Vamos dar uma analisada nesse projeto para entender sua estrutura, tudo práticas que já conhecemos. Ele vem com coisas básicas, temos configurado:
- Um banco *MySQL* com duas tabelas - *Users* e *Posts*
	- Temos *migrations* para criar essas tabelas
	- Não temos *seeds*
- Temos *Controllers* e *rotas* para um CRUD desses dois recursos
- Um *loginController* e um *authService*  para gerenciar a *autenticação* feita com *JWT*
	- Não temos *autorização*

**Bora adicionar Views com o EJS à nossa aplicação!**

Para isso, precisaremos instalar a biblioteca do **EJS** no nosso app:
```bash
npm install ejs
```

O **EJS** já funciona facilmente com o *Express*! Podemos apenas dizer a ele que gostaríamos de usar o *EJS* como nossa *view engine* usando o `set()` a partir do nosso `app` do *Express*:
```js
// src/app.js

app.set('view engine', 'ejs')
app.set('views', './src/views')
```
- O **EJS** identificará por padrão a pasta `views` na *raiz* do projeto para ler nossos *Templates*
- Para escolhermos uma pasta específica para servir como nossas *views*, por exemplo `src/views`, podemos também definir com o `set()`

##### E vamos criar nossa primeira View!

Para não termos que nos preocupar com isso, deixei na pasta de `templates` duas páginas *HTML* com o CSS já incluso, para não termos que nos preocupar com a criação disso.

Nossa primeira página será simples, gostaria de disponibilizar um *endpoint* - uma rota - para criarmos um *Post*. Mas não exatamente para criarmos, mas sim para *servirmos a página Web* com um *formulário de criação de Posts*, esse *formulário fará a request de criação em si* para `POST /posts`.

Para atingir esse objetivo, temos que *criar essa rota* no nosso `routes/router.js` e *adicionar um método* no nosso `controllers/postsController.js` para lidar com a requisição e servir nossa página:
```js
// routes/router.js

router.get('/posts/new', authenticate, postsController.newPost)


// controllers/postsController.js

async function newPost(req, res) {
	res.render('newPost')
}
```
- Será uma rota *autenticada*, portanto precisaremos estar logados
	- Como de costume, podemos *preencher um Cookie de Authentication* com o que rota de `/login` nos retorna
- Chamaremos nossa rota e página de *"new"*, que é um nome comum para esse tipo de recurso
- Com o *EJS* já configurado no nosso *Express*, podemos apenas chamar um `res.render()` passando como parâmetro o *nome da nossa View* para responder à requisição do cliente *servindo uma página web renderizada* 

##### Um adendo
Para *recebermos parâmetros de um formulário* como o corpo (*body*) numa requisição à nossa API, precisamos usar um *middleware do Express* para processar esses parâmetros pela URL:
```js
// src/app.js

app.use(express.urlencoded({ extended: true }))
```

##### Vamos fazer mais duas páginas

Agora que temos uma página para criar postagens, seria interessante também que, *ao criarmos a postagem*, fôssemos *redirecionados* para a página para *ver essa postagem criada*.

Para *forçar um redirecionamento do cliente*, podemos usar o `res.redirect()` do *Express*:
```js
res.status(201).redirect(`/posts/${post.id}`)
```
- No nosso método `postsController.createPost()`, ao invés de retornar um JSON da postagem criada, *vamos redirecionar o cliente para a rota* de `GET /posts/:postId`

Agora, no nosso método de `postsController.getPostById()` podemos renderizar uma página para exibir uma postagem:
```js
async function getPostById(req, res) {
	const { id } = req.params
	  
	const post = await Post.findByPk(id)
	  
	if (post) {
		res.render('post', { post }) // Renderizar uma página com parâmetro post
	} else {
		res.status(404).json({ error: 'Postagem não encontrada' })
	}
}
```
- Podemos chamar o `res.render()` passando um *objeto como parâmetro* para *utilizarmos* os valores dele *no nosso template*

Vamos usar essa postagem na nossa página de `views/post.ejs` para renderizarmos uma postagem com esse objeto *post* que passamos:
```html
<h1>Postagem <%= post.id %></h1>

<div class="post">
	<h2><%= title %></h1>
	<p><%= content %></p>
</div>
```
- Aqui usamos a *tag* com o símbolo de "igual" `<%= %>` para *exibirmos* algum valor dinâmico na página

> Vamos ver também *como utilizamos as outras tags* para outras ações como *incluir um template* (`<%-  %>`) ou executar alguma *lógica "oculta" da aplicação* (`<% %>`)

---

## Atividade Avaliativa

> A atividade vale **1.0 ponto** e deverá ser entregue até *sexta-feira*, dia **29/11**

Gostaria que desenvolvessem duas *páginas web* para a nossa aplicação, usando o **EJS**. Essas páginas são:

##### Página de Login
- Precisaremos de um `GET /login` para exibir nosso *formulário* pedindo as credenciais do usuário
- Devemos exibir mensagens dinâmicas para alertar o usuário caso ele erre a senha dele, caso sua conta não exista, ou caso sua sessão tenha expirado

##### Página de Postagens
- Uma página de `GET /home`, que servirá como a *home* do nosso *Blog*, trazendo *todas as postagens*
- As postagens devem ser exibidas em *ordem de criação*, da *mais nova para a mais antiga*
- Cada *postagem* deve conter a *imagem* do usuário, seu *nome*, e o *conteúdo do post* (título e conteúdo)

##### Adicionais
- Ao ser autenticado com sucesso, a página de login deve *redirecionar* o usuário para a *home*
- É importante, caso a sessão do usuário tenha expirado, que ele seja *redirecionado* para a página de login com o *alerta* de que ele precisa logar novamente