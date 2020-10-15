/*
    meme v2
    conditional logic
    */

    function setup() {
        createCanvas(640,360);
    }

    function draw() {
        background(0);

        let x = width / 2;
        let h = height / 3;
        


    
            fill(255)
            noStorke();
            textSize(20);
            text(round(mouseX) + ' '+ width/2, 10, 20)

            stroke(255);
            strokeWeight(2);
            line(width / 2, 0, width / 2, height);
    
        }

