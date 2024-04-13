function newCoordinates() {
    let pageWidth = document.documentElement.scrollWidth;
    let pageHeight = document.documentElement.scrollHeight;
    let availableScreenWidth = window.screen.availWidth;
    let availableScreenHeight = window.screen.availHeight;

    let newWidth = Math.floor(Math.random() * pageWidth);
    let newHeight = Math.floor(Math.random() * pageHeight);

    newWidth = Math.floor(newWidth * 0.8)
    newHeight = Math.floor(newHeight * 0.8)

    console.log("newWidth: " + newWidth);
    console.log("newHeight: " + newHeight);

    let no = document.getElementById("no");

    no.style.top = newHeight + "px";
    no.style.left = newWidth + "px";

}

function yes() {
    let yesText = document.getElementById("yesText");
    yesText.textContent = "ТЫ КРАСАВЧИК!";
}