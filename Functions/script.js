// Function for addition
function performAddition() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = add(num1, num2);
    displayResult(result);
}

// Function for subtraction
function performSubtraction() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = subtract(num1, num2);
    displayResult(result);
}

// Function for multiplication
function performMultiplication() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = multiply(num1, num2);
    displayResult(result);
}

// Function for division
function performDivision() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = divide(num1, num2);
    displayResult(result);
}

// Math operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Division by zero is not allowed!';
    }
}

// Function to display result
function displayResult(result) {
    document.getElementById('result').textContent = result;
}
