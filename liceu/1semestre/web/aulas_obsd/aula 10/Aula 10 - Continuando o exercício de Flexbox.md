
Caminhamos bem com o exercício da aula passada, dessa vez eu gostaria de finalizar ele antes de passarmos pra algo mais complexo. O conteúdo hoje vai ser rápido.

## Vamos seguir com o exercício então

Vou dar **mais um tempinho** pra ver se conseguem **finalizar** e deixar minimamente semelhante ao [Figma](https://www.figma.com/file/E4WxwlrlhJH8yc3IJkJcM9/Portfolio?type=design&node-id=0%3A1&mode=design&t=D1yNYOZuNNLes04H-1) que vimos aula passada.

---

# Continuando nossa demo

Vamos pegar o `demo` da aula passada, que foi onde deixei vocês seguindo com o código e seguir a partir daí.

Já temos bem encaminhada nossa página, considerando o exemplo do Figma, mas olhando pra ela agora acredito que o próximo passo seria trabalhar nessa nossa section.

**Vou começar aplicando Flexbox também nessa nossa section.** Ela está meio comprida também em relação ao que temos do Figma, então devo deixar uma largura fixa para ele não sair ocupando tanto espaço e deixar ele mais controlável.

> Vi muitos de vocês sofrendo com essa largura na aula passada, não existe uma única maneira CERTA de fazer isso, mas no meu caso estarei escolhendo a PREVISIBILIDADE do conteúdo ao invés de FLEXIBILIDADE, por isso seguirei com a largura fixa

Se vocês verem também nosso Figma, como comentei que temos todas as informações que precisamos aqui, uma dessas informações é a **largura** da nossa *section*, que aqui diz *615px*.
```css
section {
	width: 615px;
	display: flex;
	flex-direction: column;
}
```
Gostaria de adicionar também uma outra **propriedade** nova pra vocês de algo que também vi vocês sofrendo na aula passada: o *gap*. Deixei vocês sofrendo um pouco com margens na aula passada porque também é um bom exercício, mas agora ficou ainda mais fácil.
```css
gap: 40px;
```
Feito isso já temos um espaçamento mais agradável entre o conteúdo da *section*

#### E esses botões?
Podemos ver que temos uma situação agora, já que nossos botões estão completamente distantes do que vemos no Figma, precisamos ainda:
- Fazer com que fiquem alinhados horizontalmente
- Dar um tamanho definido
- Aplicar cor e estilo (bordas arredondadas)

**Vamos resolver então primeiro o alinhamento:**
Podemos ver que nossos links (*a*) ficaram um em cima do outro, isso se dá por conta de serem todos filhos diretos da nossa *section*, na qual aplicamos um `flex-direction: column`. A solução aqui então será agruparmos esses links numa mesma *div* e aplicar um outro tipo de alinhamento pra essa div.
```html
<div class="links">
	<a class="link" href="https://instagram.com/liammaricato">Instagram</a>
	<a class="link" href="https://github.com/liammaricato">GitHub</a>
</div>
```
```css
.links {
	display: flex;
	justify-content: space-around;
}
```
Agora temos nossos links *posicionados corretamente*, agora falta *estilizarmos* eles. Vamos dar uma olhada no Figma! Lá diz que:
- O fundo do botão tem a cor #FF2020
- O texto tem uma cor preta
- O botão tem uma largura fixa de *280px*
- O texto está centralizado
- O tamanho da fonte dos links é *24px*
- A quina dele tem um arredondamento de *16px*
- A fonte está em negrito **SemiBold**
- O texto não tem a linha abaixo dele indicando que é um link, podemos removê-la

**Vamos resolver tudo isso em ordem:**
```css
.link {
	background-color: #ff2020;
	color: #000000;
	width: 280px;
	text-align: center;
	font-size: 24px;
	border-radius: 16px;
	font-weight: 600;
	text-decoration: none;
}
```

Agora ficou faltando algo, que é a *altura* do nosso botão. No Figma diz que temos uma altura de *79px*, mas isso é determinado por alguns fatores. Eu vou tomar a liberdade artística aqui de aplicar um **padding de 20px** em cima e embaixo do botão e dar ele como feito:
```css
	padding: 20px 0;
```

### Tá ficando mais legal agora! Vamos estilizar o resto.

Agora que já lidamos com a maior parte dos pontos organizativos do nosso código, acho que podemos seguir com o estilo, que vai ser uma coisa rápida:
```css
h1 {
	font-size: 36px;
	font-family: 'Krona One', sans-serif;
}

strong {
	color: #ff2020;
}

p {
	font-size: 24px;
}

img {
	height: 450px;
}
```

**Agora sim ficou show!** Ainda assim acho que podemos concordar que não está perfeito, temos algumas inconsistências na página, principalmente a partir do momento que ela não ocupa mais um tamanho completo da nossa tela, isto é, o conteúdo *não está responsivo*.

Eu *não queria trazer conteúdo novo pra vocês hoje*, sexta-feira no último horário, então aproveitei que vocês não conseguiram finalizar aula passada o exercício e hoje deixei pra finalizarmos isso apenas, e já deixo avisado que semana que vem aplicaremos **RESPONSIVIDADE** a essa página, pra deixar ela impecável!

---

## Treinar, treinar, treinar

Gostaria que dedicassem o resto da aula **exercitando** Flexbox usando o jogo do sapinho!

Para acessarem o jogo do sapinho: [Jogo de Flexbox do Sapinho](https://flexboxfroggy.com)