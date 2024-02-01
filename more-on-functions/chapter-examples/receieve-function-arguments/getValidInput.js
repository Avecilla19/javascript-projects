const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}
let isValidA = function(str) {
  if (!str.includes('a')){
    return false;
  }
  return true
};
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
console.log(getValidInput("type apple: ", isValidA));
// i just did a simple one making the user type what i wanted to see if it worked