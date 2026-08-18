
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
                updateDisplay();
            } else {
                currentInput += digit;
                updateDisplay();
            }
        })
    })
}

// get operator sign and store first number
const handleOperator = function() {
    operatorButtons.forEach(button => {
        // get the value of the button
        const operator = button.value;
        // store first number
        button.addEventListener('click', () => {
            // evaluate any pending operation first
            computePendingOperation();

            // new operation set up
            firstNumber = numberInput(currentInput);
            currentOperator = operator;
            currentInput = '0';

            // updateDisplay();
        })
    })
}

// get equal sign and store second number
const handleEqualSign = function() {
    equalSign.addEventListener('click', () => {
        
        // evaluate final operation and update display
        computePendingOperation();

    })
}

const computePendingOperation = function() {
    if (currentOperator !== '') {
        // store second number
        secondNumber = numberInput(currentInput);
        // perform operation after clicking another operator
        currentInput = operate(currentOperator, firstNumber, secondNumber);
        
        // results after clicking another operator
        firstNumber = currentInput;
        
        updateDisplay();
        // reset current operator
        currentOperator = '';
    } else {
        return;
    }
}

// convert string numbers to actual numbers
const numberInput = function(number) {
    const digits = number
    return Number(digits);
}

// update the display
const updateDisplay = function() {
    display.textContent = currentInput
}

numberDisplay();
handleOperator();
handleEqualSign();