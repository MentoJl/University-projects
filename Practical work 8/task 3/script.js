let slider = document.querySelector(".slide");
let sliderStyle = getComputedStyle(slider);

setInterval(() => {
    let marginLeft = parseInt(sliderStyle.marginLeft.replace("px", ""));
    if (marginLeft > -(parseInt(sliderStyle.width.replace("px", "")) * 3)) {
        slider.style.marginLeft = `${marginLeft - parseInt(sliderStyle.width.replace("px", ""))}px`;
    } else {
        slider.style.marginLeft = "0px"
    }
}, 3000)