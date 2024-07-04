let video;
let filtro = false;
let canvas;

function preload() {
  video = createVideo(["../assets/omnia.mp4"]);
  video.hide(); // Hide the default video controls
  video.loop(); // Loop the video
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
  image(video, 500, 500, 500, 500);
  for (let i = 0; i < 3; i++) {
    copy(video, int(random(100)) + int(i * 100 * (mouseX / windowWidth)), 0, 100, video.height, int(i * 550 * (mouseX / windowWidth)), 0, 100, video.height);

    if (filtro) {
      filter(INVERT);
    }
  }
}
