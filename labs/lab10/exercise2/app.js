// Bad word catcher with loops app.js

let inputElement = document.getElementById("words-input");
let outputElement = document.getElementById("output");
let numberOutputElement = document.getElementById("number-output");

const badWords = ["clear", "water", "tires"];

let count = 0;
function checkForBadWords(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    let word = inputArray[i];
    if (badWords.includes(word.toLowerCase())) {
      ++count;
    }
  }
  let containsBadWord = count !== 0 ? true : false;
  updateDOM(containsBadWord, inputArray.length);
  console.log(containsBadWord);
  console.log(count);
}
function updateDOM(containsBadWord, numberOfWords) {
  if (containsBadWord === false) {
    outputElement.textContent = `No bad words found out of ${numberOfWords} words.`;
  } else {
    outputElement.textContent = `Bad words found. `;
    numberOutputElement.textContent += `${count} of the ${numberOfWords} words found are bad.`;
  }
}
function handleButtonClick() {
  let inputArray = inputElement.value.split(" ");
  checkForBadWords(inputArray);
  inputElement.value = "";
}

document.getElementById("submit").addEventListener("click", handleButtonClick);
