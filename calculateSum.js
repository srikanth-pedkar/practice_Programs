/*Input a number from the user and then display the sum of all numbers up to that number. 
For example, if you enter 4, it should display 10 because 1+2+3+4 = 10. 
At each iteration you should print the sum so far and the last number added.*/
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter a number: '));

let sum = 0;
// while(number>0){
//     console.log(number);
//     sum = sum + number;
//     number = number -1;
// }
// console.log(sum);

function calculateSum(number) {
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log('The sum of number by descending is: ', calculateSum(number));