var newGame = new Game();

newGame.startNewGame();

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