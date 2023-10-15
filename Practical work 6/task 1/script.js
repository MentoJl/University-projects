document.querySelector("button").addEventListener('click', (event) => {
    let name = document.getElementById("name")
    let lastname = document.getElementById("lastname")
    let table = document.querySelector("table")
    let tds = table.querySelectorAll("td")

    let newTr = document.createElement("tr")
    let newIndex = document.createElement("td")
    newIndex.textContent = (parseInt(tds[tds.length-3].textContent)+1).toString()
    let newName = document.createElement("td")
    newName.innerText = name.value
    console.log(newName.textContent)
    let newLastname = document.createElement("td")
    newLastname.textContent = lastname.value
    newTr.appendChild(newIndex)
    newTr.appendChild(newName)
    newTr.appendChild(newLastname)
    table.appendChild(newTr)
})