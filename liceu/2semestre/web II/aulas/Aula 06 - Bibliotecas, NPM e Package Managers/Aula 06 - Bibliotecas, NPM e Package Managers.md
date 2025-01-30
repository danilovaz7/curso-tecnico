
O JavaScript que vimos até aqui - no primeiro semestre - tinha o propósito principal de *manipular a DOM* em um nível simples. Agora, vamos começar a trabalhar com a *linguagem* num *nível acima*!

Agora que temos essa bagagem, sabemos usar *JavaScript*, entendemos a *comunicação HTTP*, imagino que estejam ansiosíssimos para fazermos um **servidor**!
	Pelo menos espero que estejam, eu certamente estou.

### Reinventar a roda é difícil

Infelizmente, pra começarmos a desenvolver *programas sofisticados* como um **servidor**, temos uma lista *interminável* de *pequenas funcionalidades* para criar do zero que vai nos tomar um trabalhão e também exige um *bom conhecimento*.

**Para um servidor simples com um CRUD, precisaríamos:**
- Disponibilizar uma *porta* local
- Escutar essa porta por *requisições* HTTP
	- Fazer o *roteamento* dessas requisições
	- Lidar com *parâmetros* dessas requisições
- Integrar e se comunicar com um *banco de dados*
	- Manipular *queries* SQL para operar no BD
- Produzir *respostas* HTTP

> Pois é exatamente isso tudo que faremos nas próximas aulas, mas com certeza *não temos um curso inteiro* para isso.

Acontece que todas essas coisas são necessidades *comuns* para todo *servidor*, e muitos desenvolvedores ao redor do mundo já tiveram que lidar com todos esses problemas.

Quando temos uma situação assim, podemos *disponibilizar nosso código* com o mundo em forma de **bibliotecas**.

---

## Bibliotecas - ou "libs"

> Mencionamos algumas vezes sobre *bibliotecas* no semestre passado e finalmente teremos a oportunidade de usá-las.

Esses códigos que outras pessoas já fizeram são disponibilizados na internet na forma de **"pacotes"**, que podem ser *importados* para a nossa aplicação quando necessário. Na prática, estamos simplesmente *baixando* o código e utilizando os *objetos e funções* que ele disponibiliza.

Às vezes, esse conjunto de códigos pode ser tão *grande* e ambicioso, que é *mantido por grandes empresas*, como é o caso do **React** por exemplo, que é mantido pelo Facebook/Meta.

Podemos ver uma **biblioteca** simples em ação como a [**CHALK**](https://www.npmjs.com/package/chalk), que serve para conseguirmos exibir textos *coloridos* na linha de comando.

![[demo_chalk.png]]

Eu por exemplo usei a *chalk* para fazer um script que "printa" na linha de comando o *nome* de uma cor *pintado* de uma cor completamente diferente. **Vamos ver?**

---

### Como instalamos uma Biblioteca?

Seria muito complicado termos que navegar em *busca do código* de cada biblioteca para *cada* funcionalidade da nossa aplicação, e copiar ele pra dentro do projeto.

**E as dependências? E diferentes versões?**
Além de ter que lidar com esse *código de terceiros*, muito provavelmente esse código que você pegou também *depende de outros* códigos de outras pessoas inteiramente. Pior ainda, essas pessoas estão constantemente disponibilizando *versões atualizadas* desses códigos, corrigindo bugs e incluindo novas funcionalidades.

Para isso então utilizamos *gerenciadores de pacotes*, ou **Package Managers**.

## Package Managers

Os **Gerenciadores de Pacotes** são ferramentas que usamos para lidar com as *instalações* das nossas bibliotecas/pacotes. Isso inclui *instalar*, *desinstalar* e *gerenciar as versões* dessas libs, e até para facilitar que consigamos *publicar nossas próprias bibliotecas* na Web.

Temos package managers para **linguagens** e para **sistemas operacionais**:
##### PMs de Sistemas Operacionais
É importante vocês saberem que existem gerenciadores de pacotes também para nossos *OSs*, que no nosso caso aqui é o *Windows*, e o uso deles é fundamental para um desenvolvedor. Eles **gerenciam os programas que instalamos** no nosso PC - fazem download da web, gerenciam as instalações e versões.

> Geralmente usamos esses gerenciadores de pacotes para instalar as linguagens e ferramentas que usamos para programar

**Gerenciadores populares de diferentes Sistemas Operacionais:**
- Linux: APT
- Windows: Chocolatey
- MacOS: Homebrew

##### PMs de Linguagens de Programação
Para linguagens de programação, como já vimos, os gerenciadores de pacotes servem para *instalarmos as bibliotecas e frameworks* que queremos usar nos nossos projetos, é o que utilizaremos *hoje*.

Gerenciadores populares de diferentes linguagens:
- JavaScript: NPM ou Yarn
- Ruby: RubyGems (`gem`) / Bundler
- Python: Pip
- Java: Maven ou Gradle

---

#### Vamos usar o NPM
Para esse semestre, vamos focar principalmente no uso do **NPM**, que é mais tradicional para o JS. A maior parte dos pacotes que vocês precisarem para o JavaScript provavelmente *estará disponível* tanto para o *NPM* quanto pro *Yarn*, mas a diferença *na prática* é pouca.

## Node Package Manager - NPM

O *NPM* é o gerenciador mais usado no JavaScript, ele é *mantido* pelo *GitHub*, e vocês vão ver como é simples de usarmos para instalar as mais diversas *bibliotecas*.

**Podemos ver a página da lib chalk disponível no NPM:** [chalk](https://www.npmjs.com/package/chalk)
- Lá também temos acesso à *documentação*, *dependências* e *versões*

Para instalarmos a **chalk**, podemos navegar na *linha de comando* até uma pasta dedicada para nosso projeto, e rodar um comando simples de instalação:
- `npm install chalk`

Também podemos especificar a versão do chalk que queremos instalar identificando ela após o `@`:
- `npm install chalk@4.0.0`

Vimos que isso **gerou alguns arquivos** na pasta do nosso projeto:
##### package.json
O arquivo **package.json** é o mais *importante* e que teremos o maior contato. Aqui são definidos quais os pacotes que nossa aplicação depende - ou seja, suas *dependências* - e suas respectivas *versões*.
```json
{
  "dependencies": {
    "chalk": "4.0"
  }
}
```

Nele também podemos - e geralmente vamos - definir informações adicionais da nossa aplicação, como o *nome* do projeto, a *versão* dele, o *autor*, *descrição* e até definir *scripts* para serem executados de maneira fácil.

##### package-lock.json
O *package-lock.json* é um arquivo que podemos ignorar na maior parte do tempo, mas ele não deixa de ter sua importância. Esse arquivo também é gerado pelo *NPM* e lista no detalhe a versão exata de cada uma das dependências instaladas e pode variar dependendo do momento em que elas foram baixadas ou do ambiente.

##### node_modules
A pasta *node_modules* contém os arquivos referentes às nossas bibliotecas. Algo que podemos perceber de cara é que temos bem mais dependências do que apenas o *chalk*.

Isso porque as bibliotecas que usamos muitas vezes também *utilizam outras bibliotecas* - e portanto *dependem* delas. Podemos verificar dentro de cada pasta que cada uma tem seu próprio `package.json` listando suas dependências.

#### Compartilhar projetos sem dependências
Agora que temos um *arquivo que lista nossas dependências* e suas respectivas versões, fica muito fácil para o *NPM* saber como baixar essas bibliotecas, se for necessário. É por isso que:

**Nós não compartilhamos projetos com a pasta `node_modules`!**

Tanto para *commitar* nosso código no *GitHub*, quanto para *compartilhá-lo* com outras pessoas, nós não precisamos incluir nossas dependências, elas poderão sempre ser *baixadas* utilizando o *NPM* com um simples comando:
```
npm install
(ou npm i)
```

Também não é costume compartilhar o arquivo `package-lock.json`, mas pode ser útil se quisermos instalar *exatamente* as versões utilizadas no desenvolvimento do projeto.

##### Algumas bibliotecas são pesadíssimas
Um dos maiores motivos para não querermos compartilhar nossas dependências é por conta do tamanho que elas podem ocupar. 
- Temos bibliotecas simples e portanto bem leves também, por exemplo o próprio **chalk**, com apenas *43kb*
- E temos bibliotecas como o **tailwind**, que facilita no desenvolvimento de *CSS*, com incríveis *5.62mb* (para arquivos de texto, é muita coisa)

> Isso tudo não é exclusividade do JavaScript ou Node, nunca vamos querer compartilhar nossas dependências por esses motivos

---

**Quando quisermos iniciar um projeto novo e sair trabalhando nele usando o NPM para lidar com nossas bibliotecas, podemos usar o `npm init`**
- O comando `npm init` irá nos fazer perguntas sobre dados básicos da nossa aplicação para criar um *package.json* com essas infos
- Para criar o arquivo com informações *padrão*, sem precisar responder as perguntas todas, utilizamos o `npm init -y`

---

## Instalações locais e globais

##### Instalando localmente
Instalar dependências localmente com *NPM* significa que os pacotes são instalados *dentro do diretório do projeto*, especificamente na pasta `node_modules`. Significa que essas dependências serão utilizadas *exclusivamente por esse projeto* e não interferem nos demais projetos ou no ambiente global do sistema. Essa instalação é ideal para garantir que cada projeto use versões específicas de pacotes sem conflitos com outras versões em outros projetos.

##### Instalando globalmente
Por outro lado, ao instalar dependências *globalmente*, os pacotes são instalados no *sistema inteiro* e ficam disponíveis para qualquer projeto ou para serem usados diretamente no terminal, como *ferramentas de linha de comando*. Usamos a instalação global para pacotes que fornecem utilitários que precisamos acessar de qualquer lugar no sistema, como o próprio `npm` - que também é instalado globalmente, ou também outras *libs* como `gulp` ou `nodemon`.

> Em resumo, usamos a instalação local para dependências específicas de um projeto e a instalação global para ferramentas que queremos usar em qualquer lugar no sistema.

Para instalarmos pacotes globalmente usando o NPM, passamos a *flag* `-g`:
```shell
npm install -g figlet-cli
```

Um exemplo de instalação global simples para fazermos de demonstração é o [figlet](https://www.npmjs.com/package/figlet). Agora que instalamos ele globalmente no nosso sistema, podemos utilizá-lo direto na linha de comando:
```shell
figlet -f "Dancing Font" "salve rapaziada"
```

---

## Vamos usar o que aprendemos?

Por que não fazemos um projetinho simples usando essas bibliotecas? Ou talvez começarmos a adicionar algumas delas aos nossos *projetos de consumir APIs*.

Trago uma lista de *bibliotecas* simples para brincarmos na linha de comando e utilizando o *NPM* para baixá-las:
- [chalk](https://www.npmjs.com/package/chalk?activeTab=readme) - Exibe texto colorido
- [figlet](https://www.npmjs.com/package/figlet) - Exibe texto com fontes com estilizações malucas 
- [boxen](https://www.npmjs.com/package/boxen) - Exibe "caixas" estilizadas ao redor do conteúdo
- [inquirer](https://www.npmjs.com/package/inquirer) - Uma maneira boa e bonita de receber inputs do usuário
- [ora](https://www.npmjs.com/package/ora) - Exibe uma animação de carregamento para processos lentos

---

### Referências interessantes
- Um vídeo muito bom sobre a utilização do NPM (inglês): https://youtu.be/P3aKRdUyr0s?si=GDrqcODGQnCHw1y-