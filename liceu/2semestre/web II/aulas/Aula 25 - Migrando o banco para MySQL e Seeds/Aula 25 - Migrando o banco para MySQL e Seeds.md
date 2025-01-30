
Hoje imagino que seja nossa *última aula focada no banco de dados*. Agora que temos nosso *Sequelize* super configurado, podemos finalmente usar um banco de gente grande.

Vamos ver o quão simples vai ser essa transição com tudo que temos configurado, e ainda mais importante: usando nosso `sequelize-cli`!

---

# Migrando o banco

Lembram onde fica nossa configuração do banco? São as informações que passamos para o *Sequelize* na hora de *inicializar* esse banco na nossa aplicação. Antes passávamos essa configuração direto na inicialização, mas agora temos um arquivo de `db/config.js` feito para esse propósito.

Vamos substituir essas configurações pelo que precisaremos para nos conectar com o MySQL. Primeira coisa será substituir nossa biblioteca que usamos como *driver*, já que deixaremos de usar o *SQLite* agora:
```bash
# Vamos desinstalar o sqlite3 que estamos usando como driver do SQLite
npm uninstall sqlite3

# Instalaremos o mysql2, que é o driver do MySQL
npm install mysql2
```

Com isso feito, agora precisamos configurar nossa *conexão* com o banco. Assim como vocês montam essa configuração no *MySQL Workbench*, faremos aqui no nosso `db/config.js`:
```js
export default {
	development: {
		username: 'root',
		password: 'root',
		database: 'pw2',
		host: '127.0.0.1',
		dialect: 'mysql'
	},
	production: {
		username: 'root',
		password: 'root',
		database: 'pw2',
		host: '127.0.0.1',
		dialect: 'mysql'
	}
}
```
- Importante ressaltar a substituição aqui do nosso `dialect` de `sqlite` para `mysql`
- As demais informações são de exemplo, mas vocês deverão substituir pela configuração do MySQL da máquina de vocês
- Quando tivermos um banco de dados em produção, podemos substituir os valores desse ambiente - *mas conversaremos melhor sobre isso em breve*

> Para testar nossa configuração do banco, além da possibilidade de usarmos - claro - o *MySQL Workbench*, também estarei demonstrando pra vocês a extensão *SQLTools* do VSCode

---

## Colocando o banco em ação

Agora, com a conexão bem-sucedida, podemos passar para o próximo passo: *nós não temos um banco criado para nossa aplicação!*

Ao invés de ter o trabalho de nos conectarmos no *Workbench* para rodar queries diretamente no *MySQL*, que tal aproveitarmos toda essa nossa configuração do *Sequelize* para rodar comandos pelo `sequelize-cli` e atingirmos o mesmo resultado?

Podemos, por exemplo, criar nosso banco e rodar nossas migrações:
```bash
# Vamos primeiro criar o banco
npx sequelize-cli db:create

# E depois rodar nossas migrações para criar as tabelas
npx sequelize-cli db:migrate

# Caso seja do interesse de vocês, também podemos deletar o banco
npx sequelize-cli db:drop
```

**E agora nosso banco está prontinho para ser usado, assim como tínhamos no SQLite!**

---

# Seeds

Algo que gostaria de introduzir pra vocês também é o conceito de *seeds*. Quando trabalhamos com bancos de dados em ambiente de desenvolvimento, muitas vezes teremos que ficar inserindo diversos registros na base para poder simular as funcionalidades da nossa aplicação.

Pois bem, *Seeds* são arquivos ou scripts usados para *preencher o banco* com dados iniciais ou de teste. Eles servem para popular o banco de dados com informações que ajudam a testar funcionalidades ou fornecer dados que a aplicação pode precisar no desenvolvimento ou na inicialização. *Seeds* facilitam o desenvolvimento, permitindo recriar o estado inicial do banco repetidas vezes.

No *Sequelize*, os *seeds* são desenvolvidos muito semelhante às *migrations*. Podemos adicionar então, no objeto que está sendo exportado no nosso `.sequelizerc`, o caminho da nossa pasta de *seeds*:
```js
'seeders-path': path.resolve('src', 'db', 'seeders')
```
- O *Sequelize* trata os arquivos de seed como *seeders*, por isso o uso desse nome

Agora que o *Sequelize* sabe onde devem ficar nossos arquivos de *seed*, podemos criar nosso primeiro deles, usando *praticamente o mesmo comando* que usamos para as *migrations*:
```bash
```bash
npx sequelize-cli seed:generate --name users
```
- Chamei aqui nosso arquivo de "users", para fazermos os inserts de usuários
- Isso vai gerar pra nós um arquivo muito semelhante ao que temos de migrações

##### Descrevendo nossos Inserts
Para criar os inserts, podemos utilizar o mesmo `queryInterface` que vimos nas nossas *migrations* para chamar agora outros métodos, por exemplo:
- `bulkInsert` - para inserir múltiplos registros numa tabela
- `bulkDelete` - para deletar múltiplos registros de uma tabela

**Vamos ver como ficaria um seed usuários:**
```js
async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert('users', [
		{
			name: 'Usuário Teste 1',
			email: 'user1@mail.com',
			password: '123',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'Usuário Teste 2',
			email: 'user2@mail.com',
			password: '123',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	]);
},
  
async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('users', null, {})
}
```
- Aqui no nosso `up()` estamos inserindo dois usuários de teste. Importante comentar que o `bulkInsert` recebe 3 parâmetros:
	- A tabela na qual vamos inserir os registros
	- Um array de objetos com os dados a serem inseridos
	- (opcional) Um objeto de opções
- Aqui no nosso `down()` estamos excluindo todos os usuários. Importante comentar que o `bulkDelete` também recebe 3 parâmetros:
	- A tabela da qual serão excluídos os registros
	- Um objeto com as condições (*where*) para deletar registros (ou `null`/`{}` para deletar tudo)
	- (opcional) Um objeto de opções

**E, com isso, temos seeds para nosso banco de dados!**

Por fim, para rodar e desfazer nossos seeds, podemos usar:
```bash
# Executar todos os seeds
npx sequelize-cli db:seed:all

# Desfazer o último seed
npx sequelize-cli db:seed:undo

# Desfazer todos os seeds
npx sequelize-cli db:seed:undo:all
```
- Importante ressaltar que, diferente das migrações, o histórico de seeds não é armazenado, então geralmente rodamos todos de uma vez

---

## Variáveis de Ambiente

Como vocês já talvez até possam imaginar, com certeza *não será uma boa prática deixarmos a configuração* do nosso banco de produção *completamente explícita* em strings num arquivo da nossa aplicação, certo? *Faz sentido pra vocês essa preocupação?*

Pois bem, nossas configurações de desenvolvimento pouco importam para pessoas mal-intencionadas, já que apontam apenas para as configurações na nossa máquina, mas com certeza vamos querer *"esconder" nossas configs de produção*. Para isso, usamos **variáveis de ambiente**.

##### E o que são? Pra que servem?
As variáveis de ambiente não servem apenas para configurar bancos de dados e *proteger dados sensíveis* da aplicação, mas também para gerenciar *valores diferentes dependendo do ambiente*.

Elas são valores *dinâmicos* que podem ser definidos no sistema operacional ou em arquivos de configuração, usados para armazenar informações que podem variar entre ambientes - como desenvolvimento e produção.

> Não consigo pensar numa única aplicação moderna que não utilize essas variáveis

##### Como utilizamos ENVs no Node?
Uma prática comum para gerenciar variáveis de ambiente no *Node.JS* é a utilização da biblioteca `dotenv`. Podemos então:

1. Vamos *instalar a lib*:
```bash
npm install dotenv
```

2. Criaremos um arquivo `.env` na *raiz* do nosso projeto para gerenciar nossas variáveis:
```js
DB_NAME=pw2
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
APP_PORT=3000
```
- Claro que vocês podem substituir aqui os valores para se conectar com o banco local de vocês
- Incluí também uma variável para a porta da nossa aplicação - outra boa prática

3. Para usar as variáveis de ambiente, precisamos importar o `dotenv` e chamar uma função `config()` para carregá-las, por exemplo no nosso *config.js*:
```js
import dotenv from 'dotenv'
dotenv.config()
  
export default {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_DIALECT
	}
}
```
- Teoricamente podemos chamar o `.config()` apenas uma vez, no *entrypoint* da aplicação, mas como esse arquivo também poderá ser lido por outros meios (como o `sequelize-cli`), vai ser uma boa termos essa chamada aqui também


**Concluindo então,** as *variáveis de ambiente* podem ser armazenadas tanto em *arquivos* `.env` como esse, *ou internamente* na própria *máquina* em que o projeto está rodando (independente do ambiente).