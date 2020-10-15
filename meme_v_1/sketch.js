/* meme_v_1
by brendan doherty
*/


var pisaImage;

function preload(){
    pisaImage = loadImage ('pisa.jpg');
}

function setup(){
    
    createCanvas(420,640);
    
    
}

function draw() {
    background(220);
    
   

/*image*/

image(pisaImage, 0, 0)






/*text*/
    textSize(30);
    
    fill(144, 85, 167);
    stroke(255)
    textFont('Staatliches')
    
    textAlign(LEFT, CENTER);

    
    text('                 <                     >', width / 15, height / 2);

    

    
}