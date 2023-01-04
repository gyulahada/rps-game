'use strict';

const min = 1;
const max = 10;
let playerPoints = 0;
let computerPoints = 0;
const section = document.getElementById('buttons');

const choices = section.addEventListener('click', function (event) {
  const x = Math.trunc(Math.random() * (max - min)) + min;

  //Player win
  if (event.target.id === 'rock' && x > 6) {
    console.log('Player WIN!!');
    playerPoints++;
    document.getElementById('pScore').textContent = playerPoints;
    if (playerPoints === 3) {
      document.getElementById('result').textContent = 'Player win the game!';
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  } else if (event.target.id === 'paper' && x <= 3) {
    console.log('Player WIN!!');
    playerPoints++;
    document.getElementById('pScore').textContent = playerPoints;
    if (playerPoints === 3) {
      document.getElementById('result').textContent = 'Player win the game!';
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  } else if (event.target.id === 'scissors' && x > 3 && x <= 6) {
    console.log('Player WIN!!');
    playerPoints++;
    document.getElementById('pScore').textContent = playerPoints;
    if (playerPoints === 3) {
      document.getElementById('result').textContent = 'Player win the game!';
      document.querySelector('body').style.backgroundColor = '#60b347';
    }
  }
  //Computer win
  if (event.target.id === 'rock' && x > 3 && x <= 6) {
    console.log('Computer WIN!!');
    computerPoints++;
    document.getElementById('cScore').textContent = computerPoints;
    if (computerPoints === 3) {
      document.getElementById('result').textContent = 'Computer win the game!';
      document.querySelector('body').style.backgroundColor = '#FF1E00';
    }
  } else if (event.target.id === 'paper' && x > 6) {
    console.log('Computer WIN!!');
    computerPoints++;
    document.getElementById('cScore').textContent = computerPoints;
    if (computerPoints === 3) {
      document.getElementById('result').textContent = 'Computer win the game!';
      document.querySelector('body').style.backgroundColor = '#FF1E00';
    }
  } else if (event.target.id === 'scissors' && x <= 3) {
    console.log('Computer WIN!!');
    computerPoints++;
    document.getElementById('cScore').textContent = computerPoints;
    if (computerPoints === 3) {
      document.getElementById('result').textContent = 'Computer win the game!';
      document.querySelector('body').style.backgroundColor = '#FF1E00';
    }
  }
  //Draw
  if (event.target.id === 'rock' && x <= 3) {
    console.log('DRAW!!');
  } else if (event.target.id === 'paper' && x > 3 && x <= 6) {
    console.log('DRAW!!');
  } else if (event.target.id === 'scissors' && x > 6) {
    console.log('DRAW!!');
  }
});

document.getElementById('restart').addEventListener('click', function () {
  console.log('restart');
  document.getElementById('pScore').textContent = playerPoints;
  document.getElementById('cScore').textContent = computerPoints;
  playerPoints = 0;
  computerPoints = 0;
  document.getElementById('pScore').textContent = 0;
  document.getElementById('cScore').textContent = 0;
  document.getElementById('result').textContent = '';
  document.querySelector('body').style.backgroundColor = '#f0eabe';
});
