const buttons = document.querySelectorAll("button");
const result = document.querySelector(".resultat");
const score = document.querySelector(".score");
let playerScore = 0,
  computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

/*
0 - rock
1 - paper
2 - scissors
*/

function playRound(e) {
  let playerChoice = getPlayerChoice(e.target.id);
  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    result.innerHTML = "It's a tie";
  } else {
    switch (playerChoice) {
      case 0: //Rock
        if (computerChoice === 1) {
          result.innerHTML = "You lose, Paper beats Rock";
          computerScore++;
        } else if (computerChoice === 2) {
          result.innerHTML = "You win, Rock beats Scissors";
          playerScore++;
        }
        break;
      case 1: //Paper
        if (computerChoice === 2) {
          result.innerHTML = "You lose, Scissors beats Paper";
          computerScore++;
        } else if (computerChoice === 0) {
          result.innerHTML = "You win, Paper beats Rock";
          playerScore++;
        }
        break;
      case 2: //Scissors
        if (computerChoice === 0) {
          result.innerHTML = "You lose, Rock beats Scissors";
          computerScore++;
        } else if (computerChoice === 1) {
          result.innerHTML = "You win, Scissors beats Paper";
          playerScore++;
        }
        break;
    }
  }

  updateScore(playerScore, computerScore);
  getWinner(playerScore, computerScore);
}

function updateScore(plyScore, cptScore) {
  score.innerHTML = `Score 
  Player ${plyScore}   Computer ${cptScore}`;
}

function getWinner(plyScore, cptScore) {
  if (plyScore == 5) {
    result.innerHTML = "Winner is player";
    disableBtn();
  } else if (cptScore == 5) {
    result.innerHTML = "Winner is computer";
    disableBtn();
  }
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice(playerChoice) {
  switch (playerChoice.toLowerCase()) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      console.log("Invalid option");
  }
}

function disableBtn() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
