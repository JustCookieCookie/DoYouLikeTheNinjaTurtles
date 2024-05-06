const button_yes = document.querySelector(".button--yes")
const button_no = document.querySelector(".button--no")
const container = document.querySelector(".container")

const gap = 10
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

button_no.addEventListener("mousemove", () => {


    let x = random(button_no.clientWidth + gap, container.clientWidth - button_no.clientWidth - gap)
    let y = random(button_no.clientHeight + gap, container.clientHeight  - button_no.clientHeight - gap)
    
    button_no.style.transform = `translate(${x - button_no.offsetLeft}px, ${y - button_no.offsetTop}px)`
})

button_yes.addEventListener("click", () => {
    document.querySelector(".yesText").innerHTML = "ТЫ КРАСАВЧИК!"
})