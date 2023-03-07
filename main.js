var gameGrid = document.querySelector('#gameContainer');
var gridSpaces = document.querySelectorAll('.spaces');
var gameBanner = document.querySelector('#gameBanner')
var playerBanners = document.querySelectorAll('.player-banners');
var animationSnow = document.querySelector('#snowflakes');
var animationFire = document.querySelector('#flames');

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
      // console.log(`DOM: Grid space clicked: ${index}`)
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
  } else if (gameOutcome === "❄️") {
    gameBanner.innerText = `${gameOutcome} won!`;
    show(animationSnow)
    updatePlayerBanners();
    restartGame();
  } else if (gameOutcome === "🔥") {
    gameBanner.innerText = `${gameOutcome} won!`;
    show(animationFire);
    updatePlayerBanners();
    restartGame();
  };
    // } else {
  //   gameBanner.innerText = `${gameOutcome} won!`;
  //   animationSnow.classList.remove('hidden')
  //   updatePlayerBanners();
  //   restartGame();
  // };
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

  hide(animationFire);
  hide(animationSnow);
  updateGameBanner();
};

function enableCursor(someElement) {
  someElement.classList.remove('disabled');
};

function disableCursor(someElement) {
  someElement.classList.add('disabled');
};

function show(animation) {
  animation.classList.remove('hidden')
};

function hide(animation) {
  animation.classList.add('hidden')
};

function restartGame() {
  newGame.isActive = false;

  for (var i = 0; i < gridSpaces.length; i++) {
    disableCursor(gridSpaces[i])
  };

  setTimeout(clearGameGrid, 4000);
  setTimeout(() => { newGame.refreshDataModel() }, 4000);
};