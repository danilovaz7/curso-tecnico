
Como parte do nosso projeto pra desenvolvermos os joguinhos, estou trazendo mais um pouco de conteúdo e vamos ver também um pouco de como usaríamos *objetos* ou *dicionários* em JS pra *exibir as perguntas e respostas* do Show do Milhão!

Como temos *3 jogos* de *diferentes dificuldades* da lista que vocês escolheram, achei interessante tentar trazer o *desenvolvimento de um trecho* de cada jogo em *ordem decrescente de dificuldade*.

Se sobrar tempo, veremos também sobre o *export* e *import*, e como vocês podem usar isso pra *organizar* o código de vocês no JavaScript ao trabalharem em projetos maiores.

---
# Dicionários/Objetos

- **Dicionários** são estruturas de *chave-valor*, muito próximo do que vimos na forma como o navegador gerencia seu armazenamento local.
- O *JavaScript não possui um tipo "dicionário"*, mas ele tem um tipo **Object** que é bem versátil para *armazenar diferentes tipos de dados* em forma de *chave-valor*.
- Para *criarmos* um *objeto* no JavaScript é *muito fácil*, apenas passar o conteúdo dentro de chaves: `{}`

Vamos criar um objeto para uma **pessoa**, que não tem apenas uma informação sobre ela, uma pessoa pode ter um *nome*, *sobrenome*, *idade* e uma *cor favorita* talvez?
```js
const pessoa = {
	nome: 'Fulano',
	sobrenome: 'de Tal',
	idade: 93,
	corFavorita: 'rosa'
};

// Um objeto também pode armazenar diferentes tipos, tanto nas chaves quanto nos valores:
const objeto = {
	primeiroNome: 'Fulano',
	'string': 1,
	0: 'string'
};

// Também podemos criar ele vazio primeiro e depois atribuir suas propriedades:
const pessoa = {};

pessoa.nome = 'Fulano';
pessoa.sobrenome = 'de Tal';
pessoa.idade = 93;
pessoa.corFavorita = 'rosa';
```
Para **acessarmos os valores** de dentro do *objeto*:
```js
// Chamamos sempre pela chave e de duas maneiras:
objeto.nome // => 'Fulano'
objeto['string'] // => 1

// Caso a chave seja um int, também podemos chamar usando a chave:
objeto[0] // => 'string'
```

---

### Vamos aplicar no Jogo?

Vamos começar com um arquivinho `html` simples, com um *h1* para o nossa **pergunta**, e dois *p* para nossas **respostas**. Vamos trabalhar com um *objeto* que podemos montar como quisermos, contanto que saibamos como gerenciá-lo.

```js
// Criar um objeto de pergunta
const pergunta = {
	tituloPergunta: 'Quantos gatos o professor tem?',
	alternativas: ['3', '15'],
	resposta: '3'
}
```
Agora vamos **exibir** essa pergunta pegando as *propriedades* dela *pelas chaves*:
```js
const perguntaLabel = document.querySelector('#pergunta');
const alternativaLabels = [
	document.querySelector('#alternativa0'),
	document.querySelector('#alternativa1')
];

function exibirPergunta() {
	perguntaLabel.textContent = pergunta.tituloPergunta;
	
	for (let i = 0; i < pergunta.alternativas.length; i++) {
		alternativaLabels[i].textContent = pergunta.alternativas[i];
	}
	
	// Também podemos usar o forEach, o segundo parâmetro é sempre o índice
	alternativaLabels.forEach((label, index) => {
		label.textContent = pergunta.alternativas[index];
	});
}
```

---

### Precisamos de mais perguntas

Podemos já criar um **array** de perguntas desde o começo, mantendo o nossos *objetos de pergunta*:
```js
const perguntas = [
	{
		pergunta: 'Quantos gatos o professor tem?',
		alternativas: [
			'3',
			'15'
		],
		resposta: '3'
	},
	{
		pergunta: 'Quantas chinchilas o professor tem?',
		alternativas: [
			'2',
			'0'
		],
		resposta: '0'
	}
]
```
Que tal se mantermos um **contador** para sabermos em *qual pergunta estamos* e usar ele pra *pegar a pergunta pelo índice*?

---

# Módulos em JS

Módulos permitem que *utilizemos códigos* JavaScript escritos em *um arquivo*, **importando** ele em *outros* arquivos.

- Então um **módulo** nada mais é do que um *arquivo que exporta o próprio código*.

Isso permite que programadores *organizem o código* dos seus próprios projetos e possibilita também que o *compartilhem com o mundo* em forma de **bibliotecas.**

Para isso, usamos a sintaxe de `export` e `import`:
```js
// export.js
export const frase = 'Tem uma cobra na minha bota!';

// import.js
import { frase } from './export.js';

console.log(frase); // => Tem uma cobra na minha bota!
```

Além disso, existe a possibilidade de exportarmos e importarmos um valor `default`:
```js
// export.js
export default 'Essa é uma nova frase';

// import.js
import novaFrase from './export.js';

console.log(novaFrase);
```
Notem que aqui eu tive que declarar um *nome* para esse import, já que ele foi exportado como default.

Podemos usar também a palavra-chave `as` para *renomear algum módulo* sendo *exportado* ou mesmo sendo *importado*:
```js
// export.js
const soma = (a, b) => a + b;

export { soma as somaRenomeado };

// import.js
import { somaRenomeado } from './export.js';

console.log(somaRenomeado(1, 2)); // => 3
```

Também podemos fazer os *exports e imports* em forma de *lista*:
```js
// export.js
export {
	soma,
	multiplica as multiplicaRenomeado2
}

// import.js
import {
	soma as somaRenomeado2,
	multiplicaRenomeado2
} from './export.js';

console.log(somaRenomeado2(1, 2)); // => 3
console.log(multiplicaRenomeado2(2, 3)); // => 6
```

---
### Que tal exportarmos nosso dicionário?

Quando precisarmos *expandir* nosso *dicionário* para comportar mais perguntas e respostas, **logo ele vai estar tomando todo o nosso arquivo JS**.

Gostaria de *abstrair* ele para um *arquivo separado*, que vai ter a responsabilidade exclusiva de guardar nossa *constante de perguntas*. Assim poderíamos até guardar diferentes perguntas para diferentes tipos de quiz, dependendo do arquivo! O que acham da ideia?

---

### Referências Interessantes
- [Neal.fun](https://neal.fun/) - Um site que encontrei com alguns joguinhos beeem interessantes! Podem se tornar ótimas referências pra desafios maiores, caso vocês venham a se inspirar.