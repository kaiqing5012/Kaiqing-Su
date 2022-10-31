//thanks for the coding train for perfecting part of the snake class
class snakePart {
  constructor(x, y) {
    this.snakeParts = [];
    this.snakeParts[0] = createVector(10,10);//snake head starts at 10,10
    this.xSpeed = 0;//moving on x direction
    this.ySpeed = 0;//moving on y direction
    this.length = 1;//snake length
  }

  setDirection(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  draw() {
    for (let i = 0; i < this.snakeParts.length; i++) {
      fill(255, 227, 105);
      stroke(0);
      strokeWeight(0.08)
      ellipse(this.snakeParts[i].x, this.snakeParts[i].y, 1, 1);
      //rect(this.snakeParts[i].x, this.snakeParts[i].y, 1, 1);
    }
  }

  tail() {
    let head = this.snakeParts[this.snakeParts.length-1].copy();//the coding train: copy the last part of the snake
    this.length++;//plus one
    this.snakeParts.push(head);//push this copy one to the tail of the snake
    // hit.play();
    // hit.setVolume(0.3);//play the music "wow"
  }

  eat(pos) {
    let x = this.snakeParts[this.snakeParts.length-1].x;//x position of the snake
    let y = this.snakeParts[this.snakeParts.length-1].y;//y position of the snake
    if (x == pos.x && y == pos.y) {
      this.tail();//if hit the food, then add one part to the end of the snake
      return true;
    }
  }

  position() {
    let head = this.snakeParts[this.snakeParts.length-1].copy();
    this.snakeParts.shift();//the coding train: take the last part of the snake
    head.x += this.xSpeed;
    head.y += this.ySpeed;
    this.snakeParts.push(head);//push a new part
  }

  GameOver(){
    let x = this.snakeParts[this.snakeParts.length-1].x;
    let y = this.snakeParts[this.snakeParts.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0){
        return true;//check ifthe snake hit the walls
    }
    for(let i = 0; i < this.snakeParts.length-1; i++){
      let part = this.snakeParts[i]
      if(part.x == x && part.y == y){
        return true;//check if the snake hit itself
      }
    }
  }
  
}
