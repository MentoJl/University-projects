// Creating an array describing the shopping receipt
let receipt = [
    { name: 'Milk', quantity: 2, price: 25 },
    { name: 'Bread', quantity: 1, price: 12 },
    { name: 'Eggs', quantity: 10, price: 2 },
    // Add other items as needed
];

// Function to display the shopping receipt on the webpage
function displayReceiptOnPage(receipt) {
    let receiptContainer = document.getElementById('receipt-container');
    receipt.forEach(function (item) {
        let itemRow = document.createElement('div');
        itemRow.textContent = `${item.name} - ${item.quantity}x ${item.price} USD = ${item.quantity * item.price} USD`;
        receiptContainer.appendChild(itemRow);
    });
}

// Function to calculate the total cost of the purchase
function calculateTotal(receipt) {
    let total = 0;
    receipt.forEach(function (item) {
        total += item.quantity * item.price;
    });
    return total;
}

// Function to get the most expensive item in the receipt
function findMostExpensiveItem(receipt) {
    let mostExpensive = receipt[0];
    receipt.forEach(function (item) {
        if (item.price > mostExpensive.price) {
            mostExpensive = item;
        }
    });
    return mostExpensive;
}

// Function to calculate the average price of an item in the receipt
function calculateAveragePrice(receipt) {
    let numberOfItems = receipt.length;
    let totalCost = calculateTotal(receipt);
    return totalCost / numberOfItems;
}

// Displaying the receipt on the webpage
displayReceiptOnPage(receipt);

// Displaying the total cost of the purchase
let totalCost = calculateTotal(receipt);
document.getElementById('total-cost').textContent = `Total cost of the purchase: ${totalCost} USD`;

// Displaying the most expensive item
let mostExpensive = findMostExpensiveItem(receipt);
document.getElementById('most-expensive').textContent = `Most expensive item: ${mostExpensive.name} (${mostExpensive.price} USD)`;

// Displaying the average price of an item
let averagePrice = calculateAveragePrice(receipt);
document.getElementById('average-price').textContent = `Average price of an item: ${averagePrice} USD`;