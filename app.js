function computerPlay() {
  let cpuChoice = Math.random() * 3;
  console.log(cpuChoice);
  if (cpuChoice <= 1) {
    return "Rock";
  } else if (cpuChoice <= 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(computerPlay())