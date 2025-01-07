/**
 Tasks/Activities
Activity 1: Function Declaration
Task 1: Check if a number is even or odd.
Task 2: Calculate the square of a number.
 */

function number(no) {
  if (no % 2 == 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}

const no = number(2);

console.log(no);

function square(n1, n2) {
  return n1 * n2;
}

const sq = square(2, 3);
console.log(sq);

/**
 Activity 2: Function Expression
Task 3: Find the maximum of two numbers.
Task 4: Concatenate two strings.
 */

function max2no(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

const max = max2no(10, 9);
console.log(max);

function concat(n1, n2) {
  return n1 + " " + n2;
}

const conc = concat("om", "patil");
console.log(conc);

/**
 Activity 3: Arrow Functions
Task 5: Sum of two numbers.
Task 6: Check if a string contains a specific character.
 */

const add = (n1, n2) => {
  return n1 + n2;
};

const adds = add(2, 3);
console.log(adds);

const secial = (value) => {
  if (value === `@` || value === `#`) {
    console.log("special character");
  } else {
    console.log("default character");
  }
};

const secials = (value,ch) => {
    if (value.includes(ch)) {
      console.log("special character");
    }
    else{
      console.log("normal character");
      
    } 
};

const strings = secials(`@hello`,`%f`);
console.log(strings);


/*
 Activity 4: Function Parameters and Default Values
Task 7: Product of two numbers with a default value.
Task 8: Greeting message with name and age
 */

function para(n=1)
{
    return n;
}

const output = para()
console.log(output);

function message(name,age)
{
    return `my name is ${name} and ${age}`
}

const m = message("om",10)

console.log(m);

/**
 Activity 5: Higher-Order Functions
Task 9: Function that calls another function multiple times.
Task 10: Apply two functions sequentially to a value.
 */

function anfunc() {
  return `hello`
}

function anofunc() {
  return `world`
}

const func = anfunc(anfunc())
console.log(func);


// 10

function firstSeq(x)
{
  return x+2
}

function secondSeq(x)
{
  return x*2
}

const value = 10 
const mainFunc = secondSeq(firstSeq(value))
console.log(`result: ${mainFunc}`);
 
/**
 Feature Request
Even or Odd Function Script: Check if a number is even or odd.
Square Calculation Function Script: Calculate the square of a number.
Concatenation Function Script: Concatenate two strings.
Sum Calculation Arrow Function Script: Sum of two numbers.
Higher-Order Function Script: Apply a function multiple times.
 */

