//Write a program to calculate simple interest and compound interest.
//Formula for S.I. = (Principal x Rate x Time) / 100
//Formula for C.I = Principal * ( (1+Rate/100 )^Time - Principal)

const prompt = require('prompt-sync')();
let prinipal = parseInt(prompt('Enter principal amount :'));
let rate = parseInt(prompt('Enter rate :'));
let time = parseInt(prompt('Enter duration in years :'));

let SimpleInterest = (prinipal * rate * time)/100;
console.log(SimpleInterest);

let amount = prinipal * Math.pow((1+rate/100), time);
let CompoundInterest = amount - prinipal;
console.log(CompoundInterest);