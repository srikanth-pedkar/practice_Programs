//Given an age, return the age group as “Teenager”, “Adult” and “Senior Citizen” - 
// constraint age is always greater than 0.
const prompt = require('prompt-sync')();
const age = Number(prompt('Enter your age: '));

let ageGroup;
switch (true) {
    case (age > 0 && age < 12):
        ageGroup = 'child';
        break;
    case (age >= 12 && age < 21):
        ageGroup = 'Teenager';
        break;
    case (age >= 21 && age < 60):
        ageGroup = 'Adult';
        break;
    case (age >= 60 && age <= 100):
        ageGroup = 'Senior Citizen';
        break;
    default:
        ageGroup = 'Not a Humanbeing';
}
console.log(ageGroup);