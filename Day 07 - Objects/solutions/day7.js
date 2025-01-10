// Day 7: Objects

/**
 Activity 1: Object Creation and Access
Task 1: Create a book object with properties like title, author, and year. Log it to the console.
Task 2: Access and log the title and author properties.
 */

// 1
let obj1 = {
    title: "narutomanga",
    author: "Masashi Kishimoto",
    year:1999,
    getDetails(){
        return `title: ${this.title} and author: ${this.author}`;
    },
};

console.log(obj1);

// 2
console.log(obj1.title);

/**
 Activity 2: Object Methods
Task 3: Add a method to return a string with the book's title and author. Log the result.
Task 4: Add a method to update the book's year and log the updated object.
 */

// 3
console.log(obj1.getDetails());

// 4
obj1.year=2000

console.log(obj1);


/**
 Activity 3: Nested Objects
Task 5: Create a library object with name and books (array of book objects). Log it to the console.
Task 6: Log the library's name and book titles.
 */

let library = {
    name: "john",
    books:[
        {title:`onepunchman`},
        {title:`doremon`}
    ]
};

console.log(library.books);

/**
 Activity 4: The this Keyword
Task 7: Add a method using this to return the book’s title and year. Log the result.
 */

console.log(obj1.getDetails());

/**
 Activity 5: Object Iteration
Task 8: Use a for...in loop to log each property and its value.
Task 9: Use Object.keys and Object.values to log all keys and values.
 */

for (let o in library){
    console.log(`library: ${o} = ${library[o]}`);    
}

console.log(Object.keys(library));
console.log(Object.values(library));

/**
 Feature Request
Book Object Script: Create a book object, add methods, and log properties and results. ✅
Library Object Script: Define a library object with book objects and log details. ✅
Object Iteration Script: Demonstrate iterating over an object's properties using for...in and Object.keys/Object. ✅values.
 */