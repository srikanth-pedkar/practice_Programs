/*Create a class from scratch! Class name should be Solution.
The constructor of the Solution class should take an array as an argument, this will contain 3 integers of the form (width, length, height) from which the block should be created.

Define these methods -

getWidth() should return the width of the block
getLength() should return the length of the block
getHeight() should return the height of the block
getVolume() should return the volume of the block
getSurfaceArea() should return the surface area of the block
*/
const prompt = require('prompt-sync')();
let raw = prompt('Enter 3 values (separated by space or comma): ');
const inputArr = raw.split(/[\s,]+/).filter(Boolean).map(Number);
if (inputArr.length !== 3 || inputArr.some(n => Number.isNaN(n))) {
    console.error('Please enter exactly 3 numeric values.');
    process.exit(1);
}

class Solution{
    constructor(arr) {
        this.width = arr[0];
        this.length = arr[1];
        this.height = arr[2];
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getLength(){
        return this.length;
    }

    getVolume(){
        let volume = this.width * this.height * this.length;
        return volume;
    }

    getSurfaceArea(){
        let surface = 2*(this.length*this.width + this.length*this.height + this.width*this.height);
        return surface;
    }
}

let block = new Solution(inputArr);
console.log(block.getLength());
console.log(block.getHeight());
console.log(block.getWidth());
console.log(block.getVolume());
console.log(block.getSurfaceArea());