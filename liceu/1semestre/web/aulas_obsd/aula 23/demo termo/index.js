const form = document.querySelector('#form');
const input = document.querySelector('#input');
const resultadosContainer = document.querySelector('#resultados-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const chutePalavra =  input.value.toUpperCase();

    
    checaPalavra(chutePalavra);
   input.value = " ";

});


function checaPalavra(chutePalavra) {

    const letras = chutePalavra.split('');

    letras.forEach(letra => {
       criaDiv(letra);
    });
   

};

function criaDiv(letra){
    const divLetra = document.createElement('div');

    divLetra.textContent = letra;
    resultadosContainer.append(divLetra);
};