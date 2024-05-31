const input = document.querySelector(".input");
const btn = document.querySelector('button');
const output = document.querySelector('.output');
const number = [Math.floor(Math.random()*100)+1];
const attempts = document.querySelector('.attnum');
const answer = document.querySelector('.answer');
let guessCount = 1;
let resetButton;

const guesses = document.querySelector('.guesses');



function checkGuess() {
  const userGuess = Number(input.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';
   attempts.textContent = 3-guessCount;
  if (userGuess === number) {
    output.textContent = `You guessed right!The number was ${number}`;
    
    setGameOver();
  } else if (guessCount === 3) {
    output.textContent = '!!!GAME OVER!!!';
    answer.textContent = `The number was ${number}`;
    
    
    setGameOver();
  } else {
    
    if(userGuess < number) {
      output.textContent = 'Oops! You guessed too low. Try Again' ;
    } else if(userGuess > number) {
      output.textContent = 'Oops! You guessed too high. Try';
    }
  }

  guessCount++;
  input.value = '';
  input.focus();
}

btn.addEventListener('click', checkGuess);

function setGameOver() {
  input.disabled = true;
  btn.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'New game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;


  resetButton.parentNode.removeChild(resetButton);
  input.disabled = false;
  btn.disabled = false;
  output.textContent = 'Enter a number below';
  input.value = '';
  guesses.textContent = 'Previous guesses: ';
  input.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}



