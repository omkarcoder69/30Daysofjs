// Day 2: Operators

/**
 Activity 1: Arithmetic Operations
Task 1: Write a program to add two numbers and log the result to the console.
Task 2: Write a program to subtract two numbers and log the result to the console.
Task 3: Write a program to multiply two numbers and log the result to the console.
Task 4: Write a program to divide two numbers and log the result to the console.
Task 5: Write a program to find the reminder when one number is divided by another and log the result to the console.
 */

// variable declaration
let n1 = 10;
let n2 = 5;

// 1,2,3,4,5
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);

/**
 Activity 2: Assignment Operators
Task 6: Use the += operator to add a number to a variable and log the result to the console.
Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
 */

// 6,7
console.log((n1 += 20));
console.log((n1 -= 2));

/**
 Activity 3: Comparison Operators
Task 8: Write a program to compare two numbers using > and < and log the result to the console.
Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
Task 10: Write a program to compare two numbers using == and === and log the result to the console.
 */

//8,9,10

// out comes in boolean

// > greater
console.log(n1 > n2);

// < less
console.log(n1 < n2);

// == compare
console.log(n1 == n2);

// === strict compare
console.log(n1 === n2);

/**
 Activity 4: Logical Operators
Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
 */

//11,12,13

console.log(n1 && n2);
console.log(n1 || n2);
console.log(n1 != n2);

/**
 Activity 5: Ternary Operator

Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
 */

// 14
let no = -2;
let result = no > 0 ? "positive" : "negative";
console.log(result);

/**
 Feature Request:
Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
*/

// 1
// feature request
let arithmetic = {
    add:n1+n2,
    sub:n1-n2,
    mult:n1*n2,
    div:n1/n2,
    rem:n1%n2
}

console.log("arithmeticprogressions");
console.log(`add:${arithmetic.add}`);
console.log(`sub:${arithmetic.sub}`);
console.log(`mult:${arithmetic.mult}`);
console.log(`div:${arithmetic.div}`);
console.log(`rem:${arithmetic.rem}`);

//2
console.log(n1>n2 || n1<n2);
