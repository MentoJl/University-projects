let table = document.querySelectorAll(".table")

table.forEach(function (tables) {
    tds = tables.querySelectorAll("td")

    tds.forEach(function (td, index) {
        if (index % 2 != 0) {
            td.classList.add("selected")
        }
    })
})