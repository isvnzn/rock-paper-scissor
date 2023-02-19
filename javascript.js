function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerSelect = Math.floor(Math.random() * choices.length);

  return choices[computerSelect];
}

function playRound(playerSelection, computerSelection) {
  let playerPick = `${playerSelection
    .at(0)
    .toUpperCase()}${playerSelection.substring(1)}`;
  let computerPick = `${computerSelection
    .at(0)
    .toUpperCase()}${computerSelection.substring(1)}`;

  let win = `You Win!\n${playerPick} beats ${computerPick}`;
  let lose = `You Lose!\n${computerPick} beats ${playerPick}`;

  switch (playerSelection) {
    case "rock":
      computerSelection === "scissors"
        ? (console.log(win), playerScore++)
        : (console.log(lose), computerScore++);
      break;
    case "paper":
      computerSelection === "rock"
        ? (console.log(win), playerScore++)
        : (console.log(lose), computerScore++);
      break;
    case "scissors":
      computerSelection === "paper"
        ? (console.log(win), playerScore++)
        : (console.log(lose), computerScore++);
      break;
    default:
      break;
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  let rounds = 100;

  for (let i = 1; i < rounds; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();

    switch (playerSelection) {
      case computerSelection:
        console.log("Tie, play again");
        break;
      case "rock":
      case "paper":
      case "scissors":
        playRound(playerSelection, computerSelection);
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
        break;
      default:
        console.log("Something went wrong");
        break;
    }

    if (playerScore === 5 || computerScore === 5) {
      break;
    }
  }

  if (playerScore > computerScore) {
    console.log("VICTORY");
  } else {
    console.log("DEFEAT");
  }
}

game();
