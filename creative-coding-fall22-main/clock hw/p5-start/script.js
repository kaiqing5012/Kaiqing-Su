function setup() {
  createCanvas(700, 700)
}

function draw() {

  background(0)
  let hr = hour()
  let hrLA = hour()-3
  let hrF = hour()+6
  let mn = minute()
  let sc = second()
  stroke(255)
  strokeWeight(2)
  textSize(18)
  text("New York Times", 100,170)
  strokeWeight(1)
  textSize(10)
  text("Reverse Times", 130,590)
  strokeWeight(1)
  textSize(10)
  text("LA Times", 515,185)
  strokeWeight(1)
  textSize(10)
  text("Paris Times", 515,540)

  angleMode(DEGREES)
  translate(200,200)
  rotate(-90)

  noFill()
  strokeWeight(6)
  stroke(234,200,244)
  let end1 = map(sc,0,60,0,360)
  arc(0,0,305,305,0,end1)//purple clock
  stroke(234,216,144)
  arc(0,350,130,130,0,end1)//yellow clock
  stroke(189,245,180)
  arc(-350,350,110,110,0,end1)//green clock

  strokeWeight(10)
  stroke(143,69,145)
  let end2 = map(mn,0,60,0,360)
  arc(0,0,330,330,0,end2)//purple clock
  stroke(222,180,13)
  arc(0,350,150,150,0,end2)//yellow clock
  stroke(64,176,64)
  arc(-350,350,130,130,0,end2)//green clock
 
  strokeWeight(14)
  stroke(102,0,102)
  let end3 = map(hr % 12,0,12,0,360)
  let endLA = map(hrLA % 12, 0,12,0,360)//yellow clock
  let endF = map(hrF % 12, 0,12,0,360)//green clock
  arc(0,0,360,360,0,end3)//purple clock
  stroke(211,128,3)
  arc(0,350,180,180,0,endLA)//yellow clock
  stroke(3,79,3)
  arc(-350,350,160,160,0,endF)//green clock
  
  stroke(87)
  
//   push()
//   //rotate(end1)
//   line(-200,200,-350,200)
//   pop()
  
//   push()
//   //rotate(end2)
//   line(-200,200,-150,300)
//   pop()
  
  stroke(225)
  strokeWeight(5)
  ellipse(-400,-20,150,150)
  arc(-400,-20,130,130,end1,0)//reverse clock
}

