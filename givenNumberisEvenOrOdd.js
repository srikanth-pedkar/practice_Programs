//Write a program to check if a given number is even or odd using if-else statements and print the result on console window
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number: '));

if(number%2 == 0){
    console.log(`The number ${number} is even`);
}
else{
    console.log(`The number ${number} is odd`);
}