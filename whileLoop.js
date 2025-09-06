/*
While loop with Logical Operators
Write a program to take an input number from the user. 

     a. If the input number is not between 1 to 10, ask them to enter the value again by printing a message           on the screen using setText Command. 

     b. Else stop.
*/
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter a number: '));
while(true){
    if(!(number > 0 && number <= 10)){
       number=prompt('Enter another number: ');
    }
    else{
        break;
    }
}