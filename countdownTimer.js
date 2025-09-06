/*Input a number from the user and countdown to zero on the console window.
For instance, if input is 5, it should display 5, 4, 3, 2, 1.*/
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter a number: '));

// for(let i=number; i>0; i--){
//     console.log(i);
// }
while(number>0){
    console.log(number);
    number = number -1;
}