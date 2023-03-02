class Game {
  constructor() {
    this.gridSpaces = [ , , , , , , , , ]
    this.currentTurn = ''
    this.startingTurn = ''
    this.players = []
  };

  startNewGame() {
    var player1 = new Player(1, '🔥');
    var player2 = new Player(2, '❄️');

    this.players.push(player1);
    this.players.push(player2);
    // adjust this.startingTurn with If statement for 1st game vs subsequest games
    // to assign correct startingTurn player
    this.startingTurn = player1;
    this.currentTurn = player1;
    this.gridSpaces = [ , , , , , , , , ];
    console.log(`New game started`)
    console.log(JSON.parse(JSON.stringify(this)));
  };

  takeTurn(gridSpaceChosen) {
    // use event.target to identify the closest grid space clicked
    // gridSpaceChosen = that index #
    // only if index is currently null
    this.gridSpaces.splice(gridSpaceChosen, 1, this.currentTurn.id);
    console.log(`Space ${gridSpaceChosen} taken by player ${this.currentTurn.id}`)

    console.log(JSON.parse(JSON.stringify(this)));
  };

  changeTurnPlayer() {
    if (this.currentTurn === this.players[0]) {
      this.currentTurn = this.players[1]
      console.log(`Change player, if was met`)
    } else {
      this.currentTurn = this.players[0]
      console.log(`Change player, else was met`)
    }
    // console.log(this)
  };

  checkWinConditions() {
    // using this.gridSpaces array
    // use 8 if statements (?) to check if same player exists
    // in all 3 of appropriate index positions
    // the 8 possible win conditions using indexes are:
      // 0 & 1 & 2
      // 0 & 3 & 6
      // 0 & 4 & 8
      // 1 & 4 & 7
      // 2 & 5 & 8
      // 2 & 4 & 6
      // 3 & 4 & 5
      // 6 & 7 & 8
    // If a win statement is met, end this game & display winner
    // And call startNewGame
      console.log(`Checking...`)

    if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[1] && this.gridSpaces[0] === this.gridSpaces[2]) {
      console.log(`WINNER if 1:`)
      this.players[this.gridSpaces[0]-1].increaseWins();
      console.log(this.players[this.gridSpaces[0]-1])
    } else if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[3] && this.gridSpaces[0] === this.gridSpaces[6]) {
      console.log(`WINNER if 2:`)
      this.players[this.gridSpaces[0]-1].increaseWins();
      console.log(this.players[this.gridSpaces[0]-1])
    } else if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[4] && this.gridSpaces[0] === this.gridSpaces[8]) {
      console.log(`WINNER if 3:`)
      this.players[this.gridSpaces[0]-1].increaseWins();
      console.log(this.players[this.gridSpaces[0]-1])
    } else if (this.gridSpaces[1] && this.gridSpaces[1] === this.gridSpaces[4] && this.gridSpaces[1] === this.gridSpaces[7]) {
      console.log(`WINNER if 4:`)
      this.players[this.gridSpaces[1]-1].increaseWins();
      console.log(this.players[this.gridSpaces[1]-1])
    } else if (this.gridSpaces[2] && this.gridSpaces[2] === this.gridSpaces[5] && this.gridSpaces[2] === this.gridSpaces[8]) {
      console.log(`WINNER if 5:`)
      this.players[this.gridSpaces[2]-1].increaseWins();
      console.log(this.players[this.gridSpaces[2]-1])
    } else if (this.gridSpaces[2] && this.gridSpaces[2] === this.gridSpaces[4] && this.gridSpaces[2] === this.gridSpaces[6]) {
      console.log(`WINNER if 6:`)
      this.players[this.gridSpaces[2]-1].increaseWins();
      console.log(this.players[this.gridSpaces[2]-1])
    } else if (this.gridSpaces[3] && this.gridSpaces[3] === this.gridSpaces[4] && this.gridSpaces[3] === this.gridSpaces[5]) {
      console.log(`WINNER if 7:`)
      this.players[this.gridSpaces[3]-1].increaseWins();
      console.log(this.players[this.gridSpaces[3]-1])
    } else if (this.gridSpaces[6] && this.gridSpaces[6] === this.gridSpaces[7] && this.gridSpaces[6] === this.gridSpaces[8]) {
      console.log(`WINNER if 8:`)
      this.players[this.gridSpaces[6]-1].increaseWins();
      console.log(this.players[this.gridSpaces[6]-1])
    } else if (this.gridSpaces[0] && this.gridSpaces[1] && this.gridSpaces[2] && this.gridSpaces[3] && this.gridSpaces[4] && this.gridSpaces[5] && this.gridSpaces[6] && this.gridSpaces[7] && this.gridSpaces[8]) {
      // 2nd to last Else If: check for all spaces filled but no win condition met => DRAW
      // no player adds a win point
      // call startNewGame
      console.log(`DRAW! all spaces filled`)
    } else {
      // Final Else: at least one space is still empty so game continues
      // no player adds a win point
      console.log(`not a win & spaces still empty, game continues`)
    }
  };
};