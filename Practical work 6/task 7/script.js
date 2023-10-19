const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let send = document.getElementById("send");

send.addEventListener("click", (event) => {
    let date = new Date();
    let newParagraph = document.createElement("div");
    let newHead = document.createElement("div");
    let newName = document.createElement("div");
    let newDate = document.createElement("div");
    let newContent = document.createElement("div");

    newName.textContent = document.getElementById("name").value;
    console.log(document.getElementById("comment").value)
    newContent.textContent = document.getElementById("comment").value;
    newDate.textContent = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    newHead.appendChild(newName)
    newHead.appendChild(newDate)
    newHead.classList.add("head")
    newContent.classList.add("content")
    newParagraph.appendChild(newHead)
    newParagraph.appendChild(newContent)
    newParagraph.classList.add("paragraph")
    document.querySelector("h1").insertAdjacentElement("beforebegin", newParagraph)
})
