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

let result = "";
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelector("#buttonsContainer");
let currentRoundResult = document.querySelector("#roundResult");
let gameResult = document.querySelector("#gameResult");
let playerChoice = document.querySelector("#playerChoice");
let computerChoice = document.querySelector("#CPUChoice");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const playerScoreHTML = document.querySelector("#playerScore");
const computerScoreHTML = document.querySelector("#CPUScore");


rockButton.addEventListener("click", () => game("rock", computerPlay()));
paperButton.addEventListener("click", () => game("paper", computerPlay()));
scissorsButton.addEventListener("click", () => game("scissors", computerPlay()));


let game = function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();  
  currentRoundResult.textContent = "Round result: ";
  computerChoice.textContent = "Computer chooses: ";
  playerChoice.textContent = "You choose: ";
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
  }  currentRoundResult.textContent += result;
    if (result.includes("win")) {
    (playerScore += 1);
    } else if (result.includes("lose")) {
      computerScore += 1;
    };
  computerChoice.textContent += computerSelection;
  playerChoice.textContent += playerSelection;
  playerScoreHTML.textContent = playerScore;
  computerScoreHTML.textContent = computerScore;
  
  if (playerScore === 5) {
    gameResult.textContent = "You have won the game";
  } else if (computerScore === 5) {
    gameResult.textContent = "You have lost the game";
  };
  if (playerScore === 5 || computerScore === 5) {
    buttons.remove();
    let playAgain = document.createElement("button");
    playAgain.textContent = "Play again";
    gameResult.appendChild(playAgain);
    playAgain.addEventListener("click", refreshPage);
  }; 
    
};

const refreshPage = () => {
  location.reload();
};
