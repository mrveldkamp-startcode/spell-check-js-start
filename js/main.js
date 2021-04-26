// Spell Check Start Code

// Global Variables
let dictionary;
let aliceWords;

// Load Data Files into Global Variables
loadDictionary();
loadAliceText();

// HTML Elements
let wordLinearBtnEl = document.getElementById("word-linear-btn");
let wordBinaryBtnEl = document.getElementById("word-binary-btn");
let wordResultsEl = document.getElementById("word-results");
let aliceLinearBtnEl = document.getElementById("alice-linear-btn");
let aliceBinaryBtnEl = document.getElementById("alice-binary-btn");
let aliceResultsEl = document.getElementById("alice-results");

// Event Listeners
wordLinearBtnEl.addEventListener("click", checkWordLinear);
wordBinaryBtnEl.addEventListener("click", checkWordBinary);
aliceLinearBtnEl.addEventListener("click", checkAliceLinear);
aliceBinaryBtnEl.addEventListener("click", checkAliceBinary);

// Event Functions (YOU NEED TO IMPLEMENT THESE)
function checkWordLinear() {
  console.log("Check Word Linear");
}

function checkWordBinary() {
  console.log("Check Word Binary");
}

function checkAliceLinear() {
  console.log("Check Alice Linear");
}

function checkAliceBinary() {
  console.log("Check Alice Binary");
}



// NOTE: Remember that the dictionary is all lowercase words
// So when checking if a word is in the dictionary, convert the word to lowercase
// Example: let index = linearSearch(dictionary, word.toLowerCase())