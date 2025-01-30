// const inquirer = require('inquirer')
import inquirer from 'inquirer'

const resposta = await inquirer.prompt([
    {
        type: 'list',
        name: 'pergunta',
        message: 'Escreve aí',
        choices: ['opcao 1', 'opcao 2', 'opcao 3']
    }
])

console.log(resposta.pergunta)