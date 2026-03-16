// demos.js
console.log("JavaScript Function & Scope Demonstrations");

// 1. Function Declarations
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Tammy"); 

// 2. Function Expressions
const square = function(num) {
    return num * num;
};
console.log("Square of 5:", square(5)); // Function expression call

// 3. Parameters, Arguments, Return Values
function multiply(a, b) {
    return a * b; // Return value
}
let result = multiply(6, 7); // Arguments passed
console.log("6 * 7 =", result);

// 4. Local vs Global Scope

let globalVar = "Global";

function scopeDemo() {
    let localVar = "Local";
    console.log("Inside Function:");
    console.log(globalVar); 
    console.log(localVar);  
}

scopeDemo();
console.log("Outside function:");
console.log(globalVar); // Works
// console.log(localVar); // ERROR: localVar not defined outside function

// 5. Arrow Function Examples
const add = (x, y) => x + y;
console.log("Arrow function add(4, 5):", add(4, 5));

const sayHi = () => console.log("Hi there!");
sayHi();

const createUser = (name, age) => ({ name: name, age: age });
console.log("Arrow function object:", createUser("Bob", 25));

// 6. More Scope & Behavior Demonstration
let num = 10;

function modifyNum() {
    let num = 5; // local variable shadows global
    console.log("Inside function, num =", num);
}

modifyNum();
console.log("Outside function, num =", num); // global remains unchanged
