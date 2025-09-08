//Check if given numbers are magic numbers
/*Given three numbers, if the first number is less than the second number, 
and the second number is less than the third number it’s a magic number otherwise not a magic number.*/
const prompt = require('prompt-sync')();
const num1 = Number(prompt('Enter first number: '));
const num2 = Number(prompt('Enter second number: '));
const num3 = Number(prompt('Enter third number: '));
if(num1 < num2 && num2 < num3){
    console.log("Magic Numbers");
}
else{
    console.log('Not Magic Numbers');
}