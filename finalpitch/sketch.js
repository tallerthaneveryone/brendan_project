/*
	final project pitch
	title
	description
	theme
	interaction
	grapics
*/

var currentSlide = 1;
var totalSlides = 5;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;


function setup() {
	createCanvas(960, 640);
}

function draw() {
	background(12);
	noStroke();
	
	// slides
	if (currentSlide == 1) {
		// title
		textSize(80);
		fill(255);
		textAlign(CENTER, CENTER);

		// fill in your own title
		text('Video Game', width/2, height/2 - 50);
		textSize(60);
		text('By Brendan Doherty', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('The goal is to create the basic game of snake, but I would also like to incorporate sound if possible', 50, 100, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('When changing direction, sounds of a character would play', 50, 100, width - 100);
	} else if (currentSlide == 4) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Using creative commons, family guy image, and hopefully a sound', 50, 100, width - 100);

		circle(width/2, height/2, 100);
	} else if (currentSlide == 5) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Using the keys,down, up, right, and left you can change direction', 50, 100, width - 100);

		square(width/2, height/2, 100);
	}

	// draw buttons
	if (currentSlide < totalSlides) {
		button(nextBtnX, nextBtnY, "Next");
	}

	if (currentSlide > 1) {
		button(backBtnX, backBtnY, "Back");
	}
	
}

// displaying button
function button(x, y, displayText) {

	// draw buttons
	stroke('plum');
	fill(255);
	
	if (mouseX > x && mouseX < x + btnW &&
		mouseY > y && mouseY < y + btnH) {
		fill('yellow');

		if (mouseIsPressed) {
			stroke('yellow');
		}
	}
	
	strokeWeight(4);
	rect(x, y, btnW, btnH, 10);

	noStroke();
	fill('plum');
	textSize(25);
	textAlign(CENTER, CENTER);
	text(displayText, x, y, btnW, btnH);

}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}

function keyPressed() {
	if (keyCode == 39) { // right arrow
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	if (keyCode == 37) { // left arrow
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}
