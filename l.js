
const letterDisplay = document.getElementById('letter');
const input = document.getElementById('input');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');

let score = 0;


function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters[Math.floor(Math.random() * letters.length)];
}


function updateLetter() {
  const newLetter = getRandomLetter();
  letterDisplay.textContent = newLetter;
  input.value = '';
  message.textContent = '';
  input.focus();
}

input.addEventListener('input', () => {
  const typed = input.value.toUpperCase();
  const current = letterDisplay.textContent;

  if (typed === current) {
    message.textContent = '✓ Correct!';
    message.className = 'correct';
    score++;
    scoreDisplay.textContent = score;
    updateLetter();
  } else {
    message.textContent = 'Try again!';
    message.className = 'wrong';
  }
});


resetBtn.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  updateLetter();
});

updateLetter(); 
