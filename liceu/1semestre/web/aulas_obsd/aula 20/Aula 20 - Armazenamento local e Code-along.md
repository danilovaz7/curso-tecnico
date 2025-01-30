
Boa noite, pessoal! Apenas lembrando que *sexta-feira* temos nossa *entrega da lista de exercícios* que pedi na última aula. Hoje vamos ver mais um pouco de conteúdo e em seguida faremos um **code-along**. Quero passar com vocês por algumas possibilidades mais elaboradas no uso do JavaScript nas páginas, *vamos o mais longe que conseguirmos hoje*.

Vou tentar separar um *tempinho ao final* para *tirarmos dúvidas da lista de exercícios*.

---

# LocalStorage, SessionStorage e Cookies

Às vezes vamos querer *armazenar* alguma informação da nossa aplicação no navegador do usuário, por diversos motivos.

**Por exemplo:**
- Caso seja um jogo, podemos querer guardar o placar ou possibilitar que uma partida seja continuada após uma interrupção.
- Se tivermos dados comuns que queremos exibir em todas as páginas, como o nome do usuário que está logado, não precisamos buscá-los no servidor a cada redirect

Para isso, temos *3 opções* de *armazenamento local* nos navegadores. Aqui temos uma tabelinha com as diferenças básicas entre os 3:

|                     | Cookies                   | LocalStorage    | SessionStorage   |
| ------------------- | ------------------------- | --------------- | ---------------- |
| Capacidade          | 4kb                       | 10mb            | 5mb              |
| Compatibilidade     | HTML4/HTML5               | HTML5           | HTML5            |
| Acessível de        | qualquer janela           | qualquer janela | apenas mesma aba |
| Expira              | define tempo de expiração | nunca           | ao fechar a aba  |
| Enviado em requests | sim                       | não             | não              |

Podemos ver esses nossos tipos de armazenamento através do **navegador**, se abrirmos nossas *Ferramentas de Desenvolvedor* como sempre, mas agora na aba *Application*, veremos uma seção na aba lateral com o nome `Storage` e logo abaixo nossos três armazenamentos.

### Como armazenamos algo?

#### LocalStorage
Podemos adicionar *itens* no *LocalStorage* como se fosse um objeto, declarado num modelo de chave-valor:
```js
localStorage.setItem('nome', 'Fulano');
localStorage.getItem('nome'); // => Fulano
localStorage.removeItem('nome');
```

#### SessionStorage
O SessionStorage funciona *exatamente como o LocalStorage*, mas com as *limitações* que descrevi acima:
```js
sessionStorage.setItem('nome', 'Fulano');
sessionStorage.getItem('nome'); // => Fulano
sessionStorage.removeItem('nome');
```

#### Cookies
Cookies são mais usados para comunicação com *APIs* ou *servidores*. Eles geralmente guardam informações da *sessão* do usuário para que ele seja *autenticado* sempre que há comunicação entre o **cliente** (Front-end) e o **servidor** (Back-end).

Utilizar cookies com *JS "vanilla"* (sem bibliotecas ou frameworks) é um trabalho chato e pouco prático, mas a título de curiosidade, conseguimos ter acesso aos cookies através do `document.cookie`:
```js
document.cookie = 'nome=Fulano';
```
Isso vai criar pra nós um cookie, sempre através de uma **string**, também no *modelo chave-valor*. Podemos colocar uma *data de expiração* nele:
```js
document.cookie = 'nome=Fulano, expires=' + new Date(2025, 0, 1).toUTCString();
// document.cookie = 'nome=Fulano, expires=' + new Date(9999, 0, 1).toUTCString();
```
Comentado nesse exemplo também podemos ver um exemplo de um cookie com uma *data de expiração "infinita"*, mas que é praticamente só uma data muito distante.

O *problema* agora é quando quisermos *ler* os cookies, que só conseguimos acessar através também do `document.cookie`, então pra lermos mais de um cookie precisaremos lidar com a **stringzona**:
```js
console.log(document.cookie);
```
Isso vai nos retornar *todos* os cookies separados por `;`, já dá pra entender a bagunça né. Bom que não teremos que nos preocupar com isso hoje.

---

# Bora trabalhar!

Vamos fazer uma lista de tarefas, ou *to-do list*! Isso vai dar pra vocês uma boa noção de um código um pouco mais *robusto* em *JavaScript*, mas ainda vendo os mesmos conceitos simples que vimos até aqui.

### To-do List

Queremos fazer uma *lista de tarefas*, onde inicialmente temos a opção apenas de **adicionar elementos na tela.** Para isso, precisamos saber como adicionamos elementos usando *JS*:
```js
// Essa maneira é bem simples porém insegura
const todoItem = `<li class='todo-item'>${text}</li>`;

todoList.innerHTML += todoItem;
```

Também temos uma maneira melhor, criando um elemento usando `createElement` e o adicionando a outro elemento com `appendChild` ou `append`.
```js
const todoItem = document.createElement('li');
todoItem.classList.add('todo-item');
todoItem.textContent = text;

todoList.appendChild(todoItem);
```
##### Show! Mas e o armazenamento?
Com isso conseguimos fazer uma lista de tarefas *simples*, que nos possibilita adicionar elementos. Mas se nós simplesmente *recarregarmos* a página, *perdemos todas as nossas tarefas*. Podemos armazená-las usando o **LocalStorage** pra não perdê-las entre sessões.

Apesar de ainda ser mais fácil de usar que os cookies, o **LocalStorage** ainda é capaz de armazenar apenas uma *string* como valor, sem tipos complexos como um *array* ou um *objeto*. Para isso, precisamos transformar numa estrutura **JSON**. Veremos mais sobre JSONs nas próximas aulas.
```js
let todos = ['Estudar CSS', 'Fazer trabalho de PW1'];

let json = JSON.stringify(todos)
// => '["Estudar CSS","Fazer trabalho de PW1"]'

// Para transformar (parsear) uma string JSON em tipos do JS, como array
let parsed = JSON.parse(json)
```

##### Será que conseguimos fazer um pouco mais?
Que tal adicionarmos um botão para *deletar tarefas*? Afinal, precisamos de alguma maneira de *finalizar* elas! Mas e se quisermos um reforço positivo de vermos as tarefas completas? Que tal uma *checkbox* para tarefas realizadas?

Para guardar mais informações sobre o estado da nossa aplicação, talvez precisemos usar *tipos mais complexos*, como um **objeto**.

---

## Estamos chegando ao final do semestre

Infelizmente estamos atingindo uma nova etapa do módulo, e precisamos resolver algumas questões. Após revisar as aulas que temos restando, admito que *temos menos tempo* do que eu estava planejando. Portanto, gostaria de *adiantar algumas avaliações*, pra termos tempo de dar a atenção necessária.

#### Projetos finais

##### Vamos fazer jogos!
Já havia comentado com vocês sobre minha intenção de trazer uma *lista* de **jogos simples** para que vocês escolhessem e desenvolvêssemos eles como uma avaliação. Ela valerá *2.5 pontos* e pretendo passar as próximas semanas dando uma atenção maior a ele.

##### Spoilers: Blog informativo
Na *sexta-feira* vou passar um **grande projeto** para o final do semestre como revisão das primeiras matérias que vimos: *HTML* e *CSS*. Ele vai valer *3.0 pontos* e é algo que quero que façam mais em casa, com momentos dedicados nas aulas pra corrigirmos pontos críticos antes da entrega.

----

### Lista de Jogos possíveis

- Jogo da Velha
- Jogo da Forca
- Jodo da memória
- Termo(wordle) / Senha
- Quiz / Show do milhão
- Pedra, papel e tesoura
- Conexo
- Aceito proposta de outros jogos, mas precisamos avaliar a complexidade