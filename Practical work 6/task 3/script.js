let tds = document.querySelectorAll("td");
tds.forEach((td) => {
    td.addEventListener('click', (event) => {
        event.target.classList.toggle('chosen');
    })
})