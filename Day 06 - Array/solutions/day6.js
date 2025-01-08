// Day 6: Arrays

/**
 Activity 1: Array Creation and Access
Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
Task 2: Access the first and last elements of the array and log them to the console.
 */

// 1
let no = [1,2,3,4,5]
console.log(no);

// 2
console.log(no[0]);
console.log(no[4]);


/**
 Activity 2: Array Methods (Basic)
Task 3: Use the push method to add a new number to the end of the array and log the updated array.
Task 4: Use the pop method to remove the last element from the array and log the updated array.
Task 5: Use the shift method to remove the first element from the array and log the updated array.
Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
 */

// 3 add the new value
let num = [10,20,30,40] 
num.push(50)
console.log(num);

// 4 remove from last
num.pop()
console.log(num);

// 5 remove the element from first 
num.shift([1])
console.log(num);

// 6 Inserts new elements at the start of an array, and returns the new length of the arr
num.unshift(10)
console.log(num);

/**
 Activity 3: Array Methods (Intermediate)
Task 7: Use the map method to create a new array where each number is doubled and log the new array.
Task 8: Use the filter method to create a new array with only even numbers and log the new array.
Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
 */

let arr = [1,2,3,4,5]

const doubleNumber = arr.map(num=> num*2)

console.log(doubleNumber);
