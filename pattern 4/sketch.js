/*
nested loop
*/

function setup() {
	createCanvas(600, 500);
}

function draw() {
	background(200);

	let w = 50;
	let h = 60;

	for (let x = 10; x <= width; x += w) { // columns
		for (let y = 20; y <= height; y += h) { // rows
			rect(x, y, w, h);
			circle(x, y, w, h);
			triangle(x, y, w, h+=20);

		}	
	}
}