/*Countdown and Count up with for loop 
"Countup Timer"
1
2
.
.
10
"Countdown Timer"
10
9
8
.
.
1*/
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number to show counter till given number: '));

function countUp(number){
    console.log("Countup Timer");
    for(let i = 1; i <= number; i++){
        console.log(i);
    }
}
countUp(number);

function countDown(number){
    console.log("Countdown Timer");
    for(let i = number; i >= 1; i--){
        console.log(i);
    }
}
countDown(number);