
#### [Link para o Miro](https://miro.com/app/board/uXjVMYb0Yeo=/?share_link_id=719457480378)
### **Primeira metade da aula de *apresentações*:**

- ==Me chamo Liam, tenho 25 anos==
- Trabalho na área de programação há 4 anos
- Não tenho experiência como professor da maneira que estão me vendo hoje, mas já fiz muito próximo disso no passado
	- Garanto que tenho muito conhecimento pra compartilhar com vocês
	- Já dei aulas de robótica e programação de jogos para crianças de fundamental 2 e médio
- Sou programador Backend, hoje vamos falar mais sobre o que significa isso
- Sou técnico em informática pela ETEC, então aí uma curiosidade interessante. Gostaria muito de me basear no que tive no meu técnico para passar pra vocês, apesar de o meu técnico ser super defasado.
	- Comentando um pouco sobre o meu técnico e sobre o tipo de conteúdo que tive.

==**Gostaria de saber mais sobre os alunos**:==
- Nomes, idades, o quanto sabem sobre programação, quais suas aspirações com o curso.

---
### ==O que veremos em programação Web?==

- O conteúdo será **bem flexível**, até porque eu não tenho um curso inteiro montado pra vocês, então montarei ao longo do caminho
	- Respeitarei o conhecimento prévio de cada um, tanto no quesito de conteúdo quanto no avaliativo
	- Quero entender o nível de facilidade ou dificuldade de cada um e moldar as aulas de acordo

- Hoje o **mercado de trabalho** é bem focado em web, e quero que o conteúdo seja bem focado nas necessidades do mercado

- Não preciso dizer que **faremos sites**, com certeza teremos alguns projetos de sites, inclusive avaliativos
	- Lembrando que quero que as avaliações respeitem o tempo de cada um. Não ligarei muito para notas, mas não falem pra ninguém que eu disse isso
	- Quero que as avaliações sirvam como incentivo para exercitarmos o conteúdo passado e para me ajudar a entender as dificuldades de cada um para resolvermos juntos

- Trabalhar em **conjunto com demais matérias** para trazer um conteúdo unificado

- Considerando o fato de que a sala é pequena
	- Acho que conseguiremos nos enturmar bem, conhecer bastante uns aos outros
	- Conseguirei produzir um conteúdo mais moldado pras necessidades individuais de cada um

- Acredito que conseguiremos ir bem longe no conteúdo, gostaria de chegar no final do semestre com cada um de vocês com o próprio sitezinho **BONITO**, com diferentes páginas, responsivo e consumindo APIs. Aos poucos vamos entender o que cada uma dessas coisas significa.
	- Infelizmente não tive tempo para produzir um *DEMO* pra vocês de um sitezinho pra vermos como ficaria e como seria legal esse tipo de projeto
	- ~~Me comprometo a trazer na próxima semana algum exemplo~~ vai ser quando eu conseguir


---

### ==Programação Web==

**Reflexões iniciais:**
- O que vocês entendem por Programação Web?
- Que tipo de problemas a programação web soluciona? Pra quê vamos usá-la?
- Como programamos na web? Que ferramentas usamos para isso?

**E o que seria Programação Web?**
- Utilizar de linguagens de programação para desenvolver sistemas web, portanto utilizando a internet (ou world wide web).
- Sites como sistemas, redes sociais, e-commerces

**Qual a maneira de programarmos para a web?**
Depende muito do que é pretendido, de qual o problema a ser solucionado, mas no geral podemos dividir a programação web em algumas frentes
- ==**Frontend**==
	- O visual da página, exibição de dados resgatados do Backend
	- Comunicação/Integração com o Backend
	- Vamos trabalhar mais com essa área nas nossas aulas
- **Backend**
	- Servidor, comunicação com banco de dados
	- Segurança de servidores
	- Não tem nada de visual, funciona por detrás do front
	- Explicar a interação entre o frontend e o backend em um formulário 
	- Linguagens de programação como: Java, Python, C#, Javascript (eu trabalho com Ruby)
	- Gostaria de ver um pouco de Backend com vocês 
- ==**Fullstack**==
	- União de Front e Back
	- É um profissional bem procurado no mercado, já que oferece as duas funções, mas não recebe o que deveria
	- 1 salário pra duas funções
- **Mobile**
	- Aplicativos para celulares e tablets
	- Funciona em maior parte como um Frontend, precisa de comunicação com um servidor (Backend) e só envia dados e recebe dados para serem exibidos
	- ==Diferentes tipos de aplicativos==
		- Nativos
		- Híbridos
		- Web Apps
- ==**Games**==
	- Geralmente estudamos as engines de games
	- Duas famosas seriam Game maker
- **Segurança**
	- Entendimento profundo de linguagens e da Web em geral
	- Busca e prevenção de possíveis vulnerabilidades
	- Profissional valorizado

**==E POR ONDE COMEÇAMOS?==**

---

### ==HTML==
-  HTML significa linguagem de marcação de hipertexto (Hyper Text Markup Language)
- HTML é a linguagem de marcação padrão para criação de páginas da Web
- HTML descreve a estrutura de uma página da Web
- HTML consiste em uma série de elementos
- Os elementos HTML informam ao navegador como exibir o conteúdo
- Os elementos HTML rotulam partes do conteúdo como “este é um título”, “este é um parágrafo”, “este é um link”, etc.


```html
<!DOCTYPE html>  
<html>  
	<head>  
		<title>Page Title</title>  
	</head>  
	<body>  
		<h1>My First Heading</h1>  
		<p>My first paragraph.</p>  
	</body>
</html>
```

- A `<!DOCTYPE html>`declaração define que este documento é um documento HTML5
- O `<html>`elemento é o elemento raiz de uma página HTML
- O `<head>`elemento contém meta informações sobre a página HTML
- O `<title>`elemento especifica um título para a página HTML (que é mostrado na barra de título do navegador ou na guia da página)
- O `<body>`elemento define o corpo do documento e é um contêiner para todos os conteúdos visíveis, como títulos, parágrafos, imagens, hiperlinks, tabelas, listas, etc.
- O `<h1>`elemento define um título grande
- O `<p>`elemento define um parágrafo


- ### **PROJETINHO DE FINAL DE AULA** - "Hey! This is Me Learning"
	- Uma página de apresentação sua, com seu nome no título da guia
	- Quero uso de pelo menos dois cabeçalhos diferentes (h1, h2 etc)
	- Pelo menos dois parágrafos sobre vocês
	- Link para redes sociais de vocês - Se não se sentirem confortáveis, manda pra um site q goste

---

### Referências interessantes:
- [W3 Schools - Introdução a HTML (Inglês)](https://www.w3schools.com/html/html_intro.asp)
	- Copiei parte do conteúdo dessa página, esse site é ótimo para estudar HTML, CSS e JS em geral, nesse mesmo link no artigo tem um botão "Try it yourself" que te leva pra um editor com um interpretador, então você pode brincar mexendo no código que disponibilizam pra ver como se comporta. Sugiro muito que sejam curiosos com isso e experimentem o quanto conseguirem
- [Alura - O que é o HTML e suas tags? Estrutura básica](https://www.alura.com.br/artigos/o-que-e-html-suas-tags-parte-1-estrutura-basica)
	- Apesar da alura ser uma plataforma de cursos paga, eles disponibilizam ótimos artigos que são públicos, aproveitem!