class star {
    constructor(diameter, mass, x, y) {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.circumference = 2*Math.PI*this.radius**2
        this.mass = mass;
    }

    show() {
        push();
        noStroke();
        fill('#c7c700ff');
        translate(this.x,this.y);
        axisRotate(this.circumference);
        ellipse(0,0,scaleDistance(this.diameter));
        pop();
    }
}