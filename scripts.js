function newCoordinates() {
    let no = document.getElementById("no");

    let leftCoordinates = Math.floor(Math.random() * 1750);
    console.log("Left: " + leftCoordinates);

    let randomTop = 0;
    let randomTop2 = 0;
    let topCoordinates = 0;

    if (leftCoordinates > 100) {
        randomTop = Math.floor(Math.random() * 700 + 10);
        topCoordinates = randomTop;
    } else if (leftCoordinates <= 100) {
        randomTop2 = Math.floor(Math.random() * 100);
        topCoordinates = leftCoordinates + randomTop2;
    }

    console.log("Top: " + topCoordinates);

    no.style.left = leftCoordinates + "px";
    no.style.top = topCoordinates + "px";
}

function yes() {
    let noText = document.getElementById("noText");
    noText.textContent = "";
    let yesText = document.getElementById("yesText");
    yesText.textContent = "ТЫ КРАССАВЧИК!";
}

function no() {
    let yesText = document.getElementById("yesText");
    yesText.textContent = "";
    let noText = document.getElementById("noText");
    noText.textContent = "КАК ТАК :(";
}