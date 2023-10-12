let input_width = document.getElementById("width")
let block = document.querySelector(".block")

input_width.addEventListener('input', (event) => {
    let width_info = document.getElementById("width-info")
    width_info.textContent = input_width.value.toString()
    block.style.width = `${input_width.value}px`
})

let input_height = document.getElementById("height")

input_height.addEventListener('input', (event) => {
    let height_info = document.getElementById("height-info")
    height_info.textContent = input_height.value.toString()
    block.style.height = `${input_height.value}px`
})

let input_rotate = document.getElementById("rotate")

input_rotate.addEventListener('input', (event) => {
    let rotate_info = document.getElementById("rotate-info")
    rotate_info.textContent = input_rotate.value.toString()
    block.style.transform = `rotate(${input_rotate.value}deg)`
})