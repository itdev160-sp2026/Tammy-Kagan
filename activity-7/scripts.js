// Activity 7: Arrays & Objects Practice File
// Demonstrates core JavaScript concepts separately from the app

console.log("=== Activity 7: Product Catalog Demo ===");

// ===============================
// ARRAY EXAMPLES
// ===============================
console.log("\n=== ARRAY EXAMPLES ===");

// Creating arrays
const nums = [10, 20, 30, 40, 50];
const animals = new Array('dog', 'cat', 'bird');
const randomData = [100, "test", false, undefined, { id: 1 }];

console.log("Nums:", nums);
console.log("Animals:", animals);
console.log("Mixed data:", randomData);

// Array methods
console.log("\nArray Operations:");

let snacks = ['chips', 'cookies'];
console.log("Start:", snacks);

// push
snacks.push('pretzels');
console.log("After push:", snacks);

// pop
let removedSnack = snacks.pop();
console.log("After pop:", snacks, "| Removed:", removedSnack);

// unshift
snacks.unshift('popcorn');
console.log("After unshift:", snacks);

// shift
let firstSnack = snacks.shift();
console.log("After shift:", snacks, "| Removed:", firstSnack);

// Iteration
console.log("\nLooping Through Arrays:");

const values = [2, 4, 6, 8];

// classic loop
for (let i = 0; i < values.length; i++) {
    console.log(`Index ${i} => ${values[i]}`);
}

// for...of
for (let val of values) {
    console.log(`Value: ${val}`);
}

// forEach
values.forEach((val, i) => {
    console.log(`forEach ${i}: ${val}`);
});

// map
const squared = values.map(v => v * v);
console.log("Squared:", squared);

// filter
const greaterThanFour = values.filter(v => v > 4);
console.log("Filtered (>4):", greaterThanFour);


// ===============================
// OBJECT EXAMPLES
// ===============================
console.log("\n=== OBJECT EXAMPLES ===");

const user = {
    first: "Jane",
    last: "Smith",
    age: 28,
    location: "Chicago",
    active: true
};

console.log("User:", user);

// Access properties
console.log("Dot:", user.first);
console.log("Bracket:", user["last"]);

// Dynamic access
let key = "age";
console.log(`Dynamic (${key}):`, user[key]);

// Modify object
user.email = "jane@email.com";
user.age = 29;
user["phone"] = "123-4567";

console.log("Updated user:", user);

// Delete property
delete user.phone;
console.log("After delete:", user);


// ===============================
// ARRAYS OF OBJECTS
// ===============================
console.log("\n=== ARRAY OF OBJECTS ===");

const inventory = [
    { name: "Tablet", price: 499.99, inStock: true },
    { name: "Keyboard", price: 79.99, inStock: false },
    { name: "Desk Lamp", price: 39.99, inStock: true }
];

console.log("Inventory:", inventory);

// filter
const inStockItems = inventory.filter(item => item.inStock);

// map
const inventoryNames = inventory.map(item => item.name);

// reduce
const totalCost = inventory.reduce((sum, item) => sum + item.price, 0);

console.log("Available:", inStockItems);
console.log("Names:", inventoryNames);
console.log(`Total Cost: $${totalCost.toFixed(2)}`);

console.log("\n=== Demo complete. See app below ===");