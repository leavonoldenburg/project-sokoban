const canvasElement = document.querySelector('canvas');

const screenStartElement = document.getElementById('screen-start');
const screenPlayingElement = document.getElementById('screen-playing');
const screenGameOverElement = document.getElementById('screen-game-over');
const screenGameWonElement = document.getElementById('screen-game-won');

const screenElements = {
  start: screenStartElement,
  playing: screenPlayingElement,
  gameOver: screenGameOverElement,
  gameWon: screenGameWonElement
};

const game = new Game(canvasElement, screenElements);

const startButton = screenStartElement.querySelector('button');
const tryAgainButton = screenGameOverElement.querySelector('button');
const playAgainButton = screenGameWonElement.querySelector('button');

startButton.addEventListener('click', () => {
  game.start();
});

tryAgainButton.addEventListener('click', () => {
  game.start();
});

playAgainButton.addEventListener('click', () => {
  game.start();
});
