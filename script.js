/* 
  Global state:
  These variables persist across button clicks and represent
  the current game state.
*/
let humanScore = 0;
let computerScore = 0;

/*
  Cache DOM references once.
  Avoid repeated DOM queries for performance and clarity.
*/
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const buttons = document.querySelectorAll("#buttons button");
const restartButton = document.getElementById("restart");

/*
  Generates a random choice for the computer.
  This function is pure and has no side effects.
*/
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) return "rock";
  if (randomNumber < 0.66) return "paper";
  return "scissors";
}

/*
  Executes a single round of the game.
  Called once per button click.
*/
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  // Determine round outcome
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `Tie! Both chose ${humanChoice}.`;
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultsDiv.textContent =
      `You win! ${humanChoice} beats ${computerChoice}.`;
  } 
  else {
    computerScore++;
    resultsDiv.textContent =
      `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update score display after each round
  scoreDiv.textContent =
    `Score → Human: ${humanScore} | Computer: ${computerScore}`;

  // Check for game-ending condition
  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

/*
  Ends the game by announcing a winner and disabling input.
*/
function endGame() {
  if (humanScore > computerScore) {
    resultsDiv.textContent = "You won the game!";
  } else {
    resultsDiv.textContent = "Computer won the game!";
  }

  // Prevent further input after game ends
  buttons.forEach(button => button.disabled = true);
}

/*
  Resets the game state so the user can play again.
*/
function restartGame() {
  humanScore = 0;
  computerScore = 0;

  resultsDiv.textContent = "";
  scoreDiv.textContent = "";

  buttons.forEach(button => button.disabled = false);
}

/*
  Event listeners:
  Each button click represents one round of play.
*/
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

/*
  Restart button listener.
*/
restartButton.addEventListener("click", restartGame);
