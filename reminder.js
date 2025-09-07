//Write a function to return the remainder when one number is divided by another
const prompt = require('prompt-sync')();
const devider = Number(prompt('Enter a number for devider: '));
const dividend = Number(prompt('Enter a dividend: '));
let reminderr = 0;
function reminder(num1, num2){
    return reminderr = num1%num2;
}
console.log(reminder(devider, dividend));