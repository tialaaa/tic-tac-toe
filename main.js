var gameGrid = document.querySelector('#game-container');
var gameBanner = document.querySelector('#game-banner')
var player1Banner = document.querySelector('#player1');
var player2Banner = document.querySelector('#player2');
// var playerBanners = document.querySelectorAll('.player-banners');
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
  if (newGame.players[0].wins === 1) {
    player1Banner.innerText = `${newGame.players[0].wins} win`
  } else {
    player1Banner.innerText = `${newGame.players[0].wins} wins`;
  };

  if (newGame.players[1].wins === 1) {
    player2Banner.innerText = `${newGame.players[1].wins} win`
  } else {
    player2Banner.innerText = `${newGame.players[1].wins} wins`;
  };
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