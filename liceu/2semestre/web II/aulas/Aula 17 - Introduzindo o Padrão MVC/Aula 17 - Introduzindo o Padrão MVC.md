
Antes de partir pro conteúdo, quero passar pra vocês todas as informações relacionadas ao trabalho da [[API Aberta]]. Como sempre, vocês podem encontrar o arquivo completo com o conteúdo e os requisitos em `atividades > api aberta`.

---

# MVC (Model-View-Controller)

Um conceito *importantíssimo* para entender como são *arquitetadas as aplicações modernas* é o padrão **MVC**. Ele é um **padrão de arquitetura de software** que usamos para *separar as responsabilidades* da nossa aplicação.

A proposta de padrões como esse é dividir nossa aplicação em *camadas* de maneira, lógico, *padronizada*. Dessa forma, sempre que pegamos um projeto novo para trabalhar, basta conhecer o padrão pra *imediatamente entender a arquitetura* do sistema, e *saber onde fica o código* que nos importa.

> O MVC é o padrão de estruturação de projeto *dominante* hoje no mercado

## As camadas 

![[MVC.jpg]]

#### View (Visão)
É responsável pela interface do usuário, exibindo dados e permitindo interação com eles. A View apenas reflete o estado do Model e não contém lógica de negócios
- Basicamente o *front-end* da aplicação, uma página web por meio da qual o usuário interage com o sistema
- Renderização de formulários, tabelas, e elementos visuais baseados nos dados fornecidos pelo Controller
- Captura de inputs do usuário, como e preenchimento de formulários, e o repasse desses dados para o Controller

#### Controller (Controlador)
O Controller manipula a lógica de controle, recebendo as entradas do usuário, modificando a Model, e atualizando a View
- Recebe e processa solicitações do usuário, por exemplo *requisições HTTP* via GET ou POST
- Lidar com a lógica do fluxo da aplicação, por exemplo decidir qual página exibir ou qual ação tomar em resposta a um input
- Validação básica de entrada, por exemplo se os dados enviados pelo usuário estão no formato correto antes de enviar à Model pra uma melhor validação

#### Model (Modelo) 
É responsável por gerenciar os dados e garantir que as regras de negócios sejam aplicadas corretamente. Uma Model representa um tipo de registro da sua aplicação, como uma tabela do banco de dados
- Valida os dados, tipo verificar se um e-mail é válido ou se a senha tem a complexidade necessária
- Faz a conexão com o banco de dados, como em operações CRUD (Create, Read, Update, Delete)
- Mapeia um objeto da aplicacão e suas interações com o banco de dados

---

## Exemplo de estrutura

Achei legal trazer alguns exemplos de **frameworks** populares de como são estruturados os projetos, na maior parte das vezes por padrão (os projetos já vêm assim!)

Claro! Aqui estão alguns exemplos de **frameworks populares** que seguem o padrão **MVC**, com uma visão resumida da estrutura básica de pastas:

##### Ruby on Rails
```
/app
	/controllers   # Controllers
	/models        # Models
	/views         # Views (HTML, ERB templates)
/config            # Configurações da aplicação
/db                # Arquivos de migração do banco de dados
```

##### ASP.NET (C#)
```
/Controllers      # Controllers
/Models           # Models
/Views            # Views (Razor templates)
/wwwroot          # Arquivos estáticos (CSS, JS, Imagens)
/Properties       # Outros arquivos de configuração
```

##### Laravel (PHP)
```
/app
	/Http
		/Controllers  # Controllers
	/Models           # Models
/resources
	/views            # Views (Blade templates)
/public               # Arquivos estáticos (CSS, JS)
/database             # Migrações, Seeds
```

Esses frameworks seguem o padrão MVC para organizar o código de forma clara e manter a separação de responsabilidades. Cada um tem sua particularidade, mas a divisão entre **Model**, **View**, e **Controller** é uma base comum entre todos.

---

# Aplicando esses conceitos

Isso é algo *difícil de visualizar na teoria*, então agora que entendemos, vamos pegar minha API do Galinho Chicken Little e aproveitar que ela ainda está bem simples para *aplicarmos o padrão MVC* nela. Com isso, estaremos preparados pra evoluir nossas aplicações de maneira a sempre manter um *padrão conciso, e fácil de fazer manutenção* no futuro.

A partir de agora, a aula será *bem expositiva*. Reaproveitaremos muito do código que temos, mas faremos algumas abstrações complexas, portanto quero que estejam **bem atentos** no que vamos fazer juntos, pra garantir que entendam cada passo do processo.

> Se preferirem, eu até gostaria que puxassem cadeiras aqui na frente para acompanharmos no projetor, prefiro que não codem nada junto agora

Pode ser que precisemos continuar esse projeto na semana que vem, mas não me incomodo. Prefiro passar bastante tempo aqui tentando garantir que estejamos bem entendidos, mas sem voltar em conceitos anteriores.