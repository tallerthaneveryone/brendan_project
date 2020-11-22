/*
sound sampler v 1
*/

var vanjieSound;

function preload () {
    vanjieSound = loadSound('vanjie.mp3');
}

function setup() {
    createCanvas(640,360);
}

function draw() {
    background(220);
}

function mousePressed() {
    vanjieSound.play();
}