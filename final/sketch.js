/*final*/

function setup() {
	createCanvas(960, 640);
}


function draw() {

   //changing background colors
   r = map(mouseX, 0, width, 234, 196);
   g = map(mouseX, 0, width, 169, 244);
   b = map(mouseX, 0, width, 218, 175);
   //background(r, g, b);

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
  //background
   function mousePressed() {
    background(random(225), random(225), random(225));
  }
  

