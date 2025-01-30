const btnPedra = document.getElementById("btn-pedra");
const btnTesoura = document.getElementById("btn-tesoura");
const btnPapel = document.getElementById("btn-papel");

const imgUsuario = document.getElementById("p-img");
const imgCPU = document.getElementById("cpu-img");

btnPedra.addEventListener('click', () => jogar('pedra'));
btnPapel.addEventListener('click', () => jogar('papel'));
btnTesoura.addEventListener('click', () => jogar('tesoura'));

const opcoes = ["pedra", "papel", "tesoura"];

function jogar(escolha) {
    const escolhaCPU = decisaCPU();

    iniciarAnimacao();

    setTimeout(() => {
        exibirEscolha(escolha, escolhaCPU);
        limparAnimacao();
        
    }, 2000);


}

function iniciarAnimacao() {
    imgUsuario.src = `./assets/pedra.png`;
    imgCPU.src = `./assets/pedra.png`;

    imgUsuario.style.animation = "shake 2s ease";
    imgCPU.style.animation = "shake 2s ease";
}

function limparAnimacao() {
    imgUsuario.style.animation ="";
    imgCPU.style.animation ="";
}

function decisaCPU(){
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function exibirEscolha(escolha, escolhaCPU){
    imgUsuario.src = `./assets/${escolha}.png`;
    imgCPU.src = `./assets/${escolhaCPU}.png`;
}
