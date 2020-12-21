/*
    meme v2
    conditional logic
    */

    var pisaImage

    function preload() {
        pisaImage = loadImage("pisa.jpg")
        thumbnailImage = loadImage("thumbnail.jpg")
    }

    function setup() {
        createCanvas(640,640);
    }

    function draw() {
        background(0);

        if (mouseIsPressed) {
            image(pisaImage, 0, 0);
        } else {
            image(thumbnailImage, 0, 0)
        }

    }



