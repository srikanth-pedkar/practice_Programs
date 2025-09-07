//Average of 5 Numbers
const prompt = require('prompt-sync')();
const totalLength = Number(prompt('Enter length: '));
let sumOfAll = 0;

for(let i=1; i<=totalLength; i++){
    let value = Number(prompt('Enter value: '));
    sumOfAll = sumOfAll + value;
}

function calculateAverage(){
    return sumOfAll/totalLength;
}
console.log(calculateAverage());