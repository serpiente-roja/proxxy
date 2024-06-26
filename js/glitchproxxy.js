let miImg;
let cuadradosVisibles = [];
let cuadradosInvisibles = [];

function setup() {
	let cnv = createCanvas(windowWidth, 300);
	cnv.position(0, -10);
	cnv.style('z-index', '-1');

	imageMode(CENTER);
	miImg = loadImage('../assets/proxxy1.jpeg')

	for (let i = 0; i < 100; i++) {
		let cuadradoVisible = {
			x: random(width),
			y: random(height),
			r: random(10, 35)
		};
		cuadradosVisibles.push(cuadradoVisible);
	}

	for (let i = 0; i < 100; i++) {
		let cuadradoInvisible = {
			x: random(width),
			y: random(height),
			r: random(10, 35)
		};
		cuadradosInvisibles.push(cuadradoInvisible);
	}

	for (var i = 0; i < cuadradosVisibles.length; i++) {
		fill(255, 200);
		noStroke();
		square(cuadradosVisibles[i].x, cuadradosVisibles[i].y, cuadradosVisibles[i].r);

		fill(0);
		noStroke();
		square(cuadradosInvisibles[i].x, cuadradosInvisibles[i].y, cuadradosInvisibles[i].r);
	}
}

function draw() {
	for (let i = 0; i < cuadradosInvisibles.length; i++) {
		//if(mouseX > x && mouseX < x+w && mouseY > y && mouseY < y + h){
		if (mouseX > cuadradosInvisibles[i].x &&
			mouseX < cuadradosInvisibles[i].x + cuadradosInvisibles[i].r &&
			mouseY > cuadradosInvisibles[i].y &&
			mouseY < cuadradosInvisibles[i].y + cuadradosInvisibles[i].r) {
			fill(255);
			noStroke();
			square(cuadradosInvisibles[i].x, cuadradosInvisibles[i].y, cuadradosInvisibles[i].r);
		} else {
			fill(0);
			noStroke();
			square(cuadradosInvisibles[i].x, cuadradosInvisibles[i].y, cuadradosInvisibles[i].r);
		}
	}
	image(miImg, width * 0.87, height * 0.55, 300, 300)
}
