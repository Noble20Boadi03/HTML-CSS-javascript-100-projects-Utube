
function calculateTotal() {
    const route = document.getElementById('route').value;
    const quantity = document.getElementById('quantity').value;
    const resultDiv = document.getElementById('result');

    if (!route || !quantity || quantity <= 0) {
        resultDiv.innerText = "Please select a valid route and enter a valid ticket quantity.";
        return;
    }

    const ticketPrice = parseFloat(route);
    const ticketQuantity = parseInt(quantity, 10);
    const totalCost = ticketPrice * ticketQuantity;

    resultDiv.innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}
