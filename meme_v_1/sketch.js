/* meme_v_1
by brendan doherty
*/

function setup(){
    createCanvas(640,360);
}

function draw() {
    background(220);

    textSize(100);
    
    fill(144, 85, 167);
    stroke(255)
    textFont('monospace')
    
    textAlign(CENTER, CENTER);

    text('Brendan', width / 3, height / 3);
}