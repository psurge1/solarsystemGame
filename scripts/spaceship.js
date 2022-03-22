class spaceShip {
    constructor(x, y, img, speed) {
        this.position = createVector(x,y);
        this.speedMS = speed;
        this.speedP = speed;
        this.shipRotation = 0;
        this.rotationSpeed = 4;
        this.img = img;

        translate(windowWidth/2-this.position.x, windowHeight/2-this.position.y);
    }

    show() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.shipRotation);
        image(this.img, 0, 0, 25, 25);
        pop();
    }

    relativeBackward(backSpeed=this.speedP) {
        let movement = findVector(this.shipRotation);
        this.position.x-=movement[0]*backSpeed;
        this.position.y+=movement[1]*backSpeed;
    }
    
    relativeForward(forwardSpeed=this.speedP) {
        let movement = findVector(this.shipRotation);
        this.position.x+=movement[0]*forwardSpeed;
        this.position.y-=movement[1]*forwardSpeed;
    }

    relativeRotateLeft() {
        this.shipRotation+=this.rotationSpeed;
    }

    relativeRotateRight() {
        this.shipRotation-=this.rotationSpeed;
    }
}