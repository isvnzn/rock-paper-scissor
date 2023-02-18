function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerSelect = Math.floor(Math.random() * choices.length);

  return choices[computerSelect];
}

function playRound(playerSelection, computerSelection) {
  // rock > scissors
  // paper > rock
  //  scissors > paper
  // if playerSelect and computerSelect is same
  //    then try again and round is not counted
  // if player wins
  //    then player gets one point and round is counted
  // if computer wins
  //    then computer gets one point and round is counted
  // if five rounds are completed
  //    then total the points and select a winner

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore = playerScore + 1;
    return (result = "You Win! Rock beats Scissors");
  } else {
    return (result = "You lost");
  }
}

let playerScore = 0;
let computerScore = 0;
let result;

function game() {
  // track points and round
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(result);
  }
}

game();
