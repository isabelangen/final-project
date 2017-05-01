// Nav Page

function setup() {
  createCanvas(windowWidth, windowHeight);
  diagram = loadImage('diagram.png')
  strum = loadSound('media/Instrument_Strum.mp3');
}

function draw() {
  background(255);
  image(diagram, mouseX-365, mouseY-200, 730, 409);
}

function mousePressed() {
	strum.play();
}