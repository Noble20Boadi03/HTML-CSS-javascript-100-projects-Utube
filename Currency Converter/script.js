function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    const exchangeRates = {
        USD: 1.1, // Example rate
        EUR: 0.9, // Example rate
        GBP: 0.8  // Example rate
    };

    const convertedAmount = (amount * exchangeRates[currency]).toFixed(2);

    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount} ${currency}`;
}