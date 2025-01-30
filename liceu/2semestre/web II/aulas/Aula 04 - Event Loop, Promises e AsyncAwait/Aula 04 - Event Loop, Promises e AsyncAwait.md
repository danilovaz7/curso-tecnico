
Vamos começar a aula de hoje *revisando o projeto* que fizemos na última, da *calculadora* em *NodeJS*. Em seguida, vamos entrar em conteúdo pesado.

---

Já vimos um pouco sobre **Promises** no finalzinho do semestre passado, quando adiantei um pouco sobre APIs, hoje vamos entender mais a fundo sobre isso e o porquê de ser importante.

O mais importante dessa aula, e é o que vamos usar muito daqui pra frente, é a *sintaxe* de **Async/Await** que o JavaScript oferece pra gente. Mas para que a gente consiga *entender* como chegamos nisso, é importante que passemos por alguns conceitos como o *Event Loop, Callbacks e Promises*.

---

### Algumas tarefas tomam tempo

No JavaScript e na maior parte das linguagens, quando estamos lidando com *tipos simples* como strings e números, *nosso código roda de maneira síncrona*:
```js
const pergunta = "Quantos gatos tem o professor?";
const resposta = "3";

console.log(`${pergunta} ${resposta}`); // Quantos gatos tem o professor? 3
```

Aqui o trecho é simples. Nós já vimos isso acontecendo diversas vezes e não é surpresa que dá certo, mas **e quando precisamos lidar com tarefas que levam mais tempo?** Diferente desse código que é praticamente instantâneo.

Às vezes teremos a necessidade de *ler um arquivo*, ou atualizar informações num *banco de dados*, chamar uma *API*, todas essas tarefas **levam tempo**, e *nem sempre* vamos querer *esperar* elas terminarem pra rodar o resto do nosso código.

Imaginando que temos uma página Web que tem uma tarefa que demanda tempo para terminar de executar, como por exemplo esse *while loop* abaixo de *1 bilhão de iterações*:
```js
console.log('oi')

i = 0
while (i < 1000000000) i++

console.log('tchau')
```

Nesse caso, nosso código vai *logar o "oi"* e vai *demorar um tempo considerável* (nada mais do que uns 3 segundos no máximo) para finalmente logar o nosso *"tchau"*.

É claro que é um exemplo meio estúpido, mas imaginando que isso não fosse só um loop inútil e sim uma chamada a uma API, o que aconteceria com a nossa página Web? Podemos ver isso na prática abrindo nosso `index.html`

**Isso é só para vocês entenderem do porquê de às vezes querermos rodar algumas tarefas em paralelo.**

##### Lembram do SetTimeout?

Vamos entender um pouco de como o JavaScript é processado no navegador e pelo NodeJS, e podemos usar setTimeout pra visualizar como às vezes as coisas não são executadas de maneira síncrona:
```js
// demo.js

console.log('Passo 1')

setTimeout(_ => console.log('Passo 2'), 3000) // Agenda um log pra daqui 3s

console.log('Passo 3')
```

O uso do setTimeout aqui vai agendar o log para ser executado depois de 3 segundos, claro, e a função passada (*callback*) vai ficar agendada "em paralelo" enquanto continuamos a processar o resto do código.

**Mas e se a gente definir o tempo de espera como zero milisegundos?**

Podemos fazer o mesmo experimento! Mas parece que o *resultado continua o igual* né? É aí que a gente começa a entrar no **como** o JS faz esse agendamento de tarefas, e chegamos no **Event Loop**.


## Event Loop

Para que a gente entenda *como se comporta o código JavaScript* que escrevemos *no detalhe*, algo fundamental é conhecermos o **Event Loop**.

Infelizmente acredito que *não seria tão produtivo eu entrar em todos os pormenores* sobre como funciona esse Event Loop, então vamos *entender superficialmente* como o JavaScript é interpretado no Browser, apenas o suficiente para progredirmos no conteúdo seguinte.

Pra executar o nosso código JavaScript, tanto o *navegador* quanto o *NodeJS* estão sempre rodando um *Event Loop* de uma única thread (*single-thread*). Nessa thread, nosso código é interpretado linha a linha, mas ele também pode **agendar tarefas**, como vimos, para serem executadas mais tarde.

Ele funciona realmente como um *loop*, sempre lendo as instruções passadas e esperando novas. No caso do `setTimeout`, o JS agenda essa "tarefa" e aguarda até que o tempo necessário tenha passado para executar, e ela é executada *no próximo loop*, i. e. quando todas as demais instruções tiverem rodado.

**Podemos ver isso na prática se juntarmos o setTimeout com nossa "tarefa pesada"**
- `demo2.js`

> Recomendo que deem uma olhada mais à fundo no *Event Loop* caso se tenham interesse em entender mais de *JavaScript*, deixei umas **referências interessantes** para isso no final dessa aula.

---

*Tarefas que levam tempo* aparecem o tempo todo na programação, e *diferentes linguagens* terão *diferentes maneiras* de lidar com isso, apesar de ser sempre algo semelhante.

Uma das formas que o JS lida com essas tarefas demoradas é com o uso de **Promises**

## Promises

> "O objeto **`Promise`** representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante"

Uma **Promise** é um *tipo* do JavaScript, como strings e números, que representa um valor que ainda não é conhecido. Uma vez que a operação é concluída, essa Promise pode ser "resolvida" e assim retornar o valor final.
- Esse valor final pode ser de sucesso ou falha, além da possibilidade de estourar um erro

Uma das formas de lidar com a resolução de *Promises* é chamando o método `.then()` sobre ela, como vimos brevemente no finalzinho do semestre passado. Essa função recebe como parâmetro um *callback*, portanto outra função, dessa vez com o objetivo de instruirmos *o que deve ser feito com o resultado* daquela *Promise*.

No exemplo abaixo fazemos uma chamada a uma API usando o `fetch()`, e chamadas HTTP sempre retornarão *Promises*, por serem tarefas demoradas. Podemos concatenar um `.then()` no retorno do *fetch* para dizer o que queremos fazer assim que resolvida:
```js
 // demo3.js

const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Falha na requisição', error))
```

Acontece que, nesse caso acima, queremos ler o JSON de resposta da API, por isso chamamos o `.json()` sobre a resposta, e essa função por sua vez também retorna uma *Promise*. O legal é que conseguimos *concatenar* chamadas `.then()` pra lidar com o retorno de cada *Promise*.

Como podemos ver, também é possível conectarmos uma chamada `.catch()` para lidar com retornos malsucedidos das *Promises* que temos.

**Se esse exemplo for muito complicado, podemos ver como poderíamos criar uma Promise!**

```js
// demo4.js

const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("oi"); // retornar com sucesso
    }, 3000);
});

minhaPromise
    .then((res) => console.log(`deu sucesso: ${res}`))
    .catch((err) => console.log(`deu erro: ${err}`));
```

Ao criar a **Promise**, ela pede que passemos um *callback* como parâmetro oferece pra gente dois argumentos para nossa função, o `resolve` e o `reject`, que são duas *funções* para *resolvermos* nossa *Promise* com sucesso ou falha.

---

# Async/Await

**Show!** Muito legal essa parada toda de *Promises* e tal, mas isso tudo não podia ser mais fácil? Essa profusão de *then*s pode rapidamente tornar nosso código *difícil de entender* e dar manutenção. E se eu não quiser rodar meu código de maneira assíncrona?

Assim chegamos no **Async/Await**, que nada mais é do que uma *sintaxe* especial que o *JavaScript* oferece pra gente para fazermos com que nosso *código assíncrono* seja lido *como se ele fosse síncrono*.

Basicamente a palavra-chave `await` serve para esperarmos pelo retorno de uma *Promise*, com a única restrição de que esse `await` seja sempre usado em funções marcadas com a palavra-chave `async`.

Vamos fazer a mesma chamada que vimos pra API, mas dessa vez encapsulando nosso código numa função **async** e utilizando o **await** para aguardar o retorno dos trechos que nos retornam *Promises*:
```js
// demo5.js

const url = 'https://jsonplaceholder.typicode.com/posts/1'

async function chamaApi() {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
}

chamaApi()
```

- Uma função *async* nada mais é do que a mesma função mas que retorna uma *Promise* do valor final
- Ainda assim, a maior utilidade da função *async* é permitir que consigamos usar o *await* para lidar com as instruções de maneira síncrona.

---

### Agora podemos exercitar o que vimos

Que tal pegarmos aquelas *APIs abertas* que vimos anteriormente e tentar fazer algo com elas na linha de comando? Podem usar a *criatividade*, gostaria que tentassem fazer algum projetinho simples que buscasse informações a partir de chamadas de *APIs*.

---
### Referências interessantes
 - https://youtu.be/cCOL7MC4Pl0?si=diQeBTz8D3VYtkxI
	 - Melhor explicação que já vi do **Event Loop** no JS. Infelizmente é uma talk em inglês, mas o vídeo está legendado em PTBR!
 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
	 - Para entender mais sobre Promises