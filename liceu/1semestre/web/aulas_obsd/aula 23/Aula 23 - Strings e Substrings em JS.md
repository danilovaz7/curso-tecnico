
Seguindo nosso cronograma de *joguinhos com JS*, hoje vamos ver um pouco sobre *como lidamos com strings* para entender como faremos nosso jogo do **Termo** ou **Senha**.

---

# Substrings

Conseguimos recortar pedaços das nossas strings para trabalharmos com elas, usando o método `.substring()`, que recebe dois parâmetros: o *índice inicial* e o *índice final* (**até** o índice, **não o incluindo**).
```js
const minhaString = 'string';

minhaString.substring(0, 3);
// 'str'

minhaString.substring(2, 4);
// 'ri'

// Se omitirmos o segundo parâmetro, ele irá pegar até o final da string
minhaString.substring(3);
// 'ing'
```
O método `.slice()` também funciona igual ao *substring*, mas aceita índices negativos para pegar a partir do final da string:
```js
minhaString.slice(0, 3);
// 'str'

minhaString.slice(3);
// 'ing'

// Quando passamos índices negativos, ele irá pegar a partir do final da string
minhaString.slice(-3);
// 'ing'
```

### Cortando a string para transformar em um Array

Além da possibilidade de trabalharmos com substrings, quando precisarmos interagir diretamente com cada caracter de uma string, uma boa alternativa seria transformar a palavra num **array de caracteres**, bora ver?

Podemos usar o método `.split()` para *cortarmos uma string*, esse método recebe um *parâmetro* para determinar *em quais pontos devemos cortar* para **separar os elementos** do array:
```js
// Podemos passar uma string vazia para cortar cada caracter 
minhaString.split('');
// ['s', 't', 'r', 'i', 'n', 'g']
  
minhaString.split('r');
// ['st', 'ing']
  
// Podemos passar um espaço para cortar uma frase em palavras
const frase = 'Tem uma cobra na minha bota!';
frase.split(' ');
// ['Tem', 'uma', 'cobra', 'na', 'minha', 'bota!']
```

---

## Vamos aplicar isso no nosso Termo?

Eu trouxe pra vocês, assim como fiz na última aula, um *HTMLzinho* já com bastante *CSS básico* para trabalharmos em cima. **Vamos dar uma olhada?**

Temos um **input** com validações de caracteres já no próprio elemento HTML, como já havia mostrado pro Luan e pro Murilo.

Usei um *truque* de **Flexbox** para mantermos sempre 5 letras por linha, assim não precisamos gerenciar diferentes *linhas* de elementos para *palavras diferentes*, podemos apenas adicionar uma **div** para cada letra só e nossa *UI* continua linda.
- O truque *não é nenhum segredo* ou mágica, só um `flex-wrap: wrap` para **quebra** de linha dos nossos elementos
- Também estou trabalhando com tamanhos em **porcentagens**, onde *a soma das 5 larguras* das letras *cabem* na *div "container"*, mas a *sexta* letra *não caberia*

##### Agora o JS
A maior parte da lógica do nosso jogo vai acontecer no **envio** do *formulário*.
- Vamos criar um *eventListener* para o evento de *submit*
- Receber nossa *string* pelo *input* e garantir que ela esteja num formato consistente (sempre maiúsculo)
- E já vamos criar uma funçãozinha para abstrair a lógica do nosso jogo

```js
const form = document.querySelector('#form');
const input = document.querySelector('#input');

form.addEventListener('submit', (e) => {
	e.preventDefault(); // Previne o refresh na página
	
	const chutePalavra = input.value.toUpperCase(); // Importante para não ter problemas com letras maiúsculas e minúsculas
	
	// Checa se a palavra está certa
	
	// Checa se o jogador ainda tem tentativas
	
	checaPalavra(chutePalavra); // Faz a lógica de tentativa
	
	input.value = ''; // Reset no input
});

function checaPalavra(chutePalavra) {
	console.log(palavra); // Já faremos a lógica
}
```

É lógico também que precisamos de uma *palavra secreta* para ser descoberta. Por ora, podemos fazer o teste com uma palavra **chumbada** numa *variável "global"*, mantendo o padrão que estipulamos de *maiúsculas*.
```js
const palavraSegredo = 'ALUNO';
```

Para checar nossa palavra, precisaremos quebrá-la em diferentes caracteres e *iterar* sobre essas letras para criar as *div*s de resultado e checar se elas existem na palavra, uma a uma:

```js
function checaPalavra(chutePalavra) {
	const letrasChute = chutePalavra.split('');
	
	letrasChute.forEach((letra) => {
		criaLetraResultado(letra);
	});
}

function criaLetraResultado(letra) {
	const letraResultado = document.createElement('div');
	
	letraResultado.textContent = letra;
	reultadosContainer.append(letraResultado);
}
```

Aqui estamos só criando as *div*s por enquanto, mas já temos quase toda a estrutura necessária pra fazer o resto, agora é pegar cada **letra** e checar:
- Se é **igual** a letra no *mesmo índice* da *palavra segredo*
- Ou se ela **existe** na *palavra segredo* em *outra posição*
- Se não, só criamos a div normalmente

##### Quero a ajuda de vocês para prosseguirmos!

---

### Se sobrar um tempinho
Gostaria de dedicar o restinho da aula para que vocês possam *tirar dúvidas* dos dois projetos, bem como aproveitar o tempinho para *dar continuidade aos jogos em grupo*.