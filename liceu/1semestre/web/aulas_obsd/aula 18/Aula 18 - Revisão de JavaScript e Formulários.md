
### Antes de tudo
Ainda *não terminei* as *correções* dos *relatórios*, mas obrigado a todos! Vi que todos fizeram a entrega no prazo correto, isso vais ser bom para já puxarmos a *próxima avaliação*, afinal, já estamos quase em junho!

##### Parabéns pela nota máxima!
Mesmo sem a correção ainda, quero já compartilhar que decidi recompensar vocês com os *0.75 pontos* completos da nota da *entrega final* da *urna eletrônica*, parabéns pelo projeto!

---

# Um passo pra trás

Acho que eu *abusei* um pouco dos *neurônios* de vocês na aula passada. Vai valer a pena darmos um *passo atrás* e **revisarmos** o conteúdo antes de vermos mais coisa.

Vou dar um projetinho pra *aquecermos o cérebro* para o *JavaScript* novamente, já que desde sexta já devem ter tido um branco. Ele é *simples* o suficiente pra que vocês consigam fazer, mas vou lhes oferecer uma **ajuda**:

## Colinha de JS

> Como acho que complica pra vocês terem que pensar na lógica E na sintaxe que nunca viram, estou deixando uma colinha monstra aqui para relembrarem a sintaxe!

### Variáveis
```js
let numeroInteiro = 6;
let preco = 4.99;
let string = "Tem uma cobra na minha bota!";

// Constantes são usadas para criar variáveis que não podem ser alteradas depois da declaração
const pi = 3.14;

pi = 10; // Isso dá erro
```
---
### Strings
```js
// Uso de aspas simples ou duplas é indiferente, não há melhor prática
let simples = 'olá'
let duplas = "olá"

// Concatenação de strings
let age = 7;
'Tommy is ' + age + ' years old.';

// Interpolação de string
let age = 7;
`Tommy is ${age} years old.`;

// Pegar o tamanho de uma string (ou arrays)
let palavra = "banana"
palavra.length // Isso retorna: 6
```
---
### Operações matemáticas
```js
5 + 5 = 10 // Adição
10 - 5 = 5 // Subtração
5 * 10 = 50 // Multiplicação
10 / 5 = 2 // Divisão
10 % 5 = 0 // Mod (resto da divisão)
```
---
### Operadores condicionais
```js
// Operadores de comparação
1 > 3                // false
3 > 1                // true
250 >= 250           // true
1 === 1              // true
1 === 2              // false
1 === '1'            // false

// Operadores '==' e '==='
0 == false   // true
0 === false  // false - tipos diferentes
1 == "1"     // true - conversão automática de tipo 
1 === "1"    // false - tipos diferentes
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false

// Operador 'ou'
true || false;       // true
10 > 5 || 10 > 20;   // true
false || false;      // false
10 > 100 || 10 > 20; // false

// Operador 'e'
true && true;        // true
1 > 2 && 2 > 1;      // false
true && false;       // false
4 === 4 && 3 > 1;    // true

// Operador lógico inverso
let valorBoleano = true;
let valorOposto = !valorBoleano;

console.log(valorOposto); // Retorna false
```
---
### Condicionais
```js
const umBoleano = true;

if (umBoleano) {
	console.log("Esse boleano passa no if como true!");
}

// Else e else if
const tamanho = 10;

if (tamanho > 100) {
  console.log('XG');
} else if (tamanho > 20) {
  console.log('G');
} else if (tamanho > 4) {
  console.log('M'); // Vai entrar aqui e printar: "M"
} else {
  console.log('P');
}

// Switch case
const quantidade = 3;

switch (quantidade) {
  case 1:
    console.log('É pouco');
    break;
  case 2:
    console.log('É bom');
    break; // O break aqui é necessário para que não passe por mais de um 'case'
  default:
    console.log('É demais');
}
```
---
### Funções
```js
// Definindo a função:
function soma(num1, num2) {
	return num1 + num2;
}

// Chamando a função:
soma(3, 6); // 9

// Uso de return
function soma(num1, num2) {
	num1 + num2; // Essa linha apenas executa e não retorna nada
	
	return num1 + num2; // Essa linha retorna p quem chamou a função e interrompe
	
	console.log('retornou'); // Essa linha não é executada pq vem depois do return
}

// Funções anônimas/sem nome
const printaOi = function() {
  return 'oi!';
}

// Funções "arrow" ou flecha
// Sem argumentos
const printaOi = () => { 
  console.log('oi!'); 
}; 
printaOi(); // => oi!

// Com um argumento
const checaPeso = peso => { 
  console.log(`Seu peso é: ${peso}kg`); 
};
checaPeso(75); // => Seu peso é: 75kg

// Com dois argumentos
const soma = (num1, num2) => { 
  return num1 + num2; 
}; 
console.log(soma(2,5)); // => 7 

// Arrow functions concisas
const multiplica = (a, b) => a * b; 

console.log(multiplica(2, 30)); // => 60 
```
---
### Arrays ou Listas
```js
const frutas = ["maçã", "laranja", "banana"];
const dados = [1, 'frango', false]; // Permite diferentes tipos

// Acessando o tamanho do Array
const numeros = [1, 2, 3, 4];

numeros.length; // 4

// Acessando um elemento do Array
const meuArrau = [100, 200, 300];

console.log(meuArray[0]); // 100
console.log(meuArray[1]); // 200
```
---
### Laços de Repetição
```js
// While
while (condicao) {
  // bloco de código a ser executado
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// => 0, 1, 2, 3, 4

// Do While
do {
  // bloco de código a ser executado
} while (condicao)

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5)
// => 0, 1, 2, 3, 4

// For
// for (atribuição; condição de quebra; executar a cada loop)
for (let i = 0; i < 5; i += 1) {
  console.log(i);
};
// => 0, 1, 2, 3, 4

// Iterar sobre um Array com For
let array = [0, 1, 2, 3, 4]

for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// => 0, 1, 2, 3, 4
```
---
### Manipulação de DOM
- Vamos ver um pouco mais sobre o que é a DOM [aqui](https://www.w3schools.com/js/js_htmldom.asp)
```js
// Buscar elementos
document.getElementById('demo'); // Retorna um elemento buscando pelo ID
document.getElementsByTagName('p'); // Retorna lista de elementos buscando pela tag
document.getElementsByClassName('demo'); // Retorna lista de elementos buscando pela classe

// Fazer alterações nos elementos
let btn = document.getElementById('btn'); // salvando o elemento numa variável
btn.innerHTML = 'Clique aqui!'; // Alterando o HTML interno do elemento

// Buscando o elemento e alterando ele em uma linha
document.getElementById('btn').innerHTML = 'Clique aqui!';

// Alterando o estilo do elemento pela propriedade 'style'
document.getElementById('container').style.backgroundColor = 'red';
// Aqui podemos chamar qualquer propriedade CSS utilizando camelCase ao invés de hífen para separar as palavras (background-color => backgroundColor)

// Alterando classes de um elemento pela 'classList' (lista de classes)
const demoElement = document.getElementById('demo');
demoElement.classList.add('azul'); // Adiciona a classe 'azul'
demoElement.classList.remove('azul'); // Remove a classe 'azul'
demoElement.classList.toggle('azul'); // Liga/desliga uma classe, dependendo se ela já está presente ou não

// Utilizando 'querySelector' para trazer elementos por meio de um *seletor CSS*
const element = document.querySelector('div.azul'); // Essa linha vai trazer apenas o *primeiro* elemento que atenda a esse seletor
const elements = document.querySelectorAll('div.azul'); // Essa linha vai trazer *todos* os elementos que atendam a esse seletor na forma de um array
```
---

## De colinha hoje é isso

Nas próximas aulas vou trazer um pouco sobre mais eventos, objetos, classes, módulos e afins, coisas que ainda veremos. Hoje, tentando fazer vocês se *familiarizarem* mais com a *sintaxe* do JavaScript e tirando uma *folga* da *lógica* pesada, veremos **formulários**.

# Formulários

Algo que não chegamos a ver ainda mas que é muito utilizado no mundo Web são **formulários**! Caso queiramos que o *usuário* nos ofereça *informações*, precisamos de uma maneira de *capturar* esses dados passados e processá-los como necessário.

Vamos dar uma olhada no que precisamos pra criar um formulário:

##### Tags de input
Esses **inputs** nada mais são do que *espaços* para o usuário *preencher* informações. Vamos então criar um código básico usando uma tag *input*:
```js
<main>
	<input id="numero">
	<button onclick=validaNumero()>Enviar</button>
</main>

<script>
	function validaNumero() {
		var numero = document.getElementById('numero').value;
		
		if (numero % 2 == 0) {
			alert('Esse número é par');
		} else {
			alert('Esse número é ímpar');
		}
	}
</script>
```

##### Tags de label
Além dos *inputs*, temos também as *labels*. Elas nos ajudam a deixar claro para o usuário qual o campo que estão preenchendo. Além disso, elas se diferem de um texto comum como uma tag *p* por conta da propriedade *for*, que possibilita que o *input* e a *label* fiquem **"linkados"** de forma que, se clicarmos na *label* de um input, ele vai ativar o *input* como se tivéssemos clicado diretamente nele, vejamos:
```js
<label for="numero">Número:</label>
<input id="numero">
```

##### Tags de form
Existe também uma tag form, que podemos usar para criar um formulário completo. Formulários são apenas uma forma de agrupar inputs relacionados.
```js
<form action="#">
	<label for="username">Usuário:</label>
	<input type="text" id="username">
</form>
```
Esse *form* recebe uma propriedade *action*, que tenta fazer requisições HTTP (que é algo que veremos mais pra frente) baseado nos campos preenchidos no formulário. Por ora, vamos manter a *action* sempre como uma *'#'* igual fazíamos com a tag de âncora para ir pra mesma página.

---

## Os Inputs

Vamos então dar uma passada pelos *diversos elementos de input* que podemos ter pra vocês conhecerem e terem uma noção do que podemos fazer com eles.

**Inputs** tem um *tipo (type)*, que determina como eles são *exibidos* por *padrão* pelo *navegador*. Eles geralmente são *acompanhados* por **labels**. Vejamos os tipos mais comuns de inputs:
- **text:** espaço para preenchermos com texto
- **password:** espaço para preenchermos com texto que é exibido escondido como "bolinhas"
- **email:** espaço para preenchermos com e-mail
- **tel:** espaço para preenchermos com telefone
- **date:** espaço para preenchermos com uma data, ele formata bonitinho e exibe até calendário
- **number:** espaço para preenchermos com valor numérico, exibe setinhas pra + e -
- **radio:** botões redondos para selecionarmos uma única opção entre diversas
- **checkbox:** botões quadrados com um estado boleano (*ativado* ou *inativado*)
- **file:** botão para clicarmos e fazermos o upload de algum arquivo

Além disso ainda temos tipos adicionais, que *não são inputs*, como:
- **select:** dropdown com opções pré-definidas para que selecionemos uma
- **textarea:** espaço *grande* para preenchermos com algum texto extenso

#### Aqui também temos colinha
Para vermos todas essas opções numa página, podemos abrir o arquivo `form.html` na nossa pastinha de *demo* e dar uma olhada.

### Mais propriedades dos Inputs

##### Placeholders
A propriedade *placeholder* determina um valor a ser exibido no campo do *input* de maneira meio "sombreada", como estamos acostumados a ver diariamente em formulários. Ele é usado geralmente para darmos um **exemplo** do tipo de valor a ser preenchido naquele campo. Em alguns casos, substitui a função de uma *label*.

##### Flag 'required'
A flag *required* não precisa de nenhum valor atribuído por ser uma propriedade *boleana* (sim ou não). Ela é *disponível por padrão* pelos navegadores para determinarmos que ela é obrigatória para o envio do formulário que a contém.

---

# Bora pra prática?

Gostaria que fizessem uma página *minimamente apresentável* e **ridiculamente simples**: quero que recebam *dois números* através de *dois inputs diferentes* e retornem uma **soma**, inicialmente o resultado pode ser exibido por *alert*, mas proponho duas melhorias que ficam como desafios:
- **1:** Exibir o resultado da soma na página, sem ser por *alert*
- **2:** Transformar numa *"calculadora"* usando *radio buttons*, quero poder escolher entre *soma*, *subtração*, *multiplicação* e *divisão* por meio de **inputs radio**



