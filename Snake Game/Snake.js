let playBoard = document.querySelector(".wrapper .play-board ");

let foodX = 10,
  foodY = 7;
let snakeX = 5,
  snakeY = 10;
let moveX = 0,
  moveY = 0;
let createGame = () => {
  //Moving Snake
  snakeX += moveX;
  snakeY += moveY;

  //Creating food for Snake
  let li = `<div class="food" style="grid-area: ${foodY} / ${foodX} "></div>`;
  //Creating Snake
  li += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX} "></div>`;
  //Insert the food div in playBoard div
  playBoard.innerHTML = li;
};

//Changing Food Position
let changeFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

//Change Snakes Direction
let changeDirection = (e) => {
  if (e.classList.contains("ArrowLeft")) {
    moveX = -1;
    moveY = 0;
  } else if (e.classList.contains("ArrowUp")) {
    moveX = 0;
    moveY = -1;
  } else if (e.classList.contains("ArrowRight")) {
    moveX = 1;
    moveY = 0;
  } else if (e.classList.contains("ArrowDown")) {
    moveX = 0;
    moveY = 1;
  }
};

changeFoodPosition();
setInterval(createGame, 125);
createGame();
