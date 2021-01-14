// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
const guessButton = document.getElementById('guess-button');
const userInput = document.getElementById('number-guessed');
const result = document.getElementById('Result');
const guessesLeft = document.getElementById('guesses-left');
// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let userGuesses = 4;
// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    const userNumber = Number(userInput.value);
    const answer = compareNumbers(userNumber, randomNumber);
    if (answer === 0) {
        result.textContent = 'you won';
        guessesLeft.textContent = `You have ${userGuesses} guesses left`;
    }
    if (answer === -1) {
        result.textContent = 'too low';
        userGuesses--;
        guessesLeft.textContent = `You have ${userGuesses} guesses left`;
    }
    if (answer === 1) {
        result.textContent = 'too high';
        userGuesses--;
        guessesLeft.textContent = `You have ${userGuesses} guesses left`;
    }
});