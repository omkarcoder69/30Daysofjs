// Day 3: Control Structures

/*     
 Activity 1: If-Else Statements
Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
 */

// 1
let no = -1;
if (no > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

// 2
age = 18;
if (age > 18) {
  console.log("person is eligible to vote");
} else {
  console.log("person is not eligible");
}

/**
 Activity 2: Nested If-Else Statements
Task 3: Write a program to find the largest of three numbers using nested if-else statements.
 */

// 3
let n1 = 10;
let n2 = 20;
let n3 = 30;

if (n1 > n2 && n1 > n3) {
  console.log("n1 is largest ");
} else if (n2 > n1 && n2 > n3) {
  console.log("n2 is largest ");
} else {
  console.log("n3 is  largest");
}

/**
 Activity 3: Switch Case
Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
 */

// 4
let ch = 5;
switch (ch) {
  case 1:
    console.log("1:sunday");
    break;
  case 2:
    console.log("2:monday");
    break;
  case 3:
    console.log("3:tuesday");
    break;
  case 4:
    console.log("4:wednesday");
    break;
  case 5:
    console.log("5:thursday");
    break;
  case 6:
    console.log("6:friday");
    break;
  case 7:
    console.log("7:saturday");
    break;
  default:
    console.log("Invalid choice");
}

// 5
let grade = 3;

switch (grade) {
  case 1:
    console.log("A");
    break;

  case 2:
    console.log("B");
    break;

  case 3:
    console.log("C");
    break;

  case 4:
    console.log("D");
    break;

  case 5:
    console.log("F");
    break;

  default:
    console.log("Invalid choice");
    break;
}

// 6
let score = 80;

switch (ch) {
  case score > 80:
    console.log("A grade");
    break;
  case score > 70:
    console.log("B grade");
    break;
  case score > 60:
    console.log("c grade");
    break;
  case score > 50:
    console.log("d grade");
    break;
  case score < 40:
    console.log("f grade");
    break;
  default:
    break;
}

console.log(score);

/**
 Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
 */

// 7
// logic : leap year means has an extra day added to it making it 366 days login instead of 365 daysqo
let year=2022
if(year%4 && year%400)
{
  console.log("leap year");  
}
else{
  console.log("not leap year");
  
}


/**
 Feature Request: ``->Done`<-`
Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and log the day name.
Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
 */

