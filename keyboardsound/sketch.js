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

    if (vanjieSound.isPlaying()) {
        background(8, 40, 15);
    }

    var currentTime = vanjieSound.currentTime();
    var duration = vanjieSound.duration();
    var timeElapsed = map(currentTime, 0, duration, 0, width);

    fill('0');
    noStroke();
    rect(0, height -200, timeElapsed, 200);

    //change volume

    var volume = map(mouseY, 0, height, 1, 0);
    vanjieSound.setVolume(volume);

    
}

function mousePressed() {
    if (vanjieSound.isPlaying()) {
        vanjieSound.pause();
    } else {
    vanjieSound.play();
    }
}