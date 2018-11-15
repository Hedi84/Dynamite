var myValues = {'R' : 1000, 'P' : 1000, 'S' : 1000, 'D' : 100, 'W' : 1000};
var moves = ['R', 'P', 'S', 'D', 'W']

class Bot {
    makeMove(gamestate) {
      if (gamestate.rounds.length < 3) {
        var move = randMove();
        if (move == 'D') {
          myValues['D']--
        }
        return move;
      } else {
        var move = findBestMove(gamestate.rounds);
        if (move == 'D') {
          myValues['D']--
        }
        return move;
      }
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

function findBestMove(rounds) {
  moves = []
  rounds.forEach(function(move){
    moves.push(move.p2);
  })
  return analyseMoves(moves);
}

function analyseMoves(array) {
  var counter = {'R' : 0, 'P' : 0, 'S' : 0, 'D' : 0, 'W' : 0};
  array.forEach(function(move){
    counter[move] += 1;
    // switch(move) {
    //   case 'R':
    //     counter['R'] += 1
    //     break
    //   case 'P':
    //     counter['P'] += 1
    //     break
    //   case 'S':
    //     counter['S'] += 1
    //     break
    //   case 'D':
    //     counter['D'] += 1
    //     break
    //   case 'W':
    //     counter['W'] += 1
    //     break
    // }
  })
  return highestNumber(counter);
}

function highestNumber(object) {
  var highestNumber;
  var move;
  if (object['R'] <= object['S']) {
    highestNumber = object['S'];
    move = 'S'
  } else {
    highestNumber = object['R'];
    move = 'R'
  }
  if (highestNumber < object['P']) {
    highestNumber = object['P'];
    move = 'P'
  }
  if (highestNumber < object['D']) {
    highestNumber = object['D'];
    move = 'D'
  }
  if (highestNumber < object['W']) {
    highestNumber = object['W']
    move = 'W'
  }
return pickWinningMove(move);
}

function pickWinningMove(move){
switch(move) {
  case 'R':
    return 'P'
    break
  case 'P':
    return 'S'
    break
  case 'S':
    return 'R'
    break
  case 'D':
    return 'W'
    break
  case 'W':
  return 'S';
    break
}
}


module.exports = new Bot();
