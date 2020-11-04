/* 
meme v3
animated meme/logo
*/

var x = 0;
var y = 100; 
var s = 100;
var xSpeed = 3;
var ySpeed = 3;

function setup(){
    createCanvas(640, 360);
}

function draw() {
    background(220);

    ellipse(x, y, s);

    x += xSpeed;
    y += ySpeed;

        //hits right or left side of the canvas//
    if ( x > width ||x < 0 ) {
        // reverse speed
        xSpeed *=  -1;
    }
       //hits top or bottom side of the canvas//
    if ( y > height || y < 0 ) {
        // reverse speed
        ySpeed *=  -1;
    }

}
   