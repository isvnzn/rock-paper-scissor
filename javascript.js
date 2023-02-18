function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerSelect = Math.floor(Math.random() * choices.length);

  return choices[computerSelect];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result = "Oops! Tie, play again";
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
    console.log(
      `VICTORY. You scored ${playerScore} against computer in 5 rounds.`
    );
  } else {
    console.log(
      `DEFEAT. Computer scored ${computerScore} against you in 5 rounds.`
    );
  }
}

game();
