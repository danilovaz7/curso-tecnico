
Essa semana vamos *exercitar* o uso do **Express**, a *biblioteca* que estaremos utilizando esse semestre pra desenvolver nossas *APIs*. Gostaria de passar essa atividade para garantir que estamos bem entendidos do conteúdo que aprendemos até aqui, envolvendo *tudo que já vimos: HTTP, Node, bibliotecas e APIs*.

> Vamos dedicar a aula de hoje ao *desenvolvimento* do exercício, e sexta-feira vou fazer a *solução* do zero com vocês.

Mas antes disso! Que tal *facilitarmos* nosso desenvolvimento com um **hot-reload**? Lembram o que isso significa?

---

## Nodemon

**Nodemon** é uma ferramenta que ajuda no desenvolvimento de aplicações Node.js ao *reiniciar automaticamente o servidor* toda vez que detecta mudanças nos arquivos do projeto. Assim não precisamos ficar parando e reiniciando manualmente o servidor sempre que fizermos alterações no código.

> Lembram do **Live Server**, né? Esse seria nosso Live Server para o desenvolvimento **Node**!

Podemos instalar o **Nodemon** *localmente* ou *globalmente*! Se quisermos usar o comando `nodemon` diretamente na linha de comando, precisaremos de uma instalação **global**. Apesar disso, nada impede de criarmos um *script* no nosso *package.json* para executarmos o `nodemon` a partir de uma *instalação local*

```bash
npm install -g nodemon

ou

npm install --save-dev nodemon
```

Caso tenham instalado *globalmente* o **Nodemon**, podemos iniciar a aplicação simplesmente usando:
```bash
nodemon app.js
```

##### Mas e com a instalação local?
Vamos criar o *script* no *package.json* pra executarmos nossa aplicação com o `nodemon` através do *NPM*:
```json
"scripts": {
	"start": "node app.js",
	"dev": "nodemon app.js"
}
```
Agora temos um script `start` que executa normalmente nosso `app.js` com o *Node*, e um script para desenvolvimento chamado `dev`, que executa usando o *Nodemon*.

Assim podemos dar um:
```bash
npm run dev
```
E ver nossa aplicação rodando com **hot-reload**!

##### O que a *flag* `--save-dev`?
A flag `--save-dev` é utilizada no comando `npm install` para indicar que o pacote instalado deve ser adicionado à seção `devDependencies` do arquivo `package.json`. Essa seção é destinada a dependências que são necessárias apenas durante o desenvolvimento do projeto, e não em produção.
- **dependencies:** Pacotes listados em `dependencies` são necessários tanto em ambiente de desenvolvimento quanto em produção. Esses pacotes são instalados quando você ou outra pessoa executa `npm install` em um ambiente de produção.

- **devDependencies:** Pacotes listados em `devDependencies` são necessários apenas durante o desenvolvimento, como ferramentas de testes, linters, ou, no caso, o Nodemon. Esses pacotes não são instalados automaticamente em produção se o comando `npm install --production` for usado, ou se a variável de ambiente `NODE_ENV` estiver configurada para "production".

---

## Vamos exercitar o que aprendemos

##### Gerenciador de Tarefas (To-Do List)
1. **Criar uma tarefa** (Create): `POST /tasks`
- *body:*
```json
{
	"title": "Estudar Node.js",
	"completed": false
}
```

2. **Listar todas as tarefas** (Read): `GET /tasks`
3. **Obter uma tarefa específica** (Read): `GET /tasks/:id`
4. **Atualizar uma tarefa** (Update): `PUT /tasks/:id`
- *body:*
```json
{
	"title": "Estudar Express.js",
	"completed": true
}
```

5. **Deletar uma tarefa** (Delete): `DELETE /tasks/:id`

#### Mas não apenas isso!
Gostaria de *mais alguns critérios* para serem atendidos, coisas que **sempre** vamos ter que nos preocupar no desenvolvimento de uma *API*, desde as mais simples.

- *Gerenciamento de ids:*
	- Precisamos guardar os ids de maneira *incremental*, mas *nunca permitir* que um mesmo recurso *mude de id*
	- Os próximos ids sempre *continuarão depois do último recurso criado*, independente dos recursos que deixarem de existir no processo
	- *Não receberemos o id* do cliente, deve ser gerenciado inteiramente do lado do servidor
- *Retornos corretos de status:*
	- Status de **sucesso:** *200*
	- Status recurso **criado**: *201*
	- Status recurso **não encontrado**: *404*