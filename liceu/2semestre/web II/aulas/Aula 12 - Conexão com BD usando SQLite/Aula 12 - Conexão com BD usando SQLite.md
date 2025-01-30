
Como já conversamos nas últimas aulas, hoje vamos introduzir a *conexão com banco de dados* usando *SQLite*. Posteriormente, faremos a migração do banco *SQLite* para nosso grande *MySQL*, mas até lá, poderemos trabalhar em *desenvolvimento* com algo bem mais simples.

##### Vamos avançar
Espero que tenham assimilado bem o conteúdo até aqui, pois vamos começar o processo de *acumular o conteúdo*. Além de todos os *conceitos basilares* que vimos até aqui, precisaremos avançar para um desenvolvimento que vai utilizar tudo isso para construir mais em cima

> Portanto, se sentirem que está faltando um pouco de conteúdo, hora de botar os estudos em dia!

---

# SQLite

O **SQLite** é uma excelente escolha para começar o desenvolvimento de um projeto evitando a complexidade de instalar e configurar um banco de dados completo como *MySQL* ou *PostgreSQL*. 

Ele é um *banco de dados relacional leve*, gerenciado em apenas *um arquivo* no disco, que não precisa de um servidor para ser executado, tornando-o ideal para projetos menores ou de desenvolvimento inicial:

- **Fácil de usar:** Não requer configuração complexa, apenas um arquivo de banco de dados.
- **Ideal pra desenvolvimento:** Perfeito para prototipagem e desenvolvimento inicial, onde um banco de dados completo seria excessivo.
- **Portabilidade:** Como o banco de dados é um único arquivo, é fácil de mover e compartilhar entre ambientes de desenvolvimento.

> Posteriormente vocês verão que podemos trocar nosso **SQLite** para o **MySQL** *com facilidade!*

---

### O desenvolvimento com bibliotecas é variado

Algo que não é exclusivo do *JavaScript*, mas é mais intenso desenvolvendo com ele, é a *variedade de bibliotecas e frameworks*, e como eles introduzirem *diferentes maneiras de implementar* a mesma solução. O que é importante sempre pra nós não é apenas saber reproduzir o código que escrevemos em sala, mas *entender na essência* o que estamos tentando fazer.

Tendo isso em mente, vocês conseguirão **buscar referências na internet** e interpretar melhor as **documentações** para saber *como utilizar cada ferramenta*.

##### CommonJS vs ESModules
Além disso, o uso da sintaxe de *ESModules* ao invés do *CommonJS* também impacta, já que *há bibliotecas que não foram atualizadas* o suficiente para migrar para *ESModules*.

- **CommonJS (CJS)**: É o formato de módulos tradicional em Node.js, que usa `require` para importar e `module.exports` para exportar. Ele tem sido a forma padrão de lidar com módulos desde o início do Node.js. O *CommonJS* é mais simples de integrar com *projetos legados* ou bibliotecas que *ainda não suportam completamente ESModules*.

- **ESModules (ESM)**: É a especificação moderna de módulos que faz parte do padrão [ECMAScript](https://www.w3schools.com/js/js_es6.asp)  e usa `import` e `export`. *ESModules* são amplamente usados no *desenvolvimento front-end* e agora são totalmente *suportados pelo Node.js*

> Resumindo, o **ECMAScript** é uma revisão mais recente do *JavaScript*, usada para que todos os navegadores e a internet utilizem *um mesmo padrão de JS*.

---

## Vamos começar!

Para começar o desenvolvimento com **SQLite**, vamos instalar as seguintes *bibliotecas*:
```bash
npm install sqlite3 sqlite
```

##### `sqlite3` - [documentação](https://www.npmjs.com/package/sqlite3)
- É a biblioteca principal que fornece a interface de baixo nível para trabalhar com o banco de dados SQLite no Node.js.
- Utiliza um modelo baseado em **callbacks**, onde você deve tratar erros e resultados dentro das funções de retorno (o que pode tornar o código mais complicado).

##### `sqlite` - [documentação](https://www.npmjs.com/package/sqlite)
- É uma biblioteca que funciona como um **wrapper** em torno do `sqlite3` e converte as funções baseadas em callbacks do `sqlite3` para usar **promises**.
- Por usar **promises**, facilita o desenvolvimento de *código assíncrono* com `async/await`, deixando o código mais legível e fácil de manter.

### Importante instalar uma **Extensão**!

Para nos ajudar a *visualizar* o *banco de dados SQLite* que estaremos criando, utilizaremos a extensão **SQLite Viewer**. Ela vai nos permitir abrir o arquivo `.db` gerado para nosso banco, e visualizar de maneira bem intuitiva as tabelas e registros salvos nele.

---

### Com isso, vamos criar nosso banco

```js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Criar o banco de dados a partir do arquivo database.db
const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
})

// Criando uma tabela de usuários se já não existir
await db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
		email TEXT
	)
`)
  
// Inserindo um usuário
const result = await db.run(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    ['Liam', 'liam.maricato@liceusantista.com.br']
)
```

Com esse código básico, notamos algumas coisas:
- Estamos importando `sqlite3` e `sqlite`
	- Importamos apenas a função `open` dispinibilizada pelo *sqlite*
- Criamos nosso banco passando um nome de arquivo com a extensão `.db`
	- Utilizamos aquela função `open` da lib *sqlite* para isso
	- Isso nos retorna uma *instância de um banco de dados* do *sqlite*, sobre o qual podemos chamar *métodos (funções)* para interagir com o banco
- Criamos nossa estrutura do banco - nesse caso, a tabela de usuários
	- Usamos o método `exec()` para executar código SQL
- Inserimos um usuário
	- Usamos o método `run()` para executar código SQL

Existem claras diferenças entre a sintaxe do MySQL e do SQLite, tem algumas declarações que são simplificadas no SQLite, mas a ideia continua sendo sempre a mesma em todo banco SQL.
##### Mas qual é a diferença entre o *exec* e o *run*?
A biblioteca `sqlite` oferece diferentes métodos para executar consultas e interações no banco de dados, cada um com propósitos específicos:
 1. `exec()`
   - Executa **comandos SQL sem retorno de resultados**, como `CREATE`, `DROP`, ou múltiplos comandos de uma só vez
   - Usado para criar, modificar ou remover tabelas, ou executar comandos que não precisam retornar dados
```js
await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)');
```

2. `run()`
   - Executa **comandos que não retornam linhas** (inserção, atualização ou exclusão de dados), como `INSERT`, `UPDATE`, `DELETE`
   - Usado quando você quer alterar o banco de dados mas não precisa obter dados de volta
```js
await db.run('INSERT INTO users (name) VALUES (?)', 'Jorge');
await db.run('UPDATE users SET name = ? WHERE id = ?', [name, id]);
await db.run('DELETE FROM users WHERE id = ?', id);
```

3. `get()`
   - Executa uma consulta SQL que **retorna uma única linha** como resultado.
   - Usado para buscar **um único registro** do banco de dados, como um `SELECT` por *id*
```js
const user = await db.get('SELECT * FROM users WHERE id = ?', 1);
```

4. `all()`
   - Executa uma consulta SQL e **retorna todas as linhas** que correspondem à consulta
   - Usado para buscar **vários registros** ou uma lista de resultados de um `SELECT`
```js
const users = await db.all('SELECT * FROM users');
```

---

## Agora sabemos integrar um BD

Mais pra frente, vocês verão que conseguiremos *simplificar muito* o desenvolvimento com banco de dados, mas por enquanto, focamos nos *conceitos básicos* e em construir algo bem cru, mas fácil de entender.

##### Vocês acham que conseguiriam integrar a API a partir disso?
Gostaria de fazer com vocês também, mas acho que estamos entendidos o suficiente pra vocês *tentarem sem mim primeiro*. Se não for o caso, continuamos com o *code-along*.

---

# E vamos de Atividade

Gostaria que fizessem um *CRUD*, disponibilizando uma **API RESTful**, com um *banco de dados* simples usando o *SQLite*. Ao longo das próximas aulas, estaremos aprendendo bastante sobre a estruturação desse projeto, e como podemos evoluí-lo para deixar as *camadas* da aplicação bem separadas e *agnósticas* - veremos sobre isso em breve.

Até lá, acho importante deixá-los a par da **atividade avaliativa** que gostaria que fosse *entregue até o dia 22/09*, domingo.

### Requisitos
A API deve conter rotas seguindo o padrão REST para os recursos de **users** e **posts**. Essas rotas cobrem as operações *CRUD (Create, Read, Update, Delete)* para ambos os recursos.

##### A API deve conter as seguintes rotas:
1. **Rotas para `users`**

| Método HTTP | Rota         | Descrição                               |
| ----------- | ------------ | --------------------------------------- |
| `POST`      | `/users`     | Cria um novo usuário                    |
| `GET`       | `/users`     | Retorna uma lista de todos os usuários  |
| `GET`       | `/users/:id` | Retorna um usuário específico por `id`  |
| `PUT`       | `/users/:id` | Atualiza um usuário específico por `id` |
| `DELETE`    | `/users/:id` | Deleta um usuário específico por `id`   |

2. **Rotas para `posts`**

| Método HTTP | Rota                   | Descrição                                       |
| ----------- | ---------------------- | ----------------------------------------------- |
| `POST`      | `/users/:userId/posts` | Cria um novo post para um usuário específico    |
| `GET`       | `/posts`               | Retorna uma lista de todos os posts             |
| `GET`       | `/posts/:id`           | Retorna um post específico por `id`             |
| `GET`       | `/users/:userId/posts` | Retorna todos os posts de um usuário específico |
| `PUT`       | `/posts/:id`           | Atualiza um post específico por `id`            |
| `DELETE`    | `/posts/:id`           | Deleta um post específico por `id`              |

##### Retornos corretos de status
- Status de **sucesso:** *200*
- Status recurso **criado**: *201*
- Status de **requisição incorreta**: *400*
- Status recurso **não encontrado**: *404*
- Status de **erro interno** do servidor: *500*

##### Tratamento básico de erros
A aplicação não deve nunca estourar algum erro que deixe de retornar algum status e mensagem para o cliente. É preciso tratar minimamente os erros para que retornemos os status corretos (4xx, 5xx) e pelo menos alguma mensagem, como vimos em sala de aula.

##### Banco de dados
Como a matéria não é de banco de dados, e a sintaxe do SQLite é *um pouco* diferente, vou facilitar deixando aqui o SQL para a criação das tabelas - e portanto também uma *definição básica dos campos* que deve conter cada registro.
```sql
CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	email TEXT
);
  
CREATE TABLE IF NOT EXISTS posts (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
```