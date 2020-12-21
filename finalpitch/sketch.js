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
		text('Self Portrait/Chaning Background', width/2, height/2 - 50);
		textSize(60);
		text('By Brendan Doherty', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('Combining the Self Portrait and using some of the random background color changes used in exercise of pattern', 50, 100, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('you can move the mouse up and down to make the mouth move', 50, 100, width - 100);
	} else if (currentSlide == 4) {
		// describe the graphics
		textAlign(LEFT);
		fill(255);
		textSize(50);
		text('You can click on the background to change the color', 50, 100, width - 100);

		circle(width/2, height/2, 100);
	} else if (currentSlide == 5) {


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
