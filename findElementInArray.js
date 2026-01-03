//find the index of the value x in the array

const prompt = require('prompt-sync')();
const inputArray = prompt('Enter values: ').split(',');
let arr = inputArray.map(Number);
let findValue = Number(prompt('Enter a value to find in the array: '));
console.log(arr);

let index = arr.indexOf(findValue);

if (index !== -1) {
  console.log(`${findValue} is found at index ${index}.`);
} else {
  console.log(`${findValue} is not found.`);
}