Como eu já havia introduzido pra vocês, vamos dar continuidade aos estudos de *JavaScript* nesse semestre, mais especificamente utilizando **Node**.

## JavaScript e Node.JS são diferentes!

**Quando o JS foi criado**, nos anos 90, ele servia como uma *linguagem de scripting* para rodar no *navegador*. Conforme a Web foi se desenvolvendo, ele foi expandindo para ter mais muitas capacidades, incluindo a criação do *Node.JS*, em 2009.
- Até aquele momento, era *impossível* rodar *JavaScript no servidor*.
- A maior parte dos servidores era escrito em linguagens mais estabelecidas como *Java* e *PHP*
- Essa criação revolucionou o mercado, porque agora conseguimos criar uma aplicação *Full-stack* usando uma *única linguagem* 

*JavaScript e Node.js são cruciais no desenvolvimento web moderno,* mas servem a propósitos diferentes e são usados ​​em ambientes diferentes. **JavaScript é uma linguagem de programação** usada principalmente para *desenvolvimento web no lado do cliente* , enquanto **Node** é um ambiente de tempo de execução que *permite que JavaScript* seja executado *no lado do servidor*.

| **JavaScript**                                                                                                                      | **NodeJS**                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Javascript é uma *linguagem de programação* usada *para escrever scripts* em sites.                                                 | NodeJS é um *ambiente de execução Javascript (Runtime)*                        |
| Javascript só pode ser executado nos navegadores.                                                                                   | Podemos executar Javascript fora do navegador com a ajuda do NodeJS.           |
| É usado no lado do cliente, portanto no desenvolvimento front-end.                                                                  | É usado principalmente no lado do servidor, portanto no back-end.              |
| Javascript é capaz de adicionar HTML e brincar com a DOM.                                                                           | Nodejs não é capaz de adicionar tags HTML.                                     |
| Javascript pode ser executado em qualquer navegador/browser, por *interpretadores* como *V8* do Chrome e *Spidermonkey* do Firefox. | V8 é a engine de Javascript dentro do NodeJS que analisa e executa Javascript. |
| É a versão atualizada do script ECMA que usa o mecanismo V8 do Chrome escrito em C++.                                               | Nodejs é escrito em C, C++ e Javascript.                                       |
> Fonte: [Artigo do GeeksForGeeks](https://www.geeksforgeeks.org/difference-between-node-js-and-javascript/)
> Sobre *interpretadores/engines* de JavaScript: [Interpretador de JavaScript](https://pt.wikipedia.org/wiki/Interpretador_de_JavaScript)

### E o que é o Node.JS

Como vimos, o *Node.JS não é uma linguagem de programação*, mas sim um **Runtime** de *JavaScript*. Ele serve para conseguirmos *rodar código JS* num *servidor*.

> Isso essencialmente significa podermos executar arquivos `.js` direto de uma máquina, *sem precisar de um navegador* para *interpretar* o código.

---

### Um papo sobre instalação

Para que a gente consiga *utilizar* o Node, temos que ter ele *instalado* na máquina para executar o comando `node` na **linha de comando** (terminal).

Já temos instalado o Node e o NPM nas máquinas aqui, mas para fazerem a instalação em casa e conseguirem rodar o código que vamos desenvolver esse semestre, vocês podem baixar a *última versão estável (LTS)* no próprio site do NodeJS:
- [Link para baixar o instalador fácil para Windows no site do Node](https://nodejs.org/pt/download/prebuilt-installer)

**O instalador fácil para Windows** disponível no site também vem acompanhado do *NPM* por padrão. Vamos ver mais sobre o NPM nas próximas aulas.

---

## Vamos fazer um código básico?

Que tal começarmos com algo *simples*, como um "olá, mundo"?
```js
// demo.js

console.log('Olá mundo!');
```

Podemos rodar nosso código no terminal usando o comando `node` seguido do *caminho* para nosso arquivo JS
- Por exemplo, se já tivermos navegado até a mesma pasta do arquivo: `node demo.js`

Infelizmente o *Node* não nos oferece uma forma fácil de receber *inputs* do usuário em tempo de execução, e como quero manter um exercício fácil, vamos ver como recebemos *argumentos na linha de comando*. Esses argumentos nada mais são do que "parâmetros" que passamos para nosso script na hora de executarmos ele, por exemplo:

`node ./saudacao.js Liam`
- Esse é o comando para executar nosso script, e *podemos capturar cada trecho separado por espaço* com `process.argv`

```js
// saudacao.js

const args = process.argv

// Vamos ver os argumentos que foram passados
// console.log(args)

console.log(`Olá ${args[2]}!`)
```

### E bora de exercício já!

> **Esse exercício vai contar nota!** Estarei avaliando *meio ponto (0.5)*

Imagino que *teremos tempo* de sobra pra desenvolvermos um scriptzinho simples desse, portanto gostaria que fizessem *até o fim dessa aula*. Ainda permitirei que entreguem na *próxima aula*, com a *nota máxima de 0.4 pontos*, além de que serei mais criterioso na avaliação.

#### Calculadora
Gostaria que criassem um código *Node.js* que realiza operações matemáticas básicas utilizando argumentos fornecidos na linha de comando:

**O script deve aceitar três argumentos:**
1. **Operador**: O tipo de operação a ser realizada (`soma`, `sub`, `mult` e `div`).
2. **Primeiro Número**: primeiro número para a operação.
3. **Segundo Número**: segundo número para a operação.

**Funcionalidades Básicas:**
- **Adição (soma)**: Soma dois números.
- **Subtração (sub)**: Subtrai o segundo número do primeiro.
- **Multiplicação (mult)**: Multiplica dois números.
- **Divisão (div)**: Divide o primeiro número pelo segundo.

**Validações:**
- Verificar se o *número correto de argumentos* foi fornecido.
- Verificar se os dois últimos argumentos são *números válidos*.
- Para a operação de *divisão*, verificar se o *divisor não é zero*.
- Verificar se o operador fornecido é válido (`soma`, `sub`, `mult` e `div`).

**Exemplos de uso:**
```
node calculadora.js soma 10 5
# Resultado: 15
node calculadora.js sub 10 5
# Resultado: 5
node calculadora.js mult 10 5
# Resultado: 50
node calculadora.js div 10 5
# Resultado: 2
```

##### Observações
- Para realizarem as operações nos parâmetros, precisarão primeiro *convertê-los para números (Int/Float)*, já que serão recebidos como *Strings*. Vocês podem fazer isso usando a função `parseFloat(string)`
- Para fazer a *validação numérica*, depois que fizerem o "parse" da string para número, podem utilizar a função `isNaN(numero)` para *checar se foi convertido corretamente*.
- Não é estritamente *necessário* para a interrupção do script, mas vocês podem utilizar `process.exit(1)` para *interromper a execução* com um código de erro (1).

---

### Referências Interessantes
- Colinha monstra de JavaScript: https://quickref.me/javascript.html