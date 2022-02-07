/////////////////////////////////////////////////////////////////////////////////////////
const game = {
  total: 0,
  duration: (gameStartTime = new Date().getTime()),
  gameOverText1: document.querySelector(".game__region--30"),
  gameOverText2: document.querySelector(".game__region--31"),
  gameOverText3: document.querySelector(".game__region--39"),
  gameOverText4: document.querySelector(".game__region--40"),
  gameOverText5: document.querySelector(".game__region--57"),
  gameOverText6: document.querySelector(".game__region--66"),
  gameEndScore: document.querySelector(".game__region--49"),
};

const moveApple = () => {
  stopFunction();
  if (game.total >= 9) {
    document
      .querySelector(`.game__region--${game.total - 9}`)
      .classList.remove("apple");
  }

  if (game.total > 89) {
    game.total = Math.round(Math.random() * 8);
  }
  document.querySelector(`.game__region--${game.total}`).classList.add("apple");
  if (game.total > 80 && game.total < 90) {
    isAppleandBasket();
  }
  game.total += 9;
};

const appleDrop = setInterval(moveApple, 80);

const stopFunction = () => {
  if (new Date().getTime() - game.duration > 20000) {
    clearInterval(appleDrop);
    game.gameOverText1.innerHTML = "Game";
    game.gameOverText2.innerHTML = "Over";
    game.gameOverText3.innerHTML = "Your";
    game.gameOverText4.innerHTML = "Score";
    game.gameOverText5.innerHTML = "Replay!";
    game.gameOverText6.innerHTML = "Press(F5)";
    game.gameOverText1.style.background = "red";
    game.gameOverText2.style.background = "red";
    game.gameEndScore.innerHTML = gameScore.score;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////

const keyboardMove = {
  endtotal: 81,
  basketPosition: document
    .querySelector(".game__region--81")
    .classList.add("basket"),
};

const move = (e) => {
  if (keyboardMove.endtotal < 89) {
    if (e.keyCode == 39) {
      keyboardMove.endtotal += 1;
      document
        .querySelector(`.game__region--${keyboardMove.endtotal}`)
        .classList.add("basket");
      document
        .querySelector(`.game__region--${keyboardMove.endtotal - 1}`)
        .classList.remove("basket");
    }
  }
  if (keyboardMove.endtotal > 81) {
    if (e.keyCode == 37) {
      keyboardMove.endtotal--;
      document
        .querySelector(`.game__region--${keyboardMove.endtotal}`)
        .classList.add("basket");
      document
        .querySelector(`.game__region--${keyboardMove.endtotal + 1}`)
        .classList.remove("basket");
    }
  }
};

document.addEventListener("keydown", move);

/////////////////////////////////////////////////////////////////////////////////////////////

const gameScore = {
  score: 0,
  displayScore: document.querySelector(".game__region--8"),
};

game.score;
const isAppleandBasket = () => {
  let position = document.querySelector(".basket");
  if (position.classList.length >= 5) {
    gameScore.score += 1;
  }
  gameScore.displayScore.innerHTML = `Score ${gameScore.score}`;
};
/////////////////////////////////////////////////////////////////////////////////////////////
