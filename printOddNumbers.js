//Print odd numbers from 1 to n (1, 3….. n) using for loop
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter the value of n: '));

for(let i = 1; i <= number; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
