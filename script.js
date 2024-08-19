function getComputerChoice () {
  let index = Math.floor(Math.random()*100);
  let choice;
  if (index <= 33) {
    choice = "rock";
  }
  else if (index <= 66) {
    choice = "paper";
  }
  else if (index <= 99) {
    choice = "scissor";
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Rock/Paper/Scissor?");
  choice = choice.toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
    return undefined;
  }
  else {
    return choice;
  }
}

let playerSelection;
let humanScore = 0;
let computerScore = 0;
let matchPlayed = 0;

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = playerSelection;
  let roundWinner;
  if (computerChoice === "rock") {
    switch(humanChoice) {
      case "rock":
        console.log("Bot chose rock. Draw.");
        roundWinner = "draw";
        winnerDiv.textContent = "Bot chose rock. Draw.";
        break;
      case "paper":
        console.log("Bot chose rock. You win!");
        roundWinner = "human";
        winnerDiv.textContent = "Bot chose rock. You win!";
        humanScore += 1;
        break;
      case "scissor":
        console.log("Bot chose rock. You lose..");
        roundWinner = "computer";
        winnerDiv.textContent = "Bot chose rock. You lose..";
        computerScore += 1;
        break;
      case undefined:
        console.log("Please only choose between Rock/Paper/Scissor!")
        break;
    }
  }
  if (computerChoice === "paper") {
    switch(humanChoice) {
      case "rock":
        console.log("Bot chose paper. You lose..");
        roundWinner = "computer";
        winnerDiv.textContent = "Bot chose paper. You lose..";
        computerScore += 1;
        break;
      case "paper":
        console.log("Bot chose paper. Draw.");
        roundWinner = "draw";
        winnerDiv.textContent = "Bot chose paper. Draw.";
        break;
      case "scissor":
        console.log("Bot chose paper. You win!");
        roundWinner = "human";
        winnerDiv.textContent = "Bot chose paper. You win!";
        humanScore += 1;
        break;
      case undefined:
        console.log("Please only choose between Rock/Paper/Scissor!")
        break;
    }
  }
  if (computerChoice === "scissor") {
    switch(humanChoice) {
      case "rock":
        console.log("Bot chose scissor. You win!");
        roundWinner = "human";
        winnerDiv.textContent = "Bot chose scissor. You win!";
        humanScore += 1;
        break;
      case "paper":
        console.log("Bot chose scissor. You lose..");
        roundWinner = "computer";
        winnerDiv.textContent = "Bot chose scissor. You lose..";
        computerScore += 1;
        break;
      case "scissor":
        console.log("Bot chose scissor. Draw.");
        winnerDiv.textContent = "Bot chose scissor. Draw.";
        roundWinner = "draw";
        break;
      case undefined:
        console.log("Please only choose between Rock/Paper/Scissor!")
        break;
    }
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  matchPlayed += 1;

  if (matchPlayed === 5) {
    if (humanScore > computerScore) {
      console.log(`Human win! Final score: Human ${humanScore} Computer ${computerScore}`);
      winnerDiv.textContent = `Human win! Final score: Human ${humanScore} Computer ${computerScore}`;
    }
    else if (computerScore > humanScore) {
      console.log("`Computer win. Final score: Human ${humanScore} Computer ${computerScore}`");
      winnerDiv.textContent = `Computer win. Final score: Human ${humanScore} Computer ${computerScore}`;
    }
    else if (humanScore === computerScore) {
      console.log("`Draw. Final score: Human ${humanScore} Computer ${computerScore}`");
      winnerDiv.textContent = `Draw. Final score: Human ${humanScore} Computer ${computerScore}`;
    }
    humanScore = 0;
    computerScore = 0;
    matchPlayed = 0;
  }
}

