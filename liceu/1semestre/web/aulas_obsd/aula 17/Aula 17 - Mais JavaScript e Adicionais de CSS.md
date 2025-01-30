
### Hoje vamos continuar o JavaScript!

Iniciamos finalmente no JavaScript na aula passada e hoje vamos continuar!
- Vou introduzir alguns *conceitos novos* de maneira *prática* - por meio dos nossos **projetinhos**
- E trazer um *temperinho de CSS* extra que não tínhamos visto ainda.

#### Mas antes disso, não esqueçam do relatório da eleição!
A entrega é até **domingo**, dia **12/05**. Todos vocês estavam presentes na aula passada então sabem o que precisa fazer, e caso não se lembrem, podem ver no começo do conteúdo da aula no *Drive* ou pelo link do *Obsidian*:
- [[Aula 16 - Introdução ao JavaScript]]

---

# Antes de voltarmos ao JS: Mais CSS

Vocês me lembraram na aula passada do conteúdo que comentei apenas em sala - *Adicionais de CSS* - e acho que é importante darmos uma passada rápida nisso, então vou deixar abaixo o conteúdo que eu já havia preparado.
- Vamos *apenas dar uma olhada por cima*, mas gostaria que *dedicassem* um tempo dos seus *estudos* pra abrir esses **links** e brincar com esses conceitos de *CSS* que não vimos à fundo
- *Pretendo usar* alguns desses conceitos *com frequência*, então gostaria que estivessem bem entendidos sobre

> Abaixo o conteúdo que já havia preparado para aulas anteriores

Seria super legal passarmos um semestre todo vendo a infinidade de coisas que podemos fazer com HTML e CSS, mas infelizmente não temos esse tempo todo.

Por isso eu gostaria de **introduzir pra vocês algumas coisas que não vimos** usando **HTML** e **CSS** para *instigar um pouco a curiosidade* e também pra *expandir a noção de vocês do que é possível* de fazer utilizando só essas duas ferramentas.

#### Exercitando a independência e busca por novos conceitos
Para introduzir esses tópicos novos, vou estar usando as páginas do [W3 Schools](https://www.w3schools.com), que tanto temos visto desde o começo do semestre. Isso porque não há necessidade de criar novos exemplos desses tópicos todos, já que já existem tantos na Internet, e também pra mostrar pra vocês **como é fácil usar a internet pra estudar e encontrar novos conceitos**.

### [Seletor :hover](https://www.w3schools.com/cssref/sel_hover.php)
- Usado para *botões*, *dropdowns* e outros casos
- Pode *alterar o estilo* de um elemento *quando passamos o cursor por cima*

### [Transições](https://www.w3schools.com/css/css3_transitions.asp)
- Podemos estipular um *tempo* para *transicionar entre estilos* determinados
- Com diferentes *opções de suavização* para a transição

### [Animações](https://www.w3schools.com/css/css3_animations.asp)
- É possível criar uma *sequência de estilos* a serem aplicados em um certo *tempo* para criar uma animação
- *Declaramos* uma animação como uma *regra*, igual a uma media query

### [Dropdowns](https://www.w3schools.com/css/css_dropdowns.asp)
- Nada além de uma maneira de *exibir um conteúdo escondido* usando o seletor `:hover`
- É comumente usado para *menus* com mais "camadas"

**Para entender alguns dos exemplos** contidos nessas documentações, é interessante dar uma lida sobre as propriedades *position* e *display* e seus possíveis valores e como cada um se comporta, por exemplo:
- `display: inline | block | inline-block | none | flex | grid`
- `position: static | relative | fixed | absolute | sticky`

Links da W3 Schools para [CSS Position](https://www.w3schools.com/css/css_positioning.asp) e [CSS Display](https://www.w3schools.com/css/css_display_visibility.asp)

---

# Agora ao que interessa: mais projetos em JS

### Dark Mode

**Já fizemos** o projetinho de *dark mode* na aula passada, mas gostaria de cair um pouco de cabeça no código que eu fiz rapidamente para:
- *Revisarmos* o que vimos na aula passada
- Darmos uma olhada em como *eu* solucionei *esse problema*
	- Lembrando que não existe *resposta certa* pra Programação Web
	- Tem o que *funciona*, o que *não funciona*, *boas práticas* e *más práticas*
- **Pontos interessantes** sobre minha solução:
	- Uso de *variáveis CSS* ([mais sobre no W3 Schools](https://www.w3schools.com/css/css3_variables.asp))
	- Uso do evento `onkeydown` para trocar o tema usando o *teclado*
	- Propriedades relacionadas ao *background-image*

### Color Picker

Vamos tentar fazer um *color picker* aleatório! Para começar, vamos usar como base o `button.html` que temos de exemplo e criar um novo projeto nosso. Ele vai funcionar muito como o *dark mode*, mas ao invés de ligar e desligar entre escuro e claro, nosso botão vai *gerar uma cor aleatória* para o fundo da página.

#### Vejamos juntos em sala como fazer
Para conseguirmos fazer esse projeto, além do que vimos acima, precisaremos usar:
- Arrays (listas)
- Math.random() - gerar número aleatório entre 0 e 1
- Math.floor() - arredondar número pra baixo

### Contador

![[contador.png]]

Algo como isso aqui acima:
- Um botão de *+* para somar ao contador
- Um botão de *-* para subtrair do contador
- Um botão de *reset* para voltar o contador para zero

---

## Proposta de projeto

Esse é um dos motivos de eu querer que vocês entregassem logo (**domingo 12/03**) o *relatório do projeto da urna*, gostaria de encerrar logo esse assunto para pularmos pra próxima atividade, bem mais divertida

Gostaria de propor uma *atividade avaliativa* com vocês de um **jogo**:
### Pedra, papel e tesoura 
Vamos fazer uma página única para jogarmos *pedra, papel e tesoura*. Usaremos o *JavaScript* para nossa página ficar *dinâmica* e ter uma *lógica*, capaz de possibilitar que joguemos com uma CPU que tomará decisões aleatórias.

---

### Referências Interessantes:

 - Mais sobre propriedades de **background**:
	 - [CSS Background no *W3 Schools*](https://www.w3schools.com/cssref/css3_pr_background.php)
	 - [CSS Background-image no W3 Schools](https://www.w3schools.com/cssref/pr_background-image.php)
- [Variaveis CSS no W3 Schools](https://www.w3schools.com/css/css3_variables.asp)
- 
