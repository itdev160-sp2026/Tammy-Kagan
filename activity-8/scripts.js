// Activity 8: Quote of the Day Generator - Application Code
// This file contains the quote generator application

console.log("\n=== QUOTE API INTEGRATION ===");

// Part A: Quote API Integration
const QUOTE_API = "https://dummyjson.com/quotes/random";

// Application state
let appState = {
  currentQuote: null,
  isLoading: false
};

// Fetch a random quote using async/await
async function fetchQuote() {
  try {
    showLoading(true);
    hideError();

    console.log("Fetching random quote...");

    const response = await fetch(QUOTE_API);
    console.log("Response received:", response);
    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched quote data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    showError(`Failed to fetch quote: ${error.message}`);
    return null;
  } finally {
    showLoading(false);
  }
}

// Get and display a new quote
async function getNewQuote() {
  console.log("Getting new quote...");

  const quote = await fetchQuote();

  if (quote) {
    appState.currentQuote = quote;
    displayQuote(quote);
    console.log("Successfully displayed new quote!");
  }
}

// Part B: Quote Display Functions
function displayQuote(quote) {
  const container = document.getElementById("quoteContainer");

  const quoteCard = document.createElement("div");
  quoteCard.className = "quote-card";

  // DummyJSON API format: { quote: "quote text", author: "author" }
  quoteCard.innerHTML = `
    <p class="quote-text">${quote.quote}</p>
    <p class="quote-author">&mdash; ${quote.author}</p>
  `;

  container.innerHTML = "";
  container.appendChild(quoteCard);

  console.log(`Displayed quote by ${quote.author}`);
}

// UI Control Functions
function showLoading(show) {
  const loadingIndicator = document.getElementById("loadingIndicator");
  const button = document.getElementById("getQuoteBtn");

  if (show) {
    loadingIndicator.classList.remove("hidden");
    button.disabled = true;
    appState.isLoading = true;
  } else {
    loadingIndicator.classList.add("hidden");
    button.disabled = false;
    appState.isLoading = false;
  }
}

function showError(message) {
  const errorDisplay = document.getElementById("errorDisplay");
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = message;
  errorDisplay.classList.remove("hidden");
}

function hideError() {
  const errorDisplay = document.getElementById("errorDisplay");
  errorDisplay.classList.add("hidden");
}

// Event handlers
function handleGetQuote() {
  if (!appState.isLoading) {
    getNewQuote();
  }
}

function handleRetry() {
  if (!appState.isLoading) {
    getNewQuote();
  }
}

// Initialize application
function initializeApp() {
  console.log("Initializing Quote Generator application...");

  const getQuoteBtn = document.getElementById("getQuoteBtn");
  const retryBtn = document.getElementById("retryBtn");

  getQuoteBtn.addEventListener("click", handleGetQuote);

  if (retryBtn) {
    retryBtn.addEventListener("click", handleRetry);
  }

  console.log("Quote Generator application initialized successfully!");
  console.log("Click 'Get New Quote' to fetch a random quote!");
}

// Start the application
initializeApp();