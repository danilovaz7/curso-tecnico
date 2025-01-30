
A aula de hoje não tem conteúdo, vamos introduzir resolvendo uma questão que deve aparecer pra vocês durante desenvolvimento do projeto usando o *Router* do *Express*.

---

Comentamos sobre o conflito que poderia haver para a API no desenvolvimento do nosso projeto, quando a mesma declaração do *GET* poderia ser entendida pelo nosso servidor para os dois endpoints:
- `GET /posts`
- `GET /users/:userId/posts`

A solução aqui que implementaremos é simples, algo que as duas rotas têm em comum é que elas retornam nossos *posts*, e a única diferença que possuem é o fato de uma delas receber o `userId`, funcionando como um *filtro*, para dizer que devemos *retornar apenas os posts daquele usuário específico*.

Não seria uma má prática, então, definirmos uma regra - um *if* - para determinar que devemos procurar os posts *específicos* apenas **caso recebamos o parâmetro de userId**:
```js
router.get('/', (req, res) => {
	const { userId } = req.params
	
	let posts
	if (userId) {
		posts = db.getPostsByUserId(userId)
	} else {
		posts = db.getPosts()
	}
	
	res.json(posts)
})
```

Isso exige apenas que implementemos também as funções no nosso `db.js` para lidarmos com a interação com o banco de dados e buscar esses posts: essas funções são a `getPosts()` e `getPostsByUserId(userId)`

---

#### Aula dedicada ao desenvolvimento do projeto
Como sabem, a entrega da *atividade* deverá ser realizada neste domingo, dia *22/09*, valendo *2.0 pontos*.

> Estarei disponível para sanarmos essas últimas dúvidas antes da entrega final.