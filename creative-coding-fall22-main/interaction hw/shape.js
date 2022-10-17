class Shape {
    constructor(pos, color){
        this.pos = pos;
        this.color = color;
    }
    // change(){
    //     this.color = colorArray[random]
    // }
    display(){
        this.color = colorArray[random]
        fill(this.color)
        noStroke()

    }
  
  }