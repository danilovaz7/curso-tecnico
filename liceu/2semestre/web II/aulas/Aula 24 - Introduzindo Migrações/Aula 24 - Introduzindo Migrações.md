
Hoje vamos aprender sobre uma *ferramenta importantíssima* e muito utilizada no desenvolvimento de aplicações modernas *que utilizam bancos de dados relacionais*.

O objetivo final vai ser criar uma nova tabela no nosso banco para os nossos **comentários**, e utilizaremos **migrações** para isso.

---
# Migrations

**Migrações** são uma ferramenta *fundamental no desenvolvimento de aplicações que utilizam bancos de dados relacionais*. Elas servem para *gerenciar mudanças na estrutura* do banco de dados, como a criação, modificação ou exclusão de tabelas e colunas. As migrações mantém o histórico das alterações de forma organizada e *facilitam a sincronização dessas mudanças entre ambientes* diferentes (como desenvolvimento, homologação e produção).

Sem migrações, num time com diversos desenvolvedores, cada um precisaria aplicar manualmente as alterações feitas no banco, e basta esquecer ou errar alguma dessas atualizações e isso pode comprometer o funcionamento da aplicação.

> Migrações resolvem esse problema, garantindo que os bancos de todos os ambientes estejam sincronizados e mantendo também um histórico das alterações

No nosso caso, estamos usando a função `.sync()` para que o *Sequelize* identifique nossas *Models* e sincronize as tabelas não existentes no banco, mas isso - além de ser uma má prática - tem suas limitações. Se quisermos incluir um novo campo numa tabela existente, por exemplo, não conseguiremos fazer isso facilmente sem precisarmos excluir o banco todo.

---

## Migrações no Sequelize

Para criar nossas migrações utilizando o *Sequelize*, usaremos a ferramenta de linha de comando *(CLI)* que ele disponibiliza: `sequelize-cli`.

Lembram que, para utilizarmos *ferramentas de linha de comando*, precisamos fazer a *instalação global* da biblioteca? Pois temos uma alternativa para chamar um comando de uma biblioteca sem que precisemos tê-la instalada: *usando o* `npx`

##### NPX
O `npx` é uma ferramenta que acompanha o *Node.js* e facilita a *execução de pacotes do npm sem precisar instalá-los* globalmente. Ele permite rodar comandos diretamente, tornando o desenvolvimento mais ágil e evitando a necessidade de instalar dependências manualmente no sistema.

Lembram do *figlet*? Vamos fazer um teste do `npx` para exibir uma mensagem estilizada:
```bash
npx figlet teste
```

> Agora, sabendo como utilizamos o *npx*, podemos criar nossa primeira migração!

---

## Configurando o ambiente

Para seguirmos com o desenvolvimento usando o *Sequelize*, vai ser necessário fazermos algumas *configurações* no nosso projeto.

Em primeiro lugar, já adianto que os arquivos do *Sequelize* esperam que usemos uma sintaxe de *CommonJS*, já que os comandos que rodamos não esperam módulos do *ESModules*. Existem maneiras de burlar isso e forçar o uso do módulos, mas a configuração não vale muito a pena.

> Espero que lembrem minimamente da sintaxe de *CommonJS*, apenas para fazermos os arquivos que rodarão com o `sequelize-cli`


##### `.sequelizerc`
Para usar nosso `sequelize-cli`, ele exige que tenhamos um *arquivo de configuração do Sequelize*. Esse arquivo será o `.sequelizerc`. Arquivos ".algumaCoisarc" são arquivos de configuração para uma ferramenta ou biblioteca específica, eles são usados para definir opções e parâmetros que controlam o comportamento da ferramenta.

Vamos criar um arquivo `.sequelizerc` na *raiz* do nosso projeto para definir algumas *configurações* para o *Sequelize*:
```js
const path = require('path')
  
module.exports = {
  'models-path': path.resolve('src', 'models'),
  'migrations-path': path.resolve('src', 'db', 'migrations'),
  'config': path.resolve('src', 'db', 'config.js')
}
```
- Como esse arquivo não é interpretado pela nossa aplicação (que está configurada para rodar com *ESModules*) mas sim pelo `sequelize-cli`, precisamos utilizar a sintaxe de *CommonJS*
- Estamos exportando um objeto que declara o caminho para alguns arquivos comuns do *Sequelize*. Para isso, estamos utilizando o `path` que é uma biblioteca padrão do *Node*
	- `models-path` é o caminho para nossa pasta de *Models*
	- `migrations-path` é o caminho para nossa pasta de *Migrations*
	- `config` é o caminho para nosso *arquivo de configuração do banco*

##### `config.js`
Esse arquivo dirá ao *Sequelize* qual é a configuração do nosso banco. Lembram que declaramos a inicialização do banco no `db/database.js` passando um *dialect* e um *storage*, para dizer que gostaríamos de usar o *SQLite* como banco? Pois estaremos abstraindo essa configuração para um arquivo! Como esse arquivo será lido pela aplicação, pode ser escrito usando *ESModules*:
```js
export default {
  development: {
    dialect: 'sqlite',
    storage: './src/db/database.db'
  },
  production: {
    dialect: 'sqlite',
    storage: './src/db/database.db'
  }
}
```
- Nada de muito surpreendente aqui, estamos reproduzindo a mesma configuração da inicialização do *Sequelize*, mas replicando ele para dois ambientes: desenvolvimento (*development*) e produção (*production*)
	- Podemos ter múltiplos ambientes aqui com configurações diferentes, para que tenhamos nosso banco corretamente definido para cada caso. É comum termos também, além desses dois ambientes, outros como *staging/homologação* e *test*.

Com isso, podemos também abstrair essa configuração na nossa inicialização do banco no `db/database.js`:
```js
import config from './config.js'
  
const sequelize = new Sequelize(config.development)
```
- Aqui nesse caso estamos utilizando *sempre* a configuração de *desenvolvimento*, mas mais pra frente veremos como deixar essa configuração *dinâmica*, a depender do ambiente.

**Agora temos um ambiente propriamente configurado para lidar com migrações!**

---

## Criando nossas Migrations

Agora que nosso ambiente está redondinho, vamos criar nossa primeira *migração*! Como comentei, gostaríamos de criar uma nova tabela de *comentários*. Para isso, vamos conhecer o comando `migration:generate`, usando nosso `npx` e o `sequelize-cli`:
```bash
npx sequelize-cli migration:generate --name createComments
```
- Como comentei, o `sequelize-cli` é a interface de linha de comando do *Sequelize* para rodarmos alguns comandos como esse
- O comando `migration:generate` vai criar um novo *arquivo de migração* do Sequelize na nossa pasta de `/db/migrations`, como especificamos no `.sequelizerc`
	- Podemos passar uma flag `--name` para *dar um nome* a essa migração

**Vamos entender a estrutura do arquivo gerado pra gente:**
```js
module.exports = {
	async up (queryInterface, Sequelize) {
		// Alterações a serem feitas no banco
	},
	
	async down (queryInterface, Sequelize) {
		// Desfaz as alterações feitas no banco pelo "up()"
	}
}
```
- De cara vemos que esse arquivo segue a sintaxe do *CommonJS*. Já adianto que, para rodarmos essa migração sem problemas com o `sequelize-cli`, vamos renomear a extensão dele para `.cjs` ao invés de `.js`, para dizer explicitamente que gostaríamos que ele fosse interpretado dessa maneira. Como comentei anteriormente, seria muito complicado forçar que esse arquivo fosse lido como módulo.
- Ignorando algumas firulas do arquivo, o *importante* pra nós é o que está sendo *exportado* aqui
	- Uma função de `up()`: aqui devemos *declarar todas as alterações* que gostaríamos de fazer no banco. Esses comandos serão executados quando rodarmos a migração
	- Uma função de `down()`: aqui devemos *desfazer todas as alterações* que foram declaradas no `up()`, precisamos disso para sermos capazes de *versionar* nosso banco, e portanto facilmente desfazer alterações que possam ter gerado problemas na base
- Além disso, podemos ver que essas duas funções recebem dois parâmetros: `queryInterface` e `Sequelize`:
	- Esse *Sequelize* nós já conhecemos, não precisaremos importar a biblioteca para declarar os tipos dos nossos atributos, apenas usar esse parâmetro que estamos recebendo.
	- Agora esse *queryInterface* nos será muito importante, porque é um objeto com diversos *métodos* que poderemos chamar para declarar nossas alterações ao banco


##### Métodos disponíveis para alterações no banco
Não entrarei muito no detalhe sobre *como utilizar* cada uma dessas funções, mas é importante vocês saberem que tudo isso está disponível pra nós a partir dessa `queryInterface` que recebemos como parâmetro:
- `createTable()` / `dropTable()`
- `addColumn()` / `changeColumn()` / `removeColumn()`
- `addIndex()` / `removeIndex()`
- `addConstraint()` / `removeConstraint()`

Cada método aqui tem sua própria utilização, mas devemos usar hoje só o de criação e exclusão de tabelas. Conforme surgir a necessidade de vocês alterarem o banco, podem sempre recorrer à [documentação do Query Interface](https://sequelize.org/docs/v6/other-topics/query-interface/).

##### Definiremos nossa tabela
Sei que vocês ficaram super felizes de não termos que definir quase nada para criar nossas tabelas no banco, apenas declarar uma *Model* simples e todo o resto é criado e gerenciado pelo *Sequelize* - como relacionamentos, ids e timestamps. Pois eu detesto estragar isso pra vocês, mas *precisaremos definir todos os campos criados e alterados nas nossas migrações*.

Aqui não teremos campos mágicos criados pelo *Sequelize*. Vamos definir a criação da nossa tabela de `comments` *com todos os atributos necessários*, incluindo relacionamentos, ids e timestamps:
```js
async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        postId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'posts',
                key: 'id'
            }
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    })
},
  
async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comments')
}
```
- Definimos a *criação da tabela de comentários* junto de *todos os seus atributos* na função `up()` usando o `queryInterface.createTable()`
- Definimos a *exclusão da tabela de comentários* na função `down()` usando o `queryInterface.dropTable()`

**Maravilha! Agora temos tudo pronto para rodar essa nossa migração e criar a tabela!**

---

### Rodando migrações no Sequelize

Utilizaremos novamente o `sequelize-cli` para executar novos comandos, dessa vez, para rodar nossa migração e atualizar nosso banco:
```bash
npx sequelize-cli db:migrate
```
- O comando `db:migrate` irá identificar *todas as migrações ainda não executadas* no nosso banco, e fazer o passo a passo para executar todas elas seguindo a ordem de criação

Como curiosidade, também podemos ver como *desfazer migrações* uma a uma usando o comando de "rollback":
```bash
npx sequelize-cli db:migrate:undo
```
- Isso desfaz a última migração aplicada. Se quisermos desfazer todas as migrações, podemos substituir pelo comando `db:migrate:undo:all`

> Com isso, temos nosso banco atualizado!

---

## Desafio avaliativo

Gostaria que fizessem a *criação de todo o nosso banco de dados até aqui usando as Migrações*, simples assim! Pode ser que apanhem um pouco para chegar na solução final, mas verão que é só reproduzir o que vimos aqui hoje várias vezes para todas as tabelas.

> Esse desafio estará valendo *0.5 ponto* para a *próxima aula*!

**Quero que desenvolvam isso até sexta-feira e me mostrem pronto no começo da aula.**

O objetivo final aqui é removermos nosso `database.sync()` do projeto e sermos capazes de, sem um banco de dados ainda, *executar todas as migrações* e termos um *banco pronto* para rodar com a nossa mesmíssima aplicação.

