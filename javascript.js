let computerSelection;

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  computerSelection = Math.floor(Math.random() * choices.length);

  console.log(choices[computerSelection]);
}

getComputerChoice();
