import { perguntas } from "./perguntas.js";

const perguntaLabel = document.getElementById('pergunta');
const quizForm = document.getElementById('form');
const alternativaLabels = [
    document.getElementById('alternativa0'),
    document.getElementById('alternativa1')
]


let indicePergunta = 0;

exibitPergunta();

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    revolverProblema();
    quizForm.reset();
    
})

function revolverProblema() {
    //checar resultado da pergunta
    indicePergunta++;

    exibitPergunta();
    // caso noa tenha mais pergutna exibir o resultado
}

function exibitPergunta () {
const pergunta=perguntas[indicePergunta]
perguntaLabel.textContent = pergunta.tituloPergunta;

pergunta.alternativas.forEach((alternativa, index)  => {
    alternativaLabels[index].textContent = alternativa 
})
};