
### Conseguiram fazer a atividade?

- Gostaria de transformar essa atividade em avaliação
	- Quero aproveitar que vamos entrar em CSS hoje, pedir pra vocês darem uma caprichadinha na estilização da página
	- Gostaria também de ver diferenças entre as páginas das diferentes cidades, não apenas em questão de conteúdo, mas também de
		- Layout, estruturação (HTML) - podem adicionar mais *articles* com conteúdo sobre a cidade, usar de diferentes tags para o conteúdo, diferentes pesos te cabeçalho
		- Estilo (CSS) - podem mudar o estilo das páginas para combinar com a cor da bandeira dos países, ou trazer a barra lateral para a direita, para o topo, etc
- Já que **teoricamente** estamos entrando só agora em CSS, vou dar mais uma semaninha pra entrega da atividade, vou disponibilizar uma *pasta no drive* para entrega até *dia 27/03*
	- Assim vocês conseguirão tirar dúvidas comigo durante a aula até a entrega
- Caso vocês que estão um pouco mais **adiantados** já tenham feito tudo necessário pra entrega dessa atividade, sugiro que **não dediquem** essa semana toda deixando ela **melhor**
	- Acredito que valerá mais a pena pra vocês acompanhar essas aulas e tentarem fazer projetos **diferentes**, novos
	- Cada página vai ter suas necessidades diferentes pra exibirmos o conteúdo e ter que fazer páginas distintas vai ser mais interessante pra fixar esse conteúdo básico e ser capaz de moldar ele às necessidades do que fazer uma página só e ficar adicionando frufru
	- Se sentirem que estão sem inspirações para páginas novas, podem me pedir sugestões, vou fazer o melhor pra sempre ter alguma ideia pra vocês


---

## Vou desacelerar só um pouco

Estou *animadíssimo* pra chover conteúdo em cima de vocês e corrermos pra fazer sites fodas, seguindo o fluxo completo de HTML, CSS e JS **MAS**
- Preciso **respeitar o tempo** de alguns alunos, afinal, é a **primeira vez** que alguns de vocês estão vendo esses feitiços que estamos fazendo com código
- Não quero que fiquem gaps de conteúdo na cabeça de vocês
	- Muitas vezes pode acontecer de **passar batido algum conteúdo ou outro**, e como isso é **basilar** para tudo que vai vir depois (em frontend), precisamos que tudo esteja muito bem entendido


---

## Git e GitHub

- Aula passada quando comentei sobre o Google Drive, o Caio questionou sobre o uso do GitHub
- Fiquei inseguro quanto ao conhecimento de vocês sobre Git então gostaria de saber mais
	- *O quanto os professores explicaram sobre Git e GitHub pra vocês?*
- Posso tentar combinar com eles como seria melhor pra entrarmos mais em detalhe sobre o GitHub e entrarmos em consenso sobre onde organizaremos o conteúdo das aulas
- **POR ORA** já tomei o trabalho de reproduzir todos os arquivos que temos no Drive para o GitHub também, assim vocês já praticam o uso de Git e, no desespero, temos o Drive

---

## DEMO CSS

- Trouxe pra vocês uma demo daquele site que comentei praticamente todas as aulas (W3)
- Isso é pra vocês terem uma noção do que se faz com o CSS
	- Não é apenas corzinha e formato
	- CSS vai permitir formatarmos a página como um todo:
		- Posicionar elementos
		- Esconder e exibir elementos
		- Animações, transições


---

# Então vamos começar:

## CSS

- CSS significa Folhas de Estilo em Cascata
- CSS descreve como os elementos HTML devem ser exibidos na tela
- CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web de uma só vez
- Folhas de estilo externas são armazenadas em arquivos CSS (`.css`)

Há muito tempo, o HTML não foi *inventado* pra formatar a página, mas sim pra *descrever o conteúdo*. A *dor* que começou a surgir pros desenvolvedores na verdade foi *manter um monte de tags* e atributos pra estilização como a tag `<font>` nos arquivos de *cada página*. Em sites grandes, com muitas páginas, começava a virar um inferno ter o mesmo conteúdo de estilização em todos eles, e assim surgiu o *CSS*.
- **O CSS removeu a estilização de páginas HTML**


### E como fazemos CSS?

- O CSS é feito de **regras**: uma *regra CSS* consiste em um *seletor* e um *bloco de declaração*
	- **Seletor:** aponta para o elemento HTML que você deseja estilizar
	- **Declarações:** incluem uma *propriedade CSS* e um *valor*, separados por dois pontos
- **Declarações** CSS são *separadas por ponto e vírgula*
- **Blocos de declaração** são *cercados por chaves*

![[Pasted image 20240317182512.png]]


#### Seletores

Seletores são importantes, saber usar eles nas situações certas vai ajudar vocês a resolver diferentes problemas que poderão encontrar aí

| Seletor                     | Exemplo  | Descrição do exemplo                                |
| --------------------------- | -------- | --------------------------------------------------- |
| `#id`                       | `#nome`  | Seleciona o elemento com `id=nome`                  |
| **.classe**                 | `.azul`  | Seleciona todos os elementos com `class="azul"`     |
| **elemento.classe**         | `p.azul` | Seleciona apenas elementos `<p>` com `class="azul"` |
| *****                       | `*`      | Seleciona todos os elementos                        |
| **elemento**                | `p`      | Seleciona todos os elementos `<p>`                  |
| **elemento1, elemento2...** | `div, p` | Seleciona todos os elementos `<p>` e `<head>`       |

### Para aplicar o CSS na página

#### CSS inline
- Como vocês já vêm fazendo pra estilizar os elementos individualmente
- Bom pra introduzir CSS pra vocês mas é completamente ultrapassado, **não usem**
```html
<h1 style="color:blue;text-align:center;">Cabeçalho</h1>
```

#### CSS interno
- Como já mostrei pra vocês na aula passada
- Interessante para pequenos projetos ou para manter a página em um mesmo arquivo, **o uso é desencorajado**
```html
<head>
	<style>
		h1 {
			color: blue;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>Cabeçalho</h1>
</body>
```

#### CSS externo
- A partir de agora será interessante usarmos sempre isso
- Interessante para projetos maiores e para compartilhar o estilo entre páginas, **é considerado uma boa prática**

> index.html
```html
<head>
	<link rel="stylesheet" href="estilo.css">
</head>
<body>
	<h1>Cabeçalho</h1>
</body>
```
> style.css
```css
h1 {
	color: blue;
	text-align: center;
}
```

### Valores

#### Unidades de medida

**Medidas absolutas**
- *O uso é desencorajado*, diferentes telas exibirão esse conteúdo em diferentes tamanhos, isso pode zoar seu estilo
- Pode ser usado em casos onde sabemos o tamanho da tela do dispositivo em que será exibido
- Estou mostrando todas a título de curiosidade, mas realmente não tem necessidade nenhuma em saber as demais além de *pixels*

| Unidade | Descrição                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------- |
| cm      | centímetros [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_cm)                     |
| mm      | miímetros [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_mm)                       |
| in      | polegadas (1in = 96px = 2.54cm) [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_in) |
| px *    | pixels (1px = 1/96th of 1in) [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_px)    |
| pt      | pontos (1pt = 1/72 of 1in) [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_pt)      |

**Medidas relativas**
- As unidades relativas de medida especificam um tamanho relativo a outro tamanho específico
- Seu uso é *encorajado*, já que conseguem exibir um conteúdo dinâmico feito para *diferentes tamanhos* de tela
	- Ajudam a manter a *responsividade* do site
	- Não são os únicos meios de adicionar responsividade, veremos mais no futuro

| Unit | Description                                                                              |                                                                                   |
| ---- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| em   | Relativo ao tamanho da fonte do elemento (2em significa 2 duas vezes o tamanho da fonte) | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_em)         |
| ex   | Relativo ao `x-height`  da fonte atual (raramente usado)                                 | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_ex)         |
| ch   | Relativo ao tamanho do caracter "0" (zero)                                               | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_ch)         |
| rem  | Relativo ao tamanho da fonte do elemento pai                                             | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_rem)        |
| vw   | Relativo a 1% da largura do viewport*                                                    | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vw)         |
| vh   | Relative a 1% da altura viewport*                                                        | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vh)         |
| vmin | Relativo a 1% da menor dimensão do viewport*                                             | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vmin)       |
| vmax | Relativo a 1% da maior dimensão do viewport*                                             | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vmax)       |
| %    | Relativo ao tamanho do elemento pai                                                      | [testar](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_percentage) |
> As unidades em e rem são boas para criar layouts escaláveis.
> * viewport = o tamanho da janela do navegador. Se a janela de visualização tiver 50 cm de largura, 1vw = 0,5 cm.

#### Valores de cor

As cores em CSS podem ser especificadas pelos seguintes métodos:
- Cores hexadecimais
- Cores hexadecimais com transparência
- Cores RGB
- Cores RGBA (o A é de alfa)
	- O alfa é um número entre 0,0 (totalmente transparente) e 1,0 (totalmente opaco)
- Cores HSL
- Cores HSLA
- Nomes de cores predefinidos a depender dos navegadores

```html
<h1 style="background-color: #ff0000;">Cor hexadecimal</h1>  
<h1 style="background-color: #ff000080;">Cor hexadecimal com transparência</h1>  
<h1 style="background-color: rgb(255, 0, 0);">Cor RGB</h1>  
<h1 style="background-color: rgba(255, 0, 0, 0.3);">Cor RGBA</h1>  
<h1 style="background-color: hsl(360, 100%, 50%);">Cor HSL</h1>  
<h1 style="background-color: hsla(0, 100%, 50%, 0.3);">Cor HSLA</h1>  
<h1 style="background-color: red;">Cor com nome predefinido</h1> 
```


---

## Basicamente é isso

*CSS* no seu conceito é praticamente *só isso* mesmo, veremos mais algumas coisinhas avançadas ao longo das próximas semanas, mas o que vocês vão precisar agora é *como aprender uma língua nova*: **vocabulário e prática**
- Precisamos jogar vocês em desafios para sentirem as necessidades reais e problemas práticos para que precisemos solucionar
- Isso vai fazer vocês naturalmente gravarem as propriedades mais comuns e mais importantes
- Vai ensinar vocês a não dependerem de ninguém para resolverem os problemas (*apenas da internet*)
- E vocês se surpreenderiam como faz diferença vocês saberem **como** pesquisar, vai ser uma boa prática

> Isso não quer dizer que eu não vou ajudar vocês, estou aqui pra isso. Mas é interessante que, antes que vocês me chamem, se souberem como pesquisar a necessidade, tentem antes. Vocês se surpreenderiam com a quantidade de soluções que podem aparecer em documentações e artigos, além do StackOverflow  

---

# Se estivermos com tempo
*Se não rolar, faremos próxima aula*

Estou anexando uma *página HTML pronta* com um conteúdo que será usado para uma *carteirinha digital do Liceu* (é mentira mas já pensou?)

- O arquivo é o **carteirinha.html**

Nela temos o conteúdo que vai ser exibido na carteirinha e quero *adicionar um estilo* a essa carteirinha. Vamos dar uma olhada em como ficaria com estilo?

- Estou adicionando meu CSS prontinho que fiz em casa e ficamos com **isso**

### Conseguem fazer?

- Estarei aqui para ajudar, logicamente
- Não precisamos de nenhum absurdo, gostaria de uma estilização simples
- Vocês podem estruturar o conteúdo com valores fixos!
	- Veremos valores dinâmicos no futuro pra fazer um conteúdo flexível e *responsivo*, mas como queremos algo pequeno e contido, podemos usar pixels.
- Boas sugestões seriam:
	- Centralizar o conteúdo
	- Adicionar uma bordinha
	- Redimensionar a imagem

---

### Referências Interessantes

- [Artigo da Alura: Git e GitHub](https://www.alura.com.br/artigos/o-que-e-git-github)
- Como sempre, W3 schools:
	- [Sintaxe do CSS](https://www.w3schools.com/css/css_syntax.asp)
	- [Seletores CSS](https://www.w3schools.com/css/css_selectors.asp)
	- [Unidades de Medida CSS](https://www.w3schools.com/css/css_units.asp)
	- [Cores CSS](https://www.w3schools.com/css/tryit.asp?filename=trycss_color_values)
		- Aqui tem um exemplo interativo do W3 de cores que são a mesma cor mas usando códigos diferentes de cor, é interessante