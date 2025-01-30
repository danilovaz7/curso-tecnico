
Hoje vamos cair direto no conteúdo, já que não tenho muito o que introduzir, além de que continuaremos incrementando nosso projeto do *Blog* para torná-lo bem mais robusto. Fiquei sabendo também que vocês estão utilizando nossa *API* na aula do prof. Davi como *back-end para o aplicativo*, portanto mais um motivo para continuarmos trabalhando nesse *app*.

---
# Associações **M:N** no Sequelize

Quando modelamos dados relacionais, muitas vezes encontramos cenários onde precisamos representar um relacionamento **muitos-para-muitos (M:N)** entre duas entidades. Sem muitas surpresas, isso geralmente é feito através de uma tabela intermediária, também chamada de tabela de junção ou `join table` - e no *Sequelize* não é diferente.

Porém o *Sequelize* vai disponibilizar pra nós uma *maneira muito simples* de resolver esse problema, sem que tenhamos que nos preocupar com gerenciar essa tabela relacionamento.

Um exemplo de relacionamento *M:N* que existe no banco de dados que fizeram com o prof. Gustavo é entre as tabelas de **Categorias** e **Postagens**. Uma *Postagem pode pertencer a diversas Categorias*, e isso também significa que nossas *Categorias terão diversas Postagens*!

> Para implementar isso no Sequelize, utilizamos o método `belongsToMany`

---

## Bora fazer usando o Sequelize

No Sequelize, uma *tabela intermediária* é *criada automaticamente* para armazenar as chaves estrangeiras de ambos os lados do relacionamento. Esse relacionamento é feito usando o método `belongsToMany`

##### Definindo as Models
Já temos definida nossa *Model de Postagens (Posts)*:
```js
import { Sequelize } from 'sequelize'
  
import db from '../db/db.js'
  
const Post = db.define('post', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	}
})
  
export default Post
```

Vamos definir agora uma *Model* para nossas *Categorias (Categories)*:
```js
import { Sequelize } from 'sequelize'
  
import db from '../db/db.js'
  
const Category = db.define('category', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	active: {
		type: Sequelize.BOOLEAN,
		defaultValue: true
	}
})
  
export default Category
```


##### Definindo nossa associação
Agora, vamos definir a relação entre **User** e **Group** usando o método `belongsToMany`. Isso criará uma tabela intermediária que armazenará as chaves estrangeiras dos dois modelos.

Para isso, utilizaremos nosso arquivo que já está reservado para essas associações, o `associations.js`
```js
import Post from './Post.js'
import Category from './Category.js'
  

Post.belongsToMany(Category, { through: 'postCategories' })
Category.belongsToMany(Post, { through: 'postCategories' })
```
- Vejam que também temos que definir um `through`, que define *por meio de qual tabela* ocorrerá essa *associação*. Se a tabela ainda não existe, ela será criada com todos os campos necessários para a magia acontecer

Também poderíamos *definir um nome para cada chave* que gostaríamos de usar para a tabela relacionamento:
```js
Post.belongsToMany(Category, { through: 'post_category', foreignKey: 'postId' })
```
- No caso, como podemos ver, as *chaves criadas automaticamente* pelo *Sequelize* já possuem exatamente esses nomes: `postId` e `categoryId`

---

## Como utilizamos esses relacionamentos?

Bom que conseguimos *definir esse relacionamento* no **Sequelize** com *muita facilidade*!

Agora é interessante entendermos também como são usados esses relacionamentos na prática, quando precisarmos, por exemplo, buscar postagens por uma categoria, ou adicionar uma categoria a uma Postagem em específico.

> Afinal, precisaremos de todas essas funcionalidades nos nossos *Controllers*

##### Criando registros
Além dos métodos que já conhecemos das *Models*, em associações *M:N* como essa, podemos também *pegar dois registros* existentes e *"adicionar um no outro"*, por exemplo:
   ```js
   const post = await Post.findByPk(1)
   const category = await Category.findByPk(2)
   
   await post.addGroup(category)  // Adiciona a categoria à postagem
   ```
Aqui estamos:
- Pegando um *Post* onde o `id = 1`
- Pegando uma *Category* onde o `id = 2`
- Adicionando essa categoria à postagem que pegamos, portanto *inserindo* na tabela de `postCategories` uma linha com nossos dois *ids*.

##### Buscando registros
Também podemos *buscar e filtrar* nossos registros dependendo da necessidade. Podemos, por exemplo, trazer todas as *postagens de uma categoria específica*.

**Temos algumas maneiras de fazer isso, as principais sendo:**

1. Podemos trazer todas as Postagens, com um filtro `where` por `categoryId`:
```js
const posts = await Post.findAll({
	include: {
		model: Category,
		where: {
			id: category.id
		}
	}
})
```
- Vejam como ele passa um parâmetro `include` para o `findAll()`, definindo então
	- A *Model* a ser incluída - *cujo relacionamento deve existir* - por meio do `model`
	- Qual o *filtro* a ser feito, por meio do `where: { id: category.id }`

2. Podemos trazer as *Postagens de uma Categoria*, usando o **eager-loading**:
```js
const category = await Category.findByPk(categoryId, { include: 'posts' })

const posts = category.posts
```

3. Podemos trazer as *Postagens de uma Categoria*, usando o **lazy-loading**:
```js
const category = await Category.findByPk(categoryId)

const posts = await category.getPosts()
```

---

### Vamos utilizar isso no Blog?

Gostaria que ficasse o desafio pra vocês, que tentem criar todas as *rotas* que vocês acham que fazem sentido para nosso *Controller de Categorias* - bem como as *funções* para lidarem com elas.
- Isso envolve, claro, todo aquele *CRUD de Categorias* que temos para as demais rotas também

*Além disso*, gostaria que poder chamar um *GET* em `/categories/:categoryId/posts` para trazer as *postagens de uma categoria específica*.

#### Importante reforçar
Daqui pra frente, vamos começar a *trabalhar mais nesse projeto* e eu pretendo pedir uma **entrega avaliativa** dele, assim que chegarmos num estágio mais avançado. Vou reduzir um pouco a parte expositiva das aulas para dar chance para que *vocês desenvolvam mais da aplicação*.

> Aqui cada aula importa! Estejam sempre tirando dúvidas conforme desenvolvem o projeto, pretendo disponibilizar o tempo que achar necessário para esse desenvolvimento

**Não podemos ficar muito tempo nisso, portanto mãos à obra!**