let playerSelection;
let computerSelection;
let playerScoreCtr = 0;
let computerScoreCtr = 0;

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const result = document.querySelector(".result");
const picks = document.querySelectorAll(".rps");
const reset = document.querySelector(".reset");

playerScore.textContent = playerScoreCtr;
computerScore.textContent = computerScoreCtr;

picks.forEach((btn) => {
  btn.addEventListener("click", (e) => playGame(e));
});

reset.addEventListener("click", resetGame);

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
        ? ((result.textContent = win), playerScoreCtr++)
        : ((result.textContent = lose), computerScoreCtr++);
      break;
    case "paper":
      computerSelection === "rock"
        ? ((result.textContent = win), playerScoreCtr++)
        : ((result.textContent = lose), computerScoreCtr++);
      break;
    case "scissors":
      computerSelection === "paper"
        ? ((result.textContent = win), playerScoreCtr++)
        : ((result.textContent = lose), computerScoreCtr++);
      break;
    default:
      break;
  }
}

function playGame(e) {
  playerSelection = e.target.value.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();

  switch (playerSelection) {
    case computerSelection:
      result.textContent = "Tie, play again.";
      break;
    case "rock":
    case "paper":
    case "scissors":
      playRound(playerSelection, computerSelection);
      playerScore.textContent = playerScoreCtr;
      computerScore.textContent = computerScoreCtr;
      break;
    default:
      console.log("Something went wrong. Try again.");
      break;
  }

  if (playerScoreCtr === 5 || computerScoreCtr === 5) {
    picks.forEach((btn) => (btn.disabled = true));
  }

  getWinner();
}

function getWinner() {
  if (playerScoreCtr === 5) {
    result.textContent = "VICTORY";
  } else if (computerScoreCtr === 5) {
    result.textContent = "DEFEAT";
  }
}

function resetGame() {
  playerScoreCtr = 0;
  computerScoreCtr = 0;
  playerScore.textContent = playerScoreCtr;
  computerScore.textContent = computerScoreCtr;
  result.textContent = "";
  picks.forEach((btn) => (btn.disabled = false));
}
