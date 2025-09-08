//Check if first number is multiple of second number
const prompt = require('prompt-sync')();
const number1 = Number(prompt('Enter first number: '));
const number2 = Number(prompt('Enter second number: '));

function checkMultipleBy(num1, num2){
    if(num1 % num2 == 0){
        console.log(`${number1} is multiple of ${number2}`);
    }
    else{
        console.log(`${number1} is not multiple of ${number2}`);
    }
}
checkMultipleBy(number1, number2);