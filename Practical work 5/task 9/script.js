let cart = {};

let orderButtons = document.querySelectorAll('.order-button');
let cartTable = document.getElementById('cart');

orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let productName = button.getAttribute('data-product');
        if (cart[productName]) {
            cart[productName]++;
        } else {
            cart[productName] = 1;
        }
        updateCart();
    });
});

function updateCart() {
    cartTable.innerHTML = '';
    for (let product in cart) {
        let quantity = cart[product];
        
        let row = cartTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        
        cell1.textContent = product;
        cell2.textContent = 'Count: ' + quantity;
    }
}