var sliders = [];
var angle = 0;
let fr = 24;
let ballArray = [];
let speed = 10;
let ballStart = 50;

function setup() {
  createCanvas(520,520)
  frameRate(fr);//framerate = 1 sec
  
  //sliders.position(200,100) //fail to move the sliders into canvas

  for(i = 0; i < 10; i ++){
  sliders[i] =  createSlider(0,50,2);//the coding train :https://www.youtube.com/watch?v=CMsD3IigG7g
  }

  // for (i=0; i<5; i++){
  //   ballArray.push(new Ball(random(width), random(height), color(random(255),random(255),random(255))))
  //   }
}

function draw() {
  background(random(0),random(255),random(255))
  fill(255)
  stroke(random(255),random(0),random(0))
  strokeWeight(10)
  ellipse(260,260,519,519)// large circle background

  var offset = 0;
  for(i = 0; i < 10; i ++){
    var x = map(sin(angle + offset), -1, 1, 0, 255)
    offset += 0.14;
    sliders[i].value(x);
  }
  angle += 0.11;//slider moves

  // for(let i = 0; i < ballArray.length; i ++){
  //   ballArray[i].display()
  //   ballArray[i].move()
  // }

  ballStart = ballStart + speed;
  if (ballStart > 300){
    speed = -speed;
  }

  if(ballStart < 0){
    speed = speed * -1
  }//check the balls dont go outside of the screen, link:
  //https://editor.p5js.org/cs4all/sketches/S16RZ0KaX
  
  stroke(25,26,225)
  fill(0)
  ellipse(ballStart,200,80,80)
  ellipse(ballStart + 100,200,80,80)
  ellipse(ballStart + 200,200,80,80)//draw three balls
  stroke(23,255,78)
  strokeWeight(5)
  fill(0)
  ellipse(50,ballStart,40,40)
  ellipse(50, ballStart + 100,50,50)
  ellipse(50, ballStart + 200,60,60)//draw three balls

}

// class Ball{
//   constructor(x,y,c){ 
//     this.x = ballStart
//     this.y = 200
//     this.color = random(255, 255, 255)
//     this.speedx = fr % 2
//   }
//   move(){
//     this.x += this.speedx 
//     this.y = 200;
//   }
//   display(){
//     fill(this.color)
//     ellipse(this.x, this.y, 80)// number 2
//   }
  
// }