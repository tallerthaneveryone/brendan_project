/* 
sound sampler v 1
*/

var vanjieSound;

function preload() {
  vanjieSound = loadsound('vanjie.mp3');
}

function setup() {
  createCanvas(640, 360);
  vanjieSound.play();
}


function draw() {
  background(255, 192, 203);
}