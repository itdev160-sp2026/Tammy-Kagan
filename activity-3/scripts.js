window.addEventListener("DOMContentLoaded", () => {

    // Part A: DOM Selection
    const greetingMessage = document.getElementById("greeting-message");
    const greetingImage = document.getElementById("greeting-image");
    const nameInput = document.getElementById("nameInput");

    const cardContainer = document.querySelector(".card-container");
    const buttons = document.querySelectorAll(".controls button");

    console.log("Element selected with getElementById:", greetingMessage);
    console.log("Element selected with querySelector:", cardContainer);
    console.log("Buttons selected with querySelectorAll:", buttons);

    // Part B: Content Modification
    console.log("Original greeting textContent:", greetingMessage.textContent);
    console.log("Original image alt attribute:", greetingImage.getAttribute("alt"));

    greetingMessage.textContent = "Hello <strong>World</strong>! (textContent)";
    console.log("After setting textContent:", greetingMessage.textContent);

    greetingMessage.innerHTML = "Hello <strong>World</strong>! (innerHTML)";
    console.log("After setting innerHTML:", greetingMessage.innerHTML);

    greetingMessage.textContent = "Have a Dynamic day!";
    console.log("Here is the Dynamic Update:", greetingMessage.textContent);

    // Part C: Attribute Modification
    console.log("*** ATTRIBUTE MODIFICATION DEMONSTRATIONS ***");
    console.log("Original image src:", greetingImage.getAttribute("src"));
    console.log("Original image alt:", greetingImage.getAttribute("alt"));

    greetingImage.setAttribute("src", "https://picsum.photos/seed/picsum/200/300");
    greetingImage.setAttribute("alt", "New greeting image");

    console.log("Updated image src:", greetingImage.getAttribute("src"));
    console.log("Updated image alt:", greetingImage.getAttribute("alt"));

    // Part D: Greeting Functions
    const greetings = {
        birthday: { message: "Happy Birthday!", image: "https://picsum.photos/id/1/300/200?text=Happy+Birthday!" },
        holiday: { message: "Happy Holidays!", image: "https://picsum.photos/id/174/1600/589.jpg?text=Happy+Holidays!" },
        thankYou: { message: "Thank You!", image: "https://picsum.photos/id/47/300/200?text=Thank+You!" }
    };

    function updateGreeting(type) {
        const greeting = greetings[type];
        if (greeting) {
            greetingMessage.textContent = greeting.message;
            greetingImage.setAttribute("src", greeting.image);
            console.log(`Greeting updated to: ${type}`);
        }
    }

    // Expose functions to window so HTML buttons can access them
    window.setBirthdayGreeting = () => updateGreeting("birthday");
    window.setHolidayGreeting = () => updateGreeting("holiday");
    window.setThankYouGreeting = () => updateGreeting("thankYou");
    window.setRandomGreeting = () => {
        const types = Object.keys(greetings);
        const randomType = types[Math.floor(Math.random() * types.length)];
        updateGreeting(randomType);
        console.log(`Random greeting selected: ${randomType}`);
    };

    // Part E: Interactive Features
    window.personalizeGreeting = () => {
        const name = nameInput.value.trim();
        if (!name) {
            alert("Please enter a name to personalize the greeting!");
            console.log("Personalization attempted with empty name");
            return;
        }
        const personalizedMessage = `Dear ${name},\n\n${greetingMessage.textContent}`;

        greetingMessage.innerHTML = personalizedMessage.replace(/\n/g, "<br>");
        console.log(`Personalized greeting for: ${name}`);
        console.log(`Full message: ${personalizedMessage}`);
        nameInput.value = "";
    };
});