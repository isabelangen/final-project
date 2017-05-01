// Drawing 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  //diagram = loadImage('diagram.png')
  bolt = loadImage('bolt.png');
  angleMode(DEGREES); 
}

function draw() {
  push(); // save coordinate system in current state
  translate(mouseX-15, mouseY-15);
  rotate(frameCount); // number of frames since animation started
  image(bolt, 0, 0, 30, 30);
  pop(); // restore coordinate system

}

function mousePressed() { // clear window
  background(255);
}