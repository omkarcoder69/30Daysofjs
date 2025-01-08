// Day 1: Variables and Data Types

/**
 Activity 1: Variable Declaration
Task 1: Declare a variable using var, assign it a number, and log the value to the console.
Task 2: Declare a variable using let, assign it a string, and log the value to the console.
 */

// 1
var num = 1;
console.log(num);

// 2
let name = "omkar";
console.log(name);

/**
 Activity 2: Constant Declaration
Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
 */

// 3
const user = true;
console.log(user);

/**
 Activity 3: Data Types
Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
 */

// 4
// object
let admin = {
  name: "omkar",
  id: 5,
  login: true,
};

// array
let id = [1, 2, 3, 4, 5];

// typeof operator
console.log(`number:${typeof num}`);
console.log(`string:${typeof name}`);
console.log(`boolean:${typeof user}`);
console.log(`object:${typeof admin}`);
console.log(`array:${typeof id}`);

/**
 Activity 4: Reassigning Variables
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
 */


// 5
let value = "om"
value="omkar"

console.log(`reassignValue: ${value}`);


/**
 Activity 5: Understanding const
Task 6: Try reassigning a variable declared with const and observe the error.
 */

// 6
const assigns = 1

// assigns=3

// console.log(`reassignValue${assigns}`);
//Error: assignment to constant variable

/**
 Feature Request:
Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
 */

//1
console.log(`value: ${num}  typeof: ${typeof(num)}`);
console.log(`value: ${name}  typeof: ${typeof(name)}`);
console.log(`value: ${user}  typeof: ${typeof(user)}`);
console.log(`value: ${admin}  typeof: ${typeof(admin)}`);
console.log(`value: ${id}  typeof: ${typeof(id)}`);

//2
// https://chatgpt.com/share/677dfeac-6558-800a-8e44-07fb357e0c05


