var gameGrid = document.querySelector('#gameContainer');
var gameBanner = document.querySelector('#gameBanner')
var gridSpaces = document.querySelectorAll('.spaces');
var playerBanners = document.querySelectorAll('.player-banners');
var animations = document.querySelectorAll('.animation');
var clearButton = document.querySelector('#clear')

// after a win, use window.localStorage.setItem(key, value) to store the current players' scores
  // alternative:  window.localStorage.setItem('user', JSON.stringify(person));

// event listener for page load, calls getItem to retrieve players' scores
// then parses to turn back into numbers ?
// then overwrites this.players[i].wins with those numbers
// and call updatePlayerBanners

// add a "clear history" button
// using button, add Event listener for 'click' => will force clear player history
// window.localStorage.clear();

var newGame = new Game();

newGame.refreshDataModel();
clearGameGrid();

window.addEventListener('load', function() {
  // window.localStorage.clear()
  retrievePlayerScores();
});

clearButton.addEventListener('click', function() {
  window.localStorage.clear()
  retrievePlayerScores();
  updatePlayerBanners();
  console.log(`Clear clicked`)
})

gameGrid.addEventListener('click', function() {
  event.preventDefault();
  if (newGame.isActive === true) {
    var index = findIndex();
    executeTurn(index);
  };
});

function storePlayerScores() {
  // var localStorageScores = [];

  // for (var i = 0; i < newGame.players.length; i++) {
  //   if (newGame.players[i].wins === 0) {
  //     localStorageScores.push(0);
  //   } else {
  //     localStorageScores.push(newGame.players[i].wins);
  //   };
  // };
  // window.localStorage.setItem('playerScores', JSON.stringify(localStorageScores));
  // console.log(localStorageScores)

  // window.localStorage.setItem('player1Score', newGame.players[0].wins);
  // window.localStorage.setItem('player2Score', newGame.players[1].wins);
  window.localStorage.setItem('player1Score', JSON.stringify(newGame.players[0].wins));
  window.localStorage.setItem('player2Score', JSON.stringify(newGame.players[1].wins));
}

function retrievePlayerScores() {
  var player1Score = JSON.parse(window.localStorage.getItem('player1Score'));
  var player2Score = JSON.parse(window.localStorage.getItem('player2Score'));
  console.log(`Local storage: ${player1Score}, ${player2Score}`)
  console.log(`NewGame before updating players.win:`)
  console.log(JSON.parse(JSON.stringify(newGame)));

  // newGame.players[0].wins = player1Score
  // newGame.players[1].wins = player2Score
  if (player1Score === null) {
    newGame.players[0].wins = 0;
  } else {
    newGame.players[0].wins = player1Score;
  }

  if (player2Score === null) {
    newGame.players[1].wins = 0;
  } else {
    newGame.players[1].wins = player2Score;
  }

  console.log(`NewGame after updating players.win:`)
  console.log(newGame)
  updatePlayerBanners();
  // var localStorageScores = JSON.parse(window.localStorage.getItem('playerScores'));
  // console.log(localStorageScores)
  // console.log(newGame.players)

  // for (var i = 0; i < localStorageScores.length; i++) {
  //   newGame.players[i].wins = localStorageScores[i];
  // };
}

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
    console.log(newGame)
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
    playAnimation(gameOutcome);
    storePlayerScores();
    restartGame();
  };
};

function playAnimation(winner) {
  for (var i = 0; i < animations.length; i++) {
    if (animations[i].id === winner) {
      show(animations[i]);
    };
  };
}

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

  for (var i = 0; i < animations.length; i++) {
    hide(animations[i]);
  };

  updateGameBanner();
};

function restartGame() {
  newGame.isActive = false;

  for (var i = 0; i < gridSpaces.length; i++) {
    disableCursor(gridSpaces[i])
  };

  setTimeout(clearGameGrid, 4000);
  setTimeout(() => { newGame.refreshDataModel() }, 4000);
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