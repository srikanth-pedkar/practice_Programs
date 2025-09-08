//Given the time and distance, calculate the speed
//Speed formula is: speed = distance/time

const prompt = require('prompt-sync')();
const distance = Number(prompt('Enter the distance in Km: '));
const time = Number(prompt('Enter time in hours: '));
let speed;
speed = distance/time;
console.log(speed);