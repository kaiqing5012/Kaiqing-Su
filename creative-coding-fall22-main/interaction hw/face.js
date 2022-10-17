class Face {
    constructor(x, y, color){
      this.x = x;
      this.y = y;
      this.color = color(random());
      this.r = 150;
    }
  
    display(){
      fill(this.color)
      noStroke;
      ellipse(this.x,this.y,290,2*r)
    }
    clicked(){
      let d = dist(mouseX, mouseY, this.x, this.y)
      if(d < this.r){
      this.color = colorArray[random];
      }
    }
  }