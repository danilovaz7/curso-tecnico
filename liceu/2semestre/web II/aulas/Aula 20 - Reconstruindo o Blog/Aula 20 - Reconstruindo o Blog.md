
Hoje devemos continuar o desenvolvimento do nosso Blog, ou melhor, *recomeçar*. Agora que conhecemos muitas novas práticas para incrementar esse desenvolvimento, será mais fácil de criar uma aplicação robusta, e que poderemos melhorar de maneira *incremental.*

Dessa vez, vamos *começar* esse desenvolvimento já com **MVC**, **Sequelize** e boas práticas de estruturação de projetos.

> Importante comentar que o JavaScript em específico não possui práticas muito bem definidas sobre *como* estruturar os projetos, então tomaremos bastante liberdade nas escolhas de estrutura, pastas etc, mas *sem fugir do padrão de mercado*.

Essa é uma aula que é *difícil de anotar tudo que iremos ver*, já que será praticamente uma **revisão completa** de tudo que vimos até aqui no semestre. Pretendo criar uma pasta do zero e sair daqui hoje com a mesma API funcional do Blog que vocês entregaram, mas dessa vez aplicando *MVC e Sequelize*.

Vou me poupar de grandes introduções então e partir direto para o desenvolvimento, contando com a ajuda de vocês também pra irem me corrigindo, já que é fácil cometer pequenos equívocos.

Como *vamos escrever bastante código*, também acredito que seja uma aula *difícil de acompanhar* na prática, mas os incentivo a tentar codar junto para chegarmos no resultado final.

---

## Sobre o conteúdo novo

Para implementarmos o sistema do *Blog* que já tínhamos, algo que veremos hoje de novidade é o *relacionamento simples* (*1:N*) entre tabelas usando o **Sequelize**. Como vocês devem lembrar, temos duas tabelas: **Usuários** (users) e **Postagens** (posts), e cada usuário *possui N postagens*, enquanto cada postagem *pertence a um usuário*.

Pra que a gente diga pro **Sequelize** como essa relação se dá, é preciso incrementar nossas *Models* com um códigozinho simples. Para esse *exemplo*, temos as duas *Models* numa versão mais *enxuta*:
```js
const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

const Post = db.define('post', {
	content: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

Post.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(Post, { foreignKey: 'userId' })
```
**Vejam que:**
- Precisamos dizer à Model de **Posts** que ela pertence a (*belongsTo*) um **User**
	- Definimos a nossa chave estrangeira (*FK*) como sendo `userId`
	- Não precisamos incluir o `userId` na lista de atributos, ele já será criado por conta da associação declarada
- Precisamos dizer à Model de **Users** que ela possui muitos (*hasMany*) **Posts**
	- Apesar da tabela de usuários não precisar de um atributo, queremos declarar a associação para podermos chamar os métodos que esse relacionamento oferece como `getPosts()`

### Uma porta se abre
Agora que temos esses relacionamentos definidos, o **Sequelize** disponibiliza pra nós alguns *métodos* que podemos utilizar para *navegar entre registros*, por exemplo, para *buscar as postagens de um usuário específico*:
```js
const user = await User.findByPk(1)
const posts = await user.getPosts() // Traz as postagens do usuário

// O inverso também é possível
const post = await Post.findByPk(1)
const user = await post.getUser()
```

---

### Melhorando a performance: Eager-loading
Quando trabalhamos com **ORMs**, o trabalho acaba sendo facilitado na hora de trazer registros e posteriormente também os *relacionamentos* desses registros. Acontece que, dependendo da situação, pode ser que acabemos *sobrecarregando* um pouco nosso banco, e precisaremos começar a *pensar com cuidado* na **performance** do nosso App, e em como faremos nossas *queries*.

##### Lazy Loading (Carregamento Preguiçoso):
O **lazy loading** adota uma abordagem *"sob demanda"*. Quando você busca um registro principal (por exemplo, um usuário), os dados relacionados (como os posts desse usuário) **não são carregados automaticamente**. Se você precisar acessar esses dados, precisa fazer uma nova consulta ao banco de dados.
- É útil para economizar recursos quando nem sempre você precisa dos dados relacionados
- Mas pode gerar várias consultas adicionais, o que pode afetar a performance em alguns casos

```js
const user = await User.findByPk(1)  // Faz um SELECT para buscar o usuário
const posts = await user.getPosts()  // Faz um segundo SELECT para trazer os posts
```

##### Eager Loading (Carregamento Antecipado):
Já o **eager loading** carrega os dados relacionados **de uma vez só**, durante a consulta inicial. Quando você busca um registro, os dados relacionados já vêm automaticamente, sem a necessidade de fazer uma segunda consulta ao banco.
- Reduz o número de consultas ao banco, tornando o carregamento de dados mais eficiente em certas situações.
- Pode trazer mais dados do que o necessário, afetando a performance se for mal utilizado.

```js
const user = await User.findByPk(1, { include: 'posts' }) // Faz um SELECT para buscar o usuário e já carrega seus posts em memória
const posts = user.posts // Assim podemos apenas chamar pelos posts do user
```


> Então, resumindo, o **Lazy loading** é ótimo para economizar recursos quando você não tem certeza se vai precisar dos dados relacionados; enquanto o **Eager loading** é mais eficiente quando você sabe que vai precisar dos dados relacionados imediatamente.

---

## Um problema sobre os imports

Isso tudo é muito bonito na teoria, porém, na prática, vocês verão que logo teremos um problema de importação nas nossas *Models*. Acontece que, para definir um relacionamento, é imprescindível que as duas *Models* já tenham sido definidas, claro!

E então, se tentarmos definir esses relacionamentos *no mesmo arquivo* das *Models*, teremos um problema aqui na *ordem das definições*. Isso porque precisaremos fazer o *import* de um arquivo de *Model* no outro, e esse import *tentará carregar o arquivo inteiro antes* que a segunda *Model* seja definida.

**Para resolver essa questão**, vamos definir nossos relacionamentos *fora das Models*, num terceiro arquivo, que deverá ser dedicado para a definição dessas associações na ordem correta e sem provocar conflitos:
```js
// associations.js

import User from './User.js'
import Post from './Post.js'
  
Post.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Post, { foreignKey: 'userId' })
```

Poderemos reservar esse arquivo para declarar todas as nossas *associações* e importar esse arquivo no nosso `app.js`, garantindo que ele seja carregado *logo após* o carregamento do nosso banco de dados, e *antes que ele seja sincronizado*.