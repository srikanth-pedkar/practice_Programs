//Write a program to find the Nth value of fibonacci number
const prompt = require('prompt-sync')();
const number = Number(prompt('Enter the value of n :'));

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
    return fib[n];
}

console.log(fibonacci(number));