let rotation = 0;
let initFr = 30;
let spaceShipImg;
let shipX = 50;
let shipY = 0;
let spaceCraft;
let spaceCraft2;
let l=0;
let c;
let show=false;
let a = '';
let b = '';
let menuButton;

function preload() {
  spaceShipImg = loadImage('./assets/spaceship48px.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  menuButton = createButton('Menu');
  menuButton.style('border', color(0, 0, 0, 0));
  menuButton.style('background-color', color(0, 0, 0, 0));
  menuButton.style('color', color(255, 255, 255));
  menuButton.position(10, 10);
  menuButton.mousePressed(dMenu);

  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  frameRate(initFr);

  spaceCraft = new spaceShip(shipX-298, shipY, spaceShipImg, 8, 10);
  spaceCraft2 = new spaceShip(shipX+128, shipY, spaceShipImg, 8, 10);
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);

  let alpha = new star(3.19*10**10, 1.989*10**30, 0, 0);
  let beta = new planet(1.2742*10**7, getEarthMass(), alpha, 50, 75);
  // traceOrbit(alpha, beta, '#ff000064');
  rotation++;

  push();
  textAlign(LEFT);
  textSize(12);
  fill(255, 255, 255);
  text('P1: '+"█".repeat(Math.ceil(spaceCraft.getHealth()))+" "+spaceCraft.getHealth(), windowWidth/2-150, -1*windowHeight/2+35);
  text('P2: '+"█".repeat(Math.ceil(spaceCraft2.getHealth()))+" "+spaceCraft2.getHealth(), windowWidth/2-150, -1*windowHeight/2+55);
  pop();

  push();
  fill(200, 250, 220);
  rotate(radians(l*3));
  ellipse(0, 90, 10, 10);
  pop();

  // push();
  // textStyle(BOLD);
  // textSize(128);
  // fill(l%225, abs(spaceCraft.getPosition().x*spaceCraft.getPosition().y)%255, abs(spaceCraft2.getPosition().x*spaceCraft2.getPosition().y)%255);
  // if (show) {
  //   noFill();
  // }
  // rotate(radians(l));
  // text('YOUR MOM', -25, 45);
  // pop();
  l+=10;

  push();
  textSize(36);
  fill(l%255, l%255, l%255);
  // noFill();
  text('use WASD or the arrow keys', -25, -240);
  pop();

  if (spaceCraft.getHealth() > 0)
  {
    spaceCraft.show();
  }

  if (spaceCraft2.getHealth() > 0)
  {
    spaceCraft2.show();
  }

  var d = dist(spaceCraft.getPosition().x, spaceCraft.getPosition().y, spaceCraft2.getPosition().x, spaceCraft2.getPosition().y);
  if (d<=spaceCraft.getSize()+spaceCraft2.getSize() && spaceCraft.getHealth()>0 && spaceCraft2.getHealth()>0)
  {
    if (Math.floor(Math.random()*10)%2==0)
    {
      spaceCraft.setHealth(0);
      spaceCraft2.setHealth(spaceCraft2.getHealth()*0.25);
    }
    else
    {
      spaceCraft2.setHealth(0);
      spaceCraft.setHealth(spaceCraft.getHealth()*0.25);
    }
  }

  if (spaceCraft.getHealth() > 0)
  {
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
  }

  if (spaceCraft2.getHealth() > 0)
  {
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
}

function keyPressed() {
  if (keyCode === 84) {
    show=!show;
  }
}

function dMenu() {
  console.log("hi");
}