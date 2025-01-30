Hoje, assim como nas duas aulas anteriores, daremos continuidade aos nossos *joguinhos com JS*, lembrando que *a entrega do projeto já é na próxima aula*, dia **12/06**. Gostaria que tentassem tirar hoje o máximo de **dúvidas** possível.

Hoje não devemos fazer nenhuma *grande funcionalidade* do **Jokenpô**, escolha de jogo do Thiago, já que acredito que o jogo dele esteja bem encaminhado. Mas aproveitando que ele me perguntou sobre a **animação** do meu *Jokenpô*, que mostrei pra vocês há umas boas aulas, veremos isso hoje.

Trouxe pra vocês então um pouco de como eu fiz a *animação de mãozinha mexendo* no meu Jokenpô, usando o `setTimeout`do *JavaScript*.

---

### A animação CSS

Pra *demo* de hoje temos um arquivinho HTML e um CSS bem simples, bem como uma pastinha de imagens, lembrem de pegá-los no Drive e vamos dar uma olhada. 

De *especial*, a única coisa que essa página tem é a **animação** que criei usando a *regra CSS* de `@keyframes` que já havia comentado com vocês há algumas aulas:

```css
@keyframes shake {
	10%, 40%, 70%, 100% {
		top: 0px;
	}
	
	25%, 55%, 85% {
		top: -30px;
	}
}
```

> Para saber mais sobre `@keyframes` no *CSS*: [CSS Animations - W3 Schools](https://www.w3schools.com/css/css3_animations.asp)

### Alguns toques adicionais

- O `position: relative` é importante para que o `top` que usei na animação funcione corretamente. [Mais sobre o posicionamento de elementos no CSS](https://www.w3schools.com/css/css_positioning.asp)
- Usei o `transform: scaleX(-1)` pra sempre inverter a imagem da mãozinha da CPU, sem precisar criar imagens invertidas pra isso. [Mais sobre o transform no CSS](https://www.w3schools.com/cssref/css3_pr_transform.php)

---

## Vamos aplicar a animação com JS

Vamos ver alguns *conceitos* já **repetitivos**, então devo fazer uns *"copicola"* aqui para acelerar nosso processo, espero que não se incomodem de passarmos por cima de algumas coisas. Vou *comentar* por cima e dar mais importância para o que eu achar que podemos aprender de **novo**. 

```js
const btnPedra = document.getElementById("btn-pedra");
const btnPapel = document.getElementById("btn-papel");
const btnTesoura = document.getElementById("btn-tesoura");

btnPedra.addEventListener("click", () => jogar("pedra"));
btnPapel.addEventListener("click", () => jogar("papel"));
btnTesoura.addEventListener("click", () => jogar("tesoura"));

function jogar(escolha) {
	// Gerar a escolha da CPU
	// Checar o resultado da partida
	// Começar a animação
	// Ao encerrar a animação:
		// Exibir as escolhas e o resultado
		// Atualizar o placar
}
```

Isso é apenas o *básico* do nosso jogo sendo *listado* em forma de comentários. Vamos transformar cada uma dessas coisas aos poucos, começando pela **decisão da CPU**:

```js
let opcoes = ["pedra", "papel", "tesoura"];

function decisaoCPU() {
	return opcoes[Math.floor(Math.random() * opcoes.length)];
}
```

E adicionar também a **exibição das escolhas** dos jogadores:

```js
const playerImg = document.getElementById("p-img");
const cpuImg = document.getElementById("cpu-img");

function exibirEscolha(escolha, escolhaCPU) {
	playerImg.src = `./assets/${escolha}.png`;
	cpuImg.src = `./assets/${escolhaCPU}.png`;
}
```

Só com isso já temos um jogo *minimamente funcional*, onde podemos fazer uma *escolha* e ter exibido a *escolha aleatória da CPU*. Vou deixar o resultado e a exibição do resultado por conta do Thiago, mas agora vamos entrar na parte da animação.

Para ativar nossa animação, basta adicionarmos a propriedade CSS necessária:

```js
playerImg.src = "./assets/pedra.png"; // Deixar os dois em 'mão fechada' (pedra) para a animação
cpuImg.src = "./assets/pedra.png";

playerImg.style.animation = "shake 2s ease"; // Adicionar a animação de shake pelo CSS
cpuImg.style.animation = "shake 2s ease";
```

Nos restam apenas *dois problemas* com essa animação, *primeiro*:

A animação mal está começando e as imagens *já* estão sendo alteradas para exibirem o *resultado* do jogo, isso porque *não tem nada que impeça nosso código de executar instantaneamente*.

Vamos ver como faremos para adicionar algo como um **"timer"** para esperarmos antes de exibir os resultados:

### SetTimeout

O JavaScript tem muitas *funções interessantes* nativamente, uma delas é o `setTimeout()`, que espera *dois parâmetros*:
- Um **callback**, que como já vimos nas últimas aulas nada mais é do que uma *função a ser executada* e que passamos como parâmetro
- Um *valor inteiro* para determinar o **tempo em milisegundos** a ser *esperado* antes de executar a *função* callback.

Nossa **animação** dura exatos *2 segundos*, então *ao final desse tempo*, vamos chamar nossa *função* para *exibir as escolhas* do jogador e da CPU:

```js
setTimeout(() => {
	exibirEscolha(escolha, escolhaCPU);
	// Talvez adicionar chamadas para calcular o resultado ou atualizar o placar
}, 2000);
```

Por fim, temos o **segundo problema**: parece que nossa *animação não pode ser repetida*. Isso porque, uma vez que *já adicionamos as propriedades CSS* para ativar as animações dos elementos, eles tem a propriedade preenchida e portanto não reativam nada ao adicionarmos de novo.

O que podemos fazer seria *limpar o valor da propriedade CSS* e depois preencher novamente, mas se isso acontecer no mesmo instante, ele simplesmente **não funciona**.

Podemos, porém, *'limpar'* as propriedades assim que a animação encerrar, para isso aproveitaremos nosso `setTimeout()`, então terminamos finalmente com isso:

```js
function jogar(escolha) {
	let escolhaCPU = decisaoCPU();
	
	iniciarAnimacao();
	
	setTimeout(() => {
		exibirEscolha(escolha, escolhaCPU);
		limparAnimacao();
	}, 2000); // O código do bloco executa depois de 2 segundos (2k miliseg)
}

function iniciarAnimacao() {
	playerImg.src = "./assets/pedra.png"; // Coloca na mãozinha de 'pedra'
	cpuImg.src = "./assets/pedra.png";
	
	playerImg.style.animation = "shake 2s ease"; // Preenche a animação no CSS
	cpuImg.style.animation = "shake 2s ease";
} 

function limparAnimacao() {
	playerImg.style.animation = ""; // Remove a animação de shake
	cpuImg.style.animation = "";
}
```

**Com isso, finalmente nossa animação fica impecável!**

---

### Resto da aula livre para fazerem os projetos

Aproveitem o resto da aula para *desenvolverem* qualquer um dos projetos finais, e *tirarem o máximo de dúvidas* possível!