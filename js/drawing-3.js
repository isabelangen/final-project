var boltHover1, boltHover2, boltHover3, boltHover4, boltHover5;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  bolt = loadImage('bolt.png');
  diagram = loadImage('diagram.png')
  spaceBlast = loadSound('media/space-blast.mp3');
  backgroundColor = color(255, 255, 255);
}

function draw() {
  background(backgroundColor);

  // Distance between mouse and bolt 1
  var distance1 = dist(mouseX, mouseY, 120, 120);
  var distance2 = dist(mouseX, mouseY, 120, 520);
  var distance3 = dist(mouseX, mouseY, 1270, 120);
  var distance4 = dist(mouseX, mouseY, 1270, 520);
  var distance5 = dist(mouseX, mouseY, width/2, height/2);

  // Determine if distance close to bolt 1
  if (distance1 < 20) {
    boltHover1 = true;
  } else {
    boltHover1 = false;
  }

  // Determine if distance is less close to bolt 2
  if (distance2 < 20) {
    boltHover2 = true;
  } else {
    boltHover2 = false;
  }

  // Determine if distance is less close to bolt 3
  if (distance3 < 20) {
    boltHover3 = true;
  } else {
    boltHover3 = false;
  }

 // Determine if distance is less close to bolt 4
  if (distance4 < 20) {
    boltHover4 = true;
  } else {
    boltHover4 = false;
  }

   // Determine if distance is less close to bolt 3
  if (distance5 < 20) {
    boltHover5 = true;
  } else {
    boltHover5 = false;
  }

  if (boltHover5 == true || boltHover4 == true || boltHover3 == true || boltHover2 == true || boltHover1 == true) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  image (diagram, 350, 150);
  image(bolt, 100, 100, 60, 60);
  image(bolt, 100, 500, 60, 60);
  image(bolt, 1250, 100, 60, 60);
  image(bolt, 1250, 500, 60, 60);

}

// Called once every time mouse is pressed
function mousePressed() {
  if (boltHover1 == true) {
    backgroundColor = color(random(255), random(255), random(255));
    spaceBlast.play();
  }
  if (boltHover2 == true) {
    backgroundColor = color(random(255), random(255), random(255));
    spaceBlast.play();
  }
  if (boltHover3 == true) {
    backgroundColor = color(random(255), random(255), random(255));
    spaceBlast.play();
  }
  if (boltHover4 == true) {
    backgroundColor = color(random(255), random(255), random(255));
    spaceBlast.play();
  }
  if (boltHover5 == true) {
    backgroundColor = color(random(255), random(255), random(255));
    spaceBlast.play();
  }
}