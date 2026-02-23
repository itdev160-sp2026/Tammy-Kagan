// Activity 5: Math Operations Widget

console.log("=== Activity 5: Math Operations Widget ===");

// Part A: Element Selection

const inputOne = document.getElementById("number1");
const inputTwo = document.getElementById("number2");
const buttons = document.querySelectorAll(".operation");
const clearBtn = document.getElementById("clear");
const resultBox = document.getElementById("result");

console.log("Inputs:", inputOne, inputTwo);
console.log("Buttons found:", buttons.length);
console.log("Result container:", resultBox);

// Part B: Event Logger Helper

function displayEventInfo(e) {
  console.log("Event Type:", e.type);
  console.log("Clicked Element:", e.target);
  console.log("Tag:", e.target.tagName);
  console.log("Button Label:", e.target.textContent);
  console.log("Listener Attached To:", e.currentTarget);
}

// Part C: Math Functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

// Input Validation

function getValidNumbers() {
  const value1 = parseFloat(inputOne.value);
  const value2 = parseFloat(inputTwo.value);

  if (inputOne.value.trim() === "" || isNaN(value1)) {
    showError("First value must be a number.");
    return null;
  }

  if (inputTwo.value.trim() === "" || isNaN(value2)) {
    showError("Second value must be a number.");
    return null;
  }

  return { value1, value2 };
}

// Display Functions

function showSuccess(result) {
  resultBox.textContent = `Answer: ${result}`;
  resultBox.className = "result success";
}

function showError(message) {
  resultBox.textContent = message;
  resultBox.className = "result error";
}

function resetCalculator() {
  inputOne.value = "";
  inputTwo.value = "";
  resultBox.textContent = "Waiting for calculation...";
  resultBox.className = "result";
}

// Event Handler

function handleButtonClick(e) {
  console.log("Operation button clicked");
  displayEventInfo(e);

  const operationType = e.target.dataset.operation;
  const numbers = getValidNumbers();
  if (!numbers) return;

  const { value1, value2 } = numbers;
  let output;

  switch (operationType) {
    case "add":
      output = add(value1, value2);
      break;
    case "subtract":
      output = subtract(value1, value2);
      break;
    case "multiply":
      output = multiply(value1, value2);
      break;
    case "divide":
      output = divide(value1, value2);
      if (output === null) {
        showError("Division by zero is not allowed.");
        return;
      }
      break;
    default:
      showError("Invalid operation selected.");
      return;
  }

  showSuccess(output);
}

// Event Listeners

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});

clearBtn.addEventListener("click", function (e) {
  displayEventInfo(e);
  resetCalculator();
});

// Focus styling
inputOne.addEventListener("focus", e => {
  e.target.style.backgroundColor = "#d1f5f2";
});

inputOne.addEventListener("blur", e => {
  e.target.style.backgroundColor = "";
});

inputTwo.addEventListener("focus", e => {
  e.target.style.backgroundColor = "#d1f5f2";
});

inputTwo.addEventListener("blur", e => {
  e.target.style.backgroundColor = "";
});

console.log("All listeners attached. Please enter your input.");