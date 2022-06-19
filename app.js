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
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    return "That's a tie!";    
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper ";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat Paper ";
  } else {
    return "Something went wrong";
  }
}


const playerSelection = prompt("Enter your handsign")
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
