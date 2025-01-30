
# Essa aula vai ser prática

- Semana passada vimos bastantes tags HTML, na quarta vimos também outras várias tags pra estruturação da página
- Infelizmente corri um pouco com o conteúdo na quarta e ainda não foi suficiente
	 - Depois da aula de sexta passada que durou 4 horas e pareceu uma eternidade, acho que calculei mal o tempo

- Quero começar logo CSS com vocês que aí acho que vai ficar bem mais dinâmico o conteúdo que fizermos e também porque sempre estou dando várias pinceladas no assunto, sem de fato eu mostrar pra vocês como funciona
- Então antes de cairmos de cabeça, quero que vocês estejam afiados no HTML, vai ser importante pra conseguirmos dar continuidade e chegar nas coisas mais interessantes

- Hoje quero tentar **fazer uma revisãozinha básica** pra esse começo de aula
- Repassar pelos métodos que usamos aula passada de **fixar um elemento a uma parte da tela**
- Vou aproveitar o desafio que passei correndo no final da aula passada e acho que vai ser mais proveitoso se eu der um tempinho pra vocês fazerem aqui em sala com a possibilidade de eu ajudar

---

# Vamos lá

- Vou montar com vocês novamente a mesma página, dessa vez com uma barra lateral de navegação que ocupe toda a lateral da página menos o header e o footer
- Utilizaremos sempre que fizer sentido as tags semânticas
##### Lembrando!
- As tags semânticas ajudam na **leitura do código** **tanto por parte do navegador, quanto por parte do programador!** É bom para nós termos uma melhor identificação dos elementos da página e seus respectivos papéis na exibição do site
- Ajudam ferramentas de busca como o Google a reconhecer que conteúdo da página deveria ser mais importante para ser exibido nas pesquisas
	- Existe um nome pra isso: **SEO** ou Search Engine Optimization
	- Não adianta ter um site foda e ele não ser encontrado
- **Acessibilidade!** Existe uma quantidade considerável de usuários que dependem de leitores de tela pra conseguirem navegar na internet e usam apenas o teclado
	- Importante garantirmos que consigam ler cada elemento e navegar com facilidade usando o teclado


# Guia de Viagem

Vamos codar até chegar no `demo1.html`

#### Eu gostaria de deixar a barra de navegação na lateral
```css
nav {
	float: left;
	width: 25%;
	height: 600px;
}

main {
	margin-left: 25%;
}

section {
	padding: 20px;
	height: 200px;
}
```
- Já adianto que há maneiras bem melhores de fazermos isso, que veremos juntos nas próximas aulas de CSS
- Agora podemos compensar a altura da barra lateral com mais duas sections de 200px
- **Bó fazê**
- Mas quando fazemos isso agora conseguimos ver que o tamanho das sections passa *e muito* o da barra lateral, por quê disso?
- Se inspecionarmos o elemento, podemos ver que o tamanho **excede os 200px** definidos

![[Pasted image 20240315010512.png]]

![[Pasted image 20240315010448.png]]

#### Border-box
- Algo que deve ser usado muitas vezes, ainda mais quando trabalhamos com valores fixos nos tamanhos, é a propriedade `box-sizing: border-box`
- É um nome muito maluco pra dizer que, quando definimos o tamanho de um elemento, ele vai agora levar em consideração a somatória do padding
- Vamos adicionar no nosso CSS
	-  Importante notar o uso do `*` para determinarmos que será aplicado a todos os elementos da página
```css
* {
	box-sizing: border-box;
}
```
- Show! Melhorou agora


### Uma última coisa

- Gostaria que vocês adicionassem links para outras páginas nesses itens da barra lateral
	 - Lembram da tag *a*, certo? De *âncora*

**Vamos fazer um exemplinho**

---

# Agora é com vocês

- Gostaria que vocês fizessem pelo menos três páginas diferentes, com estilos minimamente diferentes
	- Com a barra lateral sendo usada para navegar entre essas três páginas
- Cada uma com 3 *sections* ou *articles*, contendo conteúdo
- Quero que vocês tentem incluir imagens
	- Se quiserem se aventurar, os convido a tentar colocar uma referência ao mapa da cidade no Google Maps, ou a um vídeo no Youtube
- Utilizem de tags semânticas pra organizar o conteúdo
- **DESAFIO:** Gostaria que vocês tentassem fazer a barra de navegação acima das *sections*/*articles* e abaixo do *header*. Já adianto pra vocês que era mais fácil fazer isso desde o início do que a barra lateral que fizemos

---

### Para fazer a barra de navegação no topo

- Vamos tirar tudo que estiver relacionado a posicionar a barra de navegação na esquerda
- Adicionar uma tratativa para os itens da lista serem exibidos na horizontal
	- Podemos mudar o *display* dos itens da lista para exibi-los numa mesma linha:
```css
li {
	display: inline;
}
```

---

### Referências interessantes:

-  [Entendendo Border Box](https://www.alura.com.br/artigos/entendendo-como-funciona-box-model-e-o-box-sizing?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20987928442&hsa_grp=157916200306&hsa_ad=689395782879&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW_oXv_taYCjPVPmQepbgGvB7qhiCyKNVQ3d-hLkK2w-uS_sLdNGS0MaArKkEALw_wcB)
- [W3 - Border Box](https://www.w3schools.com/css/css3_box-sizing.asp)
- [W3 - Tags semânticas](https://www.w3schools.com/html/html5_semantic_elements.asp)