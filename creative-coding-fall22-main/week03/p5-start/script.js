// let ballx = 500
// let bally = 100
// let ball2x = 100
// let ball2y = 300

// let ball1 = {
//   x: 100,
//   y: 200,
//   name: "Jason",
//   age: 120,
//   happy: true
// }
// let ball2 = {
//   x: 200,
//   y: 100
// }
// let ball3 = {
//   x:300,
//   y:150
// }

// let myArray = [1,2,3,5,10]


let ballArray = []

function setup() {
  createCanvas(windowWidth,windowHeight)
  // console.log(let myArray[1])
  // for(let i=0; i< 5; i++){
  //   console.log(let myArray[i])
  // }
  for(let i = 0; i <20; i ++){
    // ballArray.push(
      // makeBall(
      //   random(width),
      //   random(height)
      // )
    // )
    ballArray.push(new Ball(random(width),random(height),color(random(255),random(255),random(255))))//number 2
  }
 
}

function draw() {
  background(100)
  for(let i = 0; i < ballArray.length; i ++){
    ballArray[i].display()// number 2
    ballArray[i].move()
    // ellipse(ballArray[i].x,ballArray[i].y, 100)//number 1
  }//alternative below:

  // ballArray.forEach(ball) => {
  //   ellipse(ball.x, ball.y, 100)
  // }//seems failed

  // ellipse(ball1.x,ball1.y,100,100)
  // ellipse(ball2.x, ball2.y, 100, 100)
  // ellipse(ball3.x, ball3.y, 100,100)
}

function makeBall(x,y){
  let ball = {
    x:x,
    y:y
  }
  return ball// number 1
}

class Ball{
  constructor(x,y,c){ //similar to makeball function - number 2
    this.x = x,
    this.y = y
    this.color = c
    this.speedx = random(-1,1)
    this.speedy = random(-1,1)
  }
  move(){
    this.x += this.speedx 
    this.y += this.speedy 
  }
  display(){
    fill(this.color)
    ellipse(this.x, this.y, 100)// number 2
  }
}