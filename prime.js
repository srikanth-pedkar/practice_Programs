//Write a function to check if the number is prime or not.
const prompt = require('prompt-sync')();

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const number = Number(prompt(`Enter a number :`));
if(isNaN(number)){
    console.log(`Please enter a valid number.`);
}
else if(number <= 1){
    console.log(`${number} is not a prime number`);
}
else{
    if(isPrime(number)){
        console.log(`${number} is a prime number`);
    }
    else{
        console.log(`${number} is not a prime number`);
    }
}