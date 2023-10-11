let imgs = document.querySelectorAll("img")

imgs.forEach((img) => {
    img.addEventListener("click", (event) => {
        img.classList.toggle("noActive")
    })
})