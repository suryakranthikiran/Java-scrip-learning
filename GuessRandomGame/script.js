// Guess Random Number Game using JS

let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
  let guessNum = parseInt(userInput.value);
  if (guessNum > randomNumber) {
    gameResult.textContent = "😢 please enter lower value than current value";
  } else if (guessNum < randomNumber) {
    gameResult.textContent = " 😢 please enter Higher value than current value";
  } else if (guessNum === randomNumber) {
    gameResult.textContent = "Congratulation 😍 you won the game ✌";
    gameResult.style.backgroundColor = "Green";
  }
}
