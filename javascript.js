function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerSelect = Math.floor(Math.random() * choices.length);

  return choices[computerSelect];
}

function playRound(playerSelection, computerSelection) {
  let win = `You Win! (You) ${playerSelection} beats (Computer) ${computerSelection}`;
  let lose = `You Lose! (Computer) ${computerSelection} beats (You) ${playerSelection}`;

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
      console.log("Something went wrong");
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

    if (playerSelection === computerSelection) {
      console.log("Tie, play again");
    } else {
      playRound(playerSelection, computerSelection);
      console.log(`You: ${playerScore} Computer: ${computerScore}`);
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
