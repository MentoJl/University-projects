function compareStr() {
    let first = document.getElementById("first")
    let second = document.getElementById("second")
    if (first.value.length > second.value.length) {
        first.style.background = "lightgreen"
        second.style.background = "white"
    }
    else if (first.value.length < second.value.length) {
        second.style.background = "lightgreen"
        first.style.background = "white"
    }
    else {
        second.style.background = "white"
        first.style.background = "white"
    }
}

function toUpper(input) {
    if (input.value.length >= 2) {
        input.value = input.value.trim().charAt(0).toUpperCase() + input.value.trim().slice(1, input.value.length)
    }
    else if (input.value.length == 0) {
        input.style.background = "white"
    }
}

function vowelsCounter(input) {
    let vowels = "aeuio"
    let vowel_counter = 0

    for (let i = 0; i < vowels.length; ++i) {
        if (input.value.toLowerCase().indexOf(vowels[i]) != -1) {
            vowel_counter+=1
        }
    }
    return vowel_counter
}

function spam(input) {
    let spam_str = ["free hub", "dot net", "mathcad"]

    for (let str of spam_str) {
        if (input.value.toLowerCase() == str) {
            input.style.background = "red"
        }
    } 
}

function redaction(input, size) {
    if (input.value.length >= size) {
        input.value = input.value.slice(0, size) + "..."
    }
}

let button_compare = document.getElementById("compare")
button_compare.addEventListener('click', compareStr)

const input_lenght = 12

let first_input = document.getElementById("first")
first_input.addEventListener('change', function () {
    spam(first_input)
    redaction(first_input, input_lenght)
    document.getElementById("vowel_counter_1").textContent = vowelsCounter(first_input)
    toUpper(first_input)
})

let second_input = document.getElementById("second")
second_input.addEventListener('change', function () {
    spam(second_input)
    redaction(second_input, input_lenght)
    document.getElementById("vowel_counter_2").textContent = vowelsCounter(second_input)
    toUpper(second_input)
})

function findChar() {
    let inputString = document.getElementById("inputString").value;
    let searchChar = document.getElementById("searchChar").value;
    let indexes = [];
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === searchChar) {
            indexes.push(i);
            count++;
        }
    }

    let result = "'" + searchChar + "' meeting " + count + " times and have indexes: " + indexes.join(", ");
    document.getElementById("result").textContent = result;
}
