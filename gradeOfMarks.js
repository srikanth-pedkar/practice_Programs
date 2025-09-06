/*
Write a program to display the grade as per the marks entered on the console window.
         Grade A if marks >= 90
         Else Grade B if marks >= 80
         Else Grade C if marks >= 70
         Else Grade D if marks >= 60
         Else Grade E if marks >= 50
         Else display “Fail”
*/
const prompt = require('prompt-sync')();

const marks = Number(prompt('Enter your marks: '));
/*
function checkGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A";
    }
    else if (marks >= 80 && marks < 90) {
        return "B";
    }
    else if (marks >= 70 && marks < 80) {
        return "C";
    }
    else if (marks >= 60 && marks < 70) {
        return "D";
    }
    else if (marks >= 50 && marks < 60) {
        return "E";
    }
    else {
        return "Fail";
    }
}
console.log(`The marks obtained is: ${marks} and grade is: ${checkGrade(marks)}`);
*/
function gradeCalculator(marks){
    let grade;

    switch(true){
        case (marks >= 90) :
            grade = "A";
            break;
        case (marks >= 80) :
            grade = "B";
            break;
        case (marks >= 70) :
            grade = "C";
            break;
        case (marks >= 60) :
            grade = "D";
            break;
        case (marks >= 50) :
            grade = "E";
            break;
        default :
            grade = "F";
    }
    return grade;
}
console.log(`The marks obtained is: ${marks} and grade is: ${gradeCalculator(marks)}`);
