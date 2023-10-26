let timers = []

let zeroToTime = function(str) {
    return parseInt(str) < 10 ? `0${str}` : `${str}`
}

let timeCalc = function(hours, minutes, seconds) {
    let hour = parseInt(hours.textContent.replace(':',''))
    let min = parseInt(minutes.textContent.replace(':',''))
    let sec = parseInt(seconds.textContent.replace(':',''))
    if(sec === 0 && min !== 0) {
        seconds.innerText = `59`
        minutes.innerText = `${zeroToTime(min - 1)}:`
    } else if(sec !== 0) {
        seconds.innerText = `${zeroToTime(sec - 1)}`
    }
    if(min === 0 && hour != 0 && sec === 0) {
        minutes.innerText = `59:`
        seconds.innerText = `59`
        hours.innerText = `${zeroToTime(hour-1)}:`
    }
}

let startTimer = function (divBlock) {
    let hours = divBlock.querySelector("#hours")
    let minutes = divBlock.querySelector("#minutes")
    let seconds = divBlock.querySelector("#seconds")
    for(let i=0; i<timers.length; ++i) {
        if(timers[i].timer_block === divBlock) {
            timeCalc(hours, minutes, seconds)
        }
    }
}

let resetTimer = function (divBlock) {
    for(let i=0; i<timers.length; ++i) {
        if(timers[i].timer_block === divBlock) {
            divBlock.querySelector("#hours").innerText = timers[i].startTime.get("hours");
            divBlock.querySelector("#minutes").innerText = timers[i].startTime.get("minutes");
            divBlock.querySelector("#seconds").innerText = timers[i].startTime.get("seconds");
        }
    }
}

let changeTime = function (divBlock, currentButton) {
    switch (currentButton.value) {
        case "start": 
        for(let i=0; i<timers.length; ++i) {
            if(timers[i].timer_block === divBlock && timers[i].interval === undefined) {
                timers[i].interval = setInterval(() => {
                    startTimer(divBlock)
                }, 1000);
            }
        }
        break;
        case "stop":         
        for(let i=0; i<timers.length; ++i) {
            if(timers[i].timer_block === divBlock && timers[i].interval !== undefined) {
                clearInterval(timers[i].interval)
                timers[i].interval = undefined
            }
        }
        break;
        case "reset": resetTimer(divBlock); break;
    }
}

let start_buttons = document.querySelectorAll(".start").forEach((target) => {
    target.addEventListener('click', (event) => {
        changeTime(event.target.closest(".timer"), event.target.classList)
    })
})

let stop_buttons = document.querySelectorAll(".stop").forEach((target) => {
    target.addEventListener('click', (event) => {
        changeTime(event.target.closest(".timer"), event.target.classList)
    })
})

let reset_buttons = document.querySelectorAll(".reset").forEach((target) => {
    target.addEventListener('click', (event) => {
        changeTime(event.target.closest(".timer"), event.target.classList)
    })
})

let createTimersArray = function () {
    let webTimers = document.querySelectorAll(".timer");
    for (let i=0; i < webTimers.length; ++i) {
        timers.push({
            timer_block: webTimers[i],
            interval: undefined,
            startTime: new Map(),
            fillInStartTime: function (key, value) {
                // console.log(key, value)
                this.startTime.set(key, value)
            },
        })
        timers[i].fillInStartTime("hours", webTimers[i].querySelector("#hours").innerText)
        timers[i].fillInStartTime("minutes", webTimers[i].querySelector("#minutes").innerText)
        timers[i].fillInStartTime("seconds", webTimers[i].querySelector("#seconds").innerText)
    }
}

createTimersArray()