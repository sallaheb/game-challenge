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
  total += 9;
};

setInterval(moveSquarePosition0, 400);

// basket to move in the horizontal direction

// const gameEndRegion = document.querySelectorAll(".game__end-region");

// 37 left arrow 39 right arrow

let endtotal = 81;
let basketPosition = document
  .querySelector('.game__region--81')
  .classList.add("basket");

const moveRight = (e) => {
if (endtotal < 89) { 
  if (e.keyCode == 39) {
    endtotal += 1;
    document
      .querySelector(`.game__region--${endtotal}`)
      .classList.add("basket");
    document
      .querySelector(`.game__region--${endtotal - 1}`)
      .classList.remove("basket");

    console.log(endtotal);
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
      
  }}
};

// const moveLeft = (e) => {
//   if (endtotal > 80 && endtotal < 90) {
//     if (e.keyCode == 37) {
//       document
//         .querySelector(`.game__region--${endtotal}`)
//         .classList.add("basket");
//       document
//         .querySelector(`.game__region--${endtotal + 1}`)
//         .classList.remove("basket");
//       endtotal--;
//       console.log(endtotal);
//     }
//   }
// };

document.addEventListener("keydown", moveRight);
// document.addEventListener("keydown", moveLeft);

//fallen Object//
//object; Game and Character; //

//*for fallen object*/

// design the objects : using squares intially

//generating the object falling randomly from the same horizontal plane// x direction
//randomise the position where object falls from in the x direction start position
// object to fall in y- direction in a straight line
// time interval between when objects falls
// the speed of falling object increases as the level of game increases
// when object is shot at it dissapear and a score is taken
// when object hits the ground: one life is lost out f 4; object also dissapears.
// when object hit character:one life is lost out f 4; object also dissapears.
// ground is reached at a set distance from the start postion.

// Need: A way to keep scores ; randomise and select objects; instruct object movement;

//*for target and shooting*/

// design the character : using squares intially

//needs a character that moves left to right by mouseevent or keyboard event
//needs to be located at the ground zone
//shooting icon needs to move upwards in a straight line with a fixed starting position based on where the character's current location

/* layout */

//html grid boxes for making objects move from boxes
//display screen has buttons for starting game
//display screen has buttons for restart game
//display screen has buttons of keyboard to move left and right
