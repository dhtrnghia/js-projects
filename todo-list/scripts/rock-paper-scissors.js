//Here we access a Storage object by calling localStorage. We first test whether the local storage contains data items (keyName = score we saved when play game). If it does, grab the data items using Storage.getItem() and parse those values to JS object and assign them to variable score. If it doesn't, we set default value to score

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

//Render score when page load
renderScoreElem();

//We first test whether the Auto play button was clicked. If it was, setInterval to autoplay game. If it wasn't clearInterval
let isAutoplaying = false; //Variable to check button Autoplay was clicked or not (default = wasn't clicked)
let intervalId; //id is returned from setInterval()

function autoPlay () {
  const autoPlayButtonElem = document.querySelector('.js-auto-play-button');
  if (!isAutoplaying) { //if button wasn't clicked (autoplay wasn't runned)
    autoPlayButtonElem.innerHTML = 'Stop autoplay';
    autoPlayButtonElem.style.backgroundColor = '#ff000080';
    intervalId = setInterval (() => {
      const playerMove = getComputerMove(); //set player move auto
      playGame(playerMove);      
    }, 1000) //interval = 1s
    isAutoplaying = true; //status of button is clicked
  } else {  //id button was clicked (autoplay running)
    autoPlayButtonElem.innerHTML = 'Autoplay';
    autoPlayButtonElem.style.backgroundColor = 'white';
    clearInterval(intervalId); //stop function playgame()
    isAutoplaying = false; //button wasn't clicked
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
}); //passing a function into another function -> use narrow function (it's a value retuen from function)

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');

});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  resetScore();
});

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay();
});

//Check event keydown to play game
//Can use document.body.addEventListener, window.addEventListener
addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
})

//Get move of computer by Math.random 0<=r<1 [0 (inclusive) and 1 (exclusive)]
function getComputerMove() {
  const randomNumber = Math.random();
  let computerMove ='';

  if (randomNumber>=0 && randomNumber<1/3) {
    computerMove = 'rock';
  } else if (randomNumber>=1/3 && randomNumber<2/3) {
    computerMove = 'paper';
  } else if (randomNumber>=2/3 && randomNumber<1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

//Get result and score of the game
function playGame (playerMove) {
  const computerMove = getComputerMove();
  let result = '';

  //Get result by comparing playerMove and computerMove
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else if (computerMove === 'scissors') {
      result = 'You win!';
    }
  } else if (playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You win!';
    } else if (computerMove ==='paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  //Render results on the page
  document.querySelector('.js-result').innerHTML = result;

  //Render player and computer moves on the page
  document.querySelector('.js-moves').innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;

  //Get score by comparing result
  if (result === 'You win!') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  //Convert object score to JSON string by stringify method and then save score values in localStorage using keyName = score
  localStorage.setItem('score', JSON.stringify(score));

  //Render score on the page
  renderScoreElem();  
}

function renderScoreElem () {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  //Reset all score values
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  //Remove key score from localStorage
  localStorage.removeItem('score');

  //Render score after click reset button
  renderScoreElem();
}