// Nav Page

function setup() {
  createCanvas(windowWidth, windowHeight);
  diagram = loadImage('diagram.png')
  angleMode(DEGREES); 
}

function draw() {
  background(255);
  image(diagram, mouseX-365, mouseY-200, 730, 409);
}

