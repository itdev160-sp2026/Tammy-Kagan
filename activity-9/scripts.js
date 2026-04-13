console.log("=== Activity 9: Contact Form Validation ===");

// Get the form
const form = document.getElementById("contactForm");

// Keep track of which fields are valid
const formStatus = {
  name: false,
  email: false,
  message: false
};

// Email pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// --------------------
// Validation Functions
// --------------------
function checkName(value) {
  const text = value.trim();

  if (text === "") {
    return {
      valid: false,
      message: "Name is required."
    };
  }

  return {
    valid: true,
    message: ""
  };
}

function checkEmail(value) {
  const text = value.trim();

  if (text === "") {
    return {
      valid: false,
      message: "Email is required."
    };
  }

  if (!emailRegex.test(text)) {
    return {
      valid: false,
      message: "Please enter a valid email address."
    };
  }

  return {
    valid: true,
    message: ""
  };
}

function checkMessage(value) {
  const text = value.trim();

  if (text === "") {
    return {
      valid: false,
      message: "Message is required."
    };
  }

  if (text.length < 10) {
    return {
      valid: false,
      message: "Message must be at least 10 characters long."
    };
  }

  return {
    valid: true,
    message: ""
  };
}

// --------------------
// Show Validation State
// --------------------
function showFeedback(fieldName, result) {
  const errorBox = document.getElementById(fieldName + "Error");
  const input = document.getElementById(fieldName);

  errorBox.textContent = "";
  errorBox.classList.remove("show");

  input.classList.remove("valid");
  input.classList.remove("invalid");

  if (result.valid) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    errorBox.textContent = result.message;
    errorBox.classList.add("show");
  }
}

// --------------------
// Validate One Field
// --------------------
function validateField(fieldName, value) {
  let result;

  if (fieldName === "name") {
    result = checkName(value);
  } else if (fieldName === "email") {
    result = checkEmail(value);
  } else if (fieldName === "message") {
    result = checkMessage(value);
  } else {
    return false;
  }

  formStatus[fieldName] = result.valid;
  showFeedback(fieldName, result);
  updateSubmitButton();

  return result.valid;
}

// --------------------
// Submit Button State
// --------------------
function updateSubmitButton() {
  const submitBtn = document.getElementById("submitBtn");
  const allValid = Object.values(formStatus).every(function (value) {
    return value === true;
  });

  submitBtn.disabled = !allValid;
}

// --------------------
// Real-Time Validation
// --------------------
function setUpListeners() {
  const fields = ["name", "email", "message"];

  fields.forEach(function (fieldName) {
    const field = document.getElementById(fieldName);

    field.addEventListener("input", function (event) {
      validateField(fieldName, event.target.value);
    });

    field.addEventListener("blur", function (event) {
      validateField(fieldName, event.target.value);
    });
  });
}

// --------------------
// Form Submission
// --------------------
function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("formSuccess").classList.add("hidden");

  const formData = new FormData(form);
  let isFormValid = true;

  ["name", "email", "message"].forEach(function (fieldName) {
    const value = formData.get(fieldName) || "";

    if (!validateField(fieldName, value)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    console.log("Form submitted successfully!");
    console.log("Submitted data:");

    for (const [key, value] of formData.entries()) {
      console.log(key + ": " + value);
    }

    document.getElementById("formSuccess").classList.remove("hidden");
  }
}

// --------------------
// Start Program
// --------------------
form.addEventListener("submit", handleSubmit);
setUpListeners();
updateSubmitButton();