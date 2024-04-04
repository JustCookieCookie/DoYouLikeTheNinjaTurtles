function newCoordinates() {
    let no = document.getElementById("no");

    let width = window.outerWidth;
    let leftCoordinates = Math.floor(Math.random() * width - (width/5));

    let height = window.outerHeight;
    let topCoordinates = Math.floor(Math.random() * height - (height/5));


    if (topCoordinates >= height) {
        topCoordinates = Math.floor(((Math.random() * 10) * topCoordinates) - (height/5));
    }
    if (topCoordinates > height) {
        topCoordinates = 30;
    }
    if (topCoordinates <= 0) {
        topCoordinates = Math.floor(height/2);
    }


    if (leftCoordinates >= width) {
        leftCoordinates = Math.floor(((Math.random() * 10) * leftCoordinates) - (width/10));
    }
    if (leftCoordinates <= 0) {
        leftCoordinates = Math.floor(width/2);
    }

    console.log("Left: " + leftCoordinates);
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
    noText.textContent = "ТЫ НЕ МОЛОДЕЦ! :(";
}