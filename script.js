const choices = ["rock", "paper", "scissors"];
// Human choices //
function getHumanChoice() {
  let choice = prompt("rock, paper or scissors?");
  if (choice.toLowerCase() === "rock") {
    return 0;
  } else if (choice.toLowerCase() === "paper") {
    return 1;
  } else if (choice.toLowerCase() === "scissors") {
    return 2;
  }
}
let humanChoice = choices[getHumanChoice()];

// PC choices //

let getComputerChoice = () => Math.floor(Math.random() * choices.length);
let computerChoice = choices[getComputerChoice()];

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "it's a draw!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "Computer wins! Computer score = " + computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return "You win! Your score = " + humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "You win! Your score = " + humanScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "Computer wins! Computer score = " + computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "Computer wins! Computer score = " + computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "You win! Your score  = " + humanScore;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let humanChoice = choices[getHumanChoice()];
    let computerChoice = choices[getComputerChoice()];

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(playRound(humanChoice, computerChoice));
    console.log("=====================================");
  }
  console.log("Final scores!");
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();
