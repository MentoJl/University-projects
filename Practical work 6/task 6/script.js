let front = document.getElementById("frontSide")
let back = document.getElementById("backSide")

document.getElementById("flip-container").addEventListener('click', (event) => {
    front.classList.toggle("rotate")
    back.classList.toggle("rotate")
})