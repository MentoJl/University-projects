let paletteTds = document.querySelectorAll("table.palette tr td")
let selectedTd = 

paletteTds.forEach((paletteTd) => {
    paletteTd.addEventListener('click', (event) => {
        paletteTds.forEach((td) => {
            if (event.target !== td && td.classList.contains("selected")) {
                td.classList.remove("selected")
            }
        })
        selectedTd = paletteTd
        paletteTd.classList.add("selected")
    })
})

let paintTds = document.querySelectorAll("table.paint tr td")

paintTds.forEach((paintTd) => {
    paintTd.addEventListener('mousedown', (event) => {
        event.target.style.backgroundColor = selectedTd.style.backgroundColor
    })
})
