var newGame = new Game();

newGame.startNewGame();

// console.log(JSON.parse(JSON.stringify(newGame)));
newGame.takeTurn(2);
newGame.changeTurnPlayer();
newGame.checkWinConditions();

newGame.takeTurn(8);
newGame.changeTurnPlayer();
newGame.checkWinConditions();

newGame.takeTurn(1);
newGame.changeTurnPlayer();
newGame.checkWinConditions();

newGame.takeTurn(5);
newGame.changeTurnPlayer();
newGame.checkWinConditions();

newGame.takeTurn(0);
newGame.changeTurnPlayer();
newGame.checkWinConditions();