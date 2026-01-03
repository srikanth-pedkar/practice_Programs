//Given an array of N distinct integers and a target value X, return 1 if the target is found. If not found then return -1.

const prompt = require('prompt-sync')();
let input = prompt('Enter the numbers: ').split(",");
let array = input.map(Number);
console.log(array);

let target = Number(prompt('Enter target number: '));

function searchTarget(number){
    for(let i=0; i<array.length; i++){
        if(number == array[i]){
            return 1;
        }
    }
    return -1;
}

console.log(searchTarget(target));

