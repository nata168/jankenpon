
const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorButton = document.querySelector(".scissor-button");
const winnerDiv = document.querySelector("#winner-message");
const scoreDiv = document.querySelector("#score-message");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score"); 

rockButton.addEventListener("click", function() {
  playerSelection = "rock";
  playRound();
})

paperButton.addEventListener("click", function() {
  playerSelection = "paper";
  playRound();
})

scissorButton.addEventListener("click", function() {
  playerSelection = "scissor";
  playRound();
})