function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerSelect = Math.floor(Math.random() * choices.length);

  return choices[computerSelect];
}

function playRound(playerSelection, computerSelection) {
  // rock > scissors
  // paper > rock
  //  scissors > paper

  // if player wins
  //    then player gets one point and round is counted
  // if computer wins
  //    then computer gets one point and round is counted
  // if five rounds are completed
  //    then total the points and select a winner
  if (playerSelection === computerSelection) {
    result = "Oops! play again";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore = playerScore + 1;
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore = playerScore + 1;
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore = playerScore + 1;
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore = computerScore + 1;
    result = `You Lost! ${computerSelection} beats ${playerSelection}`;
  }
}

let playerScore = 0;
let computerScore = 0;
let result;

function game() {
  // if playerSelect and computerSelect is same
  //    then try again and round is not counted
  // else
  //    count points and round
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection === computerSelection) {
      rounds = rounds + 1;
    } else {
      rounds = rounds;
    }

    playRound(playerSelection, computerSelection);
    console.log(result);
    console.log(`You: ${playerScore} Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("Player Won!");
  } else {
    console.log("Computer Won!");
  }
}

game();
