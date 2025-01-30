
#### Lembrando em primeiro lugar da entrega do trabalho!
Hoje é a data limite! Por favor, até o final dessa aula todas as entregas já devem ter sido feitas.

Vi que não tivemos muitas entregas da carteirinha também, gostaria de ter isso salvo pra usar em atividades futuras.

Para informações sobre a **entrega avaliativa** da próx. aula: [[Guia de Viagem]]
>O link acima funciona só no Obsidian caso tenha os dois arquivos abertos em um mesmo 'cofre'(vault)

---

Hoje veremos um conceito que uso demais no CSS, porque pra mim é *muito mais fácil* de **organizar o conteúdo** dessa maneira.

## Essa aula vai ser mais prática

Hoje **não teremos slides!** Apesar de serem uteis pra visualizarmos um pouco dos conceitos, como acredito que *estamos bem entendidos de HTML* e já sentimos umas dores com o layout da página, acho que pra vocês vai ser mais interessante se *abrirmos o VSCode e sairmos codando*. 


---

# Vamos entender um pouco de conceito

Vocês vão ver que a *Flexbox* organiza o conteúdo de uma maneira bem específica e é bom que vocês entendam esse conceito, porque assim fica simples de organizar qualquer conteúdo.

> Assim que se acostumarem com a lógica da Flexbox, vão conseguir fazer qualquer layout de página

**Para começar** com Flexbox, precisamos de um **'container'**. Vamos escolher o elemento que fará o papel de container baseado na situação, vamos ver o seguinte contexto:
```html
<body>
    <div class="flex-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        <div>5</div>
        <div>6</div>  
        <div>7</div>
        <div>8</div>
    </div>
</body>
```
Esse é um exemplo básico, só pra realmente *entendermos como funciona a Flexbox*
- Vamos **encaixotar** o conteúdo da nossa página (container)
- Vamos **determinar como exibiremos** os elementos **filhos** dessa caixa
- Poderemos ter diversas **caixas dentro de outras caixas**
	- É possível **mudar como exibimos** o conteúdo de **cada caixa**

Vamos estilizar o suficiente só pra ajudar na visualização dessas caixas:
```css
.flex-container {
	background-color: dodgerblue;
}

.flex-container > div {
	background-color: white;
	width: 100px;
	margin: 10px;
	text-align: center;
	line-height: 75px;
	font-size: 30px;
}
```
Aqui nosso conteúdo já está organizado de maneira que cada `div` ocupe uma linha, é um comportamento comum do `display: block` que é aplicado a divs, de maneira que mesmo que ela não ocupe 100% da largura da sua linha, ela vai fazer uma quebra pra jogar o resto do conteúdo abaixo.

*Nós não queremos isso!*
Vamos fazer com que cada *div* ocupe o espaço relativo a seu conteúdo e permita que demais elementos venham em seguida.

---
### Mas antes!
Vamos entrar em uma tangente rapidamente. Como vocês podem ver, nossa página tem algumas inconsistências bem aparentes:
- Um padding do `body` até nosso conteúdo
- Primeiro e o último elementos estão com sua margem vazando do pai

Esse é o tipo de coisa que pode acontecer e que, pior ainda, pode variar muito entre navegadores. Como cada navegador é um interpretador de código HTML e CSS, muitas vezes algo que fica certinho no Chrome pode aparecer cagado para alguém usando Edge.

Lógicamente **isso não é um problema novo**

Assim que desenvolvedores começaram a sentir essa dor da *discrepância entre como os navegadores interpretavam o conteúdo* das páginas, decidiram aplicar uma solução simples:
Basicamente vamos **nivelar o campo** para virmos com o conteúdo de maneira que a *diferença entre navegadores não impacte na forma como ele é exibido*, assim temos **total controle** sobre como queremos nossos elementos estilizados.

> Não existe uma regra de COMO devemos fazer esse reset, vai variar muito individualmente, então dependendo de preferência pessoal e de qual o tamanho da necessidade do projeto também

No nosso caso, podemos fazer algo simples:
```css
* {
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
	overflow: auto;
}
```
Assim tiramos qualquer margem e padding de elementos que as têm por padrão. Dessa forma **controlamos como vamos querer exibir** o conteúdo. Significa que é mais trabalho pra nós? *Talvez*. Mas eu também diria que assim fica bem mais fácil.

Existem também [arquivos padrão de Reset de CSS](https://meyerweb.com/eric/tools/css/reset/) para só importarmos no nosso projeto, e assim todos os navegadores devem interpretar da maneira mais próxima possível o conteúdo entre um e outro. *Isso não elimina possíveis bugs, mas reduz e muito*.

Para saber mais sobre o reset de CSS, temos aqui um [artigo da Alura sobre o Reset CSS](https://www.alura.com.br/artigos/o-que-e-reset-css)

---

## Maravilha!

Temos nossas *caixas dentro do container*, agora pra começar a usar *Flexbox* transformando o nosso container *de fato* em um **container flex**.

**Para isso, nós usamos a propriedade `display: flex`**
```css
.flex-container {
	display: flex;
}
```
Por si só, isso já vai aplicar no nosso *container* todos os *comportamentos default* de um container de flexbox:
- Elementos exibidos **em linha**
- Alinhamento **à esquerda**

Isso não é pouco importante. Nós *podemos escolher como* queremos exibir nosso conteúdo, então se quisermos por exemplo manter da maneira que tínhamos antes, trazemos os elementos na forma de **coluna** usando o:
### Flex-direction
```css
.flex-container {
	display: flex;
	flex-direction: column;
}
```
Além do `column`, temos também o comportamento padrão de `row`, bem como suas versões *reversas*.
![[Pasted image 20240324193739.png]]
```css
.container {
	flex-direction: row | row-reverse | column | column-reverse;
}
```
> No nosso caso, vou manter o padrão de `row` para o exemplo

---
### Flex-wrap
```css
.flex-container {
	display: flex;
	flex-wrap: wrap;
}
```
O *flex-wrap* permitirá que a gente quebre o *conteúdo que extrapolar os limites do container* para a linha de baixo, sem muito segredo aí!
![[Pasted image 20240324194911.png]]
```css
.container {
	flex-wrap: nowrap | wrap | wrap-reverse;
}
```
---

### Justificar e alinhar conteúdo

Uma das funcionalidades mais importantes e úteis do *Flexbox*, principalmente para **responsividade**.
#### Justify-content
Podemos alinhar o conteúdo *no eixo X*, na *sua largura*, usando o `justify-content`
```css
.container {
	justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```
Uma imagem exemplificando perfeitamente o uso do `justify-content` [aqui](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)!

#### Align-items
Podemos alinhar o conteúdo *no eixo Y*, na *sua altura*, usando o `align-items`
```css
.container {
	align-items: stretch | flex-start | flex-end | center | baseline;
}
```
Uma imagem exemplificando perfeitamente o uso do `align-items` [aqui](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)!

> Importante! Quando temos um display flex em direção de coluna, é como se deitássemos nossa caixa que estava na horizontal para a vertical, então trocamos o justify-content para alinhar o eixo Y e o align-items para alinhar o eixo X.

---

# Isso foi o básico

Vimos o básico de Flexbox, pode ser difícil de ter uma noção melhor das possibilidades agora com isso, mas podemos tentar implementar isso em alguma necessidade nossa, que tal darmos uma incrementada naquela carteirinha?

- Eu imagino que vocês já devam estar de saco cheio dessa carteirinha, 3 aulas já, mas podemos dar uma revisitada naquele exemplo meu pra darmos uma melhorada nele usando *Flexbox*. 

Estou deixando finalmente o CSS da minha carteirinha de exemplo no Drive da aula de hoje, podemos puxar esses arquivos pra trabalhar em cima.

### Bora lá!

---

## Hoje temos lição de casa!

Tenho um **jogo** que eu acho que vocês vão curtir, e deixo ele como um desafio para ver se vocês conseguem estralar a *Flexbox* pra resolver os níveis.

- Gostaria de saber **qual o nível de inglês de vocês?**
	- Isso é bem importante pra saber que tipo de conteúdo que consigo jogar no colo de vocês pra estudarmos

> Link para o jogo dos sapinhos de Flexbox: https://flexboxfroggy.com

---

### Referências interessantes:
- [Artigo da Alura sobre o Reset CSS](https://www.alura.com.br/artigos/o-que-e-reset-css)
- [W3 Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Guia completo de Flexbox em inglês](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
	- Apesar do W3 acima ser sempre muito bom, no caso aqui de Flexbox eu fortemente recomendo essa referência aqui, que mostra de forma simples e com imagens as diferentes possibilidades que temos usando Flexbox
- [Flexbox Froggy](https://flexboxfroggy.com)
	- Um jogo que ajuda a aprendermos e exercitarmos Flexbox de uma maneira super interativa e divertida