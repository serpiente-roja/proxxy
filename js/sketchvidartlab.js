let img;
let filtro = false;
let canvas;

function preload() {
  img = loadImage("../assets/artlab.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function mouseClicked() {
  filtro = true;
}

function draw() {
  // background(0)
  image(img, 100, 100, 800, 600);
  for (let i = 0; i < 3; i++) {
    copy(img, int(random(100)) + int(i * 100 * (mouseX / windowWidth)), 0, 100, img.height, int(i * 350 * (mouseX / windowWidth)), 0, 100, img.height);

    if (filtro) {
      filter(ERODE);
    }
  }
}
