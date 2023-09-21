let clock = {
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
}

function hChange(hours) {
    let hour = document.getElementById("hours_input")
    clock.hours.textContent = (parseInt(clock.hours.textContent) + parseInt(hour.value) + hours).toString()
}

function mChange(minutes) {
    let min = document.getElementById("minutes_input")
    let mins = parseInt(clock.minutes.textContent)
    clock.minutes.textContent = ((parseInt(clock.minutes.textContent) + parseInt(min.value) + minutes) % 60).toString()
    if (parseInt(clock.minutes.textContent) >= 0 && parseInt(clock.minutes.textContent) <= 9) {
        clock.minutes.textContent = "0" + clock.minutes.textContent
    }
    return parseInt(min.value) != 0 ? parseInt((mins + parseInt(min.value)) / 60) : 0
}

function sChange() {
    let sec = document.getElementById("seconds_input")
    let secs = parseInt(clock.seconds.textContent)
    if (sec.value != 0) {
        clock.seconds.textContent = ((parseInt(clock.seconds.textContent) + parseInt(sec.value)) % 60).toString()
    }
    if (parseInt(clock.seconds.textContent) >= 0 && parseInt(clock.seconds.textContent) <= 9) {
        clock.seconds.textContent = "0" + clock.seconds.textContent
    }
    return parseInt(sec.value) != 0 ? parseInt((secs + parseInt(sec.value)) / 60) : 0
}

function clockChange() {
    hChange(mChange(sChange()))
}