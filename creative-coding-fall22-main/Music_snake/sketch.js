// Music Snake
// create background with colorful images/routes for games
// create array Character — push a new character into the array every time eat food
// class Character — build the movement and the appearance of characters
// music adding
// keypressed function to change moving direction
// MAYBE change music style when keypressed
// the coding train: https://www.youtube.com/watch?v=OMoVcohRgZA
//https://www.section.io/engineering-education/how-to-build-a-snake-game-with-javascript/ <How to Build a Snake Game with JavaScript>by Kamau Wambui

//the problems haven't solved: musicnote image didn't work as the food vector
//losing sound effect won't stop so currently deleted

let snake;
let rez = 20; //canvas rescale to 20x20
let musicNote;
let w;
let h;
let food;
let bgm;
let lose;
let button;
let d;
let hit;

function preload() {
  //musicNote = loadImage("musicnote.png");
  lose = loadSound("Spooky.mp3");
  bgm = loadSound("LANY-13.mp3");
  hit = loadSound("wow.mp3");
}

function setup() {
  createCanvas(400, 400);
  bgm.loop();
  bgm.setVolume(0.4);
  restart(); //put all the setup into restart function
  button = createButton("restart");
  button.mousePressed(restart); //re-call the setup again
}

function restart() {
  snake = new snakePart();
  frameRate(5);
  w = floor(width / rez);//make sure the w and h is a integer
  h = floor(height / rez);
  drawNote();
}
function drawNote() {
  let x = floor(random(w - 2));//random position inside the canvas
  let y = floor(random(h - 2));
  //image(musicNote, x, y, 1.5, 1.5);
  //imageMode(CENTER);
  musicNote = createVector(x, y);
}

function keyPressed() {
  //up
  if (keyCode == UP_ARROW) {
    snake.setDirection(0, -1);
  }
  //down
  if (keyCode == DOWN_ARROW) {
    snake.setDirection(0, 1);
  }
  //left
  if (keyCode == LEFT_ARROW) {
    snake.setDirection(-1, 0);
  }
  //right
  if (keyCode == RIGHT_ARROW) {
    snake.setDirection(1, 0);
  }
}

function draw() {
  scale(rez); //the coding train: to resize the snake size
  background(191, 172, 194);
  if (snake.eat(musicNote)) {
    drawNote();
  }
  snake.position();
  snake.draw();
  if (snake.GameOver() == true) {
    background(255, 0, 0);
    stroke("white");
    fill("white");
    rectMode(CENTER);
    textAlign(CENTER);
    textSize(3);
    text("Game Over!", 10, 8);
    textSize(1);
    text("click button to restart", 10, 13);
    //lose.play();
    return false;
  }
  
  //draw the first food
  fill(255,0,0)
  stroke(random(255),random(255),random(255));
  rectMode(CENTER)
  rect(musicNote.x,musicNote.y,1,1)
  //drawNote();
  //image(musicNote,x,y,1,1);
}
