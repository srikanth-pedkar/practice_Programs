//the sum of all multiples of given number between 1 to N.
const prompt = require('prompt-sync')();
const n = Number(prompt('Enter n value: '));
const multipleOf = Number(prompt('Enter the number which can multiple of: '));
let sum = 0;

for(let i = 1; i <= n; i++){
    if(i % multipleOf == 0){
        sum = sum + i;
    }
}
console.log(`Sum of multiples of ${multipleOf} is: `,sum);
