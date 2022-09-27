let ballX = 0;
let ballY = 0;
function setup() {
  createCanvas(800, 600)
}

function draw() {
  background(225)

  // let i = 0;
  // while (i < 10){
  //   ellipse(ballX + i ,ballY + i * 5,50,50);
  //   i ++
  // }
  
  for (let i = 0; i < 10; i ++){
    ellipse(ballX + i *5 ,ballY + i * 5,50,50);
  }

  //  if(keyIsDown(UP_ARROW)){
  //    ballY -= 5;
  //  }
  //  if(keyIsDown(DOWN_ARROW)){
  //    ballY += 5;
  //  }
  //  if(keyIsDown(LEFT_ARROW)){
  //    ballX -= 5;
  //  }
  //  if(keyIsDown(RIGHT_ARROW)){
  //    ballX += 5;
  //  }
  // ballX += 5;
  // if (ballX > width){
  //   ballX = 0;
  // }
  
}


// function keyTyped() {
//   if(key == "w"){
//     ballY -= 10;
//   }
//   if(key == "s"){
//     ballY += 10;
//   }
//   if(key == "a"){
//     ballX -= 10;
//   }
//   if(key == "d"){
//     ballX += 10;
//   }
// }