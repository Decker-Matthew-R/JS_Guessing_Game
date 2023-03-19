'use strict';

//Secret number 1-20 logic, score variable, and highscore variable.
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

//Function to display .message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Event listener to determine action on click of .check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Condition: When there is no input
  if (!guess) {
    displayMessage('⛔ Invalid Number!');
  }
  //Condition: When the player guesses the secret number
  else if (guess === secret_number) {
    displayMessage('🥳 You Win!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret_number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //Condition: When the guess is NOT the secret number
  else if (guess !== secret_number) {
    if (score > 1) {
      displayMessage(guess > secret_number ? '👇 Too High!' : '👆 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 Game Over!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});
//Implementing "Again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
