let dark = false;

function darkMode() {
    if (dark == false) {
        document.body.style.backgroundColor = "black";
        document.getElementById("btn").style.backgroundColor = "black";
        document.getElementById("btn").style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("btn").style.backgroundColor = "lightgrey";
        dark = false;
    }
}

