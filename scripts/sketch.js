var rotation = 0;
var initFr = 30;
var spaceShipImg;
var shipX = 50;
var shipY = 0;

var spaceCraft;
var spaceCraft2;

var fireLine1;
var fireLine2;

var l=0;

var menuButton, generalButton, controlsButton, exitButton;
var menuColor, clickedColor, hoverColor;
var menuSize;
var inControls1 = [87, 68, 65, 83];
var inControls2 = [73, 76, 74, 75];
var inName;
var showMenu = false;

var show=true;
var starting = true;

var alpha, beta;
var rotatingPlanet;

function preload() {
  spaceShipImg = loadImage('./assets/spaceship48px.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  frameRate(initFr);

  menuButton = createButton('Menu');
  menuButton.style('border', color(0, 0, 0, 0));
  menuButton.style('background-color', color(0, 0, 0, 0));
  menuButton.style('color', color(255, 255, 255, 0));
  menuButton.position(10, 10);
  menuButton.mousePressed(dMenu);
  
  menuColor = color(128, 128, 255, 150);
  clickedColor = color(24, 10, 50, 230);
  hoverColor = color(49, 20, 101, 230);
  menuSize = createVector(475, 450);

  generalButton = createButton('General');
  generalButton.position(windowWidth/2-menuSize.x/2+1, windowHeight/2-menuSize.y/2+1);
  generalButton.size(menuSize.x/2-2, 20);
  generalButton.style('border', menuColor);
  generalButton.style('background-color', menuColor);
  generalButton.style('color', color(255, 255, 255));
  generalButton.mousePressed(generalM);

  controlsButton = createButton('Controls');
  controlsButton.position(windowWidth/2-menuSize.x/2+1+menuSize.x/2, windowHeight/2-menuSize.y/2+1);
  controlsButton.size(menuSize.x/2-2, 20);
  controlsButton.style('border', menuColor);
  controlsButton.style('background-color', menuColor);
  controlsButton.style('color', color(255, 255, 255));
  controlsButton.mousePressed(controlsM);

  exitButton = createButton('Exit');
  exitButton.position(windowWidth/2-menuSize.x/2+1+menuSize.x/3+menuSize.x/3, windowHeight/2+menuSize.y/2+1);
  exitButton.size(menuSize.x/3-2, 20);
  exitButton.style('border', menuColor);
  exitButton.style('background-color', menuColor);
  exitButton.style('color', color(255, 255, 255));
  exitButton.mouseOver(exitHover);
  exitButton.mouseOut(exitStopHover);
  exitButton.mouseReleased(exitM);

  for (let c = 0; c < inControls1.length; ++c) {
    inControls1[c] = createButton('');
    inControls1[c].size(10, 15);
    // inControls1[c].attribute('maxlength', 1);
    inControls1[c].position(windowWidth/2+1+menuSize.x/4.5, windowHeight/2-menuSize.y/2+40+c*25);
    inControls1[c].hide();
  }

  for (let c = 0; c < inControls1.length; ++c) {
    inControls2[c] = createButton('');
    inControls2[c].size(10, 15);
    // inControls2[c].attribute('maxlength', 1);
    inControls2[c].position(windowWidth/2+1+menuSize.x/4.5, windowHeight/2-menuSize.y/2+140+c*25);
    inControls2[c].hide();
  }

  generalM();

  generalButton.hide();
  controlsButton.hide();
  exitButton.hide();

  alpha = new star(3.19*10**10, 1.989*10**30, 0, 0);
  beta = new planet(1.2742*10**7, getEarthMass(), alpha, 50, 75);

  spaceCraft = new spaceShip(shipX-298, shipY, spaceShipImg, 8, 10, 0.5);
  spaceCraft2 = new spaceShip(shipX+128, shipY, spaceShipImg, 8, 10, 0.5);
}

function draw() {
  background(0);
  translate(windowWidth/2, windowHeight/2);

  alpha.show();
  beta.show();
  // traceOrbit(alpha, beta, '#ff000064');
  rotation++;

  push();
  textAlign(LEFT);
  textSize(12);
  fill(255, 255, 255);
  text('P1: '+"█".repeat(positive(Math.ceil(spaceCraft.getHealth())))+" "+positive(spaceCraft.getHealth()), windowWidth/2-150, -1*windowHeight/2+35);
  text('P2: '+"█".repeat(positive(Math.ceil(spaceCraft2.getHealth())))+" "+positive(spaceCraft2.getHealth()), windowWidth/2-150, -1*windowHeight/2+55);
  pop();


  push();
  fill(200, 100, 0);
  rotate(radians(l*PI*PI*PI));
  ellipse(0, 60, 10);
  pop();

  push();
  fill(160, 160, 160);
  rotate(radians(l*PI*PI));
  ellipse(0, 100, 12);
  pop();

  push();
  fill(200, 250, 220);
  rotate(radians(l*PI));
  ellipse(100, 210, 20);
  pop();

  push();
  fill(255, 178, 102);
  rotate(radians(l*PI/2));
  ellipse(-200, -300, 15);
  pop();

  push();
  textStyle(BOLD);
  textSize(64);
  fill(l%225, abs(spaceCraft.getPosition().x*spaceCraft.getPosition().y)%255, abs(spaceCraft2.getPosition().x*spaceCraft2.getPosition().y)%255);
  if (show) {
    noFill();
  }
  rotate(radians(l));
  text('MESSAGE', -25, 22.5);
  pop();
  
  l+=10;

  if (starting) {
    push();
    textSize(36);
    fill(l%255, l%255, l%255);
    // noFill();
    text('use WASD and Q or IJKL and O', 0, -240);
    pop();
  }

  if (spaceCraft.getHealth() > 0) {
    spaceCraft.show();
  }

  if (spaceCraft2.getHealth() > 0) {
    spaceCraft2.show();
  }

  var d = dist(spaceCraft.getPosition().x, spaceCraft.getPosition().y, spaceCraft2.getPosition().x, spaceCraft2.getPosition().y);
  if (d<=(spaceCraft.getSize()+spaceCraft2.getSize())/2 && spaceCraft.getHealth()>0 && spaceCraft2.getHealth()>0) {
    if (Math.floor(Math.random()*10)%2==0)
    {
      spaceCraft.setHealth(0);
      spaceCraft2.setHealth(spaceCraft2.getHealth()*0.25);
    } else {
      spaceCraft2.setHealth(0);
      spaceCraft.setHealth(spaceCraft.getHealth()*0.25);
    }
  }

  if (spaceCraft.getHealth() > 0) {
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
    if (keyIsDown(81)) {
      push();
      stroke(255, 255, 255);
      fireLine1 = spaceCraft.fire(120);
      if (collideLineCircle(fireLine1[0], fireLine1[1], fireLine1[2], fireLine1[3], spaceCraft2.getPosition().x, spaceCraft2.getPosition().y,(spaceCraft.getSize()+spaceCraft2.getSize())/2))
        spaceCraft2.setHealth(spaceCraft2.getHealth()-spaceCraft.getDamage());
      pop();
    }
  }

  if (spaceCraft2.getHealth() > 0) {
    if (keyIsDown(73)) {
      spaceCraft2.relativeForward();
    }
    if (keyIsDown(76)) {
      spaceCraft2.relativeRotateLeft();
    }
    if (keyIsDown(74)) {
      spaceCraft2.relativeRotateRight();
    }
    if (keyIsDown(75)) {
      spaceCraft2.relativeBackward(2);
    }
    if (keyIsDown(79)) {
      push();
      stroke(255, 255, 255);
      fireLine1 = spaceCraft2.fire(120);
      if (collideLineCircle(fireLine1[0], fireLine1[1], fireLine1[2], fireLine1[3], spaceCraft.getPosition().x, spaceCraft.getPosition().y,(spaceCraft.getSize()+spaceCraft2.getSize())/2))
        spaceCraft.setHealth(spaceCraft.getHealth()-spaceCraft2.getDamage());
      pop();
    }
  }
  
  if (showMenu) {
    fill(menuColor);
    rect(0, 0, menuSize.x, menuSize.y);
  }
}

function keyPressed() {
  starting = false;
  if (keyCode === 84) {
    show =! show;
  }
}

function dMenu() {
  showMenu = true;
  generalButton.show();
  controlsButton.show();
  exitButton.show();
  generalM();
}

function generalM() {
  hideControlPanel();
  showGeneralPanel();
  generalButton.style('background-color', clickedColor);
  controlsButton.style('background-color', menuColor);
}

function controlsM() {
  hideGeneralPanel();
  showControlPanel();
  generalButton.style('background-color', menuColor);
  controlsButton.style('background-color', clickedColor);
}

function exitHover() {
  exitButton.style('background-color', hoverColor);
}

function exitStopHover() {
  exitButton.style('background-color', menuColor);
}

function exitM() {
  showMenu = false;
  generalButton.hide();
  controlsButton.hide();
  exitButton.hide();
  hideControlPanel();
}

function hideControlPanel() {
  for (let c = 0; c < inControls1.length; ++c) {
    inControls1[c].hide();
  }
  for (let c = 0; c < inControls2.length; ++c) {
    inControls2[c].hide();
  }
}

function showControlPanel() {
  for (let c = 0; c < inControls1.length; ++c) {
    inControls1[c].show();
  }
  for (let c = 0; c < inControls2.length; ++c) {
    inControls2[c].show();
  }
}

function showGeneralPanel() {

}

function hideGeneralPanel() {

}