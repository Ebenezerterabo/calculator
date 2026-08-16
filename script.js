
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equalSign = document.querySelector('.equal');

// variables of calculator operation
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let currentInput = display.textContent;


// add function
const add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

// multiply function
const subtract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

// subtract function
const multiply = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

// divide function
const divide = function(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

// Operator function
const operate = function(operator, num1, num2) {
    if ( operator === '+' ) {
        return add(num1, num2);
    } else if ( operator === '-' ) {
        return subtract(num1, num2);
    } else if ( operator === 'x') {
        return multiply(num1, num2);
    } else if ( operator === '/' ) {
        return divide(num1, num2);
    } else {
        return 'Operator not supported';
    }
}



// display numbers on the calculator screen
const numberDisplay = function() {
    numberButtons.forEach(button => {
        // get the value of the button
        const digit = button.value;
        // loop through the buttons
        button.addEventListener('click', () => {
            if (currentInput === '0') {
                currentInput = digit;
                updateNumber();
            } else {
                currentInput += digit;
                updateNumber();
            }
        })
    })
}

// get operator sign and store first number
const getOperatorSign = function() {
    operatorButtons.forEach(button => {
        const operator = button.value;
        button.addEventListener('click', () => {
            firstNumber = numberInput(currentInput);
            currentOperator = operator;
            currentInput = '0';
            updateNumber();
        })
    })
}

// get equal sign and store second number
const getEqualSign = function() {
    equalSign.addEventListener('click', () => {
        secondNumber = numberInput(currentInput);
        currentInput = operate(currentOperator, firstNumber, secondNumber);
        updateNumber();
    })
}

const numberInput = function(number) {
    const digits = number
    return Number(digits);
}

const updateNumber = function() {
    display.textContent = currentInput

}

numberDisplay();
getOperatorSign();
getEqualSign();