// console.log("Hello , World") That's fine!

/*
    1. create a function to take input from the user.
    2. creare a funciton to generate a random number(Math.random()).
    3. create a playGame function
    4. create a playRound functin

*/

// computer choice
function getComputerChoice() {
    randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock"
    } else if ( randomNumber < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}
// human choice
function getHumanChoice() {
    let choice = prompt("Enter: rock, paper or scissors")
    return choice
}


/* 3. THE WHOLE GAME */
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log("Computer Chose: " + computerChoice);
            console.log("Human Chose: " + humanChoice)
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore = humanScore + 1;
        }
        else {
            console.log("Computer Chose: " + computerChoice);
            console.log("Human Chose: " + humanChoice);
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore = computerScore + 1;
        }
    }

    for (let round = 0; round < 5; round ++) {

        console.log("Round " + round);

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log("Score → Human:", humanScore, "Computer:", computerScore);
        console.log("----------------------");
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
