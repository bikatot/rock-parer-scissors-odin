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

let result = ""

function playRound(playerSelection, computerSelection) {  
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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your handsign")
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    if (result.includes("win")) {
      playerScore += 1;
    } else if (result.includes("lose")) {
      computerScore += 1;
    } 
    console.log(playerScore);
    console.log(computerScore);
  } 
  if (playerScore > computerScore) {
    return "Congratulations! You have won the game"
  } else if (playerScore < computerScore) {
    return "You've lost the game"
  } else {
    return "The game has ended in a draw  "
  }
}

console.log(game());
