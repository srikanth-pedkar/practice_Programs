//Print the first n Fibonacci numbers.
const prompt = require('prompt-sync')();

const number = Number(prompt('Enter the value of n :'));

if(isNaN(number) || number <= 0){
    console.log('Enter valid number');
}

else{
    console.log('Fibonacci Series :');
    let a = 0; b = 1;
    for(let i = 1; i <= number; i++){
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}