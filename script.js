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

function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  let roundWinner;
  if (computerChoice === "rock") {
    switch(humanChoice) {
      case "rock":
        console.log("Bot chose rock. Draw.");
        roundWinner = "draw";
        break;
      case "paper":
        console.log("Bot chose rock. You win!");
        roundWinner = "human";
        break;
      case "scissor":
        console.log("Bot chose rock. You lose..");
        roundWinner = "computer";
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
        break;
      case "paper":
        console.log("Bot chose paper. Draw.");
        roundWinner = "draw";
        break;
      case "scissor":
        console.log("Bot chose paper. You win!");
        roundWinner = "human";
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
        break;
      case "paper":
        console.log("Bot chose scissor. You lose..");
        roundWinner = "computer";
        break;
      case "scissor":
        console.log("Bot chose scissor. Draw.");
        roundWinner = "draw";
        break;
      case undefined:
        console.log("Please only choose between Rock/Paper/Scissor!")
        break;
    }
  }
}