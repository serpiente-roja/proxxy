let video;
let filtro = false;
let canvas;

function preload() {
  video = createVideo(["../assets/lluvia.mp4"]);
  video.hide();
  video.loop();
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
  image(video, 500, 500, 500, 500);
  for (let i = 0; i < 3; i++) {
    copy(video, int(random(100)) + int(i * 100 * (mouseX / windowWidth)), 0, 100, video.height, int(i * 550 * (mouseX / windowWidth)), 0, 100, video.height);

    if (filtro) {
      filter(INVERT);
    }
  }
}
