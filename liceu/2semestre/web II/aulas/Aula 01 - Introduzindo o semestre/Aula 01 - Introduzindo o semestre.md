Oi de novo, galera! Como foram as férias? Se é que tiveram férias, como no meu caso. Sentiram saudades de fazerem sites?

Hoje vou dar uma *introduzida* no que iremos ver no semestre, sem muito compromisso, não pretendo entrar em conteúdo hoje, gostaria só de trocar uma ideia sobre o que iremos ver, mostrar uma versão simplificada de um *CRUD* numa API.

Ao final, vou propor um exercício de *JavaScript* só para retomarmos o ritmo, lubrificar um pouco as engrenagens pra começarmos o semestre rasgando, porque já adianto, assim como o semestre passado, esse deve ser **puxado**.

---

### Vimos muito sobre HTML, CSS e JS

Semestre passado nós aprendemos um conteúdo que é a base para a programação *front-end*, mas é algo realmente básico. Essas tecnologias hoje por si só *dificilmente* são utilizadas. Tecnologias de desenvolvimento front-end hoje em dia muitas vezes permitem que escrevamos código *JavaScript* ou outros formatos e que depois são *"transformados" em HTML e CSS puro* antes de rodarem num navegador.

Isso é interessante, mas exige que a gente tenha entendido bem os conceitos anteriores antes de aplicarmos nosso conhecimento no desenvolvimento de uma página bela e interativa.

##### Mas isso não é o que veremos esse semestre

Assim como vimos os conceitos básicos necessários para o desenvolvimento Front-end, esse semestre veremos o básico do desenvolvimento **Back-end**.

A diferença dessa vez - e é também o que torna ainda mais legal - é que vamos conseguir desenvolver para o Back-end já com *ferramentas modernas* e *utilizadas hoje no mercado*!

O **NodeJS**, que é a ferramenta que utilizaremos esse semestre, é uma tecnologia popular e que tem todas as vantagens do *JavaScript*.
- É super simples, fácil de aprender e usar
- Temos acesso a uma lista interminável de bibliotecas para nos ajudar no desenvolvimento
- Permite utilizarmos uma única linguagem para desenvolvimento do front e back
	- Aumenta a produtividade da equipe
	- Facilita a contratação de programadores no regime full-stack
- Fácil instalação e nenhuma dependência
	- Em 1 minuto conseguimos configurar o ambiente de desenvolvimento e começar um projeto

---

##### Mas não podemos nos apegar à tecnologia
Algo que é importante comentar é que, independente das tecnologias que iremos utilizar esse semestre ou ao longo do curso, é *fundamental* que vocês entendam os **conceitos básicos** que apresentamos pra vocês.
- De nada adianta saber fazer um CRUD em NodeJS e não entender os conceitos envolvidos num CRUD.

>Vocês precisam ser capazes entender os conceitos básicos para serem capazes de desenvolver sistemas complexos independente da linguagem.  

Portanto peço uma *atenção especial* para as aulas de *conteúdo teórico*, principalmente essas do começo do semestre, *para que consigam desenvolver* todo o *conteúdo prático* com excelência e sem precisarmos revisitar os fundamentos.

### Peço atenção dobrada nesse início de semestre

Veremos um conteúdo bem denso de começo. Quero passar essas primeiras aulas focando bastante nas bases fundamentais que utilizaremos para conseguirmos criar aplicações mais complexas, para a partir daí começarmos a pegar pesado nos exercícios práticos e podermos aprimorar nossas aplicações aos poucos.

> **Tenham cuidado com as faltas!** Perder uma aula dessas de conteúdo pode ser perigoso, principalmente porque *farei exercícios avaliativos em sala*.

---

### Não sei nada sobre o TCC, mas...

**Muito provavelmente o que aprendermos aqui poderá ser usado no TCC**. Hoje em dia *sistemas Web são a norma*, sendo a responsabilidade principal da *maioria esmagadora* dos desenvolvedores no mercado hoje.

---

## Que tal uma demo?

Trouxe pra vocês uma demonstração super simples de uma aplicação back-end contendo um CRUD, sem comunicação com banco de dados.

Fiz essa usando um framework de NodeJS chamado **Fastify**. Esse *não é o framework que utilizaremos esse semestre*, mas é um dos que experimentei durante essas férias pra trazer pra vocês.

Essa demo *não tem comunicação com banco de dados*, portanto se reiniciarmos a execução dela, nossos dados *não são persistidos*, ela os guarda apenas em memória.

Como vocês já sabem, um CRUD significa que permitimos a:
- Criação de registros **(Create)**
- Leitura de registros **(Read)**
- Atualização de registros **(Update)**
- Exclusão de registros **(Delete)**

Como utilizamos *APIs* no final do semestre passado, vocês já tem uma noção beeem basiquinha de como elas funcionam, **bora ver essa minha em ação**.

---

## Vamos recuperar o ritmo

**Que tal um exercício de JavaScript?** Mas sem manipulação de DOM dessa vez.

Os exercícios são *simples*, mas vocês talvez precisem revisitar alguns conceitos do semestre passado, como *arrays*, *manipulação de strings* gostaria que vocês criassem algumas *funções*, que poderemos chamar pelo console do navegador. Cada exercício representará uma função, que tem um *input* e um *output* como descrito em cada um.

##### Exercício um
Receba *dois números* e retorne qual o *maior* entre eles.

##### Exercício dois
Receba um *array de números*. Essa função deve retornar o *maior* e o *menor* entre eles. Gostaria que fizessem da maneira *chata*, iterando pelo array sem utilizar aquelas funções "prontas" JS.

##### Exercício três
Receba uma string representando um *nome completo*. Essa função deve retornar esse nome formatado como em uma bibliografia. *Ex:*
```
João Alfredo Silva Mendes => MENDES, João Alfredo Silva.
```

##### Exercício quatro
Receba um *array de números*. Essa função deve retornar *quantas vezes aparece cada número* recebido nesse array.