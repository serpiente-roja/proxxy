let img;
let imgb;
let filtro = true;
let canvas;

function preload() {
  let imagePath = "../assets" + Math.floor(Math.random() * 4 + 1) + ".png";
  console.log("Loading image:", imagePath);
  img = loadImage(imagePath);
  imgb = img;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function mouseClicked() {
  filtro = !filtro; // Toggle filter on mouse click
}

function draw() {
  background(255); // Clear background each frame

  // Calculate center position
  let centerX = windowWidth / 2 - imgb.width / 2;
  let centerY = windowHeight / 2 - imgb.height / 2;

  // Display the image in the center of the screen
  image(imgb, centerX, centerY);

  // Your image manipulation code here
  for (var i = 0; i < 3; i++) {
    // Copying image parts
    copy(img, int(random(100)) + int(i * 100 * (mouseX / windowWidth)), 0, 100, img.height, int(i * 350 * (mouseX / windowWidth)), 0, 100, imgb.height);

    if (filtro) {
      filter(INVERT); // Apply filter if required
    }
  }
}
