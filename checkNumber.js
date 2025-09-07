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

//Use the below one liner code to check whether the given number is +ve, -ve, zero using built-In function called Math.sign().
//returns 1 if number is +ve, -1 if -ve, 0 if zero, -0 if -zero, NaN if not a number.
//console.log(Math.sign(number)); 
