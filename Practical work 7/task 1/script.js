let area = document.getElementById("area");
let blocks_counter = 4;
let indexZ = 0;
let activeBlock = null;
let isPressed = false;
let mouseCoord ={
    x: 0,
    y: 0
}

let mousePosChange = function(x, y) {
    mouseCoord.x = x;
    mouseCoord.y = y;
}

let mouseMove = function (event) {
    if (activeBlock !== null && isPressed === true) {
        let collisionX = parseInt(activeBlock.style.left) + (event.clientX - mouseCoord.x);
        let collisionY = parseInt(activeBlock.style.top) + (event.clientY - mouseCoord.y);
        if(collisionX >= 0 && collisionX + parseInt(activeBlock.style.width) <= area.clientWidth) {
            activeBlock.style.left = `${collisionX}px`;
        }
        if(collisionY >= 0 && collisionY + parseInt(activeBlock.style.height) <= area.clientHeight) {
            activeBlock.style.top = `${collisionY}px`;
        }
        mousePosChange(event.clientX, event.clientY);
    }
}

let mouseDown = function (event) {
    if (event.target.classList.contains("block") && activeBlock === null) {
        console.log("+")
        activeBlock = event.target;
        mousePosChange(event.clientX, event.clientY);
        isPressed = true;
    }
}

let mouseUp = function (event) {
    activeBlock = null;
    isPressed = false;
}

document.addEventListener("mousemove", mouseMove);
document.documentElement.addEventListener("mousedown", mouseDown);
document.documentElement.addEventListener("mouseup", mouseUp);

let createBlock = function(width, height) {
    let newDiv = document.createElement("div");
    let divSize = Math.floor(20 + Math.random() * 20);
    let x = Math.floor(Math.random() * (200 - divSize));
    let y = Math.floor(Math.random() * (200 - divSize));
    let r = Math.floor(1 + Math.random() * 255);
    let g = Math.floor(1 + Math.random() * 255);
    let b = Math.floor(1 + Math.random() * 255);
    newDiv.style.left = `${x}px`;
    newDiv.style.top = `${y}px`;
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    newDiv.style.outline = `3px rgb(${r*0.8},${g*0.8},${b*0.8}) solid`;
    newDiv.classList.add("block");
    return newDiv;
}

for(let i=0; i < blocks_counter; ++i) {
    area.appendChild(createBlock(area.clientWidth, area.clientHeight));
}