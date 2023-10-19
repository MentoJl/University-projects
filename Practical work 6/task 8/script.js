console.log(document.querySelectorAll("span"))

document.querySelectorAll("span").forEach((span) => {
    span.addEventListener('click', () => {
        document.querySelectorAll("span").forEach((otherSpan) => {
            if (span.textContent !== otherSpan.textContent) {
                otherSpan.classList.remove("selected")
            }
        })
        span.classList.toggle("selected")
    })
})