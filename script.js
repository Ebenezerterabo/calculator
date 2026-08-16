// variables of calculator operation
let num1 = 0;
let num2 = 0;
let operator = '';


// add function
const add = function(num1, num2) {
    return num1 + num2
}

// multiply function
const subtract = function(num1, num2) {
    return num1 - num2
}

// subtract function
const multiply = function(num1, num2) {
    return num1 * num2
}

// divide function
const divide = function(num1, num2) {
    return num1 / num2
}

// Operator function
const operate = function(operator, num1, num2) {
    if ( operator === '+' ) {
        return add(num1, num2);
    } else if ( operator === '-' ) {
        return subtract(num1, num2);
    } else if ( operator === '*') {
        return multiply(num1, num2);
    } else if ( operator === '/' ) {
        return divide(num1, num2);
    } else {
        return 'Operator not supported';
    }
}

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

const numberUpdateDisplay = function() {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            display.textContent = button.textContent;
        })
    })
}

numberUpdateDisplay();

// console.log(add(1, 2))
// console.log(subtract(1, 2))
// console.log(multiply(1, 2))
// console.log(divide(2, 4))