function addClassHide(event) {
    let block = event.target.querySelector('div')
    block.classList.toggle('hide')
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
