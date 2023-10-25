let isPressed = false
let mousePosX = null
let control = document.querySelector(".control")

document.addEventListener("mousemove", (event) => {
    let newPosX = control.offsetLeft + (event.clientX - mousePosX)
    let line = document.querySelector(".line")
    if (isPressed && newPosX >= 0 && newPosX + control.offsetWidth <= line.offsetWidth) {
        control.style.left = `${newPosX}px`
        mousePosX = event.clientX
    }
})

document.addEventListener("mousedown", (event) => {
    isPressed = event.target === control ? true : false
    mousePosX = event.clientX
})

document.addEventListener("mouseup", (event) => {
    isPressed = false
})