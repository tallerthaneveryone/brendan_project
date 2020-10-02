/*
self portrait version 1 
by Brendan Doherty\
*/

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background('lightblue')

    //face
    rect(400, 500, 600, 60)


    //eyes
    circle( 170, 90, 30)
    circle( 210, 90, 30)

    //nose
    square( 190, 120, 30)
    //mouth
    rect(184, 180, 100, 50, 10)
}

