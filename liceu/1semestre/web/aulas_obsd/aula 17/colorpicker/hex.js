const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#randomizer");

btn.addEventListener("click", function () {
    let hexColor = '#';

    for(let i = 0; i < 6; i++) {
        hexColor += hex[aleatorio()];
    }

    document.body.style.backgroundColor = hexColor;
});

function aleatorio() {
    return Math.floor(Math.random() * hex.length);
}