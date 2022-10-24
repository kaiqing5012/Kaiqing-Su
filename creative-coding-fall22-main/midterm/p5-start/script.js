//how to build a snake game:https://www.section.io/engineering-education/how-to-build-a-snake-game-with-javascript/
let canvas;
// let ctx;

class snakePart{
constructor(x, y){
    this.x=x;
    this.y=y;
}
}

//snake size
let snakeSpeed=5;
let tileCount=20; 
let tileSize;
let headX=10;
let headY=10;

// array for snake parts
let snakeParts=[];
let tailLength=2;

//initialize the speed of snake
let VelocityX=0;
let VelocityY=0;

//draw musicnote
let musicX=5;
let musicY=5;

//scores
let score=0;

function setup(){
  //canvas=document.getElementById('game');//how to build a snake game
  canvas = createCanvas(400,400);
  fill(0)
  //ctx=canvas.getContext('2d');//how to build a snake game
  tileSize=canvas.width/tileCount-2;
  frameRate(7);
}
 

// create game loop-to continously update screen
function drawGame(){
    changeSnakePosition();
    
    //game over logic
    let result=isGameOver();
    if(result){// if result is true
        return;
    }
    clearScreen();
    drawSnake();
    drawMusicNote();
  
    checkCollision()
    drawScore();
    setTimeout(drawGame, 1000/frameRate);//update screen 7 times a second
}
//Game Over function
function isGameOver(){
    let gameOver=false; 
    //check whether game has started
    if(VelocityY===0 && VelocityX===0){
        return false;
    }
    if(headX<0){//if snake hits left wall
        gameOver=true;
    }
    else if(headX===tileCount){//if snake hits right wall
        gameOver=true;
    }
    else if(headY<0){//if snake hits wall at the top
        gameOver=true;
    }
    else if(headY===tileCount){//if snake hits wall at the bottom
        gameOver=true;
    }

//     //stop game when snake crush to its own body

     for(let i=0; i<snakeParts.length;i++){
         let part=snakeParts[i];
         if(part.x===headX && part.y===headY){//check whether any part of snake is occupying the same space
             gameOver=true;
             break; // to break out of for loop
         }
     }
    

//     //display text Game Over
    if(gameOver){
     fill("white");
     textSize(50)
     textFont("verdana");
     text("Game Over! ", canvas.width/6.5, canvas.height/2);//position our text in center
    }

    return gameOver;// this will stop execution of drawgame method
}

// //score function
function drawScore(){
fill("white")// set our text color to white
textSize(10)
textFont("verdena")//set font size to 10px of font family verdena
text("Score: " +score, canvas.width-50,10);// position our score at right hand corner 

}

// clear our screen
function clearScreen(){
  fill("black")// make screen black
  rect(0,0,canvas.width,canvas.height)// black color start from 0px left, right to canvas width and canvas height
}
 
function drawSnake(){
    
    fill("green");
    
    for(let i=0;i<snakeParts.length;i++){
        //draw snake parts
        let part=snakeParts[i]
         rect(part.x *tileCount, part.y *tileCount, tileSize,tileSize)
    }
    //push new part to snake
    snakeParts.push(new snakePart(headX,headY));
    if(snakeParts.length>tailLength){
        snakeParts.shift();//remove furthest item from snake part if we have more than our tail size
    }
    fill("orange");
    rect(headX* tileCount,headY* tileCount, tileSize,tileSize)
 }

function changeSnakePosition(){
     headX=headX + VelocityX;
     headY=headY+ VelocityY;
 }

function drawMusicNote(){//need to add a music note icon!!!
     fill("red");
     rect(musicX*tileCount, musicY*tileCount, tileSize, tileSize)
 }

 // check for collision and change apple position
function checkCollision(){
     if(musicX==headX && musicY==headY){
         musicX=Math.floor(Math.random()*tileCount);
         musicY=Math.floor(Math.random()*tileCount);//put musicnote in random position
         tailLength++;//increas snake length
         score++; //increase score value
     }
 }

 //add event listener to our body
 //document.body.addEventListener('keyPressed', keyPressed);//how to make a snake game

function keyPressed(){
//up
    if(keyCode===UP_ARROW){
        //prevent snake from moving in opposite direcction
        if(VelocityY==1)
        return;
        VelocityY=-1;
        VelocityX=0;
    }
//down
    if(keyCode===DOWN_ARROW){
        if(VelocityY==-1)
        return;
        VelocityY=1;
        VelocityX=0;
    }
//left
    if(keyCode===LEFT_ARROW){
        if(VelocityX==1)
        return;
        VelocityY=0;
        VelocityX=-1;
    }
//right
    if(keyCode===RIGHT_ARROW){
        if(VelocityX==-1)
        return;
        VelocityY=0;
        VelocityX=1;
    }
}


function draw(){
    drawGame(); 
}
