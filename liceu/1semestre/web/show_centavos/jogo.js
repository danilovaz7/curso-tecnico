import { perguntas } from "./perguntinhas.js";

const textoPergunta = document.getElementById('pergunta');
const form = document.getElementById('form');

const alternativaDivs = document.querySelectorAll('.alternativa');

const pontuacaAtual = [
    document.getElementById('ponto1'),
    document.getElementById('ponto2'),
    document.getElementById('ponto3'),
    document.getElementById('ponto4'),
    document.getElementById('ponto5'),
    document.getElementById('ponto6'),
];
const textoAlternativas = [
    document.getElementById('alternativa0'),
    document.getElementById('alternativa1'),
    document.getElementById('alternativa2'),
    document.getElementById('alternativa3')
];

const audio = document.getElementById('audio');
const audioVenceu = document.getElementById('audioVencedor');

const audioErro = [
    'audiosErro/sad.mp3',
    'audiosErro/emotionalDemage.mp3',
    'audiosErro/calabreso.mp3',
    'audiosErro/sadmorty.mp3'
];

const audioAcerto = [
    'audiosAcerto/bingchi.mp3',
    'audiosAcerto/memedocaixao.mp3',
    'audiosAcerto/receba.mp3',
    'audiosAcerto/umhomem.mp3'
];

alternativaDivs.forEach(div => {
    div.addEventListener('click', () => {
        
        div.getElementsByClassName('input')[0].click();
    });
});

let perguntaAtual = perguntaAleatoria();

let contador = 0;
exibirPergunta();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultadoResposta();
    form.reset();
});

function resultadoResposta() {
    if (perguntaAtual.resposta === respostaAtual()) {
        if (contador == 6) {
            salvarResultado()
            setTimeout(() => {
                marcarRespostaCorreta();
                audioVenceu.play();
                setTimeout(() => {
                    window.location.replace("resultados.html");
                }, 4000)
            }, 2000);
        } else {
            setTimeout(() => {
                marcarRespostaCorreta();
                premio();
                tocarAudio(audioAcerto);
                setTimeout(() => {
                    perguntaAtual = perguntaAleatoria();
                    exibirPergunta();
                    limparAlts();
                }, 4000);
            }, 2000);
        }
    } else {
        setTimeout(() => {
            marcarRespostaCorreta();
            perdeu();
            tocarAudio(audioErro);

            setTimeout(() => {
                salvarResultado()
                window.location.replace("resultados.html");
            }, 4000);
        }, 2000);
    }
}

function tocarAudio(arrayAudios) {

    const audioAleatorio = Math.floor(Math.random() * arrayAudios.length);

    audio.src = arrayAudios[audioAleatorio];

    audio.play();
}


function respostaDoUsuario(radio) {

    alternativaDivs.forEach(container => container.classList.remove('alternativaUsuario'));


    radio.parentElement.classList.add('alternativaUsuario');

}


function marcarRespostaCorreta() {

    for (let i = 0; i < textoAlternativas.length; i++) {

        if (textoAlternativas[i].textContent == perguntaAtual.resposta) {

            textoAlternativas[i].parentElement.classList.add('alternativaCorreta');
        }
    }
}

function limparAlts() {
    const alternativaDivs = document.querySelectorAll('.alternativa');
    alternativaDivs.forEach(container => container.classList.remove('alternativaUsuario'));
    alternativaDivs.forEach(container => container.classList.remove('alternativaCorreta'));
}


function premio() {
    pontuacaAtual[contador].classList.add('alternativaCorreta');
    pontuacaAtual[contador].innerHTML = "<img src='imagens/dindin.png' alt=''>";
    contador++;
}

function perdeu() {
    for (let i = 0; i < pontuacaAtual.length; i++) {
        if (pontuacaAtual[i].classList.contains('alternativaCorreta')) {
            pontuacaAtual[i].classList.remove('alternativaCorreta');
            pontuacaAtual[i].classList.add('errou');
        }
    }
}


function respostaAtual() {
    const alts = document.getElementsByName('alt');
    let alternativaAtual = null;

    for (const radio of alts) {
        if (radio.checked) {
            const alternativa = document.querySelector(`label[for="${radio.id}"]`);
            alternativaAtual = alternativa.innerText;
            break;
        }
    }
    return alternativaAtual;
}

function exibirPergunta() {

    textoPergunta.textContent = perguntaAtual.tituloPergunta;
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        textoAlternativas[index].textContent = alternativa;
    });


    const alts = document.getElementsByName('alt');

    alts.forEach(radio => {
        radio.addEventListener('click', () => respostaDoUsuario(radio));
    });




};

function perguntaAleatoria() {

    const indicePergunta = Math.floor(Math.random() * perguntas.length);
    const pergunta = perguntas[indicePergunta];
    perguntas.splice(indicePergunta, 1);
    return pergunta;

};



function salvarResultado() {

    localStorage.setItem('acertos', contador);

    let historico = JSON.parse(localStorage.getItem('historico')) || [];
    historico.push(contador);
    localStorage.setItem('historico', JSON.stringify(historico));
}