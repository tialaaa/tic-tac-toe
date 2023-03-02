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
    this.startingTurn = player1;
    this.currentTurn = player1;
    this.gridSpaces = [ , , , , , , , , ];
    console.log(`New game started`)
    console.log(JSON.parse(JSON.stringify(this)));
  };

  takeTurn(gridSpaceChosen) {
    // use event.target to identify the closest grid space clicked
    // gridSpaceChosen = that index #
    this.gridSpaces.splice(gridSpaceChosen, 1, this.currentTurn.id);
    console.log(`Space ${gridSpaceChosen} taken by player ${this.currentTurn.id}`)

    console.log(JSON.parse(JSON.stringify(this)));
  };

  changeTurnPlayer() {
    if (this.currentTurn === this.players[0]) {
      this.currentTurn = this.players[1]
      console.log(`first if`)
    } else {
      this.currentTurn = this.players[0]
      console.log(`else`)
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
    // if a win, start new game
      console.log(`Checking...`)

    if (this.gridSpaces[0] && this.gridSpaces[0] === this.gridSpaces[1] && this.gridSpaces[0] === this.gridSpaces[2]) {
      console.log(`WINNER`)
    } else {
      console.log(`not a win`)
      // add the remaining If statements
    }
  };
};