let inputs = document.querySelectorAll('input')
let labels = document.querySelectorAll('label')

inputs.forEach(function(input, index) {
    input.addEventListener('click', function(event) {
        let str = document.getElementById("string")
        if(input.checked) {
            let div = document.createElement('div')
            div.textContent = labels[index].textContent
            str.appendChild(div)
        }
        else {
            let divs = str.querySelectorAll('div')
            divs.forEach(function(div) {
                if(labels[index].textContent === div.textContent) {
                    div.remove()
                }
            })
        }
    })
})