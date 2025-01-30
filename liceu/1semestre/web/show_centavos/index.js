let comoJogarBtn = document.getElementById("comoJogarBtn");

let customAlert = document.getElementById("popUpInstrucao");

let alertOkBtn = document.getElementById("alertOkBtn");

comoJogarBtn.addEventListener("click", () => {
    customAlert.style.display = "flex";
});


alertOkBtn.addEventListener("click", () => {
    customAlert.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == customAlert) {
        customAlert.style.display = "none";
    }
});