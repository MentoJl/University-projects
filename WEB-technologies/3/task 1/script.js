class Product {
    constructor (name, count, purchased = false) {
        this.name = name
        this.count = count
        this.purchased = purchased
    }
};

let products = [
    new Product(`Milk`, 2),
    new Product(`Bread`, 1),
    new Product(`Water`, 6),
    new Product(`Chocolate`, 4)
]

function createTable(products) {
    let table = document.getElementById("table")

    products.forEach(function(product) {
        let background = (product.purchased && product.count > 0) ? 'lightgreen' : 'lightcoral'
        table.innerHTML += `<tr style="background-color: ${background};">
                    <td>${product.name}</td>
                    <td>${product.count}</td>
                    <td>${product.purchased}</td>
                  </tr>`
    });
}

function buy() {
    let to_buy = document.getElementById("product")
    let tds = document.querySelectorAll("td")

    products.forEach(function(product) {
        if (product.name === to_buy.value) {
            product.purchased = true
        }
    })
}

function addToList() {
    let table = document.getElementById("table")
    let product = document.getElementById("name")
    let numb = document.getElementById("count")
    let tds = document.querySelectorAll("td")
    let alreadyExists = false

    products.forEach(function(product_list) {
        console.log(product_list.name)
        if (product.value === product_list.name) {
            alreadyExists = true
            for (let i = 0; i < tds.length; ++i) {
                if (tds[i].textContent == product_list.name) {
                    tds[i+1].textContent = product_list.count + parseInt(numb.value)
                }
            }
        }
    })

    if (!alreadyExists) {
        products.push(new Product(product.value, numb.value))
 
        table.innerHTML += `<tr style="background-color: lightcoral;">
                <td>${products[products.length-1].name}</td>
                <td>${products[products.length-1].count}</td>
                <td>${products[products.length-1].purchased}</td>
            </tr>`
    }
}

createTable(products)