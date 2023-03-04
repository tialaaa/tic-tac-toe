var gameGrid = document.querySelector('#game-container');
var gameDisplay = document.querySelector('h1')
var player1Display = document.querySelector('#player1');
var player2Display = document.querySelector('#player2');
var gridSpaces = document.querySelectorAll('.game-spaces');

var newGame = new Game();

newGame.startNewGame();

gameGrid.addEventListener('click', function() {
  event.preventDefault();
  findIndex();
});

function findIndex() {
  console.log(gridSpaces)

  for (var i = 0; i < gridSpaces.length; i++) {
    if (gridSpaces[i].id === event.target.id && !gridSpaces[i].innerText) {
      // ^^ Add check here for if data model grid space is null??
      // TO FIX: After choosing occupied space, it inserts the bad icon & switches players
      // but this.gridSpaces data model isn't impacted (which is correct)
      console.log(`DOM: Grid space clicked: ${gridSpaces[i].id}`)
      console.log(gridSpaces[i].id.charAt(5))
      newGame.takeTurn(gridSpaces[i].id.charAt(5))

      gridSpaces[i].innerText = `${newGame.currentTurn.token}`;
      newGame.switchPlayer();
      return;
    }
  };
  // console.log(`TRY AGAIN`)
  newGame.checkWinConditions();
  // should updateGameDisplay go in here?
};

function clearGrid() {
  for (var i = 0; i < gridSpaces.length; i++) {
    gridSpaces[i].innerText = ``;
  };
};

function updateGameDisplay() {
  // TO DO: FINISH THIS FUNCTION. Possible displays:
  // It's X's turn -> on startNewGame or switchPlayer
  // X won! -> on updateForAWin
  // It's a draw! -> when checkWinConditions returns 'draw'

  gameGrid.innerText = ``
};

function updatePlayerDisplay() {
  player1Display.innerText = `${newGame.players[0].wins} wins`;
  player2Display.innerText = `${newGame.players[1].wins} wins`;
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