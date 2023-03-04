var gameGrid = document.querySelector('#game-container');
var gameBanner = document.querySelector('#game-banner')
var playerBanners = document.querySelectorAll('.player-banners');
var gridSpaces = document.querySelectorAll('.game-spaces');

var newGame = new Game();

newGame.refreshDataModel();
clearGrid();

gameGrid.addEventListener('click', function() {
  event.preventDefault();
  if (newGame.isActive === true) {
    var index = findIndex();
    updateGameAfterTurn(index);
  };
});

function findIndex() {
  for (var i = 0; i < gridSpaces.length; i++) {
    if (gridSpaces[i].id === event.target.id) {
      var index = gridSpaces[i].id.charAt(5);
      // console.log(`DOM: Grid space clicked: ${index}`)
      return index;
    };
  };
};

function updateGameAfterTurn(indexChosen) {
  if (newGame.executeTurn(indexChosen)) {
    gridSpaces[indexChosen].innerText = `${newGame.currentTurn.token}`;
    updateTurnOutcome();
  };
};

function updateTurnOutcome() {
  var gameOutcome = newGame.checkWinConditions();

  if (gameOutcome === 'win') {
    gameBanner.innerText = `${newGame.currentTurn.token} won!`;
    updatePlayerBanners();
    newGame.switchPlayer();
    restartGame();
  } else if (gameOutcome === 'draw') {
    gameBanner.innerText = `It's a draw!`;
    newGame.switchPlayer();
    restartGame();
  } else {
    newGame.switchPlayer();
    updateGameBanner();
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

function clearGrid() {
  for (var i = 0; i < gridSpaces.length; i++) {
    gridSpaces[i].innerText = ``;
  };

  updateGameBanner();
};

function restartGame() {
  newGame.isActive = false;

  setTimeout(clearGrid, 4000);
  setTimeout(() => { newGame.refreshDataModel() }, 4000);
};