// add bem notation of bullet in the class and use this to put into other classes 9 down
// use the box display color to move
// make total total a random a number

let total = 0;

const moveSquarePosition0 = () => {


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



const appleDrop = () => {
  setInterval(moveSquarePosition0, 400);
  
}

clearInterval(appleDrop, 500)
appleDrop();




// stopGame

// setInterval(stopGame,100)

// basket to move in the horizontal direction
// 37 left arrow 39 right arrow

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

// scoring of game or counter//

// apples classlist apears in endregion 
// endregion has how many classlist

let score = 0;
const isAppleandBasket = () => {
  let position = document.querySelector(".basket");
  if (position.classList.length >= 5) {
    score += 1;
  } 
  console.log(score);
}

