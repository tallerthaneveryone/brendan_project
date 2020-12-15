/* pattern version 1 javascript loops*/

function setup() {
	createCanvas(640, 360);
	rectMode(CENTER);
}

function draw() {
	background(120);

	// landscape

	// mountains
	for (let x = -20; x < width; x += 80) {
		
		let r = map(x, 10, width, 100, 255);
		fill(r, 185);
		
		stroke('white');
		strokeWeight(6);
		triangle(x, height + 30, x + 30, 20, x + 180, width);
	}

	// trees trunks
	for (let x = 20; x < height; x += 40) {
		noStroke();
		fill('saddlebrown');
		rect(x, height - 20, 05, 200);
    //leafs
		let g = map(x, 90, width, 175, 60);
		fill(10, g, 10);
        circle(x, height - 120, 50, 90);
	}

	// clouds 
	let y = 100;
	for (let x = 20; x < width; x += 120) {
		fill('white');

        circle(x, y, 50);
        quad(x - 20, y + 10, 50, 60);

		y += 0;
	}
}