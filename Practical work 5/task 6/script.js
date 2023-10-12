let divs = document.querySelectorAll("div")

divs.forEach((div) => {
    div.querySelectorAll("*").forEach((input) => {
        input.addEventListener('focus', () => {
            input.parentNode.classList.add("active")
        })
        input.addEventListener('blur', () => {
            input.parentNode.classList.remove("active")
        })
})})