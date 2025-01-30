
# Aula prática!

Boa noite tropa, hoje vamos tentar *exercitar* um pouco do que vimos na aula passada de *Flexbox*. Eu não entendo quase nada de *Figma* mas estou aprendendo pra trazer umas paradinhas pra tentarmos reproduzir em código, *hoje vai funcionar como um teste*.

Me baseei fortemente num *exemplo* que vi de um curso da [Alura](https://www.alura.com.br) e achei que seria interessante fazermos algo do gênero.

### Projeto Portfolio
Vamos ver o projeto de hoje no seguinte figma: [LINK](https://www.figma.com/file/E4WxwlrlhJH8yc3IJkJcM9/Portfolio?type=design&node-id=0%3A1&mode=design&t=D1yNYOZuNNLes04H-1)

---
#### Um aviso!
Acho que vocês já estão percebendo mas estamos avançando bastante com o **conteúdo prático** e eu não sei o que vocês têm achado, mas **estamos num ritmo acelerado**. Estou seguindo o embalo e tentando avançar pra projetos mais complicados.

*A partir de agora, cada aula conta!* Peço que deem uma atenção especial para não ficarem para trás por conta de uma aula ou outra perdida, é importante que nesses projetos que estamos fazendo, vocês entendam cada linha de código que estamos escrevendo.

**Não me incomodo de me pararem para entender melhor o código que fazemos juntos**

#### Aviso 2
**Não esqueçam de guardar os projetos que estão fazendo.** Essas *atividades que fazemos em aula são importantíssimas* para serem revisitadas no futuro por vocês mesmo pra pegarem o próprio código como base (ctrl c, ctrl v mesmo). 

Então lembrem de, além de **guardar esses projetinhos**, também **deixá-los organizados** nos arquivos de vocês. Vocês serão agradecidos no futuro por terem organizado tudo agora no começo do curso. 

---

## Então vamos lá

*Não entrarei muito em detalhe no que faz cada código*, vou supor que entenderam as aulas passadas e, caso sintam dúvida, peço que *perguntem em sala* ou usem o Google.

### Não vou entregar o projeto pronto

Quero fazer uma dinâmica com vocês e ver se funciona, *vamos começar a base do projetinho* e vou pedir pra *seguirem sozinhos a partir de certo ponto*.

**Criamos o projeto!**
```html
<main>
	<section>
		<h1>
			Eleve seu negócio digital a outro nível <strong>com um Front-end de qualidade!</strong>
		</h1>
		<p>
			Olá! Sou Liam Maricato, desenvolvedor Front-end com especialidade em HTML e CSS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?
		</p>
        <a class="link" href="https://instagram.com/rafaballerini">Instagram</a>
		<a class="link" href="https://github.com/guilhermeonrails">GitHub</a>
	</section>
	<img src="eu.jpeg" alt="Foto de Liam Maricato">
</main>
```

**Pra facilitar pra vocês, vamos centralizar o básico desse conteúdo na página**
- Aqui fazemos um *Reset CSS*, igual comentado na aula passada
- Aplicamos um tamanho de 100% do viewport no body
- Centralizamos o conteúdo de dentro do `main`
```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
  
body {
	height: 100vh;
	background-color: #000000;
	color: #F6F6F6;
}
  
main {
	margin: 10% 15%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
```

---

## Vamos importar fontes!

Aqui no nosso figma estamos usando a fonte **Montserrat** na maior parte do projeto, além desse título que está usando a **Krona One**. Essa Montserrat não existe por default nos navegadores, se tentarmos usá-la não vamos conseguir. 

#### Precisamos fazer o import!
Para importar essa fonte, vamos até o [Google Fonts](https://fonts.google.com/specimen/Montserrat) e pesquisar pelo nome da fonte. Lá nós pegamos o código para import.

**Agora conseguimos chamar o font-family para mudar nossa fonte para Montserrat**

---

### A partir daqui é com vocês!

*Espero que consigam fazer*, se não tudo, *pelo menos grande parte do desafio usando Flexbox*. O conteúdo já está muito bem encaminhado, acho até que facilitei demais, mas o objetivo é *começar simples* mesmo pra vocês serem capazes de completar grande parte só tirando dúvidas.

> Para pegar o projeto até aqui, só puxar o arquivo `demo.html` junto com o `style.css`.

**Ao final da aula estarei disponibilizando no Drive os arquivos finalizados do portfolio.**

---

# Já acabou?

Aula passada acabei tomando até o final do nosso tempo com conteúdo, então não consegui passar esse jogo show pra vocês jogarem nesse finalzinho de aula.

- Link para o *Flexbox Froggy*: https://flexboxfroggy.com
