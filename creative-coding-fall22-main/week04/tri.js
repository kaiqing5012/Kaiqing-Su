class Tri extends Shape{
    constructor(pos, speed, color){
      super(pos,speed,color)
    }
  
    move(){
      super.move()
    }
  
    display(){
      super.display()
      triangle(0, 0-50, 0-50, 0, 0+50, 0+50)
      pop()
    }
  }