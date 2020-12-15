/*
patterns version 2
generative pattern
using random
*/

function setup (){
	createCanvas(640, 360);
	pattern();
}

function mousePressed() {
	pattern();
}

function pattern(){
	background(220);

	// mountains
	for (let x = -180; x < width; x += random(100, 200)) {
		
	// brown
	let r = random(50, 82);
	let g = random(40, 65);
	let b = random(30, 51);
	fill(r, g, b);	
		stroke('white');
		triangle(x, height + 30, x + 30, 20, x + 180, width);
	}

	// trees trunks
	for (let x = 10; x < height; x += random(20,40)) {
		noStroke();
		fill('saddlebrown');
		let w = random(4, 10);
		let h = random(50, 200);
		rect(x, height - 99, w, h);
	
		//leafs
		let g = map(x, 90, width, 175, 60);
		fill(10, g, 10);
        circle(x, height - 120, 50, 90);
	}

	// clouds 
	var cloudNumber = random(3, 10);
	for (let i = 0; i < cloudNumber; i++) {
		let x = random(width);
		let y = random(height/2);
		let w = random(40, 80);
		let h = random(20, 40);
		fill('white');
		}
	}