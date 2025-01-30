
> Demos uma desacelerada nas últimas semanas por conta da página da eleição do grêmio, e fiquei muito orgulhoso com o resultado, mas por isso precisamos recuperar o tempo perdido!

## Antes de começar o conteúdo

Cheguei a comentar sobre a possibilidade de transformarmos a página do **Portfolio** numa atividade avaliativa a ser entregue, mas depois dessas últimas aulas dedicadas ao projeto da *urna para o grêmio estudantil*, acredito que vai ser interessante, para recuperarmos esse tempo dedicado, transformar a *participação de vocês no projeto* na *avaliação* em si.

> Entrega do relatório: até 12/05 no Drive
> Pontuação máxima: 1.5

Vou *pontuar* a atividade da urna eletrônica seguindo os **critérios**:
- Entrega final da urna eletrônica: *0.75*
- Avaliação da participação em sala no processo: *0.25*
- Relatório do processo de desenvolvimento: *0.5*

Acredito que a maior parte dos itens seja autoexplicativo, mas **importante** sobre o *relatório a ser desenvolvido*: gostaria que descrevessem como foi o processo todo do desenvolvimento do projeto do ponto de vista de vocês. Não precisam ser extensos no conteúdo, podem ser diretos, mas gostaria que incluíssem os pontos: 
- Quais funcionalidades adicionamos na urna? De quais dessas você participou?
- Quais foram os desafios que encontramos?
- Em quais desses desafios você atuou ou tentou atuar?
- Houveram soluções para os desafios que encontramos? Quais?
- Qual sua avaliação sobre o projeto final? Pontos positivos e negativos?

#### A entrega do relatório!
A entrega deve ser feita no *Drive*, na pasta `atividades > eleições do grêmio > entregas de relatório`, onde cada um de vocês terá a **pasta própria com o primeiro nome**. Gostaria que fizessem em um arquivo `.md` para que eu consiga ler bonitinho no meu *Obsidian* em casa com meu tema fofo do dracula, então **estarei colocando isso como critério também**. Se possível utilizem ao máximo (dentro do que fizer sentido) as *formatações disponíveis* pra arquivos `.md`, como títulos, listas, linhas de quebra, **negrito**, *itálico*, etc.

##### Nossa, mas qual a necessidade disso?
Tarefas comuns no dia-a-dia de um programador *além de codar* incluem *refinar e descrever tarefas*, criar *documentações* e *resolver dúvidas de negócio*. Pra exercitarmos esse tipo de atividades, acredito que um relatório desse vai ser muito interessante. Eu sei que programadores geralmente são péssimos escrevendo, mas tentem ser caprichosos.

### Entrega do relatório até domingo, dia 12/05
Para eu ter tempo de corrigir até nossa aula de quarta.

---

# JavaScript

Já ouvimos bastante falar sobre o *JavaScript* desde o começo do curso isso é por um bom motivo, muito do que tem a ver com **Programação Web** hoje usa o JavaScript como *linguagem de programação*.

O **JavaScript** é:
- A linguagem de programação *mais usada no mundo*
- A *linguagem da Web*
- *Fácil* de aprender
- Não tem *nada* a ver com **Java**

O *JS* começou muito diferente de como é hoje, foi criado pra ser uma *linguagem de scripting* e *fácil de aprender* pra ser usada no navegador **Netscape**. Se chamava originalmente **Mocha** mas os gênios do marketing decidiram mudar pra algo mais parecido com o **Java**, que fazia muito sucesso na época.

Ele é mais *conhecido* por *construir aplicações Front-end*, mas hoje já é perfeitamente capaz de construir *Back-ends completos e escaláveis*. A linguagem hoje já se **desenvolveu muito além** do que era na criação.

>Pretendo chegar com vocês em Back-end usando JavaScript também!

##### "Tudo que pode ser feito com JavaScript, será feito com JavaScript" - Um maluco

#### Front-end
Todos os *Frameworks/bibliotecas mais famosos* para programação de Front-end:
- **React/Next**
- **Angular**
- **Vue.js**

#### Back-end
Com a criação do **Node**, hoje conseguimos criar aplicações *"server-side"*.

#### Mobile
*Frameworks* como:
- **Ionic**
- **React Native**

#### Desktop
Conseguimos até criar *aplicações Desktop* usando **Electron**.

---

## JavaScript para o Front-end

Gostaria muito de entrar nos detalhes sobre cada uma das coisas que comentei agora, mas era só pra dar um gostinho, infelizmente não temos muito tempo.

Acompanhando o que já viemos estudando sobre *HTML* e *CSS*, hoje vamos ver um pouco sobre como é o *uso do JavaScript no Front-end*.

O JavaScript é a *linguagem da Web* principalmente pelo fato de ser **a linguagem interpretada nativamente pelos navegadores**.

### E como rodamos JavaScript?

**Pelo navegador, obviamente!** Falamos sobre - e até vimos com o projeto da eleição - como o *JavaScript* consegue fazer *alterações na página* de maneira dinâmica, sem precisarmos recarregá-la, mas ele também tem diversas outras funções.

Vamos abrir nosso *interpretador nativo de JS*, no caso o **navegador**, e pra começar a brincar com o código é fácil: 
- Vamos abrir o `demo.html`, que é simplesmente uma página com uma *div* com o `id="demo"`
- Vamos abrir as *ferramentas de desenvolvedor* como já fizemos mil vezes: `F12` no Chrome ou ir em *inspecionar elemento*.
- E acessar o **Console** nas ferramentas de desenvolvedor
- Agora podemos *rodar comandos* nesse terminalzinho

Podemos fazer o básico:
- Executar *expressões* matemáticas
- Instanciar *variáveis*
- Declarar *funções*
- Podemos também rodar algumas funcionalidades nativas como *logs* e *alerts*

Podemos ter acesso ao conteúdo do nosso *HTML* e *CSS* pelo comando `document`, vemos que ele me retorna um *objeto* do nosso html todo. Conseguimos rodar *métodos* e manipular *atributos* desse 'document', por exemplo para trazermos algum elemento da nossa página pelo seu *id*:
```js
document.getElementById('demo');
```
E conseguimos *manipular o conteúdo* desse elemento, por exemplo, adicionando um texto ou uma tag *h1* dentro dessa *div*:
```js
document.getElementById('demo').innerHTML = 'Meu primeiro JavaScript';
document.getElementById('demo').innerHTML = '<h1>Olá</h1>'
```
Também é possível mexer no estilo desse elemento pelo `.style`, bem como adicionar e remover classes pelo `classList`:
```js
// Acessar estilos
document.getElementById('demo').style.fontSize = "35px";
document.getElementById('demo').style.color = "red";

// Acessar classes
document.getElementById('demo').classList.add('azul');
document.getElementById('demo').classList.remove('azul');
```

---

## E como adicionar JS a uma página?

Para adicionarmos código JS à nossa página, precisamos adicionar tags `<script>` no nosso *HTML*. Elas podem ser tanto no *header* quanto no *body* da nossa página - ou em ambos, mas o lugar que colocamos elas **faz diferença**.

Podemos abrir o exemplo `button.html`, que é uma página simples com um *button* (botão) centralizado. Esse botão não faz nada ainda, mas usando a tag *script* conseguimos declarar uma *função* para ser chamada quando o botão for clicado, por meio de um *evento*:
```html
<script>
	function ficaAzul() {
		document.body.style.backgroundColor = 'blue';
	}
</script>
```
#### Funções e Eventos
Uma *função* é um bloco de código JS, que pode executada quando for *"chamada"*. Uma maneira de chamar funções é por *eventos*, como quando o usuário clica num botão:
```html
<button onclick=ficaAzul()>
	ME CLIQUE!
</button>
```
Vimos também para o projeto da *urna eletrônica*, quando resolvemos o problema do redirect do formulário, o evento `onload`. Outros eventos comumente usados incluem: `onchange`, `onmouseover`, `onkeydown` e [outros](https://www.w3schools.com/js/js_events.asp).

### Também temos a maneira externa de declarar JS

Podemos externalizar nosso código JS para um *arquivo* assim como fizemos com o *CSS externo*. Posso criar um arquivo `script.js` e importar ele também com a tag *script*:
```html
<script src="script.js"></script>
```

---

## Vamos tentar algo simples

Gostaria de botar vocês pra quebrar a cabeça com um projetinho rápido: um *botão de dark mode*!

*Façam uma página* simples como essa que vimos do botão e adicionem um código *JavaScript* para que esse **botão**, ao ser clicado, transforme o tema da página em *dark*: o fundo da página precisa mudar para uma *cor escura*. Ao **clicarmos novamente** no botão, o fundo precisa voltar a sua cor original, para o *"tema claro"*.

Se conseguirem com facilidade, aqui vai um **desafio:** *estilizem a página!*
Em vez de mudarem o conteúdo pelas *propriedades CSS*, mudem pelas *classes dos elementos*, e também estilizem o resto:
- O **botão** precisa *mudar para uma cor escura*
	- Consequentemente o **texto** do botão precisa de uma *cor clara*
- Quem sabe alguma maneira **visual** de indicar se a página está com o **dark mode on**?

### Vejamos o resultado!
Fiz uma versão minha de como acho que ficaria uma página simples e elegante com esse exemplo do *"darkmode"*. Vamos comigo.

---

## Vejamos outros projetinhos



---
### Referências interessantes
- Colinha monstra de JavaScript: https://quickref.me/javascript.html