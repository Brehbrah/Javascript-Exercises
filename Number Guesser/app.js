/* 
    * Game Function
    TODO: 1 - Player Must guess a number between a min and max
    TODO: 2 - Player gets a certain amount of guesses
    TODO: 3 - Notify Player of guesses remaining
    TODO: 4 - Notify the player of the correct answer if loose
    TODO: 5 - Let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event Listener
game.addEventListener("mousedown", e => {
  // ! We need to use a parent, since we are going to use delegation event
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if Won
  if (guess === winningNum) {
    // Game Over - Won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // * Wrong Number - will decrement each time. The guessLeft value is 3
    guessLeft -= 1; // ! Faster way to code this way
    if (guessLeft === 0) {
      // Game Over - Lost!

      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game Continues - answer wrong

      // Change borde Color
      guessInput.style.borderColor = "red";

      guessInput.value = "";

      // This will notify the user when they are not answering correct
      setMessage(
        `${guess} is not correct, you ${guessLeft} guesses left`,
        "red"
      );
    }
  }
});

const gameOver = (won, msg) => {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable Input
  guessInput.disabled = won;
  // Change borde Color
  guessInput.style.borderColor = color;

  // set Text Color
  message.style.color = color;

  // Set message
  setMessage(msg);

  // Play Again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again"; // * We want to append this
};

// Set Message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};

// Get winning number
function getRandomNum(min, max) {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random)
  return random;
}
