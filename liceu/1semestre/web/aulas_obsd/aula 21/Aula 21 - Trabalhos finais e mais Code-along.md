
## Entrega da lista de exercícios!

Gostaria que compartilhassem comigo as *dúvidas* que tiveram relacionadas à lista, para já resolvermos e vocês poderem fazer a entrega *tranquila*.

---

# Trabalho final de HTML e CSS

Como comentei na última aula, estarei pedindo a partir de hoje o trabalho de *maior peso* do semestre (3 pontos):
#### [[Blog Informativo]]
A atividade deve ser **entregue até dia 16/06**, para que eu consiga corrigir a tempo do fechamento de notas, no dia 21/06.

Gostaria de tentar usar as *aulas finais* dessa última semana pra pegarmos esse projeto e *hostearmos ele na nuvem* usando o **Github Pages**. Assim qualquer um poderá acessar o blog de vocês!

---

## Escolha dos Jogos para nosso projeto de JS

Também comentei nas últimas aulas sobre os *joguinhos* que iremos desenvolver usando **JavaScript**. Já havia separado uma *listinha de jogos* para escolherem, só não tivemos tempo antes para passarmos por isso, então vejamos agora:

##### Lista de possíveis jogos
- Jogo da Velha - fácil
- Jogo da Forca - fácil
- Pedra, papel e tesoura - fácil~médio
- Jogo da memória - fácil~médio
- Termo(wordle) / Senha - médio
- Quiz / Show do milhão - médio
- Conexo - difícil

**Aceito proposta de outros jogos, mas precisamos avaliar a complexidade**

Começaremos o desenvolvimento desses jogos já na próxima semana, pretendo fazer junto com vocês alguns trechos dos jogos

---

# Vamos continuar nossos TO-DOs?

Vamos entender o que faltou do nosso projeto de *lista de tarefas*, além de darmos continuidade pra adicionarmos um botão de **excluir** tarefas e uma **checkbox** para marcarmos as tarefas como concluídas.

Na última aula, conseguimos salvar os nossos to-dos no *LocalStorage* do navegador, agora faltou entendermos como fazemos pra **exibir** nossos to-dos quando carregamos nossa página.

Para isso, talvez precisemos *inicializar* nossos *to-dos* puxando eles do armazenamento local e então fazer um `forEach` para *iterar* sobre os *to-dos* e criar um item da lista para cada um:
```js
let todos = JSON.parse(localStorage.getItem('todos'));

todos.forEach(todo => {
    newTodoItem(todo);
});
```

Vamos fazer **mais** agora?