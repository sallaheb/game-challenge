//////////////////////////////////////////////////////////////////////////
let total = 0;

const moveApple = () => {
  stopFunction();
  if (total >= 9) {
    document
      .querySelector(`.game__region--${total - 9}`)
      .classList.remove("apple");
  }

  if (total > 89) {
    total = Math.round(Math.random() * 8);
  }
  document.querySelector(`.game__region--${total}`).classList.add("apple");
  if (total > 80 && total < 90) {
    isAppleandBasket();
  }
  total += 9;
 
};

const appleDrop = setInterval(moveApple, 80)
const gameStartTime = new Date().getTime()

const stopFunction = () => {
  if(new Date().getTime() - gameStartTime > 30000) {
    clearInterval(appleDrop);
  } 
}


//////////////////////////////////////////////////////////////////////////

let endtotal = 81;
let basketPosition = document
  .querySelector('.game__region--81')
  .classList.add("basket");

const move = (e) => {
if (endtotal < 89) { 
  if (e.keyCode == 39) {
    endtotal += 1;
    document
      .querySelector(`.game__region--${endtotal}`)
      .classList.add("basket");
    document
      .querySelector(`.game__region--${endtotal - 1}`)
      .classList.remove("basket");

  }};
  if (endtotal > 81) {
    if (e.keyCode == 37) {
      endtotal--;
      document
        .querySelector(`.game__region--${endtotal}`)
        .classList.add("basket");
      document
        .querySelector(`.game__region--${endtotal + 1}`)
        .classList.remove("basket");
      
  }};

};

document.addEventListener("keydown", move);

/////////////////////////////////////////////////////////////////////////////

let score = 0;
const isAppleandBasket = () => {
  let position = document.querySelector(".basket");
  if (position.classList.length >= 5) {
    score += 1;
  } 
 displayScore.innerHTML = `Score: ${score}`;
}

let displayScore = document.querySelector(".game__region--8");

///////////////////////////////////////////////////////////////////////////////////