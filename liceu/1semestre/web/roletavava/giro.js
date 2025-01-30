

const botao = document.getElementById('botao');
const campeoes = document.getElementsByClassName('agente-foto');
const nomeCampeao = document.getElementsByClassName('campeao-nome');

let imagens1 = [
    { imagem: 'agentes/Iso.png', nome: 'Iso' },
    { imagem: 'agentes/jett.png', nome: 'Jett' },
    { imagem: 'agentes/omen.png', nome: 'Omen' },
    { imagem: 'agentes/brim.png', nome: 'Brim' },
    { imagem: 'agentes/sova.webp', nome: 'Sova' },
    { imagem: 'agentes/astra.png', nome: 'Astra' },
    { imagem: 'agentes/pheonix.png', nome: 'Pheonix' },
    { imagem: 'agentes/viper.png', nome: 'Viper' },
    { imagem: 'agentes/Breach.png', nome: 'Breach' },
    { imagem: 'agentes/Fade.png', nome: 'Fade' },
    { imagem: 'agentes/Gekko.webp', nome: 'Gekko' },
    { imagem: 'agentes/Harbor.png', nome: 'Harbor' },
    { imagem: 'agentes/KAY.webp', nome: 'Kayo' },
    { imagem: 'agentes/Neon.png', nome: 'Neon' },
    { imagem: 'agentes/Reyna.png', nome: 'Reyna' },
    { imagem: 'agentes/Sage.webp', nome: 'Sage' },
    { imagem: 'agentes/KillJoy.png', nome: 'KillJoy' },
    { imagem: 'agentes/Cypher.png', nome: 'Cypher' },
    { imagem: 'agentes/Clove.png', nome: 'Clove' },
    { imagem: 'agentes/Skye.webp', nome: 'Skye' },
    { imagem: 'agentes/Yoru.webp', nome: 'Yoru' },
    { imagem: 'agentes/Raze.png', nome: 'Raze' },
    { imagem: 'agentes/Chamber.png', nome: 'Chamber' },
    { imagem: 'agentes/Deadlock.png', nome: 'Deadlock' }
];

let imagens2 = [
    { imagem: 'miniAgentes/MiniIso.png', nome: 'Iso' },
    { imagem: 'miniAgentes/MiniFade.png', nome: 'Fade' },
    { imagem: 'miniAgentes/MiniGekko.png', nome: 'Gekko' },
    { imagem: 'miniAgentes/MiniHarbor.png', nome: 'Harbor' },
    { imagem: 'miniAgentes/MiniClove.png', nome: 'Clove' },
    { imagem: 'miniAgentes/MiniDreadlock.png', nome: 'Dreadlock' },
    { imagem: 'miniAgentes/MiniChamber.png', nome: 'Chamber' },
    { imagem: 'miniAgentes/MiniBrim.png', nome: 'Brim' },
    { imagem: 'miniAgentes/MiniKayo.png', nome: 'Kayo' },
    { imagem: 'miniAgentes/MiniNeon.png', nome: 'Neon' },
    { imagem: 'miniAgentes/MiniYoru.png', nome: 'Yoru' },
    { imagem: 'miniAgentes/MiniAstra.png', nome: 'Astra' },
    { imagem: 'miniAgentes/MiniCypher.png', nome: 'Cypher' },
    { imagem: 'miniAgentes/MiniJett.png', nome: 'Jett' },
    { imagem: 'miniAgentes/MiniKilljoy.png', nome: 'Killjoy' },
    { imagem: 'miniAgentes/MiniOmen.png', nome: 'Omen' },
    { imagem: 'miniAgentes/MiniSova.png', nome: 'Sova' },
    { imagem: 'miniAgentes/MiniSage.png', nome: 'Sage' },
    { imagem: 'miniAgentes/MiniPheonix.png', nome: 'Pheonix' },
    { imagem: 'miniAgentes/MiniRaze.png', nome: 'Raze' },
    { imagem: 'miniAgentes/MiniReyna.png', nome: 'Reyna' },
    { imagem: 'miniAgentes/MiniSkye.png', nome: 'Skye' },
    { imagem: 'miniAgentes/MiniViper.png', nome: 'Viper' },
    { imagem: 'miniAgentes/MiniBreach.png', nome: 'Breach' }
];

let imagens = [...imagens1];

function verificaLarguraJanela() {
    if (window.innerWidth <= 500) {
        imagens = [...imagens2];
    } else {
        imagens = [...imagens1];
    }

}

function mudaPersonagem() {

    if(imagens.length<imagens1.length){
        if (window.innerWidth <= 500) {
            imagens = [...imagens2];
        } else {
            imagens = [...imagens1];
        }
    }
    

    for (let i = 0; i < campeoes.length; i++) {
        const indiceImagem = Math.floor(Math.random() * imagens.length);
        const imagemSelecionada = imagens[indiceImagem];
        campeoes[i].innerHTML = `<img src="${imagemSelecionada.imagem}" alt="">`;
        nomeCampeao[i].innerHTML = imagemSelecionada.nome;
        imagens.splice(indiceImagem, 1);
    }
}

botao.addEventListener('click', () => {
    verificaLarguraJanela();
    adicionaAnimacao();
    setTimeout(() => {
        mudaPersonagem();
        removeAnimacao();
    }, 2000);
});

function adicionaAnimacao() {
    for (let i = 0; i < campeoes.length; i++) {
        campeoes[i].classList.add('animacao-shake');
    }
}

function removeAnimacao() {
    for (let i = 0; i < campeoes.length; i++) {
        campeoes[i].classList.remove('animacao-shake');
    }
}


window.addEventListener('load', verificaLarguraJanela);
window.addEventListener('resize', verificaLarguraJanela);
