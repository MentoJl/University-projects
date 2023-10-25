let clock = document.querySelector(".clock")
let date = new Date()

let clockGoing = function(clock) {
    date = new Date()
    let hours = clock.querySelector(".hours")
    let minutes = clock.querySelector(".minutes")
    let seconds = clock.querySelector(".seconds")

    hours.innerText = date.getHours() + ":"

    minutes.innerText = date.getMinutes() < 10 ? "0" + date.getMinutes() + ":" : date.getMinutes() + ":"
    seconds.innerText = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getUTCSeconds()
} 

clockGoing(clock)
setInterval(() => {
    clockGoing(clock)
}, 1000)