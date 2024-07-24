function calculateCharge() {
    // Get the values from the input fields
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const chargePercentage = parseFloat(document.getElementById('chargePercentage').value);
    
    // Check if the inputs are valid numbers
    if (isNaN(billAmount) || isNaN(chargePercentage) || billAmount <= 0 || chargePercentage < 0) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }
    
    // Calculate the service charge amount
    const chargeAmount = (billAmount * chargePercentage) / 100;
    
    // Calculate the total bill amount
    const totalAmount = billAmount + chargeAmount;
    
    // Display the result
    document.getElementById('result').textContent = `Service Charge: $${chargeAmount.toFixed(2)} | Total Bill: $${totalAmount.toFixed(2)}`;
}
