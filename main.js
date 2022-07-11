// function computerPlay() lets computer randomly choose between Rock-Paper-Scissors

function computerPlay() {
  let randNum = Math.ceil(Math.random() * 3);
  if (randNum == 1) {
    return "Scissors";
  } else if (randNum == 2) {
    return "Rock";
  } else {
    return "Paper";
  }
}

// function PlayRound compares computer's and player's inputs and decides the winner

function playRound(playerChoice, computerChoice) {
  playerChoice.toLowerCase();
  computerChoice.toLowerCase();

  if (playerChoice == "rock" && computerChoice == "scissors") {
    return "You won! Rock beats Scissors";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "You won! Scissors beats Paper";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "You won! Paper beats Rock";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "You lost! Rock beats Scissors";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "You lost! Scissors beats Paper";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "You lost! Paper beats Rock";
  }
}

playerChoice = prompt("Rock-Paper-Scissors... Which one do you choose?");

computerChoice = computerPlay();

playRound(playerChoice, computerChoice);
