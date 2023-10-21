let keyEvent = function (event) {
    switch (event.key) {
        case "Tab": 
            if (event.shiftKey) {
                previousBlock();
            } else {
                nextBlock();
            }
            event.preventDefault(); break;
        
        case "ArrowUp": moveActiveBlock("top", -10); break;
        case "ArrowDown": moveActiveBlock("top", 10); break;
        case "ArrowLeft": moveActiveBlock("left", -10); break;
        case "ArrowRight": moveActiveBlock("left", 10); break;
    }
}

let moveActiveBlock = function (direction, value) {
    if (direction === "top") {
        activeBlock.style.top = `${parseInt(activeBlock.style.top) + value}px`;
    } else if (direction === "left") {
        activeBlock.style.left = `${parseInt(activeBlock.style.left) + value}px`;
    }
}

let setActiveBlock = function(block) {
    block.classList.add("selected")
    activeBlock.classList.remove("selected")
    activeBlock = block
}

let previousBlock = function() {
    let preBlock = activeBlock.previousElementSibling;
    console.log(activeBlock.previousElementSibling.tagName)
    if (preBlock != null && preBlock.classList.contains("circle")) {
        setActiveBlock(preBlock)
    } else if (preBlock.tagName != "DIV") {
        setActiveBlock(document.querySelector(".circle:last-of-type"))
    }
}

let nextBlock = function () {
    let nextBlock = activeBlock.nextElementSibling;
    if (nextBlock != null && nextBlock.classList.contains("circle")) {
        setActiveBlock(nextBlock)
    } else if (nextBlock == null) {
        setActiveBlock(document.querySelector(".circle"))
    }
}

document.addEventListener("keydown", keyEvent)

let blocks_counter = 4

let createBlock = function(width, height) {
    let newDiv = document.createElement("div");
    let divSize = Math.floor(10 + Math.random() * 30);
    let x = Math.floor(Math.random() * (width - divSize));
    let y = Math.floor(Math.random() * (height - divSize));
    let r = Math.floor(1 + Math.random() * 255);
    let g = Math.floor(1 + Math.random() * 255);
    let b = Math.floor(1 + Math.random() * 255);
    newDiv.style.left = `${x}px`;
    newDiv.style.top = `${y}px`;
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    newDiv.style.borderRadius = "50%"
    newDiv.style.border = `3px rgb(${r*0.8},${g*0.8},${b*0.8}) solid`;
    newDiv.classList.add("circle");
    return newDiv;
}

for(let i=0; i < blocks_counter; ++i) {
    document.body.appendChild(createBlock(window.innerWidth, window.innerHeight));
}

document.querySelector(".circle").classList.add("selected")

let activeBlock = document.querySelector(".selected")