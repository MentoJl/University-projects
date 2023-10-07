document.getElementById("ok").addEventListener('click', function () {
    let checs = document.querySelectorAll("input")
    let string = document.getElementById('str')
    string.textContent = ""
    checs.forEach(function (chec) {
        if (chec.checked) {
            if (string.textContent == "") {
                string.textContent += chec.id
            }
            else {
                string.textContent += ", " + chec.id
            }
        }
    })
})