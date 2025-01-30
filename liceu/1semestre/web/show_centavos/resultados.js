const botaoLimpa = document.getElementById('botao-resultado');

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('ultimaTentativa')) {
        const acertos = localStorage.getItem('acertos');
        if (acertos == null) {
            ultimaTentativa.textContent = `Sem tentativas ainda!`;
        } else if (acertos == 1) {
            ultimaTentativa.textContent = `Você teve ${acertos} acerto!`;
        } else {
            ultimaTentativa.textContent = `Você teve ${acertos} acertos!`;
        }

        const historico = JSON.parse(localStorage.getItem('historico')) || [];
        const historicoReverso = historico.reverse();

        document.getElementById('historicoSessao').innerHTML = `${historicoReverso.join('<br>')} `;
    }
});

botaoLimpa.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    location.reload();

});
