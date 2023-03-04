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
    console.log(`New game started`);
    console.log(JSON.parse(JSON.stringify(this)));
  };

  executeTurn(indexChosen) {
    if (!this.gridSpaces[indexChosen]) {
      this.gridSpaces.splice(indexChosen, 1, this.currentTurn.id);
      // console.log(`Data Model: Space ${indexChosen} taken by player ${this.currentTurn.id}`)
      return true;
    } else {
      // console.log(`Data Model: CHOOSE ANOTHER SPACE`)
      return false;
    };

    // console.log(JSON.parse(JSON.stringify(this)));
  };

  switchPlayer() {
    if (this.currentTurn === this.players[0]) {
      this.currentTurn = this.players[1];
      // console.log(`Change player from 1 to 2; if was met`)
    } else {
      this.currentTurn = this.players[0];
      // console.log(`Change player from 2 to 1; else was met`)
    };
  };

  checkWinConditions() {
    if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[1] && this.gridSpaces[0] === this.gridSpaces[2]) {
      // console.log(`WINNER if 1:`)
      this.players[this.gridSpaces[0]-1].increaseWins();
      // this.winner = this.currentTurn;
      // console.log(this.players[this.gridSpaces[0]-1])
      // console.log(JSON.parse(JSON.stringify(this)));
      return 'win';
    } else if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[3] && this.gridSpaces[0] === this.gridSpaces[6]) {
      // console.log(`WINNER if 2:`)
      this.players[this.gridSpaces[0]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[0]-1])
      return 'win';
    } else if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[4] && this.gridSpaces[0] === this.gridSpaces[8]) {
      // console.log(`WINNER if 3:`)
      this.players[this.gridSpaces[0]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[0]-1])
      return 'win';
    } else if (this.gridSpaces[1] && this.gridSpaces[1] === this.gridSpaces[4] && this.gridSpaces[1] === this.gridSpaces[7]) {
      // console.log(`WINNER if 4:`)
      this.players[this.gridSpaces[1]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[1]-1])
      return 'win';
    } else if (this.gridSpaces[2] && this.gridSpaces[2] === this.gridSpaces[5] && this.gridSpaces[2] === this.gridSpaces[8]) {
      // console.log(`WINNER if 5:`)
      this.players[this.gridSpaces[2]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[2]-1])
      return 'win';
    } else if (this.gridSpaces[2] && this.gridSpaces[2] === this.gridSpaces[4] && this.gridSpaces[2] === this.gridSpaces[6]) {
      // console.log(`WINNER if 6:`)
      this.players[this.gridSpaces[2]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[2]-1])
      return 'win';
    } else if (this.gridSpaces[3] && this.gridSpaces[3] === this.gridSpaces[4] && this.gridSpaces[3] === this.gridSpaces[5]) {
      // console.log(`WINNER if 7:`)
      this.players[this.gridSpaces[3]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[3]-1])
      return 'win';
    } else if (this.gridSpaces[6] && this.gridSpaces[6] === this.gridSpaces[7] && this.gridSpaces[6] === this.gridSpaces[8]) {
      // console.log(`WINNER if 8:`)
      this.players[this.gridSpaces[6]-1].increaseWins();
      // console.log(this.players[this.gridSpaces[6]-1])
      return 'win';
    } else if (this.gridSpaces[0] && this.gridSpaces[1] && this.gridSpaces[2] && this.gridSpaces[3] && this.gridSpaces[4] && this.gridSpaces[5] && this.gridSpaces[6] && this.gridSpaces[7] && this.gridSpaces[8]) {
      // console.log(`DRAW! all spaces filled`)
      return 'draw';
    } else {
      // console.log(`not a win & spaces still empty, game continues`)
      return;
    };
  };
};