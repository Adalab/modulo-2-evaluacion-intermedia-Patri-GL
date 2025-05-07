'use strict';
const menu = document.querySelector('.js_menu');
const btn = document.querySelector('.js_btn');
const status = document.querySelector('.js_status');
const score = document.querySelector('.js_score');
let playerScore = 0;
let PCScore = 0;

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}

function getPCResult() {
  const randomNum = getRandomNumber(9);
  if (randomNum >= 1 && randomNum <= 3) {
    return 'Rock';
  } else if (randomNum >= 4 && randomNum <= 6) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function winner (playerChose, PCChose) {
  if (playerChose === PCChose) {
    return 'draw';
  }
 else if (
  (playerChose === 'Rock' && PCChose === 'Scissors') ||
  (playerChose === 'Scissors' && PCChose === 'Paper') ||
  (playerChose === 'Paper' && PCChose === 'Rock')
 ) {
  return 'player'
 }
else {return 'PC';
}
}
btn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const playerResult = menu.value; 
  const PCResult = getPCResult(); 
  
  console.log('Player chose:', playerResult);
  console.log('PC chose:', PCResult);
  
  const result = winner (playerResult, PCResult)
  console.log(result)

  if (result === 'player') {
    playerScore++;
    status.innerHTML = `You win! ${playerResult} beats ${PCResult}`;
  } else if (result === 'PC') {
    PCScore++;
  status.innerHTML = `You lose! ${playerResult} is beaten by ${PCResult}`;}
  else { status.innerHTML = `Draw! ${playerResult} equals ${PCResult}`;}

score.innerHTML = `Player: ${playerScore} | Computer: ${PCScore}`
});