document.querySelector(".s1").style.marginLeft = `${0}px`

document.querySelector(".prev").addEventListener('click', (event) => {
    let firstSlide = document.querySelector(".s1")
    console.log(parseInt(firstSlide.style.marginLeft))
    if (parseInt(firstSlide.style.marginLeft) <= -786) {
        firstSlide.style.marginLeft = `${parseInt(firstSlide.style.marginLeft)+786}px` 
    }
    else if(parseInt(firstSlide.style.marginLeft) === 0) {
        firstSlide.style.marginLeft = `${-1572}px`
    } else {
        firstSlide.style.marginLeft = `${786}px`
    }
})

document.querySelector(".next").addEventListener('click', (event) => {
    let firstSlide = document.querySelector(".s1")
    console.log(parseInt(firstSlide.style.marginLeft))
    if (parseInt(firstSlide.style.marginLeft) <= -786) {
        if(parseInt(firstSlide.style.marginLeft) === -1572) {
            firstSlide.style.marginLeft = `${0}px`
        } else {
            firstSlide.style.marginLeft = `${parseInt(firstSlide.style.marginLeft)-786}px` 
        }
    }
    else {
        firstSlide.style.marginLeft = `${-786}px`
    }
})