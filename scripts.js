/*
0 - rock
1 - paper
2 - scissors
*/

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

function playRound(playerChoice, computerChoice) {
  console.log("Your choice: ", playerChoice);
  console.log("Computer choice: ", computerChoice);
  if (playerChoice === computerChoice) {
    console.log("It's a tie");
    return 0;
  } else {
    switch (playerChoice) {
      case 0: //Rock
        if (computerChoice === 1) {
          console.log("You lose");
          return -1;
        } else if (computerChoice === 2) {
          console.log("You win");
          return 1;
        }
      case 1: //Paper
        if (computerChoice === 2) {
          console.log("You lose");
          return -1;
        } else if (computerChoice === 0) {
          console.log("You win");
          return 1;
        }
      case 2: //Scissors
        if (computerChoice === 0) {
          console.log("You lose");
          return -1;
        } else if (computerChoice === 1) {
          console.log("You win");
          return 1;
        }
    }
  }
}

function game() {
  let choice,
    winner = 0;
  for (let index = 0; index < 5; index++) {
    choice = prompt("Write rock, paper or scissors");
    winner += playRound(getPlayerChoice(choice), getComputerChoice());
  }

  if (winner === 0) {
    console.log("It's a tie");
  } else if (winner > 0) {
    console.log("Congrats, you won");
  } else {
    console.log("Buuu loser");
  }
}

game();
