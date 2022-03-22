let rotation = 0;
let initFr = 30;
let spaceShipImg;
let shipX = 50;
let shipY = 0;
let spaceCraft;
let spaceCraft2;
let l=0;

function preload() {
  spaceShipImg = loadImage('./assets/spaceship48px.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  frameRate(initFr);
  textAlign(CENTER);
  spaceCraft = new spaceShip(shipX-298, shipY, spaceShipImg, 8);
  spaceCraft2 = new spaceShip(shipX+128, shipY, spaceShipImg, 8);
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);

  let alpha = new star(3.19*10**10, 1.989*10**30, 0, 0);
  let beta = new planet(1.2742*10**7, getEarthMass(), alpha, 50, 75);
  traceOrbit(alpha, beta, '#ff000064');
  rotation++;
  

  push();
  fill(200, 250, 220);
  rotate(radians(l*3));
  ellipse(0, 90, 10, 10);
  pop();

  push();
  textStyle(BOLD);
  textSize(128);
  fill(l%225, 0, 0);
  // noFill();
  rotate(radians(l));
  text('YOUR MOM', -25, 45);
  pop();
  l+=10;

  push();
  textSize(36);
  fill(l%255, l%255, l%255);
  // noFill();
  text('use WASD or the arrow keys', -25, -240);
  pop();

  spaceCraft.show();
  spaceCraft2.show();
  if (keyIsDown(87)) {
    spaceCraft.relativeForward();
  }
  if (keyIsDown(68)) {
    spaceCraft.relativeRotateLeft();
  }
  if (keyIsDown(65)) {
    spaceCraft.relativeRotateRight();
  }
  if (keyIsDown(83)) {
    spaceCraft.relativeBackward(2);
  }

  if (keyIsDown(38)) {
    spaceCraft2.relativeForward();
  }
  if (keyIsDown(39)) {
    spaceCraft2.relativeRotateLeft();
  }
  if (keyIsDown(37)) {
    spaceCraft2.relativeRotateRight();
  }
  if (keyIsDown(40)) {
    spaceCraft2.relativeBackward(2);
  }
  
}