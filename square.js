//Square of a Number, to be printed on console
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number: '));

// function square(n){
//     return n * n;
// }
// console.log(square(number));

function square(n){
    return Math.pow(n, 2);
}
console.log(square(number));