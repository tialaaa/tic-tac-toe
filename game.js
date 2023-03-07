class Game {
  constructor() {
    this.gridSpaces = [ , , , , , , , , ,]
    this.currentTurn = ''
    this.startingTurn = ''
    this.players = []
    this.isActive = false
  };

  refreshDataModel() {
    if (!this.players.length) {
      var player1 = new Player(1, '🔥');
      var player2 = new Player(2, '❄️');
      this.players.push(player1);
      this.players.push(player2);
    };

    if (!this.startingTurn || this.startingTurn.id === this.players[1].id) {
      this.startingTurn = this.players[0];
    } else if (this.startingTurn.id === this.players[0].id) {
      this.startingTurn = this.players[1];
    };
    
    this.gridSpaces = [ , , , , , , , , ,];
    this.currentTurn = this.startingTurn;
    this.isActive = true;
  };

  addToLocalStorage() {
    var localStorageScores = [];
    localStorageScores[0] = this.players[0].wins
    localStorageScores[1] = this.players[1].wins

    window.localStorage.setItem('playerScores', JSON.stringify(localStorageScores));
    console.log(`Stored locally as array:`);
    console.log(localStorageScores)
  };

  retrieveFromLocalStorage() {
    var localStorageScores = JSON.parse(window.localStorage.getItem('playerScores'));
    
    if(!localStorageScores) {
      localStorageScores = [0,0];
    };

    console.log(`Retrieved locally:`)
    console.log(localStorageScores)
    console.log(`NewGame before updating players.win:`)
    console.log(JSON.parse(JSON.stringify(newGame)));
  
    for (var i = 0; i < localStorageScores.length; i++) {
      this.players[i].wins = !localStorageScores[i] ? 0 : localStorageScores[i];
    };
  
    console.log(`NewGame after updating players.win:`)
    console.log(this)
  };

  chooseGridSpace(indexChosen) {
    if (!this.gridSpaces[indexChosen]) {
      this.gridSpaces.splice(indexChosen, 1, this.currentTurn.id);
      return true;
    } else {
      return false;
    };
  };

  switchPlayer() {
    if (this.currentTurn === this.players[0]) {
      this.currentTurn = this.players[1];
    } else {
      this.currentTurn = this.players[0];
    };
  };

  checkWinConditions() {
    var winnerToken;

    if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[1] && this.gridSpaces[0] === this.gridSpaces[2]) {
      this.players[this.gridSpaces[0]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[0]-1].token;
    } else if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[3] && this.gridSpaces[0] === this.gridSpaces[6]) {
      this.players[this.gridSpaces[0]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[0]-1].token;
    } else if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[4] && this.gridSpaces[0] === this.gridSpaces[8]) {
      this.players[this.gridSpaces[0]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[0]-1].token;
    } else if (this.gridSpaces[1] && this.gridSpaces[1] === this.gridSpaces[4] && this.gridSpaces[1] === this.gridSpaces[7]) {
      this.players[this.gridSpaces[1]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[1]-1].token;
    } else if (this.gridSpaces[2] && this.gridSpaces[2] === this.gridSpaces[5] && this.gridSpaces[2] === this.gridSpaces[8]) {
      this.players[this.gridSpaces[2]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[2]-1].token;
    } else if (this.gridSpaces[2] && this.gridSpaces[2] === this.gridSpaces[4] && this.gridSpaces[2] === this.gridSpaces[6]) {
      this.players[this.gridSpaces[2]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[2]-1].token;
    } else if (this.gridSpaces[3] && this.gridSpaces[3] === this.gridSpaces[4] && this.gridSpaces[3] === this.gridSpaces[5]) {
      this.players[this.gridSpaces[3]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[3]-1].token;
    } else if (this.gridSpaces[6] && this.gridSpaces[6] === this.gridSpaces[7] && this.gridSpaces[6] === this.gridSpaces[8]) {
      this.players[this.gridSpaces[6]-1].increaseWins();
      winnerToken = this.players[this.gridSpaces[6]-1].token;
    } else if (this.gridSpaces[0] && this.gridSpaces[1] && this.gridSpaces[2] && this.gridSpaces[3] && this.gridSpaces[4] && this.gridSpaces[5] && this.gridSpaces[6] && this.gridSpaces[7] && this.gridSpaces[8]) {
      winnerToken = 'draw';
    };

    this.switchPlayer();
    return winnerToken;
  };
};