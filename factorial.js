//Write a function to find the factorial of given number

const prompt = require('prompt-sync')();

function factorial(num){
    if(num ===0 || num === 1) return 1;
    return num * factorial(num - 1);
}

const number = parseInt(prompt('Enter a number :'));
if(isNaN(number) || number < 0){
    console.log('Enter a valid number.');
}
else{
    console.log(`Factorial of ${number} is ${factorial(number)}`);
}