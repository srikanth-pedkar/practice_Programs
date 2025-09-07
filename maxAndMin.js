//Find Max and Min using inbuilt library functions
const prompt = require('prompt-sync')();
const totalNumbers = Number(prompt('How many numbers you want as input: '));
let numberList = [];
for (let i = 1; i <= totalNumbers; i++) {
    let number = Number(prompt('Enter a number: '));
    numberList.push(number);
}
console.log(numberList);
console.log(Math.max(...numberList));  //The spread operator (...) unpacks the elements of the numberList array, 
// effectively passing each number as a separate argument to Math.max() or Math.min(). 
// This allows these functions to correctly identify the maximum or minimum value within the array.
console.log(Math.min(...numberList));


