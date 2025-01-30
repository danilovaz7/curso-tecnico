#### [Link para o Miro](https://miro.com/app/board/uXjVNiW0kM0=/?share_link_id=666359475380)

"E aí tropa? Chegaram a brincar mais com o HTML em casa? Até parece, né"

### Recapitulando

- O HTML é uma linguagem de marcação
- É apenas texto envolto em tags, lembram como eram as tags né?
- Estrutura o conteúdo do site
- É interpretado pelo navegador (browser)
- Necessário para um desenvolvedor Frontend 
	- Em cima disso que se aprende coisas mais avançadas
- Precisa de CSS para estilo
- Precisa de JavaScript para animação e lógica
	- Como para abrir dropdowns, menus, exibição dinâmica de elementos da página etc
	- **SPAs** - Single Page Applications

---

### Hoje vamos ver

- Configuração básica de ambiente, mais especificamente da IDE
- Tags de estruturação da página
- Revisão da tag âncora
- Ferramentas de desenvolvedor no navegador
- Exercitar um pouco mais de HTML

---

### Mas antes disso...

- Gostaria de conversar algumas coisas com vocês sobre como vamos organizar o conteúdo que eu vou passar esse semestre
- É a primeira vez que eu faço algo assim, então pode ser que pra vocês não seja a melhor experiência do mundo, mas estou seguindo meu instinto e usando as ferramentas que eu mais acho que seriam interessantes
	- Tanto pra eu organizar meus pensamentos melhor, daquele jeito TDAH que nois gosta
	- Quanto pra vocês terem uma maneira dinâmica de poderem acompanhar e revisar posteriormente
	- Espero que eu consiga manter a qualidade desse conteúdo, vou me esforçar pra isso

#### Miro
- Esse vocês já viram, pretendo tentar sempre fazer slides para o conteúdo não-prático para que seja mais dinâmico e interativo pra vocês
- Tem muito potencial pra dinâmicas interessantes, só preciso descobrir onde encaixá-las
- Gostaria de deixar ainda mais organizado, mas sou limitado pela minha conta básica no site
	- Estou vendo com a coordenação de conseguir a assinatura do software pra conseguir manter as aulas separadinhas assim e vocês sempre poderem acessar sem dificuldades

#### Drive
- Não gostaria de recorrer muito ao drive, mas acho que será a melhor maneira de disponibilizar pra vocês facilmente os arquivos e links das aulas enquanto não descobrimos algo melhor

#### Obsidian
- Definitivamente o que estou mais animado para usar, mas também é o que eu tenho menos experiência usando
- Basicamente serve para gerenciar arquivos de markdown (`.md`), exatamente como os arquivos, por exemplo, de um `README.md` no [GitHub](https://github.com/liammaricato/css-theme-switcher/blob/master/README.md)
- Estou usando esse aplicativo pra escrever minhas anotações da aula e estou usando ele nesse exato momento (==oi sala==)
- Espero conseguir disponibilizar pra vocês arquivos assim sempre nas nossas aulas
	- O conteúdo deles nem sempre vai ser do mesmo jeito ou da mesma qualidade, vai depender de muitos fatores
	- Importante pra vocês conseguirem revisar e estudar em casa sem ficarem desesperados porque moscaram e não anotaram nada na aula
- E, falando em anotações, pedi que instalassem também o Obsidian na máquina de vocês para poderem fazer as anotações próprias de vocês durante a aula
- Infelizmente algumas features do Obsidian são pagas, mas para o que precisamos ele serve bem
- Podem guardar e puxar os arquivos do Google Drive sempre que preciso


---

#### Vamos configurar algumas coisas

- Usando o VSCode! Já que vocês choraram tanto na última aula com o bloco de notas
- Extensões ajudam a gente no Visual Studio adicionando algo que não vêm por default

**Vamos lá!** Vou usar meu projetinho da aula passada como exemplo:

#### Live Server
- Muito fácil e muito interessante para o desenvolvimento de Frontend
- É também muito usado por desenvolvedores Frondend
- Adiciona algo que chamamos de **hot-reload**
- (Demonstração do Live Server)

#### IntelliCode
- É da própria Microsoft e usa machine-learning
- Não vai ser tão útil pra nós agora, mas vai ajudar com o JavaScript mais pra frente
- Oferece highlight de sintaxe e documentação para JavaScript, Java e Python

#### IntelliSense for CSS class names in HTML
- Não vamos ver funcionando ainda, talvez na próxima aula por conta do CSS
- Basicamente o que faz é cachear os nomes de classes que temos e autocompleta nas nossas tags HTML

#### Outras paradinhas estéticas
- ##### Dracula
- ##### Material Icon
- ##### Pets

#### Emmet
- Pelo que entendi, o emmet já vem por default no VSCode e uma das funcionalidades foi o que comentei na semana passada de autocompletar a carcaça de um arquivo HTML
- Demonstração criando um novo arquivo HTML e criando tags facilmente usando `TAB`
	- Comentar o uso do `lang="en"` na tag de `html` e alterar pra `pt-br`
	- Lembrar do meta charset
	- meta viewport é só pra determinar algumas questões de escala inicial do dispositivo no qual estamos abrindo nossa página e estipulando uma escala inicial de 1.0
	- Exemplo de um `h1` apertando `TAB`
	- `ul>li*3`

---

### Vamos começar então

- Na última aula vimos muitas tags HTML já, agora é importante entender a diferença entre as tags semânticas e não-semânticas
	- É algo relativamente simples: tags semânticas contém informação sobre o tipo de conteúdo que estamos envolvendo nelas
	- Tags não-semânticas não deixam explícito o conteúdo nem a maneira que queremos dispor esse conteúdo
	- Nós já vimos os dois tipos de tags na semana passada, só não demos nome aos bois
		- Uma tag `h1` diz que estaremos adicionando um cabeçalho e o navegador interpreta dessa mesma maneira, deixando o texto maior e em negrito
		- Uma tag `span` não diz **nada** sobre o conteúdo nela, mas essa flexibilidade pode ser útil para criarmos conteúdos personalizados
			- Nesse caso aqui, eu vou fazer algo burro pra mostrar pra vocês:

```html
<h1>Isso é um cabeçalho semântico</h1>
```
> Isso claramente é um cabeçalho e será exibido dessa maneira
```html
<span style="font-size: 2em; font-weight: bold;">
	Isso é mesmo um cabeçalho?
</span>
```
> Isso é um span, que não formata o texto contido nele de nenhuma maneira especial, mas que eu adicionei propriedades CSS para fazer com que ele se comporte como um h1, assim vocês conseguem ter uma noção de como funciona


#### Tags para estruturação da página

- Poderíamos usar `div`s para organizar partes da página e colocarmos o conteúdo de acordo:
	- [Exemplo: Liceu Santista](https://www.liceusantista.com.br)
- Temos uma maneira **semântica** de fazer isso, deixando bem explícito tanto pra nós quanto para o navegador o tipo de conteúdo e como queremos dispor isso
	- Que tal fazermos isso?


**Vejamos como nós estruturamos a página com as tags semânticas:**

| tag            | função                                                                         |
| -------------- | ------------------------------------------------------------------------------ |
| `<article>`    | Como um **artigo**, agrupa um conteúdo independente                            |
| `<aside>`      | Usado como uma **barra lateral**                                               |
| `<details>`    | **Detalhes adicionais** que, geralmente, podem ser mostrados ou escondidos     |
| `<figcaption>` | Define uma legenda para o elemento **figure**                                  |
| `<figure>`     | Especifica um conteúdo independente com **imagem**: ilustrações, diagramas etc |
| `<footer>`     | **Rodapé** da página, geralmente o último elemento da página                   |
| `<header>`     | **Cabeçalho** da página, geralmente posicionado no topo                        |
| `<main>`       | Especifica o conteúdo **principal** de um documento                            |
| `<mark>`       | Define texto **destacado**                                                     |
| `<nav>`        | Às vezes abaixo do header, às vezes acima, usado como **menu de navegação**    |
| `<section>`    | Agrupamento de uma **seção** do documento, geralmente com um título            |
| `<summary>`    |                                                                                |
| `<time>`       |                                                                                |

![[Pasted image 20240312134725.png]]

- **OBS:** Importante comentar sobre o agrupamento de section > article ou article > section. Não existe muito uma regra, depende do caso.

#### Criemos então um novo arquivinho pra nós
- Abrir arquivo novo e montar ele até ficar igual ao `layout_demo.html`
- Adicionar tag `style` e os poucos incluir um CSS para explicar estruturação da página e deixar mais bem visível
- Usar ferramentas de desenvolvedor do navegador para compreender a estruturação, margens etc

- **Fazer com que a barra de navegação se posicione à esquerda**
```css
nav {
	float: left;
}
```

- **Fazer com que a barra de navegação se posicione à esquerda**
```css
nav {
	float: left;
}
```

- **Isso gera o problema do rodapé ocupar o espaço restante, como fazer pra ele ir pra baixo?**
```css
footer {
	clear: left;
}
```

#### Vamos adicionar uns estilos!

- **Vamos deixar o conteúdo mais apresentável:**
```css
header {
	background-color: #666;
	padding: 30px;
	text-align: center;
	font-size: 35px;
	color: white;
}

nav {
	float: left;
	width: 150px;
	background: #ccc;
	padding: 20px;
}

article {
	float: left;
	padding: 20px;
	background-color: #f1f1f1;
}

footer {
	clear: left;
	background-color: #777;
	padding: 10px;
	text-align: center;
	color: white;
}
```


- **Algumas coisas ainda parecem um pouco estranhas...**
	- Pra arrumar altura da section, podemos adicionar uma altura fixa ao conteúdo
		- `height: 300px;` para a `nav` e para o `article`
	- Vamos fazer o conteúdo da section ficar flexível
		- mudar `width` da nav pra `30%` e do article pra `70%`
		- pra isso funcionar, precisamos adicionar o `box-sizing: border-box`

- **Toques finais**
```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

nav ul {
  list-style-type: none;
  padding: 0;
}
```

---

### Desafio da aula - Guia de Viagem

- Fazer uma página como essa, com o conteúdo estruturado e exibindo informações sobre uma cidade que você já visitou
- Podem utilizar um pouco de CSS, não será obrigatório, podem tirar dúvida conforme os desejos de vocês, mas não tentem se aventurar muito, apenas espaçamento básico, cores, fontes etc
- Uma barra de navegação - lateral ou acima do conteúdo - onde poderemos navegar para outras 2 páginas com outras duas cidades
- Gostaria de pelo menos mais uma **section** no site, essa segunda pode ter apenas mais texto mas gostaria que tivesse também algum outro tipo de mídia como uma imagem. Para aqueles que têm facilidade, deixo o desafio de adicionar um vídeo do Youtube sobre a cidade ou um mapa do Google Maps
- Não espero que tudo que vocês façam funcione de primeira ou fique bonito, é preciso bastante CSS pra ficar um site minimamente apresentável e, mais importante, **tem maneiras ainda melhores de estruturar o site**, mas vamos ver isso mais a fundo estudando CSS.

---
### Referências interessantes

- [Formatação básica no Obsidian](https://publish.obsidian.md/help-pt-br/Edição+e+formatação/Sintaxe+de+formatação+básica)
- [Extensões comuns no Visual Studio Code](https://www.alura.com.br/artigos/extensoes-vs-code-descubra-as-mais-usadas)
- [Entendendo Border Box](https://www.alura.com.br/artigos/entendendo-como-funciona-box-model-e-o-box-sizing?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20987928442&hsa_grp=157916200306&hsa_ad=689395782879&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW_oXv_taYCjPVPmQepbgGvB7qhiCyKNVQ3d-hLkK2w-uS_sLdNGS0MaArKkEALw_wcB)
- [W3 - Tags semânticas](https://www.w3schools.com/html/html5_semantic_elements.asp)