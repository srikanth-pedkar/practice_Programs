//Check if the entered year is a leap year or not
const prompt = require('prompt-sync')();

const year = parseInt(prompt('Enter a year :'));

if(isNaN(year)){
    console.log('Enter a valid year.');
}
else{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(year + ' is a leap year');
    }
    else{
        console.log(year + ' is not a leap year');
    }
}