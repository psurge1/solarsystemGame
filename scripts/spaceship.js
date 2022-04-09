class spaceShip {
    constructor(x, y, img, speed, size, damage) {
        this.position = createVector(x,y);
        this.speedMS = speed;
        this.speedP = speed;
        this.shipRotation = 0;
        this.rotationSpeed = 4;
        this.img = img;
        this.size = size;
        this.health = 10;
        this.damage = damage;

        translate(windowWidth/2-this.position.x, windowHeight/2-this.position.y);
    }

    show() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.shipRotation);
        image(this.img, 0, 0, this.size, this.size);
        pop();
    }

    fire(distance) {
        let fCoord = [
            this.position.x+this.size/2*cos(this.shipRotation-90),
            this.position.y+this.size/2*sin(this.shipRotation-90),
            distance*cos(this.shipRotation-90)+this.position.x,
            distance*sin(this.shipRotation-90)+this.position.y
        ];
        line(fCoord[0], fCoord[1], fCoord[2], fCoord[3]);
        return fCoord;
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

    getPosition() {
        return this.position;
    }

    getSize() {
        return this.size;
    }

    getHealth() {
        return this.health;
    }

    setHealth(health) {
        this.health = health;
    }

    getDamage() {
        return this.damage;
    }
}