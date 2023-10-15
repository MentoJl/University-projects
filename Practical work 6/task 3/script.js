let positionOfGradient = function (index, length) {
    return parseFloat(index * 100 / length / 100)
}

let tds = document.querySelectorAll("td");
tds.forEach((td) => {
    td.addEventListener('click', (event) => {
        event.target.classList.toggle('chosen');
        let chosen_tds = document.querySelectorAll("td.chosen");
        if (chosen_tds.length > 1) {

            let canvas = document.querySelector("canvas");
            let ctx_canvas = canvas.getContext("2d");
            let gradient = ctx_canvas.createLinearGradient(0,0,0,170);

            chosen_tds.forEach((chosen_td, index) => {
                console.log(positionOfGradient(index, chosen_tds.length-1));
                gradient.addColorStop(positionOfGradient(index, chosen_tds.length-1), chosen_td.style.backgroundColor);
            })
            ctx_canvas.fillStyle = gradient
            ctx_canvas.fillRect(0,0, canvas.width, canvas.height)
        } else if(chosen_tds.length === 1) {
            document.querySelector("canvas").getContext("2d").fillStyle = chosen_tds[0].style.backgroundColor;
            document.querySelector("canvas").getContext("2d").fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height)
        } else {
            document.querySelector("canvas").getContext("2d").fillStyle = "white";
            document.querySelector("canvas").getContext("2d").fillRect(0, 0, document.querySelector("canvas").width, document.querySelector("canvas").height)
        }
    })
})

let chosen_tds = document.querySelectorAll("td.chosen")
chosen_tds.forEach((event) => {
    console.log(chosen_tds.style.backgroundColor)
})