class Ball extends Shape{
    constructor(pos, speed, color){
      super(pos,speed,color)//calling from the Shape constructor which is the parent class
    }
  
    move(){
      super.move()
    }
  
    display(){
      super.display()
      ellipse(0, 0, 100)
      pop()
    }
  }