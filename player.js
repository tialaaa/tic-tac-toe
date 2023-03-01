class Player {
  constructor(id, token) {
    this.id = id
    this.token = token
    this.wins = 0
  };

  increaseWins() {
    // if game outcome assigns this player as winner
    this.wins += 1;
  };
};