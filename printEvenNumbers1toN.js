//Print Even Numbers between 1 to N
const prompt = require('prompt-sync')();
const valueOfN = Number(prompt('Enter a value of N :'));

function printEvenNumbers(){
const evenNumbers = [];
for(let i = 1; i <= valueOfN; i++){
    if(i % 2 === 0){
        evenNumbers.push(i);
    }
}
return evenNumbers;
}

console.log(printEvenNumbers());