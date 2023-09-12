let list = document.querySelectorAll("body");

list.forEach(function(list) {
    list.style.fontFamily = "Arial";
});

let first = document.getElementById("first")

first.style.color = "orange"
first.style.background = "yellow"
first.style.fontSize = "16px"
first.style.padding = "5px"
first.style.textAlign = "center"

let second = document.getElementById("second")

second.style.color = "blue"
second.style.background = "lightblue"
second.style.fontSize = "14px"
second.style.padding = "5px"
second.style.textAlign = "right"

let third = document.getElementById("third")

third.style.color = "red"
third.style.background = "lightcoral"
third.style.fontSize = "12px"
third.style.padding = "5px"
third.style.textAlign = "left"

let area = document.querySelectorAll("th");

console.log(area)

for (let i = 0; i < area.length; i+=2) {
    area[i].style.background = "yellow";
}