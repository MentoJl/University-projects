class Product {
    constructor (name, count) {
        this.name = name
        this.count = count
        this.purchased = false
    }
};

let products = [
    new Product(`Milk`, 2),
    new Product(`Bread`, 1),
    new Product(`Water`, 6),
    new Product(`Chocolate`, 4)
]

function createTable(products) {
    let table = document.getElementById("table");

    products.forEach(function(product) {
        let background = (product.purchased && product.count > 0) ? 'lightgreen' : 'lightcoral';
        table.innerHTML += `<tr style="background-color: ${background};">
                    <td>${product.name}</td>
                    <td>${product.count}</td>
                    <td>${product.purchased}</td>
                  </tr>`;
    });
}

function buy() {

}

function addToList() {
    let table = document.getElementById("table");
    let product = document.getElementById("name")
    let count = document.getElementById("count")
    let background = (product.value && сount.value > 0) ? 'lightgreen' : 'lightcoral';

    table.innerHTML += `<tr style="background-color: ${background};">
        <td>${product.value}</td>
        <td>${count.value}</td>
        <td>${product.value}</td>`
}

createTable(products)