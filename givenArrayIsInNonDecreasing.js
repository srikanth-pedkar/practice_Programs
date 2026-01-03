//Given an array, check if the given array is in non decreasing order or not.

const prompt = require('prompt-sync')();
let inputValues = prompt('Enter values: ').split(',');
let inputArray = inputValues.map(Number);

console.log(inputArray);
let isNonDecreasing = true;

let nonDecreasing = true;
for(let i = 1; i < inputArray.length; i++){
    if(inputArray[i - 1] > inputArray[i]){
        nonDecreasing = false;
        break;
    }
}

if(inputArray.length === 0){
    console.log('Array is empty');
}
else{
    console.log(nonDecreasing ? 'Given array is in nonDecreasing Order' : 'Given array is not a nonDecreasing Order');
}
