function computerPlay() {
  let cpuChoice = Math.random() * 3;
  console.log(cpuChoice);
  if (cpuChoice <= 1) {
    return  "rock";
  } else if (cpuChoice <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let result = ""
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    result = "That's a tie!";    
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "You lose! Scissors beat Paper ";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win! Scissors beat Paper ";
  } else {
    result = "Something went wrong";
  } return result;
}


const playerSelection = prompt("Enter your handsign")
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
