var myValues = {'R' : 1000, 'P' : 1000, 'S' : 1000, 'D' : 100, 'W' : 1000};
var moves = ['R', 'P', 'S', 'D', 'W']

class Bot {
    makeMove(gamestate) {
        var move = randMove();
        if (move == 'D') {
          myValues['D']--
        }
        return move;
      }
}

function randMove() {
  let move = moves[Math.floor(Math.random() * moves.length)];
  return checkAvailability(move);
}

function checkAvailability(move) {
  if (myValues[move] > 0) {
    return move
  } else {
    var move = randMove();
    return move;
  }
}
module.exports = new Bot();
