class Triangle{
  constructor(){
    this.l = 30;
    this.x1 = len;
    this.x2 = this.x1+this.l;
    this.x3 = this.x1+int(this.l/2);
  	this.y1 = 275;
    this.y2 = 275;
    this.y3 = 250;
    this.group = int(random(3));
    this.maxX = 0;
    this.mid = 0;
  }
  move(){
    this.x1 -= 3 + incr;
    this.x2 -= 3 + incr;
    this.x3 -= 3 + incr;
  }

  display(){
    if(counter%2 == 0){
      fill(0);
    }
    else{
      fill(250);
    }

    for(let i = 0; i <= this.group; i++){
      triangle(this.x1+this.l*i, this.y1, this.x2+this.l*i, this.y2, this.x3+this.l*i, this.y3);
      this.maxX = this.x2+this.l*i;
      this.mid = int((this.x1 + this.maxX)/2);
    }
  }

  offScreen(){
    if(this.x2 < 0){
      return true;
    }
    else{
      return false;
    }
  }

  hits(sq){
    if(this.x1 <= sq.x + 25 && this.maxX >= sq.x){
      if((sq.y == this.y3)){
        return true;
      }
    }else if(sq.y < 0){
      return true;
    }
    return false;
  }
}
