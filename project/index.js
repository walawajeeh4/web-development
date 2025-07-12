
const startButton = document.getElementById('startBtn');
const cardsSection = document.getElementById('cardsSection');

startButton.addEventListener('click', () => {
  cardsSection.classList.remove('hidden');
  cardsSection.scrollIntoView({ behavior: 'smooth' });
});