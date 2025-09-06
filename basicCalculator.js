//Implement a basic calculator
const prompt = require('prompt-sync')();

const num1 = prompt("Please enter num1: ");
const num2 = prompt("Please enter num2: ");
function addition(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
console.log('addition of num1 & num2 is: ', addition(num1, num2));

function subtraction(val1, val2){
    return parseInt(val1) - parseInt(val2);
}
console.log('subtraction of num1 & num2 is: ', subtraction(num1, num2));

function multiplication(val1, val2){
    return parseInt(val1) * parseInt(val2);
}
console.log('multiplication of num1 & num2 is: ', multiplication(num1, num2));

function division(val1, val2){
    return parseInt(val1) / parseInt(val2);
}
console.log('division of num1 & num2 is: ', division(num1, num2));

function modulo(val1, val2){
    return parseInt(val1) % parseInt(val2);
}
console.log('modulo of num1 & num2 is: ', modulo(num1, num2));