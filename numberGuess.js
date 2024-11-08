// numberGuess.js

// Generate a random number between 1 and 10
const correctNumber = Math.floor(Math.random() * 10) + 1;

// Initialize a variable to store the user's guess
let guess;

// Use a while loop to keep asking until the user guesses correctly
while (true) {
    // Prompt the user to enter a guess
    guess = prompt("Guess a number between 1 and 10:");

    // Check if the user cancels the prompt
    if (guess === null) {
        console.log("Game canceled.");
        break; // Exit if the user cancels
    }

    // Convert the guess to a number
    guess = Number(guess);

    // Validate the guess
    if (isNaN(guess) || guess < 1 || guess > 10) {
        console.log("Please enter a valid number between 1 and 10.");
        continue; // Skip to the next iteration of the loop
    }

    // Check the guess against the correct number
    if (guess > correctNumber) {
        console.log("Too high! Try again.");
    } else if (guess < correctNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! You guessed the number.");
        break; // Exit the loop on correct guess
    }
}
