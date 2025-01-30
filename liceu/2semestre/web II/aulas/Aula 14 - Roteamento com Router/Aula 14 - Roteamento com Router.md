
Assim como na última aula, hoje estaremos continuando o desenvolvimento do projeto da **API REST com SQLite**. Vamos entender um pouco sobre os próximos passos para a refatoração da nossa aplicação, *abstraindo nossas rotas* para Routers dedicados.

##### Lembrando da entrega
O projeto do [[CRUD com SQLite]] vale **2 pontos**! Portanto peço uma atenção especial para esse projeto, já que já é 1/5 da nota do semestre. A entrega deverá ser feita até esse *domingo, 22/09*!

---

# Express Router

Nós aprendemos como declaramos as *rotas* das nossas aplicações através do nosso **"app"**, que é geralmente como nomeamos a variável que *recebe o objeto da nossa aplicação*, que criamos com `express()`, relembrando:
```js
const app = express()

app.get('/hello/world', (req, res) => {
	res.send('Oi! Esse é um exemplo de uma rota GET sendo declarada!')
})
```

Acontece que, aos poucos, nossa aplicação começará a ter *muita lógica num mesmo arquivo*, juntando a declaração das rotas de diferentes recursos (como *users* e *posts*) e toda a lógica pra lidar com essas requisições.

**A solução aqui vai ser simples!**

O Express disponibiliza pra gente um objeto *Router*, que se comporta como um *middleware* na nossa aplicação, mas a partir do qual também podemos *declarar rotas* da nossa aplicação, assim como fazemos com o `app`:
```js
import { Router } from 'express'

let router = express.Router()
```

> Também é possível passar algumas opções de configuração pra esse método `Router()`

Com isso, temos um objeto para chamar igual fazemos com o `app` e declarar nossas rotas da aplicação, assim como a lógica para lidar com as requisições, sem segredo:
```js
router.get('/world', (req, res) => {
	res.send('Oi! Esse é um exemplo de rota GET declarada em um Router!')
})
```

Como podem ver, a *declaração não muda em nada*, apesar de que eu *omiti parte da rota*, mais especificamente o recurso `/hello`, isso porque ainda precisamos dizer à aplicação para *utilizar* esse Router, e podemos determinar *como* isso será feito.

Para isso, utilizamos o nosso router como um *middleware* igual fizemos anteriormente com o middleware que lida com json (`express.json()`)
```js
app.use('/hello', router)
```

Dessa forma determinamos que, para todos os endpoints(rotas) onde o recurso comece com `/hello`, utilizaremos o *router* que definimos para lidar com essas requisições. 

Nesse caso então o resultado que temos é que o *GET* que nosso *router* declarou será recebido finalmente na rota: `/hello/world`, igual tínhamos no exemplo original.

---

### Vamos aplicar isso no nosso projeto?

Vamos ver um pouco como isso ficaria na aplicação que viemos fazendo em sala até aqui, e mais importante: como isso possibilita que refatoremos nosso código para deixar cada responsabilidade em seu devido lugar? **Bora descobrir!**

Feito isso, deixarei o resto da aula livre para continuarem o desenvolvimento do projeto. Assim como de costume, o que fizermos em sala estará disponível na pasta `feito em sala`.