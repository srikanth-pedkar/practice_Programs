//Convert Temperature (Celsius to Fahrenheit) & (Fahrenheit to Celsius) and print on console
//Formula to convert Celsius to Fahrenheit: F = (C * 9/5) +32
//Formula to convert Fahrenheit to Celsius: C = (F - 32)*5/9
const prompt = require('prompt-sync')();
const temperature = Number(prompt('Enter a temperature: '));

function calculateFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}
console.log('Given temperature to Fahrenheit: ',calculateFahrenheit(temperature));

function calculateCelsius(temperature){
    return (temperature -32)*5/9;
}
console.log('Given temperature to Celsius: ',calculateCelsius(temperature));