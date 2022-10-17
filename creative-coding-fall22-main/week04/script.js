let shapeArray = []


function setup() {
  createCanvas(windowWidth, windowHeight)

  for(let i = 0; i < 100; i++){
    shapeArray.push(makerandomShape())
    // let pos = createVector(random(width/2),random(height/2))
    // let speed = createVector(random(-1,1),random(-1,1))
    // let c = color(random(255),random(255),random(255))
    
    // let randomVar = random(0,2)

    // if(randomVar < 1){
    //   shapeArray.push(new Ball(pos,speed,c))
    // }
    // else if(randomVar > 1){
    //   shapeArray.push(new Block(pos,speed,c))
    // }
  }

  console.log(shapeArray)
}

function draw() {
  background(100)

  //shapeArray.push(makerandomShape())

  // for (let i = 0; i < shapeArray.length; i++) {
  //   shapeArray[i].move()
  //   shapeArray[i].display()
  // }

  // for (const shape of shapeArray){
  //   shape.move()
  //   shape.display()
  // }//alternative of for loop

  shapeArray.forEach(function(shape){
    shape.move()
    shape.display()
  })//another alternative
}

function makerandomShape(){
    
    let pos = createVector(random(width/2),random(height/2))
    let speed = createVector(random(-1,1),random(-1,1))
    let c = color(random(255),random(255),random(255))
    
    let randomVar = random(0,3)

    let shape;

    if(randomVar < 1){
     shape = new Ball(pos,speed,c)
    }
    else if(randomVar < 2){
     shape = new Block(pos,speed,c)
    }
    else {
      shape = new Tri(pos,speed,c)
    }

  return shape;

}