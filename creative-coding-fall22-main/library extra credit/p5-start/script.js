let x;
let y;

let hue1;
let hue2;

let myName = "clickable and chroma"
myButton = new Clickable(200,140);

function setup() {
  createCanvas(600, 600)
  hue1 = chroma('#fafa6e');
  hue2 = chroma('#ff3399');
  frameRate(10)
}

function draw() {
  background(chroma.mix(hue1,hue2, 0.7).hex())
  myButton.width = 70;
  myButton.height = 50;
  myButton.color = "yellow"
  myButton.draw();

  stroke(255, 255, 255)
  fill(0, 0, 255)
  noStroke()
  ellipse(mouseX, mouseY, 25, 25)
  
  stroke(255, 0, 255)
  fill(255, 0, 0)
  rect(mouseX+50, mouseY+200, 50, 25)
  
  stroke(0);
  strokeWeight(5)
  line(0, 0, width, height);
  
  fill(255)
  noStroke()
  text(myName ,300, 500)
  textSize(30)

}

myButton.onPress = function(){
  clear()
  background(225)
  fill(0)
  text("The mouse is pressed!", 250,100)
  
}