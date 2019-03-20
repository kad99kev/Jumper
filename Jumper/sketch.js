class Triangle{
  constructor(){
    this.l = 30;
    this.x1 = 700;
    this.x2 = this.x1+this.l;
    this.x3 = this.x1+int(this.l/2);
  	this.y1 = 275;
    this.y2 = 275;
    this.y3 = 250;
    this.group = int(random(3));
    this.maxX = 0;
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
    if((this.maxX >= 50 && this.maxX <=75) || (this.x1 >= 50 && this.x1 <=75)){
      if((sq.y + 25 > this.y3)){
        return true;
      }
    }else if(sq.y < 0){
      return true;
    }
    return false;
  }
}


class Square{
  constructor(){
		this.x = 50;
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

let img;
function preload() {
  img = loadImage('game_over.jpg');
}

function setup() {
		createCanvas(700, 400);
    sq = new Square();
    highScoreSpan = select('#hs');
    let button = createButton("Reset");
    button.mousePressed(resetSketch);

}

let sq;
let tri;
let value = 250;
let counter = 0;
let tri_count = 0;
let tri_arr = [];
let max = 0;
let incr = 0;

function draw(){
  background(value);
  createLine();
  sq.move();
  sq.display();

  for(let i = tri_arr.length - 1; i >= 0; i--) {
    tri_arr[i].move();
    if (tri_arr[i].offScreen()) {
      tri_arr.splice(i, 1);
    }
    tri_arr[i].display();
  }

  for(let i = 0; i < tri_arr.length; i++){
    if (tri_arr[i].hits(sq)){
      loadImage('game_over.jpg', img => {
        img.resize(700, 400);
        image(img, 0, 0);
      });
      noLoop();
      break;
    }
  }

  if (tri_count % 75 == 0) {
    tri_arr.push(new Triangle());
  }
  tri_count += 1;
  incr += 0.0001;
  highScoreSpan.html(sq.score)
}

function keyTyped() {
  if(key == ' ' && counter%2 == 0){
    value = 0;
  }
  else if(key == ' ' && counter%2 != 0){
    value = 250;
  }
  sq.jump();
  counter += 1;
}

function createLine(){
	stroke(255, 204, 0);
	strokeWeight(2);
	line(0, 275, 700, 275);
}

function resetSketch(){
  sq = new Square();
  value = 250;
  counter = 0;
  tri_count = 0;
  tri_arr = [];
  max = 0;
  incr = 0;
  background(value);
  createLine();
  loop();
}
