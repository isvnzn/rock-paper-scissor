function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let computerSelect = Math.floor(Math.random() * choices.length);

  return choices[computerSelect].toLowerCase();
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
    console.log("You win");
  }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));
