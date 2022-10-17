// 1. faces appears on the screen
// 2. face COLOR change when clicked inside the face
// 3. eyes shape change when clicked on the eyes
// make a face class that gives different COLOR when clicked only inside
// make an eye class gives different shape of eyes when clicked
//※ ends up with couldn't find a formula to get the correct/comfortable positions for eyes. 
// reference for color array and the index read:     https://editor.p5js.org/LizPina/sketches/9LF5GRL7


let myColor = ["#FCE1D5","#E0AC69","#8D5524","#260701", "#D1A38C", "#E8CAB0","#FFF5F5","#734930"]
let faceArray = [];
let randomNum;
let myEyes = [];
let bg;

function preload(){
  bg = loadImage("Dec20_11_1255410006.jpeg");
}

function setup() {
  createCanvas(1000, 600);
  randomNum = random(myColor.length);
  
  for (i = 0; i < 8; i++) {
    x = random(50,1000);
    y = random(45,600);
    r = random(40,50);
    //c = color(random(255),random(255),random(255));
    faceArray.push(new Face(i, x, y, r));
    //myEyes.push(new Eyes(i, x, y, c));
  }
  
}

function draw() {
  background(bg);
  randomNum = floor(randomNum);//make sure the index read into the array is an integer

  for (let i = 0; i < faceArray.length; i++) {
    //translate(2*r,0);
    faceArray[i].display();
    faceArray[i].move();
    faceArray[i].clicked();//can i loop the click function all the time? 
  }
}

class Face {
  constructor(i, x, y, r) {
    this.i = i;
    this.x = x;
    this.y = y;
    this.color = "#FFDBAC";
    this.r = r;
    this.c = color(205,67,86);
    this.speedx = 3;
  }

  display() {
    for (let i = 0; i < 3; i++) {
      stroke(0);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(this.x, this.y, 1.9 * r, 2 * r);//head
      stroke(this.c)
      strokeWeight(10)    
      let eye1 = line(this.x-60, this.y-30, this.x-25, this.y-10)
      let eye2 = line(this.x-60, this.y+10, this.x-25, this.y-10)//left eyes
      let eye3 = line(this.x+60, this.y-10, this.x+25, this.y-10)//right eyes
      let mouth = ellipse(this.x,this.y+50,5,5)
    }
  }
   move() {
    this.x = this.x + this.speedx;

    if (this.x > 980) {
      this.speedx = -this.speedx
    }
      if (this.x < 20) {
      this.speedx = -this.speedx
    }
  }
     
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d <= this.r && mouseIsPressed == true) {
      this.color = myColor[randomNum];
      this.c = color(14, 237, 55);
    }
  }
}