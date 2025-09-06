/*Take an input age from the user. 
If the age is less than 10 or greater than 80, 
prompt them to enter it again and informing them that the age is invalid.*/
const prompt = require('prompt-sync')();
const age = Number(prompt('Enter the age: '));

function validAge(age){
    if(age < 10 || age > 80){
        prompt('Entered age is invalid, please enter again: ');
    }
    return 'Entered age is valid'
}
console.log(validAge(age));