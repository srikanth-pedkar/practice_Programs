//Print table of any given number using for loop.
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number to get the table: '));
for(let i = 1; i <= 10; i++){
    console.log(`${number} * ${i} = ${number*i}`);
}