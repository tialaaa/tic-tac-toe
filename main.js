var gameGrid = document.querySelector('#game-container');
var gameBanner = document.querySelector('h1')
var player1Banner = document.querySelector('#player1');
var player2Banner = document.querySelector('#player2');
var gridSpaces = document.querySelectorAll('.game-spaces');

var newGame = new Game();

newGame.startNewGame();

gameGrid.addEventListener('click', function() {
  event.preventDefault();
  var index = findIndex();
  updateGame(index);
});

// findIndex: update var indexChosen w/ clicked grid index position (no validation yet). Return indexChosen.
// checkDataModel: validates indexChosen in data model. If space is available, splices & returns true. Else false.
// updateGame: If checkDataModel===true, updates the gridSpace innerText
    // If gradSpace is updated:
    // call updateOutcome & checkWinConditions & switchPlayer
// When are updateOutcome, updatePlayerDisplay, and clearGridDOM called?
    // updatePlayerDisplay => when checkWinConditions finds a win (or really any time)
    // updateOutcome => after every turn; innerText update depends on if conditions
    // clearGridDOM => after a win, when starting new game; needs the 4 sec timeout

function findIndex() {
  for (var i = 0; i < gridSpaces.length; i++) {
    if (gridSpaces[i].id === event.target.id) {
      var index = gridSpaces[i].id.charAt(5);
      console.log(`DOM: Grid space clicked: ${index}`)
      return index;
    };
  };
};

function updateGame(indexChosen) {
  if (newGame.checkDataModel(indexChosen)) {
    gridSpaces[indexChosen].innerText = `${newGame.currentTurn.token}`;
    updateOutcome();
  };
};

function clearGridDOM() {
  for (var i = 0; i < gridSpaces.length; i++) {
    gridSpaces[i].innerText = ``;
  };
};

function updateOutcome() {
  // ISSUE: need gameBanner (DOM) updated when startNewGame (data model) is called
  // in sync with the timeout
  var gameOutcome = newGame.checkWinConditions();

  if (gameOutcome === 'win') {
    gameBanner.innerText = `${newGame.currentTurn.token} won!`;
    updatePlayerDisplay();
    newGame.switchPlayer();
    newGame.refreshForNewGame();
  } else if (gameOutcome === 'draw') {
    gameBanner.innerText = `It's a draw!`;
    newGame.switchPlayer();
    newGame.refreshForNewGame();
  } else {
    // console.log(JSON.parse(JSON.stringify(newGame)));
    // console.log(`SWITCHED TURNS`)
    newGame.switchPlayer();
    gameBanner.innerText = `It's ${newGame.currentTurn.token}'s turn`;
  };
};

function updatePlayerDisplay() {
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


// ~~* CONSOLE TEST CASES BELOW FOR NOW *~~

// console.log(JSON.parse(JSON.stringify(newGame)));

// newGame.takeTurn(4);
// newGame.checkWinConditions();

// newGame.takeTurn(2);
// newGame.checkWinConditions();

// newGame.takeTurn(8);
// newGame.checkWinConditions();

// newGame.takeTurn(5);
// newGame.checkWinConditions();

// newGame.takeTurn(1);
// newGame.checkWinConditions();

// newGame.takeTurn(7);
// newGame.checkWinConditions();

// newGame.takeTurn(6);
// newGame.checkWinConditions();

// newGame.takeTurn(0);
// newGame.checkWinConditions();

// newGame.takeTurn(3);
// newGame.checkWinConditions();

// ^^^ ENDS IN A DRAW

// newGame.takeTurn(0);
// newGame.checkWinConditions();

// newGame.takeTurn(6);
// newGame.checkWinConditions();

// newGame.takeTurn(1);
// newGame.checkWinConditions();

// newGame.takeTurn(5);
// newGame.checkWinConditions();

// newGame.takeTurn(2);
// newGame.checkWinConditions();

// ^^^ STARTING PLAYER WINS

// newGame.takeTurn(5);
// newGame.checkWinConditions();

// newGame.takeTurn(2);
// newGame.checkWinConditions();