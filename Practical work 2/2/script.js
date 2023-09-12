let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
let newStr = text[12] + text[6] + text[18] + text[25]
console.log(newStr)

console.log(text.toLocaleLowerCase())

let currentIndex = -1;
while ((currentIndex = text.indexOf('in', currentIndex + 1)) != -1) {
    console.log(currentIndex);
}

console.log(text.split(" "))

console.log(text.split('').reverse().join(''))

function ucFirst(txt) {
    let indexOfUpperLetter = 0
    let newTxt = txt[indexOfUpperLetter].toUpperCase() + txt.slice(indexOfUpperLetter + 1, txt.lenght)
    return newTxt;
 }
 console.log(ucFirst('some text'));