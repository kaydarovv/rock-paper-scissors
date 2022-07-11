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

console.log(computerPlay());
