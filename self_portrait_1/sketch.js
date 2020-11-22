/*
self portrait version 1 
by Brendan Doherty\
*/

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
   noStroke();
     background(5,75,5);
    
    //face shape
    fill(55,mouseY,55);
    ellipse(210,200,160,500);
    
    //nose
    fill(120);
    triangle(200,80,100,240,230,240);
    
    //mouth
    fill(255,0,0);
    ellipse(200, map(mouseY,0,height,250,300), 150, 100);
    
    //eyeballs
    fill(200);
    ellipse(155,75,20,20);
    ellipse(250,75,20,20);
  
  }
