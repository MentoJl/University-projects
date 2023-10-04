function createTable() {
    let table = document.getElementById("table")
    let rows = document.getElementById("rows")
    let colls = document.getElementById("colls")
    table.innerHTML = ""
    for(let i=0; i < rows.value; ++i) {
        let row = "<tr>"
        for(let j=0; j < colls.value; ++ j) {
            let coll = "<td></td>"
            row += coll
        }
        row += "</tr>"
        table.innerHTML += row
    }
}

function cls() {
    let inputs = document.querySelectorAll("input")
    inputs.forEach(function(input) {
        input.value = ""
        input.checked = false
    })
}