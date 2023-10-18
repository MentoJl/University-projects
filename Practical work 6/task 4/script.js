document.querySelectorAll("#del").forEach((but) => {
    but.addEventListener('click',(event) => {
        event.target.parentElement.remove();
    })
})

document.querySelectorAll("#edit").forEach((but) => {
    but.addEventListener('click',(event) => {
        event.target.parentElement.querySelector("textarea").disabled = !event.target.parentElement.querySelector("textarea").disabled
    })
})
