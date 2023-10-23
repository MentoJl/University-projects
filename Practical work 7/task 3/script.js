let blockPosChange = function (target, block, button) {
    let newTop;
    let newLeft;
    do {
        newTop = Math.floor(Math.random() * block.offsetHeight);
        newLeft = Math.floor(Math.random() * block.offsetWidth);
    } while ((newTop - button.offsetHeight / 2) <= 1 || (newTop + button.offsetHeight / 2) >= block.offsetHeight ||
            (newLeft - button.offsetWidth / 2) <= 1 || (newLeft + button.offsetWidth / 2) >= block.offsetWidth);
    target.style.top = `${newTop}px`;
    target.style.left = `${newLeft}px`;
};

let mouseMooving = function (event) {
    let divBlock = document.querySelector("div");
    let button = document.querySelector("button");
    if (event.target == button) {
        blockPosChange(event.target, divBlock, button);
    }
}

document.addEventListener("mousemove", mouseMooving);