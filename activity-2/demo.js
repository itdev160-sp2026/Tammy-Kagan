// Activity 2: Operators & Control Flow Demo

console.log("=== Activity 2: Operators & Control Flow ===");

// ============================================
// PART A: Arithmetic Operators
// ============================================
console.log("\n--- Arithmetic Operators ---");
let num1 = 15;
let num2 = 4;

console.log(`num1 = ${num1}, num2 = ${num2}`);
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Remainder (modulus):", num1 % num2);

// Operator precedence examples
console.log("\nOperator Precedence:");
console.log("2 + 3 * 4 =", 2 + 3 * 4, "(Multiplication happens first)");
console.log("(2 + 3) * 4 =", (2 + 3) * 4, "(Parentheses change the order)");

// ============================================
// PART B: Comparison Operators
// ============================================
console.log("\n--- Comparison Operators ---");
let a = 5;
let b = "5";
let c = 10;

console.log(`a = ${a} (number), b = "${b}" (string), c = ${c}`);
console.log("a == b:", a == b, "(loose equality)");
console.log("a === b:", a === b, "(strict equality)");
console.log("a != b:", a != b, "(loose inequality)");
console.log("a !== b:", a !== b, "(strict inequality)");
console.log("a > c:", a > c);
console.log("a < c:", a < c);
console.log("a >= 5:", a >= 5);
console.log("a <= 5:", a <= 5);

// ============================================
// PART C: Logical Operators
// ============================================
console.log("\n--- Logical Operators ---");
let adult = true;
let license = false;
let personAge = 20;

console.log(`adult = ${adult}, license = ${license}, personAge = ${personAge}`);
console.log("adult && license:", adult && license, "(AND - both must be true)");
console.log("adult || license:", adult || license, "(OR - at least one true)");
console.log("!license:", !license, "(NOT - opposite of license)");
console.log("personAge >= 18 && personAge < 65:", personAge >= 18 && personAge < 65, "(compound condition)");

// ============================================
// PART D: Conditional Statements (if/else)
// ============================================
console.log("\n--- Conditional Statements ---");
let score = 85;
console.log("Score:", score);

if (score >= 90) {
  console.log("Grade: A - Excellent!");
} else if (score >= 80) {
  console.log("Grade: B - Good job!");
} else if (score >= 70) {
  console.log("Grade: C - Satisfactory");
} else if (score >= 60) {
  console.log("Grade: D - Needs improvement");
} else {
  console.log("Grade: F - Please study more");
}

// ============================================
// PART E: Switch Statement
// ============================================
console.log("\n--- Switch Statement ---");
let day = 3; // 0 = Sunday, 1 = Monday, etc.
console.log("Day number:", day);

switch (day) {
  case 0:
    console.log("Today is Sunday - Weekend!");
    break;
  case 1:
    console.log("Today is Monday - Start of work week");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday - Hump day!");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday - TGIF!");
    break;
  case 6:
    console.log("Today is Saturday - Weekend!");
    break;
  default:
    console.log("Invalid day number");
}

// PART F: Display Message on Webpage
document.getElementById("output").innerHTML = "<h3>Check the console for demo results!</h3>";