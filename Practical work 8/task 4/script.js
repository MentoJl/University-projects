let movement = function (object, direction) {
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    switch(direction) {
        case "right": 
            if (object.offsetLeft + directionArray[direction] + object.offsetWidth / 2 >= windowWidth) {
                direction = "left"
            }
            object.style.left = `${object.offsetLeft + directionArray[direction]}px`;
            break;
        case "left":  
            if (object.offsetLeft + directionArray[direction] - object.offsetWidth / 2 <= 0) {
                direction = "right"
            }
            object.style.left = `${object.offsetLeft + directionArray[direction]}px`;
            break;
        case "top":  
            if (object.offsetTop + directionArray[direction] - object.offsetHeight / 2 <= 0) {
                direction = "bottom"
            }
            object.style.top = `${object.offsetTop + directionArray[direction]}px`;
            break;
        case "bottom":  
            if (object.offsetTop + directionArray[direction] + object.offsetHeight / 2 >= windowHeight) {
                direction = "top"
            }
            object.style.top = `${object.offsetTop + directionArray[direction]}px`;
            break;
    }
    return direction
}

let directionArray = {
    "right" : 5,
    "left" : -5,
    "top" : -5,
    "bottom": 5,
}

document.querySelectorAll(".block").forEach((block) => {
    block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    
    let directions = Object.keys(directionArray)
    let randomDirectionKey = directions[Math.floor(Math.random() * directions.length)]
    setInterval(() => {
        randomDirectionKey = movement(block, randomDirectionKey)
    }, 20)
})