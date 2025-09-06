//Calculate area and perimeter of rectangle and print them on console
const prompt = require('prompt-sync')();

let length = Number(prompt('Enter the length: '));
let breadth = Number(prompt('Enter the breadth: '));
function areaOfRectangle(length, breadth){
    return length * breadth;
}
console.log('The area of rectangle is: ', areaOfRectangle(length, breadth));

function perimeterOfRectangle(length, breadth){
    return 2 * (length + breadth);
}
console.log('The perimeter of rectangle is: ', perimeterOfRectangle(length, breadth));