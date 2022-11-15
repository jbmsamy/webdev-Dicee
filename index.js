var playerScores = [1,1];
function randomNumber1() {
  var random1 = Math.floor(Math.random() * 6) +1;
  return random1;
}

function rotateDice(diceNo) {
  var result ="";
  playerScores[diceNo-1] = randomNumber1();
  document.querySelectorAll("img")[diceNo-1].setAttribute("src","images/dice" + playerScores[diceNo-1] + ".png");
  if(diceNo === 2) {
    if(playerScores[0] > playerScores[1]) {
      result = "Player 1 Wins!";
    }else if(playerScores[0] < playerScores[1]) {
      result = "Player 2 Wins!";
    }else {
      result = "Draw!";
    }
  }else {
    result = " Please Wait!";
  }
  document.querySelector("h1").innerText = result;
//  document.getElementByClassName(('img' + diceNo)).setAttribute("src","images/dice" + randomNumber1() + ".png");
}
