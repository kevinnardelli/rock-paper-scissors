const moves = ['Fire', 'Water', 'Plant'];
const playerButtons = document.querySelectorAll('#playerSpells button');
const restartButton = document.querySelector('#restartButton')
const computerSide = document.querySelector('#computerSide');
const roundResult = document.querySelector('#roundResult');
const winner = document.querySelector('#winner');
const playerHealthBar = [document.querySelector('#ph5'), 
document.querySelector('#ph4'), 
document.querySelector('#ph3'), 
document.querySelector('#ph2'), 
document.querySelector('#ph1')]
const computerHealthBar = [document.querySelector('#ch5'), 
document.querySelector('#ch4'), 
document.querySelector('#ch3'), 
document.querySelector('#ch2'), 
document.querySelector('#ch1')]

restartButton.addEventListener('click', () => {
  computerScore = 0;
  playerScore = 0;
  roundResult.textContent = 'Waiting for round result...';
  computerHealthBar.forEach ((health) => {
    health.classList.add('health')
  })
  playerHealthBar.forEach ((health) => {
    health.classList.add('health')
  })
  winner.textContent = '';
})

function getComputerChoice() {
  let computerPlay = Math.random();
  if(computerPlay < 1 / 3) {
    return moves[0];
  } else if(computerPlay < 2 / 3) {
    return moves[1];
  } else {
    return moves[2];
  }
}

let playerScore = 0;
let computerScore = 0;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection) {
  if(playerScore < 5 && computerScore < 5) {
    let computerSelection = getComputerChoice();
    if(playerSelection === 'Fire') {
      switch(computerSelection) {
        case 'Fire':
          roundResult.textContent = 
          'The spells collapse! No wizard takes damage.';
          break;
        case 'Water':
          roundResult.textContent = 'Val\'s Water Vortex hits Joard!';
          computerScore++;
          break;
        case 'Plant':
          roundResult.textContent = 'Joard\'s Fireball hits Val!';
          playerScore++;
          break;
      }
    } else if(playerSelection === 'Water') {
      switch(computerSelection) {
        case 'Fire':
          roundResult.textContent = 'Joard\'s Water Blade hits Val!';
          playerScore++;
          break;
        case 'Water':
          roundResult.textContent = 
          'The spells collapse! No wizard takes damage.';
          break;
        case 'Plant':
          roundResult.textContent = 'Val\'s Dance of Leafs hits Joard!';
          computerScore++;
          break;
      }
    } else if(playerSelection === 'Plant') {
      switch(computerSelection) {
        case 'Fire':
          roundResult.textContent = 'Val\'s Fire Arrow hits Joard!';
          computerScore++;
          break;
        case 'Water':
          roundResult.textContent = 'Joard\'s Nature\'s Fury hits Val!';
          playerScore++;
          break;
        case 'Plant':
          roundResult.textContent = 
          'The spells collapse! No wizard takes damage.';
          break;
      }
    }
  } else {
    playerButtons.forEach((button) => {
      button.removeEventListener('click', () => {
        playRound(moves[Number(button.id)]);
      })
    })
  }

  for (let i = 0; i < playerScore; i++) {
    computerHealthBar[i].classList.remove('health')
  }
  for (let i = 0; i < computerScore; i++) {
    playerHealthBar[i].classList.remove('health')
  }

  if(playerScore === 5) {
    winner.textContent = 'Congratulations! You win the game.'
  } else if (computerScore === 5) {
    winner.textContent = 'Sorry. You loose the game.'
  }
}

playerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(moves[Number(button.id)]);
  });
});

