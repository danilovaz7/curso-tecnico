
Boa noite! Hoje não é uma surpresa que conheceremos os **ORMs**. Já fiz uma boa introdução para vocês na última aula falando sobre como tratamos as nossas **Models** de maneira *orientada a objetos*. Isso vai ficar *evidente* pra vocês hoje, espero.

Não tem muita introdução, **vamos direto ao assunto!**

---

# ORMs (Object-Relational Mappers)

**ORM (Object-Relational Mapping)** é uma técnica de programação que facilita a interação entre *sistemas orientados a objetos* e *bancos de dados relacionais*. Ele permite que nós desenvolvedores manipulemos um banco de dados utilizando *objetos da linguagem* de programação - no nosso caso o JavaScript - ao invés de escrever diretamente nossas *queries em SQL*. Isso é feito por meio de uma abstração, onde o **ORM** converte automaticamente os *comandos em instruções SQL e vice-versa*.

> Em resumo, o **ORM** facilita a comunicação entre o *código da aplicação* e o *banco de dados*, trazendo eficiência e simplicidade ao lidar com dados através de *Models* em aplicações modernas.

### Uso em aplicações modernas
Em aplicações modernas, muitos *frameworks* como o *Django* (Python), *Rails* (Ruby) e o *Laravel* (PHP), além de muitos outros, *já vêm por padrão com um ORM*!
- Desde que iniciamos uma aplicação dessa e até o final do seu desenvolvimento, *muitas vezes* não precisamos escrever uma linha de SQL!

### Não é apenas praticidade
O uso de *abstrações/interfaces* como essas para nos comunicarmos com um banco de dados também deixa nossa aplicação imediatamente **mais segura**! A maior parte dos ORMs já possui mecanismos para impedir ataques maliciosos, como *SQL injection*.
- No nosso caso, a *lib* que estamos usando (*sqlite*) já lida com isso também, mas um *ORM* é sempre melhor
- Além do problema de SQL injection, o fato de *estruturarmos* nossa **Model** com seus campos e restrições já adiciona uma *camada de validação nativa* com erros mais descritivos que os que recebemos do banco de dados

### Portabilidade
Com o uso de um **ORM**, o código pode ser mais facilmente adaptado para diferentes bancos de dados - como *MySQL*, *PostgreSQL* e *SQLite* - já que escrevemos tudo na *linguagem de alto nível*.
- Vocês verão como conseguiremos migrar facilmente do SQLite para o MySQL em breve

---

# Sequelize

Para nossa aplicação em *NodeJS*, vamos utilizar o **Sequelize** como o nosso **ORM**.

Sabendo tudo que já sabemos sobre *Models* e com todo o desenvolvimento que fizemos até aqui, vocês verão que é fácil integrar o *ORM* e utilizar as *mesmas funções* que já vimos mil vezes.

##### E vamos direto para a prática

Para *instalar* o **Sequelize** na nossa aplicação e incluir ele no nosso *package.json*, rodamos:
```sh
npm install sequelize
```

Além do *Sequelize*, precisamos sempre também da *lib* que chamamos de **driver** do nosso banco de dados. No nosso caso, como estamos usando o *sqlite*, a biblioteca usada para ele é o `sqlite3`, que *já temos instalada* no nosso app.

##### Inicializar nosso banco
Aqui estamos importando e inicializando nosso **Sequelize**, passando pra ele um objeto de configuração que ele exige. *Para nossa aplicação com SQLite, ficaria assim:*
```js
import { Sequelize } from "sequelize"
  
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "database.db"
})
```

E para *testar* que funcionou, podemos também chamar um método `.authenticate()`, que fará uma *query* simples para garantir que nosso banco de dados foi configurado com sucesso.
```js
await sequelize.authenticate()
```


##### Definir nossa Model
O *Sequelize* permite que a gente use a variável que na qual instanciamos nossa conexão com o banco (`sequelize`) e, a partir dela, definir nossa *Model*. Ela vai conter nossos *atributos da tabela* no banco de dados, e podemos *definir regras* para esses campos:
```js
const Character = sequelize.define('character', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	species: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age: {
		type: Sequelize.INTEGER
	}
})
```
- O `sequelize.define()` literalmente define a estrutura que deve conter na minha tabela, portanto suas colunas
	- O campo `id` pode ser omitido! Podemos configurar para que a tabela não o contenha, mas ele já é definido como um *AUTOINCREMENT* por padrão! Além disso, a tabela também conterá o que chamamos de *timestamps*, que são basicamente as datas de criação e atualização do registro (*createdAt* e *updatedAt*)
	- O campo `name` é uma string, definido pelo `type: Sequelize.STRING`, e ele não pode ser nulo, visto que temos um `allowNull: false`
	- O campo `species` é uma string não-nula assim como o `name`
	- O campo `age` é um inteiro, definido pelo `type: Sequelize.INTEGER`, podendo ser nulo


##### Sincronizando nosso banco
Definir nossa *Model* é legal e tal, mas precisamos dizer à nossa aplicação para *sincronizar* essas *Models* com as *tabelas* do nosso banco de dados. Isso também vai garantir que as mudanças feitas às nossas Models reflitam nas tabelas do banco.
- Para isso, utilizamos o método `.sync()`:
```js
sequelize.sync()
```

> Com isso, já podemos ver nossa tabela de **characters** criada no nosso banco de dados com todas as colunas, e inclusive já *pluralizada*!

Tendo aprendido esse básico, já podemos implementar essa *Model* de personagens na aplicação que temos da **API do GCL**!

**Bora fazer isso e, em seguida, veremos como utilizamos essa Model para manipular os registros do banco.**

---

## Utilizando nossas Models

Não precisamos mais definir *métodos* para nossas *Models* que irão ditar qual a query em *SQL* que rodaremos no banco, nossa **Model do Sequelize** já tem tudo que precisamos!

**Podemos criar um registro:**
```js
const character = await Character.create({
	name: 'Galinho',
	species: 'galo',
	age: 12
})
```

**Podemos listar todos os registros do banco:**
```js
const characters = await Character.findAll()

console.log(characters.map(character => character.toJSON()))
```
- Vejam também que o *objeto de personagem* que o *Sequelize* nos retorna já possui também um método `.toJSON()` para transformá-lo em *JSON*

**E podemos também realizar todas as demais operações de CRUD:**
```js
// Encontra um personagem pelo id
const character = await Character.findByPk(2)
console.log(character.toJSON())

// Atualiza algum dado de um personagem
character.age = 14 // Aqui atualizamos o registro em memória
await character.save() // Aqui persistimos a alteração no banco de dados

// Deleta um personagem
await character.destroy()
```

**Também podemos complexificar nossas buscas, passando um WHERE por campo:**
```js
// Busca todos os personagens de uma espécie
const characters = await Character.findAll({ where: { species: 'galo' } })

console.log(characters.map(character => character.toJSON()))
```

##### Sempre tem mais do que vimos aqui
Caso tenham interesse, deixo aqui também o link para a [documentação básica do Sequelize](https://sequelize.org/docs/v6/getting-started/). Dessa forma, vocês podem se adiantar para ir atrás de mais funcionalidades que a lib disponibiliza pra gente, que são inúmeras!

---

## Vamos implementar isso na API

Pegaremos a *API do Galinho* que já temos e vamos tentar finalizar a implementação do **ORM** no fluxo que existe, com *todas as funcionalidades inclusas*.

Se nos sobrar algum tempinho, gostaria que tentassem começar o projeto de vocês da [[API Aberta]], agora que já sabemos utilizar num nível básico as nossas *Models do Sequelize*.