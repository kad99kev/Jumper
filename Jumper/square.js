class Square{
  constructor(){
		this.x = int(len/4);
  	this.y = 250;
    this.lift = -15;
		this.gravity = 0.7;
    this.velocity = 0;
    this.score = 0;
  }

  move(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    if(this.y >= 250){
      this.y = 250;
      this.velocity = 0;
    }
  }

  jump(){
    this.velocity += this.lift;
  }

  display(){
    if(counter%2 == 0){
      fill(0);
    }
    else{
      fill(250);
    }
    stroke(255, 204, 0);
    rect(this.x, this.y, 25, 25);
    this.score += 1;
  }

}
