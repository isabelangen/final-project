// Drawing 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  //diagram = loadImage('diagram.png')
  bolt = loadImage('bolt.png');
}

function draw() {
 // image (diagram, 350, 150);
  image(bolt, mouseX, mouseY, 30, 30);
}

function mousePressed() { // clear window
  background(255);
}