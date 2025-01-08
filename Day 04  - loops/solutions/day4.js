/**
 Activity 1: For Loop
Task 1: Write a program to print numbers from 1 to 10 using a for loop.
Task 2: Write a program to print the multiplication table of 5 using a for loop.
 */


// 1
for (let index = 1; index < 11; index++) {
  console.log(index);
}

// 2
// console.log("multiplication of 5");
for (let mult = 1; mult < 11; mult++) {
  console.log(mult * 5);
}

/**
 Activity 2: While Loop
Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
Task 4: Write a program to print numbers from 10 to 1 using a while loop.
 */

// 3
let i = 1;
sum = 0;

while (i < 11) {
  console.log("addition=", i);
  i += sum;
  i++;
}

// 4
let rev = 10;
console.log("reversenumber");
while (rev > 0) {
  console.log(`${rev}`);
  rev--;
}

/**
 Activity 4: Nested Loops
Task 7: Write a program to print a pattern using nested for loops:

output:
*
* *
* * *
* * * *
* * * * *

 */

// 4
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j < i; j++) {
    row += "*";
  }
  console.log(row.trim());
}

/**
 Activity 5: Loop Control Statements
Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
 */

// 8
for (let i = 1 ; i<=10 ; i++) {
  if (i==5) {
    continue
  }
  console.log(i);
}

// 9
for (let j = 1; j <= 10; j++) {
  if (j == 7) {
    break;
  }
  console.log(j);
}

/**
 Feature Request:
Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.

Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
 */

// 1
let w=1
while (w <= 10) {
   console.log(w);
   w++;
}

// 2
for (let mult = 1; mult < 11; mult++) {
  console.log(mult * 5);
}

// 3
for (let i = 1; i <= 5; i++) {
  let rows=""
  for (let j = 1; j <= i; j++) {
    rows+="*";
  }
  console.log(rows);
}

// 4
let s=1;
while (s<=10) {
  s+=sum;
  console.log(s);
  s++;
}

// 5
let fact=1
let f=1;
do {
  fact*=f
  f++;
  console.log(fact);
  
  
} while (f<=5);