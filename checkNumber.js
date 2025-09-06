//Check if the number entered is +ve
const prompt = require('prompt-sync')();

let number = Number(prompt('Enter a number: '));
if(number>0){
    console.log(`The given number ${number} is a +ve number`);
}
else if(number === 0){
    console.log(`The given number ${number} is zero`);
}
else{
    console.log(`The given number ${number} is a -ve number`);
}