
# Autenticação

**Autenticação** é o processo de *verificar a identidade* de um usuário ou sistema, para garantir que ele é realmente quem diz ser e, baseado nisso, conceder acesso aos recursos do app. É um processo importantíssimo para proteger dados sensíveis e funcionalidades restritas, impedindo que pessoas não autorizadas tenham acesso a informações confidenciais ou realizem ações sem permissão.

> Em aplicações *Web*, é difícil pensar em alguma que não tenha nenhum tipo de *login*

Em aplicações modernas, gerenciar a autenticação de um usuário também permite personalizar a sua experiência, oferecendo recursos e dados específicos de acordo com o perfil e *permissões* de cada pessoa - mas isso já entra em *Autorização*.

Hoje existem *duas principais maneiras* de gerenciar a **autenticação** numa aplicação: **Sessions** e **JWT**, cada uma com suas vantagens.

---

### Sessions

**Sessões** são uma forma tradicional de gerenciar a autenticação, onde os *dados do usuário* autenticado são *mantidos no servidor*. Ao fazer *login*, o servidor cria uma **sessão** para o usuário e armazena informações relevantes no *banco de dados*. A API então retorna um *ID de sessão* para o cliente. Nas próximas requisições, o cliente envia o *ID*, permitindo que o servidor *identifique a sessão e valide o usuário*.

> O *ID de sessão* geralmente é armazenado pelo cliente (navegador) em forma de **Cookie**, já que eles são *enviados automaticamente* pelos navegadores nas requisições seguintes.

A **vantagem** de usar sessões é sua segurança, já que os *dados de autenticação ficam no servidor*, são estando expostos ao cliente então. Além disso, o servidor também pode *invalidar ou expirar sessões a qualquer momento*, por exemplo depois de um tempo, ou ao fazer logout.

Em compensação, caso estejamos trabalhando *sistemas distribuídos (microserviços)*, manter sessões pode ser complicado, pois exige um armazenamento compartilhado ou a replicação de dados de sessão entre servidores - *imagine ter que lidar com isso em múltiplas aplicações*. Além disso, armazenar e gerenciar sessões no servidor pode *consumir mais recursos* à medida que o número de usuários aumenta, o banco de dados chora.

---

### JWT (JSON Web Tokens)

O **JWT** é um método de autenticação sem estado, onde o gera um *token* para o usuário após o login e retorna ele ao cliente. Esse *token* contém informações do usuário e é *assinado* (criptografado) pelo servidor. O token é então *armazenado no cliente* (como o *sessionId*) e enviado junto a cada requisição, então o *servidor o valida* para conceder ou negar o acesso.

Por ser um sistema *sem estado*, a vantagem é que o servidor não precisa armazenar tokens, nem sessões, oferecendo um design mais *escalável* para *APIs distribuídas*. Os *JWTs* também podem conter informações adicionais, permitindo que sejam usados para autorizar diferentes níveis de acesso.

Apesar disso, como o token é armazenado no cliente, isso é um perigo para a segurança, porque ele pode ser exposto em ataques, como *XSS (Cross-Site Scripting)*. Outra coisa é que *revogar tokens* pode ser um trabalho chato, pois o servidor não mantém o estado da sessão.

---

## Mão na massa

Que tal *criarmos uma aplicação do zero*, bem enxuta, só para aprendermos a *autenticação*? Acho que é uma boa prática criarmos projetos novos de vez em quando para exercitar os conceitos mais básicos que vimos, e dar oportunidades para revisar algo que talvez não tenha ficado tão claro.

Sei que vocês estavam empolgados para usar o *MySQL*, mas para essa *demo*, acho que podemos meter um *SQLite* só para agilizar o desenvolvimento. Vamos criar algo bem simples, com uma rota de exemplo, uma para *login*, e uma rota *protegida*, que exigirá a autenticação do usuário.

**Feito isso**, podemos partir para a parte que importa: vamos implementar a autenticação com *Sessions* e *JWT*.

> Como não tenho como digitar tudo que vamos fazer, vou colocar aqui alguns *trechos* importantes para o que iremos desenvolver.

##### Gerenciando Cookies
Para recebermos *Cookies* na nossa aplicação, podemos utilizar a biblioteca `cookie-parser`, que é bem comum de ser utilizada no *express*. Podemos importar essa *lib* e usar ela como um *middleware* para nossas rotas:
```js
import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser()) // Define o cookieParser como um middleware de requisições

app.get('/', (req, res) => {
    res.send(req.cookies) // Podemos acessar os cookies pelo "req.cookies" agora
})

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000')
})
```

##### Criando Sessões
Para criar e gerenciar **Sessões**, precisaremos de uma tabela de *Sessions* no nosso banco de dados, e precisaremos armazenar nossas sessões lá, provavelmente com uma identificação (id) e uma data de expiração.

Não será nada muito distante do que já conhecemos, vamos apenas *salvar um registro de sessão* no banco quando chamada a rota de login, e *retornar um id da sessão*. Com isso, o usuário poderá fazer as requisições subsequentes com esse id e poderemos conferir no banco se aquela sessão existe antes de cada request. Até aqui *nada que já não sabemos fazer*.

Única coisa interessante que gostaria de mostrar pra vocês são *duas curiosidades*:

Podemos usar a biblioteca `uuid` para gerar *IDs mais não-replicáveis* para nossas sessões - afinal, não gostaríamos que algum mal-intencionado pudesse digitar um ID qualquer e por sorte acessar a conta de um usuário real:
```js
import { v4 as uuid } from 'uuid' // Podemos renomear o import da função v4

console.log(uuid()) // Isso vai nos gerar um uuid
```
- UUID (Universally Unique Identifier) é um identificador único universal que gera valores *quase impossíveis de serem duplicados*, também vai servir como um ótimo ID de sessão

Por fim, gostaria de exemplificar como conseguiríamos usar os objetos `Date()` para lidar com a data de expiração, por exemplo:
```js
const session = Session.create({
	uuid: uuid(),
	expires: new Date(Date.now() + 60000) // Criamos uma data de expiração com o horário de agora + 60k milisegundos (60 segundos)
})

// Agora podemos comparar se a data de expiração é menor que o horário atual
session.expires < new Date()
```

##### Criando um middleware
Agora que criamos uma maneira de *autenticar* nosso usuário, se precisarmos fazer a mesma lógica para todas as rotas vamos replicar código na aplicação inteira, e lógico que não queremos isso. 

Podemos, por outro lado, criar uma *função* que irá gerenciar a autenticação do usuário e assim conseguiremos chamá-la como um *middleware* para *todos os endpoints que precisarmos*:
```js
router.get('/', (req, res) => {
	res.send('<h1 style="text-align: center">Rota desprotegida!</h1>')
})

router.get('/welcome', authenticate, (req, res) => {
	res.send(`<h1 style="text-align: center">Bem-vindo, ${req.user.name}!</h1>`)
})

function authenticate(req, res, next) {
	req.user = { name: 'Jamilton' }
	
	next()
}
```
- Nesse exemplo, temos uma rota desprotegida (`/`) e uma protegida (`/welcome`)
- Podemos passar múltiplas funções para nossa rota (independente de *get*, *post* etc)
- Estamos passando a função `authenticate` antes da nossa função da rota, isso define que vamos chamar primeiro nosso `authenticate` como um *middleware*
	- Vejam que nossa função *authenticate* recebe três parâmetros, os dois que já conhecemos de requisição e resposta e mais um: o `next`
	- O `next` é uma função para chamarmos quando quisermos que a próxima função na lista de *handlers* do nosso endpoint seja chamada, nesse caso, a função final para lidar com nossa rota
	- Portanto, nesse caso estamos na função *authenticate* apenas preenchendo um objeto de usuário na nossa requisição, e chamando a próxima função, na qual poderemos acessar esse objeto de usuário da mesma maneira

##### Criando JWTs
Para fazer nossa autenticação usando **JWTs**, podemos instalar uma biblioteca também bem padrão para lidarmos com *tokens* de maneira simples: `jsonwebtoken` (duh)

Como não precisamos salvar nenhuma informação de sessão na nossa aplicação, gerenciar os *tokens* será bem tranquilo. Precisaremos apenas *gerar esse token para o cliente* no momento do login, e *conferir a validade desse token* em todas as requisições protegidas.

> Lembrando também que nos tokens podemos incorporar diversas informações, não apenas o id do usuário como será nosso caso

Vamos ver como faremos isso:
```js
import jwt from 'jsonwebtoken'

// Geralmente secrets são armazenadas em variáveis de ambiente
const SECRET_KEY = 'uma-chave-secreta'

// Podemos gerar o token com o id do usuário
let user = { id: 123 }
const tokenEncrypted = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 60 })

// Podemos verificar a validade do token
const tokenDecrypted = jwt.verify(tokenEncrypted, SECRET_KEY)

// O token descriptografado é um objeto como montamos na geração dele
console.log(token.id)
```
- Para *criptografar um JWT*, geralmente usamos um *segredo*, uma chave secreta da nossa aplicação e que preferencialmente armazenaremos em variáveis de ambiente
- Podemos *"assinar"* um token com um objeto na função `jwt.sign()`, que pode ter mais do que apenas um *id*, e ele conterá todas as informações criptografadas nele
	- Vejam que podemos passar uma data de expiração para esse *token*. Isso vai fazer com que essa data seja gerenciada automaticamente, e a função de verificar *já vai dar o token como inválido* se estiver expirado.
- Depois disso, podemos *verificar a validade* desse token com o `jwt.verify()`
	- Importante dizer que essa função estoura um *erro ao tentar validar um JWT inválido ou expirado*, portanto não seria uma má prática colocar essa chamada dentro de um *try-catch* para tratar esse erro.
	- O objeto recebido em retorno é *o mesmo que usamos na criação do token*. Isso nos permite também criar tokens com bem mais informações úteis do que só o id do usuário, por exemplo com o *tipo* dele para autorização ou outras coisas