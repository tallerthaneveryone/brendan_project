/*
generative pattern
*/

function setup() {
	createCanvas(600, 500);
	pattern();
}

function mousePressed()	{
	pattern();
}

function pattern() {
	background(200);

	let w = random(5, 100);
	let h = 60;

	for (let x = 10; x <= width + w; x += w) { // columns
		for (let y = 20; y <= height + h; y += h) { // rows
			
			let r = random(255);
			let g = random(255);
			let b = random(255);

			fill(r, g, b);
			
			ellipse(
			x + random(15, -10), 
			y + random(-10, 40),
			w + random(50, -1),
			h + random(20, -1));

			

			

		
		
			
		}	
	}
}