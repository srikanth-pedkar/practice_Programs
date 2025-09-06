//Working with Relational Operators
const prompt = require('prompt-sync')();

const value1 = prompt('Enter value1: ');
const value2 = prompt('Enter value2: ');
function lessThan(input1, input2){
    return parseInt(input1) < parseInt(input2);
}
console.log(`${value1} is less than ${value2} : `, lessThan(value1, value2));

function greaterThan(input1, input2){
    return parseInt(input1) > parseInt(input2);
}
console.log(`${value1} is greater than ${value2} : `, greaterThan(value1, value2));

function lessThanEqualTo(input1, input2){
    return parseInt(input1) <= parseInt(input2);
}
console.log(`${value1} is less than equal to ${value2} : `, lessThanEqualTo(value1, value2));

function greaterThanEqualTo(input1, input2){
    return parseInt(input1) >= parseInt(input2);
}
console.log(`${value1} is greater than equal to ${value2} : `, greaterThanEqualTo(value1, value2));

function equalTo(input1, input2){
    return parseInt(input1) == parseInt(input2);
}
console.log(`${value1} is equal to ${value2} : `, equalTo(value1, value2));

function notEqualTo(input1, input2){
    return parseInt(input1) != parseInt(input2);
}
console.log(`${value1} is not equal to ${value2} : `, notEqualTo(value1, value2));