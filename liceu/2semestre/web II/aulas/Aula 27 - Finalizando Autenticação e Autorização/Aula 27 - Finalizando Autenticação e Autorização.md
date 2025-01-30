
Claro que aula passada *não tivemos tempo suficiente* para desenvolver nosso *projeto do zero* + implementar *duas práticas de autenticação*, então o começo dessa aula será dedicado na finalização desse conteúdo para conseguirmos entrar no próximo, que será bem simples: **Autorização**.

**Aproveitem para revisar o conteúdo que vimos na quarta e tirar dúvidas!** Feito isso, vamos para nossa segunda metade da aula.

---

# Autorização

Claro que, além de garantir que nossos usuários estejam *logados* para usar a aplicação, será importante também definirmos *regras* para determinar quais os *tipos de usuário* que terão *acesso* a quais *rotas*.

Já entendemos como criamos um *middleware* para lidar com a *autenticação* do nosso projeto, e isso também nos deixa com acesso ao nosso usuário por meio do `req.user`. Vamos aproveitar para utilizar esse *user* já preenchido para criar um *novo middleware*, que será responsável por **autorizar** esse usuário baseado na permissão dele.

Aqui a lógica será **simples!** Vamos receber como *parâmetro* o *tipo* de usuário que estamos esperando e faremos uma lógica para *só seguir* com a requisição *caso o usuário tenha o tipo exigido*. Além disso, entenderemos também como usar o operador **spread**(`...`) para recebermos *múltiplos parâmetros* de tipos de usuário.

##### Operador Spread

O operador **spread** (`...`) em JavaScript permite recebermos os *elementos de arrays, objetos ou strings* em contextos onde múltiplos valores ou argumentos são esperados. Ele é útil para *copiar, mesclar ou manipular* dados.

Podemos, por exemplo, criar *arrays* ou *objetos* novos baseados nos elementos de existentes:
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
```

Também podemos passar os *elementos* para funções que esperam *múltiplos parâmetros*:
```js
const dados = ['Jorge', 15, 'eletricista']

function printaDados(nome, idade, profissao) {
	console.log(`Este é ${nome}, ele tem ${idade} anos e é ${profissao}!`)
}

printaDados(...dados) // => Este é Jorge, ele tem 15 anos e é eletricista!
```

Ou o contrário, podemos *passar múltiplos parâmetros* para uma função que receberá eles como *um único objeto ou array*:
```js
function printaElementos(...elementos) {
	console.log(elementos)
}

printaElementos(1, 2, 3)
// Recebe como array: [1, 2, 3]

printaElementos(nome: 'Jorge', idade: 15)
// Recebe como objeto: { nome: 'Jorge', idade: 15 }
```
- Podemos usar esse exemplo acima e fazermos algo *semelhante* para recebermos *múltiplos tipos* de usuário para *autorizar*

---

## Services

Quando se trata de arquitetura de software, o termo *Service* (ou Serviço) se refere a uma classe ou conjunto de funções que executa uma tarefa ou mais *tarefas bem definidas e independentes*. É um conceito muito aplicado em aplicações modernas.

Nós já vimos algumas práticas de *organização* de código e deve ter ficado claro que, pra que tenhamos um código legível e de fácil manutenção, é importante que ele esteja *modular* e com as suas *responsabilidades bem separadas*.

> Para isso, utilizamos *Services*! É apenas um nome que damos ao módulo, não há nada especial em questão de código

Quando trabalhamos com **MVC (Model-View-Controller)**, geralmente o *Service* também ajuda a organizar a lógica de negócios fora das nossas *Models* e *Controllers*. No geral, a prática de criarmos esses *Services* é útil para desenvolver aplicações mais limpas, escaláveis e fáceis de entender.

**Que tal abstrairmos a lógica de autenticação/autorização para um Serviço?**

---

# Blog v2.0

Apesar de eu já estar meio enjoado do nosso **Blog**, acredito que seria muito trabalho começarmos a migrar para um novo projeto, então continuaremos com ele para dar uma *incrementada final*.

> O projeto valerá *2.0 pontos* e deverá ser entregue até domingo, *dia 17/11*

Gostaria que evoluíssem esse projeto que já fizeram para conter todas as novas práticas que aprendemos até aqui:
- O banco de dados deverá ser criado no *MySQL*
- Utilizar *variáveis de ambiente* (ENVs) para configurar dados sensíveis
- Criação da estrutura do banco por meio de *Migrations* do *Sequelize*
- Popular as tabelas com *Seeds*
- Rotas com *autenticação* e *autorização* utilizando **Sessions**

Mas, dessa vez, não precisamos de tanto trabalho nas *rotas* da aplicação, pra não ficar repetitivo. Quero que foquem em deixar redondos os *endpoints* de **Posts** e **Users**, seguindo a seguinte definição:

1. **Rotas para `users`**

| Rota                  | Autorização           | Descrição                               |
| --------------------- | --------------------- | --------------------------------------- |
| `POST` `/users`       | deslogado ou admin    | Cria um novo usuário, caso não exista   |
| `GET` `/users`        | padrão ou admin       | Retorna uma lista de todos os usuários  |
| `GET` `/users/:id`    | padrão ou admin       | Retorna um usuário específico por `id`  |
| `PUT` `/users/:id`    | próprio user ou admin | Atualiza um usuário específico por `id` |
| `DELETE` `/users/:id` | admin                 | Deleta um usuário específico por `id`   |

2. **Rotas para `posts`**

| Rota                         | Autorização           | Descrição                                       |
| ---------------------------- | --------------------- | ----------------------------------------------- |
| `POST` `/posts`              | próprio user          | Cria um novo post para o usuário logado         |
| `GET` `/posts`               | todos                 | Retorna uma lista de todos os posts             |
| `GET` `/posts/:id`           | todos                 | Retorna um post específico por `id`             |
| `GET` `/users/:userId/posts` | todos                 | Retorna todos os posts de um usuário específico |
| `PUT` `/posts/:id`           | próprio user          | Atualiza um post específico por `id`            |
| `DELETE` `/posts/:id`        | próprio user ou admin | Deleta um post específico por `id`              |

> Se acharem que faz sentido, podem fazer a entrega contendo *apenas* as tabelas e controllers de **Posts** e **Users**. Dessa forma também fica mais fácil para eu corrigir.

#### Concluindo
Quero ser capaz de testar de maneira fácil! Gostaria de poder *criar e migrar* o banco usando as *migrations*, preencher a tabela de *usuários com dados de teste* usando os *seeds*, para então fazer as requisições necessárias.