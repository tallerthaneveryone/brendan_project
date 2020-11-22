/* 
meme v3
animated meme/logo
*/

var x = 0;
var y = 100; 
var s = 25;// size
var xSpeed = 3;
var ySpeed = 3;
var c; // color


var planeImage;

function preload() {
    planeImage = loadImage('plane.png');
}


function setup(){
    createCanvas(640, 360);
    noStroke();

    var r = random(255);
    var g = random(255);
    var b = random(255);

    c = color(r, g, b);

}

function draw() {
    background(220);

    tint(c);
    image(planeImage, x, y, s, s);

    fill(c);
    //ellipse(x, y, s)
    textSize(s);
    textAlign(CENTER, CENTER);
    text('landing or departing', x, y, s);
    

    

    x += xSpeed;
    y += ySpeed;

        //hits right or left side of the canvas//
    if ( x > width ||x < 0 ) {
        // reverse speed
        xSpeed *=  -1;
        var r = random(255);
        var g = random(255);
        var b = random(255);
    
        c = color(r, g, b);
    }
       //hits top or bottom side of the canvas//
    if ( y > height || y < 0 ) {
        // reverse speed
        ySpeed *=  -1;
        var r = random(255);
        var g = random(255);
        var b = random(255);
    
        c = color(r, g, b);
    }

}
   