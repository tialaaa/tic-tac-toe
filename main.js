var gameGrid = document.querySelector('#game-container');
var gameDisplay = document.querySelector('h1')
var player1Display = document.querySelector('#player1');
var player2Display = document.querySelector('#player2');
var newGame = new Game();

newGame.startNewGame();

gameGrid.addEventListener('click', function() {
  event.preventDefault();
  identifyGridSpace
});

function identifyGridSpace() {
  // var gridSpaceChosen = 
  // use event.targetClosest? to identify which id was clicked
  
  newGame.takeTurn(gridSpaceChosen);
  updateGameDisplay;
  updatePlayerDisplay;
  newGame.changeTurnPlayer();
  newGame.checkWinConditions();
};

function updateGameDisplay() {
  gameGrid.innerText()
  // 
};

function updatePlayerDisplay() {
  // when a player wins a game, use this.currentTurn
  // match to correct playerXDisplay and update
  // their display innerText to new this.players.wins count
  if (newGame.currentTurn.id === 1) {
    player1Display.innerText = ``;
    
  };
};

// ~~* CONSOLE TEST CASES BELOW FOR NOW *~~

// console.log(JSON.parse(JSON.stringify(newGame)));

newGame.takeTurn(4);
newGame.checkWinConditions();

newGame.takeTurn(2);
newGame.checkWinConditions();

newGame.takeTurn(8);
newGame.checkWinConditions();

newGame.takeTurn(5);
newGame.checkWinConditions();

newGame.takeTurn(1);
newGame.checkWinConditions();

newGame.takeTurn(7);
newGame.checkWinConditions();

newGame.takeTurn(6);
newGame.checkWinConditions();

newGame.takeTurn(0);
newGame.checkWinConditions();

newGame.takeTurn(3);
newGame.checkWinConditions();

// ^^^ ENDS IN A DRAW

newGame.takeTurn(0);
newGame.checkWinConditions();

newGame.takeTurn(6);
newGame.checkWinConditions();

newGame.takeTurn(1);
newGame.checkWinConditions();

newGame.takeTurn(5);
newGame.checkWinConditions();

newGame.takeTurn(2);
newGame.checkWinConditions();

// ^^^ STARTING PLAYER WINS

newGame.takeTurn(5);
newGame.checkWinConditions();

newGame.takeTurn(2);
newGame.checkWinConditions();