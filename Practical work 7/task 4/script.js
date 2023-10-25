let list = document.querySelectorAll("li")

list.forEach((target) => {
    target.addEventListener("click", (event) => {
        if (event.ctrlKey) {
            event.target.classList.toggle("selected")
        } else {
            list.forEach((li) => {
                if (li !== event.target) {
                    li.classList.remove("selected")
                }
            })
            event.target.classList.add("selected")
        }
    })
})