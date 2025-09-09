//Write a function to reverse a number (0 to 99999)
//Formula for reversed_number = (reversed_number * 10) + (original_number % 10)
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number: '));

function reverseNumber(num){
    if(num < 0 || num > 99999){
        console.error("The given input is out of range i.e. 0 to 99999");
        return null;
    }

    let reversedNumber = 0;
    let tempNum = num;
    while(tempNum>0){
        const digit = tempNum % 10;  // Get the last digit
        reversedNumber = (reversedNumber * 10) + digit;  // Add the digit to the reversed number
        tempNum = Math.floor(tempNum / 10); // Remove the last digit from the original number
    }
    return reversedNumber;
}

console.log(reverseNumber(number));