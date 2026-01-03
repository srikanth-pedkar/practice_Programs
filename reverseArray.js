//Given an array of strings, return another array with the strings in reverse order.

const prompt = require('prompt-sync')();
let inputArray = prompt('Enter the values: ').split(',');
console.log(inputArray);

//Using the inbuilt reverse method

/*inputArray.reverse();
console.log(inputArray);
*/

//Using the index method.
function reverse(array){
    const newArray = [];
    for(let i = array.length-1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
console.log(reverse(inputArray));