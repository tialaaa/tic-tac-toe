var gameGrid = document.querySelector('#gameContainer');
var gameBanner = document.querySelector('#gameBanner')
var playerBanners = document.querySelectorAll('.player-banners');
var gridSpaces = document.querySelectorAll('.spaces');

var newGame = new Game();

newGame.refreshDataModel();
clearGameGrid();

gameGrid.addEventListener('click', function() {
  event.preventDefault();
  if (newGame.isActive === true) {
    var index = findIndex();
    executeTurn(index);
  };
});

function findIndex() {
  for (var i = 0; i < gridSpaces.length; i++) {
    if (gridSpaces[i].id === event.target.id) {
      var index = gridSpaces[i].id.charAt(5);
      return index;
    };
  };
};

function executeTurn(indexChosen) {
  if (newGame.chooseGridSpace(indexChosen)) {
    gridSpaces[indexChosen].innerText = `${newGame.currentTurn.token}`;
    disableCursor(gridSpaces[indexChosen]);
    revealTurnOutcome();
  };
};

function revealTurnOutcome() {
  var gameOutcome = newGame.checkWinConditions();

  if (!gameOutcome) {
    updateGameBanner();
  } else if (gameOutcome === 'draw') {
    gameBanner.innerText = `It's a draw!`;
    restartGame();
  } else {
    gameBanner.innerText = `${gameOutcome} won!`;
    updatePlayerBanners();
    restartGame();
  };
};

function updateGameBanner() {
  gameBanner.innerText = `It's ${newGame.currentTurn.token}'s turn`;
};

function updatePlayerBanners() {
  for (var i = 0; i < newGame.players.length; i++) {
    if (newGame.players[i].wins === 1) {
      playerBanners[i].innerText = `${newGame.players[i].wins} win`;
    } else {
      playerBanners[i].innerText = `${newGame.players[i].wins} wins`;
    };
  }
};

function clearGameGrid() {
  for (var i = 0; i < gridSpaces.length; i++) {
    gridSpaces[i].innerText = ``;
    enableCursor(gridSpaces[i]);
  };

  updateGameBanner();
};

function enableCursor(someElement) {
  someElement.classList.remove('disabled');
};

function disableCursor(someElement) {
  someElement.classList.add('disabled');
};

function restartGame() {
  newGame.isActive = false;

  for (var i = 0; i < gridSpaces.length; i++) {
    disableCursor(gridSpaces[i])
  };

  setTimeout(clearGameGrid, 4000);
  setTimeout(() => { newGame.refreshDataModel() }, 4000);
};