// Day 8: ES6+ Features

/**
 Activity 1: Template Literals
Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
Task 2: Create a multi-line string using template literals and log it to the console.
 */

// 1
let name = "omkar"
let age=10

console.log(`name:${name} age:${age}`);

// 2
let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui unde, pariatur non eaque quod vel ex sint. Delectus omnis, laudantium molestiae harum saepe excepturi eligendi nobis id minus officiis."
console.log(str);

/**
 Activity 2: Destructuring
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
 */

// 3
const arr = [1,2,3,4]

const [a,b] =arr

console.log(a,b);

// 4
const book = {
  title:"Demonslayer",
  author:"Koyoharu Gotouge",
  genre:"adventure"
};

const {title , author} = book

console.log(title,author);

/**
 Activity 3: Spread and Rest Operators
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
 */