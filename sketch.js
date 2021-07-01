var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400,400);
  
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  
  hr=hour();
  mn=minute();
  sc=second();

  hrAngle=map(hr%12,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);

  push();
  stroke(0,0,255);
  strokeWeight(8)
  rotate(hrAngle);
  line(0,0,50,0);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(5)
  rotate(mnAngle);
  line(0,0,75,0);
  pop();

  push();
  stroke(255,0,0);
  strokeWeight(3)
  rotate(scAngle);
  line(0,0,100,0);
  pop();

  point(0,0);
  stroke(0,0,255);
  strokeWeight(8)
  noFill();
  arc(0,0,260,260,0,hrAngle);
  
  stroke(0,255,0);
  strokeWeight(5)
  arc(0,0,280,280,0,mnAngle);
  
  stroke(255,0,0);
  strokeWeight(3)
  arc(0,0,300,300,0,scAngle);
}