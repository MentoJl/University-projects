document.querySelector("textarea").addEventListener("input", (event) => {
    let table = document.querySelector("table");
    let splitedArea = event.target.value.split('\n');
    table.innerHTML = "";

    for(let i=0; i < splitedArea.length; ++i) {
        let newRow = document.createElement("tr");
        for (let j = 0; j < splitedArea[i].length; ++j) {
            let newCol = document.createElement("td");
            if(splitedArea[i][j] == "1") {
                newCol.classList.add("sketchedCol");
            }
            newRow.appendChild(newCol)
        }
        table.appendChild(newRow)
    }
})