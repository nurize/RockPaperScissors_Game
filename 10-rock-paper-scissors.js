let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses: 0,
  ties: 0
}; //shortcut for the commented code down there

/* 
The score was created outside of the function in order to save the score from last time we played the game. Otherwise the function would create a new score each time we play the game. 
*/

/*
if (!score 
// this was used as a shortcut for score === null 
){
score = {
  wins : 0,
  losses: 0,
  ties: 0
}
}
// This if-statement was added because without it, you'll get an error since 'score' does not exist in localStorage anymore
*/

function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove ='paper';
} else if (randomNumber >= 2/3 && randomNumber < 1){
  computerMove ='scissors';
}

return computerMove;
}

function playGame(playerMove) {
const computerMove = pickComputerMove();
/*Even though we have used the variableName 'computerMove' in the function, it does not affect this variable because of the scope. This one is a global variable while the one within the function is a local variable.*/

let result = '';

if (playerMove === 'scissors'){
if (computerMove === 'rock'){
  result = 'You Lose';
} else if (computerMove === 'paper'){
  result = 'You win';
} else if (computerMove === 'scissors'){  
  result = 'Tie';
}

} else if (playerMove === 'paper'){
if (computerMove === 'rock'){
  result = 'You win';
} else if (computerMove === 'paper'){
  result = 'Tie';
} else if (computerMove === 'scissors'){  
  result = 'You Lose';
}

} else if (playerMove === 'rock'){
if (computerMove === 'rock'){
  result = 'Tie';
} else if (computerMove === 'paper'){
  result = 'You lose';
} else if (computerMove === 'scissors'){  
  result = 'You win';
}
}

if (result === 'You win') {
score.wins += 1;
} else if (result === 'You lose') {
score.losses += 1;
} else if (result === "Tie") {
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move').innerHTML = `You 
<img class="move-icon" src="images/${playerMove}-emoji.png" alt="rock-emoji"> 
<img class="move-icon" src="images/${computerMove}-emoji.png" alt="scissors-emoji"> 
Computer`;

}

updateScoreElement();

function updateScoreElement() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}