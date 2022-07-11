// function computerPlay() lets computer randomly choose between Rock-Paper-Scissors

function computerPlay() {
  let randNum = Math.ceil(Math.random() * 3);
  if (randNum == 1) {
    return "scissors";
  } else if (randNum == 2) {
    return "rock";
  } else {
    return "paper";
  }
}

// function playRound() compares computer's and player's inputs and decides the winner

function playRound(playerChoice, computerChoice) {
  playerChoice.toLowerCase();
  computerChoice.toLowerCase();
  const roundResult = [];

  if (playerChoice == "rock" && computerChoice == "scissors") {
    roundResult[0] = "You won! Rock beats Scissors";
    roundResult[1] = 2;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    roundResult[0] = "You won! Scissors beats Paper";
    roundResult[1] = 2;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    roundResult[0] = "You won! Paper beats Rock";
    roundResult[1] = 2;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    roundResult[0] = "You lost! Rock beats Scissors";
    roundResult[1] = 1;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    roundResult[0] = "You lost! Scissors beats Paper";
    roundResult[1] = 1;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    roundResult[0] = "You lost! Paper beats Rock";
    roundResult[1] = 1;
  } else {
    roundResult[0] = "It's draw, replay the round!";
    roundResult[1] = 0;
  }
  return roundResult;
}

// function game() allows to play the game 5 times with keeping a score

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundResult = [];
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(
      "Rock-Paper-Scissors... Which one do you choose?"
    );
    let computerChoice = computerPlay();

    roundResult = playRound(playerChoice, computerChoice);

    if (roundResult[1] == 2) {
      playerScore++;
    } else if (roundResult[1] == 1) {
      computerScore++;
    }

    console.log(
      `${roundResult} \n Player: ${playerScore} \n Computer: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log("Player won!");
  } else if (playerScore < computerScore) {
    console.log("Computer won!");
  } else {
    console.log("A draw!");
  }
}

game();
