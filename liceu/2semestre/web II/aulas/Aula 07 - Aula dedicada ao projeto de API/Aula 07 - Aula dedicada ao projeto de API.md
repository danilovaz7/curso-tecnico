Nessa aula, dedicamos todo o horário ao desenvolvimento da atividade avaliativa a ser entregue no dia 30/08, o *[[Projetinho consumindo APIs]]*. Também tiramos *dúvidas* e relembramos alguns detalhes sobre a utilização das *bibliotecas*, baixadas usando o *NPM*.

Também uma exposição feita durante a aula foi sobre a autenticação para utilizarmos a API da Marvel. Lembrando que, para receber requisições, a API exige 3 parâmetros por meio dos quais ela faz a autorização:
- `ts`:  o *Timestamp*, é um padrão de registro de *tempo*. Basicamente um número extenso que representa um tempo corrido em *segundos* que começa a contar a partir de 01/07/1970. É utilizado principalmente por permitir facilmente a comparação entre duas marcas temporais distintas, além de cálculos.
- `apikey`: a chave pública que recebemos ao nos cadastrarmos no site da Marvel para utilizar a API.
- `hash`: aqui vem a parte interessante, esse argumento *hash* é também o que chamamos de um *digest*, basicamente uma combinação de valores que passam por uma *compressão*, e ao mesmo tempo uma *criptografia* utilizando algum padrão. Aqui no caso da API da Marvel, ela exige que utilizemos uma hash **MD5**.
##### MD5
Um hash *MD5* é criado pegando uma string de qualquer comprimento e codificando-a em uma impressão digital de 128 bits. Codificar a mesma string usando o algoritmo MD5 sempre resultará na mesma saída hash de 128 bits. Hashes MD5 são comumente usados ​​com strings menores ao armazenar senhas, números de cartão de crédito ou outros dados confidenciais em bancos de dados como o popular *MySQL*. Esta ferramenta fornece uma maneira rápida e fácil de codificar um hash MD5 a partir de uma string simples de até 256 caracteres.

Apesar disso, o MD5 *não conta como uma criptografia*, é simplesmente uma impressão digital da entrada fornecida. Apesar disso, claramente é bem mais segura do que as strings "cruas".

### Desenvolvemos essa parada
Utilizando a biblioteca `md5`, conseguimos pegar os três inputs e produzir uma hash MD5 num código bem simples, disponível na pasta `feito em sala`.