
Logo no começo do semestre, na aula de HTTP ([[Aula 02 - Entendendo HTTP]]) vimos os *parâmetros de query* e como eles são usados para *filtrar* o conteúdo retornado pelo servidor. Não apenas isso, também utilizamos esses parâmetros de query no consumo de algumas das APIs no nosso [[Projetinho consumindo APIs]].

Hoje o conteúdo é básico! Gostaria de passar pra vocês como funciona o uso dos parâmetros de query por parte da aplicação, e utilizaremos isso no nosso próximo projeto para construirmos uma **API aberta**.

Para vermos esse conteúdo, eu trouxe pra vocês um rascunho da API aberta que sugeri nas últimas aulas: minha **API do GCL (Galinho Chicken Little)**.
##### Bora ver?
Vamos conhecer superficialmente a *demo* que eu trouxe e em seguida aplicar alguns *filtros* por meio de *parâmetros de query*.

---
## Capturando query params

Quando recebermos parâmetros de query na nossa aplicação, conseguimos capturá-los de maneira extremamente simples, como já fazemos por exemplo com os parâmetros de body (`req.body`) e de path (`req.params`), vamos ver:
```js
// Requisição sendo feita em /characters?species=galo
app.get('/characters', (req, res) => {
	const queryParams = req.query
	res.json(queryParams)
})

// Resposta da API
// HTTP/1.1 200 OK
{ "species": "galo" }
```

Vamos utilizar essa informação no nosso projeto então, passando esse dado para nossa classe que gerencia o banco de dados e *incrementar nosso select* para lidar com isso.

---

## E com isso, exercício!

> Quero propor um exercício rápido pra ser feito aqui em sala, **valendo 0.5 ponto!**

Gostaria que pegassem a API que fizeram com SQLite para a entrega do último domingo, e criassem um novo campo na tabela de usuários: o *type*.

Quero que façam, para a rota *GET de usuários*, um *filtro por tipo* de usuário. Coisa simples, vocês precisarão adaptar o *POST* de vocês pra criarem vários usuários com tipos diferentes (por ex. 'admin', 'default' e 'guest') e adaptar o *GET* para receber o parâmetro de tipo e *trazer apenas os usuários que possuem o tipo passado*.

Lembrando que a mesma rota ainda deve funcionar sem o filtro!

##### Não temos entrega!
Gostaria apenas que fizessem as adaptações necessárias, preparando o banco pra fazermos um teste, e me chamem para vermos juntos o projeto rodando na máquina de vocês.
