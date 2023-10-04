function addClassHide(event) {
    let block = event.target.nextElementSibling
    block.classList.toggle('hide')
    block.classList.toggle('show')
    let label = event.target.querySelector('label')
    label.innerText = label.innerText === "+" ? label.innerText = "-" : label.innerText = "+"
}

function addEvent(blocks) {
    blocks.forEach(function (block){
        block.addEventListener('click', addClassHide)
    });
}

let blocks = document.querySelectorAll('#block1, #block2, #block3')
addEvent(blocks)
