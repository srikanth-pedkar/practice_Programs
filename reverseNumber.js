//Write a function to reverse a number (0 to 99999)
//Formula for reversed_number = (reversed_number * 10) + (original_number % 10)
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number: '));

function reverseNumber(number){
    let reversed_number = 0;
    reversed_number = (reversed_number * 10) + (number % 10);
}
console.log(reverseNumber(number));