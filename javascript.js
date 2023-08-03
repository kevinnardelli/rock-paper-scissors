function getComputerChoice() {
  let computerPlay = Math.random();
  if(computerPlay < 1 / 3) {
    return "Rock";
  } else if(computerPlay < 2 / 3) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getPlayerChoice() {
  let playerInput = prompt("Your turn! Choose Rock, Paper or Scissor");
  let playerPlay = playerInput.slice(0,1).toUpperCase() + 
  playerInput.slice(1).toLowerCase(); //This line is for capitalize the user's input
  return playerPlay;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  if(playerSelection === "Rock") {
    switch(computerSelection) {
      case "Rock":
        console.log("It's a tie!");
        return 0;
        break;
      case "Paper":
        console.log("You loose! Paper beats Rock");
        return -1;
        break;
      case "Scissor":
        console.log("You win! Rock beats Scissor");
        return 1;
        break;
    }
  } else if(playerSelection === "Paper") {
    switch(computerSelection) {
      case "Rock":
        console.log("You win! Paper beats Rock");
        return 1;
        break;
      case "Paper":
        console.log("It's a tie!");
        return 0;
        break;
      case "Scissor":
        console.log("You loose! Scissor beats Paper");
        return -1;
        break;
    }
  } else if(playerSelection === "Scissor") {
    switch(computerSelection) {
      case "Rock":
        console.log("You loose! Rock beats Paper");
        return -1;
        break;
      case "Paper":
        console.log("You win! Scissor beats Paper");
        return 1;
        break;
      case "Scissor":
        console.log("It's a tie!");
        return 0;
        break;
    }
  }
}

function game() {
  let roundResult;
  let globalScore = 0;
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++) {
    roundResult = playRound();
    globalScore += roundResult;
    if (roundResult > 0) {
      playerScore++;
      console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    } else if (roundResult < 0) {
      computerScore++;
      console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    } else {
      console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
    }
  }

  let finalScore = `Final Score -----> | Player: ${playerScore} | Computer: ${computerScore} |`;

  if(globalScore > 0) {
    return `Congratulations! You win the game! ${finalScore}`;
  } else if (globalScore < 0) {
    return `Sorry. You loose the game. ${finalScore}`;
  } else {
    return `Wow, it's a tie! ${finalScore}`;
  }
}