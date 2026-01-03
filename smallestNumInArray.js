//Find the smallest num in array
const prompt = require('prompt-sync')();

let inputArray = prompt("Enter numbers: ").split(",");
let arr = inputArray.map(Number);
console.log(arr);

//[55,10,45,60,-20,23,6,14,0,-10,-30];
let smallestNum = arr[0];
for(let i = 0; i<arr.length; i++){
    if(arr[i]<smallestNum){
        smallestNum = arr[i]
    }
}
console.log(smallestNum);