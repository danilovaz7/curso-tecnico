
Vamos começar a aula de hoje revisitando um pouco do que fizemos na aula passada, já que já fazem alguns dias, e em seguida continuaremos o projeto para terminar de implementar o *padrão MVC* nessa nossa aplicação.

---

### Camada de Router e Controllers

Na sexta-feira, além de construirmos nosso **Controller** de personagens com as lógicas que já tínhamos na aplicação para criar e buscar personagens, também criamos uma nova camada de **Routes** (no `routes.js`), onde ficarão definidas todas as rotas do nosso projeto de maneira explícita, e chamando os respectivos Controllers.

### Camada de Model

Começamos também o desenvolvimento da nossa **Model** de personagens. Essa camada deve conter definições da estrutura dos nossos registros, além da lógica de interação com o banco de dados. Cada *tabela* do nosso banco geralmente será representada por uma *Model*, e seus *CRUDs* ficarão nessa camada.

> Vamos continuar essa Model de onde paramos na semana passada, pra tentar finalizar a implementação do MVC pra esse projeto

### Inclusão de Views

Por fim, algo que comentei que não devíamos ter nesse projeto, mas achei interessante de trazer pra vocês. Esse tipo de páginas não são uma prática comum nem recomendada, mas acredito que poderemos aprender com isso independentemente.

Como não vimos até aqui como fazer para *servir páginas estáticas* na nossa API, achei uma oportunidade interessante de fazermos essa implementação, até para conhecerem essa possibilidade.

Também não vimos, no semestre passado quando aprendemos sobre *formulários* HTML, como garantir que esses formulários façam as *chamadas HTTP* que precisamos.