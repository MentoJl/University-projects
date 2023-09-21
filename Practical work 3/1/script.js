let symbols_counter = [0, 0, 0, 0, 0]
let strings = document.querySelectorAll("p")

function fillingCounter() {
    for (let i=0; i<strings.length; ++i) {
        symbols_counter[i] = strings[i].innerText.length
        console.log(symbols_counter[i])
    }
}

fillingCounter()

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3]

console.log(Math.min(...arr))
console.log(Math.max(...arr))

function parseElements(arr) {
    let counter = 0
    for (let i=0; i<arr.length; ++i) {
        if (arr[i] % 2 == 0) {
            counter++
        }
    }
    return counter
}

function nonParseElements(arr) {
    let counter = 0
    for (let i=0; i<arr.length; ++i) {
        if (arr[i] % 2 != 0) {
            counter++
        }
    }
    return counter
}

console.log(parseElements(arr))
console.log(nonParseElements(arr))

function hasTwoDigits(arr) {
    let counter = 0
    for (let i=0; i<arr.length; ++i) {
        if (parseInt(arr[i] / 10) != 0) {
            counter++
        }
    }
    return counter
}

console.log(hasTwoDigits(arr))

function positiveNumbers(arr) {
    let counter = 0
    for (let i=0; i<arr.length; ++i) {
        if (arr[i] > 0) {
            counter++
        }
    }
    return counter
}

function negativeNumbers(arr) {
    let counter = 0
    for (let i=0; i<arr.length; ++i) {
        if (arr[i] < 0) {
            counter++
        }
    }
    return counter
}

console.log(positiveNumbers(arr))
console.log(negativeNumbers(arr))