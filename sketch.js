let x = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(5); 
  background(230)
}

function draw() {
  background(196,219,255);
  
  strokeWeight(0);
  fill(0,98,255);
  rect(0,325,400,100); 
  
  strokeWeight(4);
  fill(240,0,0);
  ellipse(200,150,200,45);
  ellipse(200,223,150,100);
  ellipse(230,150,30,0);
  
  strokeWeight(10);
  fill(255,0,333);
  ellipse(170,150,20,20);
  
strokeWeight(2);
  fill(0,0,0);
  ellipse(200,300,100,30);
  
stroke(0); 
  strokeWeight(1);
  ellipse(200,190,13,13);
  ellipse(200,210,13,13);
  ellipse(200,230,13,13);
  ellipse(200,250,13,13);

  strokeWeight(5);
  line(175,125,160,80);
  line(280,70,159,77);
  
stroke(0);
  fill(204,204,255);
  strokeWeight(2);
  rect(280,35,60,60);
  
  strokeWeight(10);
  fill(255,0,333);
  ellipse(310,62,20,20);
  
  strokeWeight(2);
  fill(0,0,0);
  triangle(220,95,280.97,110,240.48,126.8); 
  
  translate(280,35);
  fill(204,204,255);
  rotate(radians(x));
  rect (0,0,51);
  
  x = x + 1;
  
}    
