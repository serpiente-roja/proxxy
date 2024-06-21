let img;
let imgb;
let isHovering = false;

function preload() {
  let imagePath = "../assets/" + Math.floor(Math.random() * 4 + 1) + ".png";
  img = loadImage(imagePath, imgLoaded);
}

function imgLoaded() {
  imgb = img.get();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let canvas = document.querySelector('canvas');
  canvas.addEventListener('mouseover', () => {
    isHovering = true;
  });
  // canvas.addEventListener('mouseout', () => {
  //   isHovering = false;
  // });
}

function draw() {
  background(0); 

  imageMode(CENTER);
  let centerX = windowWidth / 4; // Adjust img positionnnn
  let centerY = windowHeight / 2;

  if (isHovering) {
    imgb = img.get();
    glitchImage(imgb, mouseX, mouseY);
  }

  if (imgb) {
    image(imgb, centerX, centerY);
  }
}

function glitchImage(img, mouseX, mouseY) {
  img.loadPixels();
  let numPixels = img.width * img.height;
  let numGlitches = 30;

  for (let i = 0; i < numGlitches; i++) {
    let blockWidth = floor(random(50, 200));
    let blockHeight = floor(random(50, 200));
    let startX = floor(random(img.width - blockWidth));
    let startY = floor(random(img.height - blockHeight));
    let displacementX = floor(sin(frameCount * 0.01) * 30);
    let displacementY = floor(cos(frameCount * 0.01) * 30);
    
    displacementX += floor(sin(frameCount * 0.01) * (mouseX - startX));
    displacementY += floor(cos(frameCount * 0.01) * (mouseY - startY));
    
    for (let x = startX; x < startX + blockWidth; x++) {
      for (let y = startY; y < startY + blockHeight; y++) {
        let index = (x + y * img.width) * 4;
        let newIndex = ((x + displacementX) + (y + displacementY) * img.width) * 4;

        if (newIndex >= 0 && newIndex < img.pixels.length) {
          img.pixels[index] = img.pixels[newIndex];
          img.pixels[index + 1] = img.pixels[newIndex + 1];
          img.pixels[index + 2] = img.pixels[newIndex + 2];
          img.pixels[index + 3] = img.pixels[newIndex + 3];
        }
      }
    }
  }
  
  img.updatePixels();
}
