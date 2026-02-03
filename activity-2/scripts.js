function checkAge() {
  const ageInput = document.getElementById("ageInput");
  const resultDiv = document.getElementById("result");
  const ageText = ageInput.value.trim();

  console.log(`Input received: "${ageText}"`);

  resultDiv.className = "";

  if (ageText === "") {
    resultDiv.textContent = "Please enter your age";
    resultDiv.className = "invalid";
    console.log("Result: No input");
    return;
  }

  const age = Number(ageText);

  if (isNaN(age)) {
    resultDiv.textContent = "That’s not a number! Try again.";
    resultDiv.className = "invalid";
    console.log("Result: Not a number");
    return;
  }

  if (age < 0 || age > 150) {
    resultDiv.textContent = "Please enter a realistic age (0-150)";
    resultDiv.className = "invalid";
    console.log("Result: Age out of realistic range");
    return;
  }

  if (age >= 18) {
    resultDiv.textContent = `You are ${age} years old - You are an adult`;
    resultDiv.className = "adult";
    console.log(`Result: Adult (age: ${age})`);
  } else {
    resultDiv.textContent = `You are ${age} years old - You are a minor`;
    resultDiv.className = "minor";
    console.log(`Result: Minor (age: ${age})`);
  }
}
